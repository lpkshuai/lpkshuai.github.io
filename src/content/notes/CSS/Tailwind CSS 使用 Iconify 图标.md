---
slug: css-tailwind-import-iconify
title: Tailwind CSS 使用 Iconify 图标
category: CSS
type: guide
description: 讲解了Tailwind CSS 中引入和使用 Iconify 图标的方式的步骤。
status: published
tags: Tailwind CSS, Iconify
updatedAt: 2024-02-23
---

### 1. 安装依赖

通过 npm 安装 tailwindcss，并创建 tailwind.config.js 文件。

```shell
npm install tailwindcss -D
npx tailwindcss init
```

安装 iconify 图标库和 TailwindCSS 插件。

```shell
npm install @iconify/json @iconify/tailwind -D
```

### 2. 配置插件

配置 tailwind.config.js 文件。

```js
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}
```

### 3. 使用图标

```html
<span class="icon-[svg-spinners--12-dots-scale-rotate]"></span>
```

![image](/notes/css/tailwind-css-iconify-use.png)

### 4. 相关链接

[tailwindcss官方文档](https://tailwindcss.com/ "tailwindcss官方文档")
[iconify官方文档](https://iconify.design/ "iconify官方文档")
[iconify图标库](https://icon-sets.iconify.design/ "iconify图标库")
