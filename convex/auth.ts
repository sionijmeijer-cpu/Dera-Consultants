/**
 * Better Auth Setup for Convex (Local Install)
 */

import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { admin, apiKey } from "better-auth/plugins";
import { betterAuth } from "better-auth";

import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

import authSchema from "./betterAuth/schema";
import authConfig from "./auth.config";

const siteUrl = process.env.SITE_URL || "";

/**
 * Better Auth component client with LOCAL schema
 */
export const authComponent = createClient<DataModel, typeof authSchema>(
  components.betterAuth,
  {
    local: {
      schema: authSchema,
    },
  }
);

/**
 * Static trusted origins
 */
const staticOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:8081",
];

function getTrustedOrigins(request: Request): string[] {
  const origins = [...staticOrigins];
  if (siteUrl) origins.push(siteUrl);

  const addDynamicOrigin = (url: string | null) => {
    if (!url) return;

    const isDynamic =
      url.includes(".w.modal.host") || url.includes(".shipper.now");
    if (!isDynamic) return;

    try {
      const parsed = new URL(url);
      origins.push(parsed.origin);
    } catch {
      if (url.startsWith("http")) {
        origins.push(url.split("/").slice(0, 3).join("/"));
      }
    }
  };

  addDynamicOrigin(request.headers.get("origin"));
  addDynamicOrigin(request.headers.get("referer"));

  try {
    const url = new URL(request.url);
    addDynamicOrigin(url.searchParams.get("callbackURL"));
    addDynamicOrigin(url.searchParams.get("callback"));
    addDynamicOrigin(url.searchParams.get("redirectTo"));
  } catch {}

  return [...new Set(origins)];
}

/**
 * Create Better Auth instance
 */
export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth({
    secret: process.env.BETTER_AUTH_SECRET!,
    trustedOrigins: getTrustedOrigins,
    database: authComponent.adapter(ctx),

    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },

    user: {
      additionalFields: {
        name: {
          type: "string",
          required: false,
        },
        role: {
          type: "string",
          required: false,
          defaultValue: "user",
        },
        banned: {
          type: "boolean",
          required: false,
          defaultValue: false,
        },
        banReason: {
          type: "string",
          required: false,
        },
        banExpires: {
          type: "number",
          required: false,
        },
      },
    },

    plugins: [
      crossDomain({ siteUrl }),
      convex({ authConfig }), // ✅ FIXED — required argument
      admin({
        adminRoles: ["admin", "service-admin"],
      }),
      apiKey({
        enableSessionForAPIKeys: true,
      }),
    ],
  });
};

/* ============================================================
   USER TYPE
============================================================ */

interface BetterAuthUser {
  _id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified?: boolean;
  createdAt: number;
  updatedAt: number;
  role?: string;
  banned?: boolean;
  banReason?: string;
  banExpires?: number;
}

/* ============================================================
   USER QUERIES
============================================================ */

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const user =
      (await authComponent.getAuthUser(ctx)) as BetterAuthUser | null;
    if (!user) return null;

    return {
      id: user._id,
      _id: user._id,
      email: user.email,
      name: user.name ?? null,
      image: user.image ?? null,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },
});

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const user =
      (await ctx.runQuery(
        components.betterAuth.adapter.findOne,
        {
          model: "user",
          where: [{ field: "email", value: email }],
        }
      )) as BetterAuthUser | null;

    if (!user) return null;

    return {
      id: user._id,
      email: user.email,
      name: user.name ?? null,
      image: user.image ?? null,
      createdAt: user.createdAt,
    };
  },
});

export const listAllUsers = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit = 100 }) => {
    const result = await ctx.runQuery(
      components.betterAuth.adapter.findMany,
      {
        model: "user",
        sortBy: { field: "createdAt", direction: "desc" },
        paginationOpts: { numItems: limit, cursor: null },
      }
    );

    return result.page.map((user: any) => ({
      id: user._id,
      email: user.email,
      name: user.name ?? null,
      image: user.image ?? null,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      role: user.role ?? "user",
      banned: user.banned ?? false,
    }));
  },
});

/* ============================================================
   ADMIN DELETE USER
============================================================ */

export const deleteUser = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const sessions = await ctx.runQuery(
      components.betterAuth.adapter.findMany,
      {
        model: "session",
        where: [{ field: "userId", value: userId }],
        paginationOpts: { numItems: 100, cursor: null },
      }
    );

    for (const session of sessions.page) {
      await ctx.runMutation(
        components.betterAuth.adapter.deleteOne,
        {
          input: {
            model: "session",
            where: [{ field: "_id", value: session._id }],
          },
        }
      );
    }

    const accounts = await ctx.runQuery(
      components.betterAuth.adapter.findMany,
      {
        model: "account",
        where: [{ field: "userId", value: userId }],
        paginationOpts: { numItems: 100, cursor: null },
      }
    );

    for (const account of accounts.page) {
      await ctx.runMutation(
        components.betterAuth.adapter.deleteOne,
        {
          input: {
            model: "account",
            where: [{ field: "_id", value: account._id }],
          },
        }
      );
    }

    await ctx.runMutation(
      components.betterAuth.adapter.deleteOne,
      {
        input: {
          model: "user",
          where: [{ field: "_id", value: userId }],
        },
      }
    );

    return { success: true };
  },
});
