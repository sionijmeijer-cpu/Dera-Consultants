/**
 * Static Auth Export for Schema Generation
 * Run: npx @better-auth/cli generate -y
 */
import { createAuth } from "../auth";

// In @convex-dev/better-auth v0.10+, getStaticAuth was removed.
// For schema generation we can export the auth factory directly.
export const auth = createAuth;
