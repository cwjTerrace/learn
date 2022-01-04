import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import merge from "lodash/merge";
import { join } from "path";

import baseConfig from "../vite.config";

const config = defineConfig({
  root: __dirname,
  plugins: [vue(), vueJsx()],
  build: {
    outDir: join(process.cwd(), "dist")
  },
  resolve: {
    alias: {
      "balm-ui-source": "balm-ui/src/scripts",
      "balm-ui-plus-source": "balm-ui/src/scripts/plus.js",
      "balm-ui-next-source": "balm-ui/src/scripts/next.js"
    }
  }
});

console.log("vue-ui merge config", merge(config, baseConfig));
// https://vitejs.dev/config/
export default merge(config, baseConfig);
