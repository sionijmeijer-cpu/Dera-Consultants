import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Better Auth tables (user, session, account, verification) are managed
  // automatically by the @convex-dev/better-auth component.

  // Application tables
  guideOrders: defineTable({
    email: v.string(),
    guideId: v.string(),
    guideName: v.string(),
    priceInCents: v.number(),
    currency: v.string(),
    stripeSessionId: v.optional(v.string()),
    stripePaymentStatus: v.string(),
    downloadCount: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_stripeSessionId", ["stripeSessionId"])
    .index("by_guideId", ["guideId"]),

  emailSubscribers: defineTable({
    email: v.string(),
    source: v.string(),
    guideId: v.optional(v.string()),
  })
    .index("by_email", ["email"]),
});
