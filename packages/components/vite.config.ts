import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        amatelasList: resolve(__dirname, "src/amatelas-list.ts"),
      },
    },
    rollupOptions: {},
  },
});
