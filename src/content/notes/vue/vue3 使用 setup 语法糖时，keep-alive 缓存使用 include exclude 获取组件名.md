---
slug: vue3-setup-keep-alive
title: vue3 使用 setup 语法糖时，keep-alive 缓存使用 include / exclude 获取组件名
category: Vue
type: snippet
description: 记录在 vue3 中，keep-alive 缓存使用 include / exclude 获取组件名。
status: published
tags: Vue, setup, keep-alive
updatedAt: 2023-08-24
---

```jsx
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="['ComponentName']">
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
</template>
```

`vue3` 使用 `keep-alive` 缓存页面时，如果需要使用 `include / exclude` 参数，那么就要用到组件名称。如果用 `setup` 语法糖书写时无法直接获取组件名，此时想要设置组件 `name` 的话有如下方法：

#### 1. 多写一个script标签，并设置组件名：

```jsx
<script>
export default {
  name: "ComponentName",
}
</script>
```

#### 2. 通过插件扩展：

[vite-plugin-vue-setup-extend](https://www.viterc.cn/en/vite-plugin-vue-setup-extend.html "vite-plugin-vue-setup-extend")

**安装插件：**

```shell
yarn add vite-plugin-vue-setup-extend -D
```

或

```shell
npm i vite-plugin-vue-setup-extend -D
```

**使用插件：**
先引入

```js
import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
});
```

然后便可以设置name属性

```jsx
<template>
  <div>hello world {{ a }}</div>
</template>
<script lang="ts" setup name="ComponentName">
  const a = 1
</script>
```
