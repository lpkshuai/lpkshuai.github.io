---
slug: vue3-vite-import.meta.url
title: vue3 + vite 动态引入图片
category: Vue
type: snippet
description: vue3 + vite 动态引入图片方法。
status: published
tags: Vue3, Vite, Image
updatedAt: 2023-01-16
---

**在vite中不能使用require引入图片资源，所以使用vite提供的方法引入**

详见链接 -> [vite静态资源处理](https://cn.vitejs.dev/guide/assets.html "vite静态资源处理")

1. `import.meta.url` 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 URL 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源

```js
new URL("@/assets/images/xxx.png", import.meta.url).href;
```

2. 通过字符串模板支持动态 URL：

```js
function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href;
}
```

3. 在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。然而，这个 URL 字符串必须是静态的，这样才好分析。否则代码将被原样保留、因而在 `build.target` 不支持 `import.meta.url` 时会导致运行时错误。

```js
// Vite 不会转换这个
const imgUrl = new URL(imagePath, import.meta.url).href;
```
