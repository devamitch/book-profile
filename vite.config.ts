import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "caniuse-lite": "/tmp/fix-modules/node_modules/caniuse-lite",
      browserslist: "/tmp/fix-modules/node_modules/browserslist",
    },
  },
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "/tmp/fix-modules/node_modules"],
    },
  },
});
