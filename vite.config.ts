import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "caniuse-lite": "/tmp/fix-modules/node_modules/caniuse-lite",
      browserslist: "/tmp/fix-modules/node_modules/browserslist",
    },
  },
  server: {
    fs: {
      allow: [".", "/tmp/fix-modules/node_modules"],
    },
  },
});
