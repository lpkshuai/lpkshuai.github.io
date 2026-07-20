---
slug: css-px2viewport-tailwind
title: postcss-px-to-viewport-8-plugin无法转换tailwindcss样式问题
category: CSS
type: debugging
description: 记录postcss-px-to-viewport-8-plugin无法转换tailwindcss样式问题。
status: published
tags: CSS, postcss-px-to-viewport, tailwind
updatedAt: 2025-09-08
---

**问题描述：postcss-px-to-viewport-8-plugin无法将tailwindcss设置的尺寸样式转换成vw单位。**

**解决：添加设置 `mediaQuery: true`**

示例：

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import px2viewport from "postcss-px-to-viewport-8-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        px2viewport({
          unitToConvert: "px",
          viewportWidth: 375,
          unitPrecision: 3,
          viewportUnit: "vw",
          mediaQuery: true,
          // exclude: /node_modules\/vant/i,
        }),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
```
