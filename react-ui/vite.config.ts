import { join } from "path";
import { readFileSync } from "fs";

import { defineConfig } from "vite";
import merge from "lodash/merge";
import react from "@vitejs/plugin-react";

import baseConfig from "../vite.config";

// const __CODE__ = readFileSync(join(process.cwd(), "utils", "deep-clone", "index.ts"), "utf-8");
const __CODE__ = readFileSync(join(process.cwd(), "react-ui/src/pages/startTransitionDemo/index.tsx"), "utf-8");

const config = defineConfig({
  define: { __CODE__: JSON.stringify(__CODE__) },
  root: __dirname,
  plugins: [react()],
  build: {
    outDir: join(process.cwd(), "dist")
  }
});
console.log("react-ui merge config", merge(config, baseConfig));
// https://vitejs.dev/config/
export default merge(config, baseConfig);
