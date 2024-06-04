// vite.config.ts
import { defineConfig } from "file:///Users/shimonfiller/Documents/sf-component-library/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/shimonfiller/Documents/sf-component-library/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "styled-components": "^6.0.0"
};

// vite.config.ts
var vite_config_default = defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts"
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      // Specifies the entry point for building the library.
      name: "vite-react-ts-button",
      // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`,
      // Generates the output file name based on the format.
      formats: ["cjs", "es"]
      // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
      // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true,
    // Generates source maps for debugging.
    emptyOutDir: true
    // Clears the output directory before building.
  },
  plugins: [dts()]
  // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NoaW1vbmZpbGxlci9Eb2N1bWVudHMvc2YtY29tcG9uZW50LWxpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaGltb25maWxsZXIvRG9jdW1lbnRzL3NmLWNvbXBvbmVudC1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zaGltb25maWxsZXIvRG9jdW1lbnRzL3NmLWNvbXBvbmVudC1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgcGVlckRlcGVuZGVuY2llcyB9IGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIHNldHVwRmlsZXM6IFwiLi9zZXR1cFRlc3RzLnRzXCIsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogXCIuL3NyYy9pbmRleC50c1wiLCAvLyBTcGVjaWZpZXMgdGhlIGVudHJ5IHBvaW50IGZvciBidWlsZGluZyB0aGUgbGlicmFyeS5cbiAgICAgIG5hbWU6IFwidml0ZS1yZWFjdC10cy1idXR0b25cIiwgLy8gU2V0cyB0aGUgbmFtZSBvZiB0aGUgZ2VuZXJhdGVkIGxpYnJhcnkuXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsIC8vIEdlbmVyYXRlcyB0aGUgb3V0cHV0IGZpbGUgbmFtZSBiYXNlZCBvbiB0aGUgZm9ybWF0LlxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sIC8vIFNwZWNpZmllcyB0aGUgb3V0cHV0IGZvcm1hdHMgKENvbW1vbkpTIGFuZCBFUyBtb2R1bGVzKS5cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMocGVlckRlcGVuZGVuY2llcyldLCAvLyBEZWZpbmVzIGV4dGVybmFsIGRlcGVuZGVuY2llcyBmb3IgUm9sbHVwIGJ1bmRsaW5nLlxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLCAvLyBHZW5lcmF0ZXMgc291cmNlIG1hcHMgZm9yIGRlYnVnZ2luZy5cbiAgICBlbXB0eU91dERpcjogdHJ1ZSwgLy8gQ2xlYXJzIHRoZSBvdXRwdXQgZGlyZWN0b3J5IGJlZm9yZSBidWlsZGluZy5cbiAgfSxcbiAgcGx1Z2luczogW2R0cygpXSwgLy8gVXNlcyB0aGUgJ3ZpdGUtcGx1Z2luLWR0cycgcGx1Z2luIGZvciBnZW5lcmF0aW5nIFR5cGVTY3JpcHQgZGVjbGFyYXRpb24gZmlsZXMgKGQudHMpLlxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAY21hbjQzMC9zZi1jb21wb25lbnQtbGlicmFyeVwiLFxuICBcInZlcnNpb25cIjogXCIxLjUuMTRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janMuanNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCIvZGlzdFwiXG4gIF0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IHJ1blwiLFxuICAgIFwiZm9ybWF0XCI6IFwicHJldHRpZXIgLS13cml0ZSAtLXBhcnNlciB0eXBlc2NyaXB0ICcqKi8qLnt0cyx0c3h9J1wiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IC50cywudHN4IC0taWdub3JlLXBhdGggLmdpdGlnbm9yZSAtLWZpeFwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgIFwidGVzdC13YXRjaFwiOiBcInZpdGVzdFwiLFxuICAgIFwidGVzdDp1aVwiOiBcInZpdGVzdCAtLXVpXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcImJ1aWxkLXN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiLFxuICAgIFwicHJlcGFyZVwiOiBcIm5wbSBydW4gYnVpbGRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtdLFxuICBcImF1dGhvclwiOiBcIlwiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNocm9tYXRpYy1jb20vc3Rvcnlib29rXCI6IFwiXjEuMy4zXCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWVzc2VudGlhbHNcIjogXCJeOC4wLjlcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24taW50ZXJhY3Rpb25zXCI6IFwiXjguMC45XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjguMC45XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLW9uYm9hcmRpbmdcIjogXCJeOC4wLjlcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjguMC45XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjguMC45XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0LXZpdGVcIjogXCJeOC4wLjlcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdFwiOiBcIl44LjAuOVwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl42LjQuMlwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNS4wLjRcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjc5XCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNS4xLjM0XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjcuMVwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjcuMVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjEuM1wiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjM0LjFcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tc3Rvcnlib29rXCI6IFwiXjAuOC4wXCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIl42LjEuOFwiLFxuICAgIFwiaHVza3lcIjogXCJeOS4wLjExXCIsXG4gICAgXCJqc2RvbVwiOiBcIl4yNC4wLjBcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiXjE1LjIuMlwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4yLjVcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl44LjAuOVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjQuNVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMTBcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjkuMFwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjEuNS4xXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNi4wLjBcIlxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcIioue3RzLHRzeH1cIjogW1xuICAgICAgXCJucG0gcnVuIGZvcm1hdFwiLFxuICAgICAgXCJucG0gcnVuIGxpbnRcIlxuICAgIF1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDd0RkLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFBQSxFQUNULHFCQUFxQjtBQUN2Qjs7O0FEeERGLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUE7QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUE7QUFBQSxNQUNyQyxTQUFTLENBQUMsT0FBTyxJQUFJO0FBQUE7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFLLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxJQUM3QztBQUFBLElBQ0EsV0FBVztBQUFBO0FBQUEsSUFDWCxhQUFhO0FBQUE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUE7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K