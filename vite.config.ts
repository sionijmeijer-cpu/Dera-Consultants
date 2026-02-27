import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { shipperIdsPlugin } from "./plugins/vite-plugin-shipper-ids";

export default defineConfig({
  plugins: [
    shipperIdsPlugin(),
    react(),
    tailwindcss(),
    {
      name: 'remove-monitor-script',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(/<script[^>]*src="\/.shipper\/monitor\.js"[^>]*><\/script>/g, '');
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  optimizeDeps: {
    entries: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@radix-ui/react-alert-dialog",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
  },
  server: {
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".modal.host", ".shipper.now", "shipper.now", "localhost", ".localhost"],
    hmr: {
      clientPort: 443,
    },
  },
});
