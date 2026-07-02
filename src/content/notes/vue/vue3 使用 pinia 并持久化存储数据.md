---
slug: vue3-pinia-persistedstate
title: vue3 使用 pinia 并持久化存储数据
category: Vue
type: snippet
description: vue3 中使用 pinia 持久化存储数据的用法记录。
status: published
tags: Vue3, Pinia
updatedAt: 2023-08-09
---

## 1. 官方文档

[pinia官方文档地址](https://pinia.web3doc.top/introduction.html "pinia官方文档地址")
[pinia-plugin-persistedstate数据持久化插件](https://www.npmjs.com/package/pinia-plugin-persistedstate "pinia-plugin-persistedstate数据持久化插件")

## 2. 安装

```shell
yarn add pinia
# 或者使用 npm
npm install pinia
```

## 3. 使用

main.js 中添加如下代码：

```js
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";// 持久化插件

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

app.mount("#app");
```

src 目录创建 stores 文件夹，新建 mainStore.js 文件：

```js
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
  // 开启数据持久化
  persist: {
    storage: sessionStorage,
  },
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})
```

在其他文件中引入并使用：

```jsx
<script setup>
import { useStore } from "@/stores/mainStore";
const mainStore = useStore();

mainStore.increment();
console.log(mainStore.counter);
</script>
```

注意事项：

1. store 是一个用reactive 包裹的对象，这意味着不需要在getter 之后写.value，但是，就像setup 中的props 一样，我们不能对其进行解构；
2. 为了从 Store 中提取属性同时保持其响应式，您需要使用storeToRefs()。 它将为任何响应式属性创建 refs。
