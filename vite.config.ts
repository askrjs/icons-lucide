import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "@askrjs/askr",
  } as any,
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
    },
    rollupOptions: {
      external: (id) => /^@askrjs\/askr(?:\/.*)?$/.test(id),
      output: [
        {
          dir: "dist",
          entryFileNames: "[name].js",
          exports: "named",
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
      ],
    },
  },
});
