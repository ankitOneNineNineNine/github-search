import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["./src/**/*.test.(ts|tsx)"],
    setupFiles: ["./src/setup-test.ts"],
    testTimeout: 200000,
    coverage: {
      reporter: ["text", "lcov"],
      provider: "v8",
    },
    snapshotFormat: { escapeString: true, printBasicPrototype: true },
  },
  plugins: [react()],
  
  resolve: {
    extensions: [".mdx", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".scss"],
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
}));
