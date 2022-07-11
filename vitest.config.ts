import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    // ...
    globals: true,
    include: ["**/__tests__/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
});
