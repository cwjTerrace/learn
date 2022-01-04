import { join } from "path";
import { defineConfig } from "vite";
import merge from "lodash/merge";
import react from "@vitejs/plugin-react";

import baseConfig from "../vite.config";
console.log(baseConfig);

const config = defineConfig({
  root: __dirname,
  plugins: [react()],
  build: {
    outDir: join(process.cwd(), "dist")
  }
});

// https://vitejs.dev/config/
export default merge(config, baseConfig);
