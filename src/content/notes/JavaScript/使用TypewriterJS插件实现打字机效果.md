---
slug: javascript-type-writer
title: 使用TypewriterJS插件实现打字机效果
category: JavaScript
type: snippet
description: 使用TypewriterJS插件实现打字机效果。
status: published
tags: JavaScript, TypewriterJS
updatedAt: 2023-03-20
---

# 1. 插件地址

:rocket: [TypewriterJS GitHub](https://github.com/tameemsafi/typewriterjs "TypewriterJS")
:airplane: [npm 地址](https://www.npmjs.com/package/typewriter-effect "npm 地址")

# 2. 安装引用

### CDN

```html
<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
```

### 安装

```shell
# with npm
npm i typewriter-effect

# with yarn
yarn add typewriter-effect
```

### 核心

```js
import Typewriter from "typewriter-effect/dist/core";

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});
```

# 3. 简单案例

```html
<div id="app"></div>
```

```js
let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("A simple yet powerful native javascript")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString(
    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>',
  )
  .pauseFor(1000)
  .start();
```

效果
![image](/notes/js/js-typewriter-preview.gif)

# 4. 常用方法

详细属性及方法见官方文档
| 名称 | 描述 |
| ------------ | ------------ |
| start | 开始效果 |
| stop | 停止效果 |
| pauseFor | 暂停效果xx毫秒 |
| typeString | 要输出的字符串，可包含HTML标签 |
| deleteChars | 在结尾删除指定长度的字符串 |
| ... | ... |
