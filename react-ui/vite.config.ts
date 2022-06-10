import { join } from "path";
import { readFileSync } from "fs";

import { defineConfig } from "vite";
import merge from "lodash/merge";
import react from "@vitejs/plugin-react";

import baseConfig from "../vite.config";

const config = defineConfig({
  define: { __CODE__: JSON.stringify(readFileSync(join(process.cwd(), "utils", "deep-clone", "index.ts"), "utf-8")) },
  root: __dirname,
  plugins: [react()],
  build: {
    outDir: join(process.cwd(), "dist")
  }
});
console.log("react-ui merge config", merge(config, baseConfig));
// https://vitejs.dev/config/
export default merge(config, baseConfig);
