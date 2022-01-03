import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/learn/",
  plugins: [react()],
  alias: {
    "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
    "balm-ui-css": "balm-ui/dist/balm-ui.css"
  }
});
