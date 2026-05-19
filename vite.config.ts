import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindPlugin from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  base: "./",
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindPlugin(),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true,
    hmr: process.env.DISABLE_HMR !== "true" ? true : false,
    watch: process.env.DISABLE_HMR === "true" ? null : undefined,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});


