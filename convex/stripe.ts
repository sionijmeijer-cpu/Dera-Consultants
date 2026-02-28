"use node";

import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import Stripe from "stripe";

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY not set");
  return new Stripe(key, { apiVersion: "2025-04-30.basil" as any });
};

// Guide product mapping
const GUIDE_PRODUCTS: Record<string, { name: string; priceInCents: number }> = {
  "golden-visa": { name: "Golden Visa 2026", priceInCents: 12500 },
  "d7-visa": { name: "D7 Visa Blueprint", priceInCents: 6700 },
  "d8-visa": { name: "D8 Digital Nomad Visa", priceInCents: 7700 },
  "caribbean-bundle": { name: "Complete Caribbean Bundle", priceInCents: 12500 },
  "all-guides": { name: "Complete Guide Collection (All 4 Guides)", priceInCents: 29200 },
};

export const createCheckoutSession = action({
  args: {
    guideId: v.string(),
    email: v.string(),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const stripe = getStripe();
      const guide = GUIDE_PRODUCTS[args.guideId];
      if (!guide) throw new Error(`Unknown guide: ${args.guideId}`);

    // Save email subscriber
    try {
      await ctx.runMutation(internal.mutations.createEmailSubscriber, {
        email: args.email,
        source: "guide-purchase",
        guideId: args.guideId,
      });
    } catch (e) {
      console.error("Failed to save subscriber:", e);
    }

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
              description: "Digital guide - instant download after purchase",
              metadata: { guideId: args.guideId },
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

    // Create order record
    try {
      await ctx.runMutation(internal.mutations.createGuideOrder, {
        email: args.email,
        guideId: args.guideId,
        guideName: guide.name,
        priceInCents: guide.priceInCents,
        currency: "eur",
        stripeSessionId: session.id,
        stripePaymentStatus: "pending",
        downloadCount: 0,
      });
    } catch (e) {
      console.error("Failed to create order:", e);
    }

      return { url: session.url, sessionId: session.id };
    } catch (error) {
      console.error('Checkout session error:', error);
      throw new Error(`Failed to create checkout session: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },
});

export const verifyCheckoutSession = action({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(args.sessionId);

    if (session.payment_status === "paid") {
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
