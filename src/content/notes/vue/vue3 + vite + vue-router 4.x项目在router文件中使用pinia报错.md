---
slug: vue-router-pinia-error
title: vue-router4.x版本在router文件中使用pinia报错
category: Vue
type: debugging
description: vue3 + vite + vue-router 4.x项目在router文件中使用pinia报错。
status: published
tags: Vite, Vue, Vue-Router
updatedAt: 2023-08-09
---

### 1. 背景

vue-router4.x版本，想在路由文件中引入并使用pinia后报错如下：

![image](/notes/vue/vue-router4x-pinia-error.png)

表面意思是 `getActivePinia()` 方法在pinia还没有激活的时候被调用，导致报错。

参考官方文档：
[pinia官方文档-在组件外使用存储](https://pinia.web3doc.top/core-concepts/outside-component-usage.html#%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F "pinia官方文档-在组件外使用存储")

### 2. 解决方法

- 在 stores 文件夹下新建 pinia.js 文件，用来引入并创建 pinia 实例。

```js
// 使用了数据持久化存储插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
```

- 在 main.js 里引入 pinia.js 文件。

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./stores/pinia";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
```

- 在路由文件里引入并使用。

```js
import pinia from "@/stores/pinia";
import { useUserStore } from "@/stores/userStore";
// pinia实例要作为参数传给useUserStore
const userStore = useUserStore(pinia);
console.log(userStore.userInfo);
```
