---
slug: vue3-global-component
title: Vue3注册全局组件
category: Vue
type: snippet
description: 记录在 vue3 中，注册全局组件的方法。
status: published
tags: Vue, component
updatedAt: 2022-12-19
---

## 1. Vue3全局组件注册

- components文件夹下新建index.js文件，统一引入需要注册的组件

```js
import CustomCheck from "./CustomCheck.vue";
import CustomDialog from "./CustomDialog.vue";
const components = {
  install(app) {
    app.component("CustomCheck", CustomCheck);
    app.component("CustomDialog", CustomDialog);
  },
};
export default components;
```

- main.js中引入并使用

```js
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 引入使用
import commonUi from "./components/index.js";
app.use(commonUi);
```

## 2. Vue2全局组件注册

- 前面引入方法与Vue3一致，区别是使用

```js
import Vue from "vue";

// 使用组件
import commonUi from "./components/index.js";
Vue.use(commonUi);
```
