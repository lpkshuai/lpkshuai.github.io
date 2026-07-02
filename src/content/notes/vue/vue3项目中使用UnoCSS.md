---
slug: vue3-uno-css
title: vue3项目中使用UnoCSS
category: Vue
type: snippet
description: 在vue3项目中引入和使用UnoCSS的步骤以及常用配置。
status: published
tags: Vue3, UnoCSS
updatedAt: 2023-04-26
---

## 1. 相关文档：

[unocss github 地址](https://github.com/unocss/unocss "unocss github 地址")
[unocss 官网地址](https://unocss.dev/ "unocss官网地址")
[unocss 官网中文版](https://alfred-skyblue.github.io/unocss-docs-cn/ "官网中文版")
[unocss 交互式文档-可快速查阅缩写](https://unocss.dev/interactive/ "交互式文档")

## 2. 安装并引入：

以vite为例，其余文档中有步骤。[https://unocss.dev/integrations/](https://unocss.dev/integrations/)

- 首先安装unocss依赖包

```shell
npm install -D unocss
```

- 然后在vite.config.js 中配置

```js
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [UnoCSS()],
});
```

- 在main.js中引入

```js
import "uno.css";
```

> 也可以创建单独的配置文件uno.config.js

```js
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS选项
});
```

> 然后在main.js中引入单独的配置文件

```js
import "virtual:uno.css";
```

## 3. 使用：

使用时直接在class中书写属性，或者安装`@unocss/preset-attributify`启用属性书写模式在属性中对工具类进行分组。
[属性化预设文档](https://unocss.dev/presets/attributify "属性化预设文档")

```html
<div h-full text-center flex select-none all:transition-400>
  <div ma>
    <div
      text-5xl
      fw100
      animate-bounce-alt
      animate-count-infinite
      animate-duration-1s
    >
      UnoCSS
    </div>
    <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
    <div m2 flex justify-center text-2xl op30 hover="op80">
      <a
        i-carbon-logo-github
        text-inherit
        href="https://github.com/unocss/unocss"
        target="_blank"
      ></a>
    </div>
  </div>
</div>
<div absolute bottom-5 right-0 left-0 text-center op30 fw300>
  on-demand · instant · fully customizable
</div>
```

## 4. 其它：

#### 图标预设：将图标作为单个类使用

[图标预设文档](https://unocss.dev/presets/icons "图标预设文档")
[图标资源汇总](https://icones.js.org/ "图标资源汇总")

#### 指令转换器：支持 @apply、@screen 和 theme() 指令。

[指令转换器相关文档](https://unocss.dev/transformers/directives "指令转换器相关文档")

> 更多用法可以查看文档
