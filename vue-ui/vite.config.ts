import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  alias: {
    "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
    "balm-ui-css": "balm-ui/dist/balm-ui.css"
  }
});
