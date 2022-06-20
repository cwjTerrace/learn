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
  }
});

console.log("vue-ui merge config", merge(config, baseConfig));
// https://vitejs.dev/config/
export default merge(config, baseConfig);
