import { useConvex } from "convex/react";
import { useCallback } from "react";
import { api } from "../../convex/_generated/api";

/**
 * Hook to call a Convex action by path string.
 * Returns a function that calls the action with given args.
 */
export function useConvexAction(actionPath: string) {
  const convex = useConvex();

  return useCallback(
    async (args: Record<string, any> = {}) => {
      try {
        const [module, fn] = actionPath.split(":");
        const actionRef = (api as any)?.[module]?.[fn];
        if (!actionRef) {
          throw new Error(`Action not found: ${actionPath}. Make sure the Convex function is deployed.`);
        }
        return await convex.action(actionRef, args);
      } catch (err: any) {
        // Re-throw with clearer message
        if (err?.message?.includes("Cannot read properties of undefined")) {
          throw new Error(
            `Convex action "${actionPath}" is not available. Please ensure the backend is deployed.`
          );
        }
        throw err;
      }
    },
    [convex, actionPath]
  );
}
