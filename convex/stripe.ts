"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY not set");
  return new Stripe(key, { apiVersion: "2025-04-30.basil" as any });
};

// Guide product mapping - maps guide IDs to Stripe price IDs
// These will be created via Stripe and stored here
const GUIDE_PRODUCTS: Record<string, { name: string; priceInCents: number }> = {
  "golden-visa": { name: "Golden Visa 2026", priceInCents: 12500 },
  "d7-visa": { name: "D7 Visa Blueprint", priceInCents: 6700 },
  "d8-visa": { name: "D8 Digital Nomad Visa", priceInCents: 7700 },
  "caribbean-bundle": { name: "Complete Caribbean Bundle", priceInCents: 12500 },
};

/**
 * Create a Stripe Checkout session for a guide purchase.
 * Returns the checkout URL to redirect the user to.
 */
export const createCheckoutSession = action({
  args: {
    guideId: v.string(),
    email: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const stripe = getStripe();
    const guide = GUIDE_PRODUCTS[args.guideId];
    if (!guide) throw new Error(`Unknown guide: ${args.guideId}`);

    // Save email subscriber
    await ctx.runMutation("mutations:createEmailSubscriber" as any, {
      email: args.email,
      source: "guide-purchase",
      guideId: args.guideId,
    });

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: args.email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: guide.name,
              description: `Digital guide - instant download after purchase`,
              metadata: {
                guideId: args.guideId,
              },
            },
            unit_amount: guide.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${args.successUrl}?session_id={CHECKOUT_SESSION_ID}&guide=${args.guideId}`,
      cancel_url: args.cancelUrl,
      metadata: {
        guideId: args.guideId,
        email: args.email,
      },
    });

    // Create order record with pending status
    await ctx.runMutation("mutations:createGuideOrder" as any, {
      email: args.email,
      guideId: args.guideId,
      guideName: guide.name,
      priceInCents: guide.priceInCents,
      currency: "eur",
      stripeSessionId: session.id,
      stripePaymentStatus: "pending",
      downloadCount: 0,
    });

    return { url: session.url, sessionId: session.id };
  },
});

/**
 * Verify a Stripe Checkout session after payment.
 * Returns the payment status and guide info for the success page.
 */
export const verifyCheckoutSession = action({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.retrieve(args.sessionId);

    if (session.payment_status === "paid") {
      // Update the order status in the database
      const orders = await ctx.runQuery("queries:listGuideOrders" as any, {});
      const order = (orders as any[]).find(
        (o: any) => o.stripeSessionId === args.sessionId
      );

      if (order) {
        await ctx.runMutation("mutations:updateGuideOrder" as any, {
          id: order._id,
          stripePaymentStatus: "paid",
        });
      }

      return {
        success: true,
        paymentStatus: session.payment_status,
        guideId: session.metadata?.guideId || "",
        email: session.customer_email || session.metadata?.email || "",
        guideName: GUIDE_PRODUCTS[session.metadata?.guideId || ""]?.name || "Guide",
      };
    }

    return {
      success: false,
      paymentStatus: session.payment_status,
      guideId: session.metadata?.guideId || "",
      email: "",
      guideName: "",
    };
  },
});
