import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new guideOrder
export const createGuideOrder = mutation({
  args: {
    email: v.string(),
    guideId: v.string(),
    guideName: v.string(),
    priceInCents: v.number(),
    currency: v.string(),
    stripeSessionId: v.optional(v.string()),
    stripePaymentStatus: v.string(),
    downloadCount: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("guideOrders", {
      email: args.email,
      guideId: args.guideId,
      guideName: args.guideName,
      priceInCents: args.priceInCents,
      currency: args.currency,
      stripeSessionId: args.stripeSessionId,
      stripePaymentStatus: args.stripePaymentStatus,
      downloadCount: args.downloadCount,
    });
  },
});

// Update a guideOrder
export const updateGuideOrder = mutation({
  args: {
    id: v.id("guideOrders"),
    email: v.optional(v.string()),
    guideId: v.optional(v.string()),
    guideName: v.optional(v.string()),
    priceInCents: v.optional(v.number()),
    currency: v.optional(v.string()),
    stripeSessionId: v.optional(v.optional(v.string())),
    stripePaymentStatus: v.optional(v.string()),
    downloadCount: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const cleanUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(args.id, cleanUpdates);
    return args.id;
  },
});

// Delete a guideOrder
export const deleteGuideOrder = mutation({
  args: { id: v.id("guideOrders") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});

// Create a new emailSubscriber
export const createEmailSubscriber = mutation({
  args: {
    email: v.string(),
    source: v.string(),
    guideId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("emailSubscribers", {
      email: args.email,
      source: args.source,
      guideId: args.guideId,
    });
  },
});

// Update a emailSubscriber
export const updateEmailSubscriber = mutation({
  args: {
    id: v.id("emailSubscribers"),
    email: v.optional(v.string()),
    source: v.optional(v.string()),
    guideId: v.optional(v.optional(v.string())),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const cleanUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(args.id, cleanUpdates);
    return args.id;
  },
});

// Delete a emailSubscriber
export const deleteEmailSubscriber = mutation({
  args: { id: v.id("emailSubscribers") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
