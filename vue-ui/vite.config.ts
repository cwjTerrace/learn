import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  root: __dirname,
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "balm-ui-source": "balm-ui/src/scripts",
      "balm-ui-plus-source": "balm-ui/src/scripts/plus.js",
      "balm-ui-next-source": "balm-ui/src/scripts/next.js"
    }
  }
});
