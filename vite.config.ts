/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@data": `${path.resolve(__dirname, "src/data")}`,
      "@types": `${path.resolve(__dirname, "src/types")}`,
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["/src/setup.ts"],
  },
});
