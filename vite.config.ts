import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ogInjectPlugin } from "./plugins/vite-plugin-og-inject";

export default defineConfig({
  plugins: [
    ogInjectPlugin(),
    react(),
    tailwindcss(),
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
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-dom/client'],
          'radix-vendor': [
            '@radix-ui/react-select',
            '@radix-ui/react-slot',
            '@radix-ui/react-alert-dialog',
          ],
          'utils': ['class-variance-authority', 'clsx', 'tailwind-merge'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
    target: 'esnext',
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
    allowedHosts: [".modal.host", "localhost", ".localhost"],
    hmr: {
      clientPort: 443,
    },
  },
});
