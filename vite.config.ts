import { join } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
//   base: "/learn/",
  build: {
    target: "es2021"
  },
  resolve: {
    alias: [
      { find: "@/utils", replacement: join(__dirname, "utils") },
      { find: "@/topic", replacement: join(__dirname, "topic") }
    ]
  },
  publicDir: join(__dirname, "public"),
  server: {
    host: "0.0.0.0"
  }
});
