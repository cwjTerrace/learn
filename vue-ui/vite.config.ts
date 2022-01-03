import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/learn/",
  root: __dirname,
  alias: {
    "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
    "balm-ui-css": "balm-ui/dist/balm-ui.css"
  }
});
