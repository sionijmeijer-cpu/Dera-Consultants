/**
 * Static Auth Export for Schema Generation
 * Run: npx @better-auth/cli generate -y
 * @see https://convex-better-auth.netlify.app/features/local-install
 */
import { createAuth } from "../auth";

export const auth = createAuth;
