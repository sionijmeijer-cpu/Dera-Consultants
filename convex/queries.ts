import { query } from "./_generated/server";
import { v } from "convex/values";

// List all guideOrders
export const listGuideOrders = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("guideOrders").collect();
  },
});

// Get a single guideOrder by ID
export const getGuideOrder = query({
  args: { id: v.id("guideOrders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// List all emailSubscribers
export const listEmailSubscribers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("emailSubscribers").collect();
  },
});

// Get a single emailSubscriber by ID
export const getEmailSubscriber = query({
  args: { id: v.id("emailSubscribers") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
