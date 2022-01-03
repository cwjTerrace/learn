import { defineConfig } from "vite";
import merge from "lodash/merge";
import react from "@vitejs/plugin-react";

import baseConfig from "../vite.config";
console.log(baseConfig);

const config = defineConfig({
  // base: "/learn/",
  root: __dirname,
  plugins: [react()]
});

// https://vitejs.dev/config/
export default merge(config, baseConfig);
