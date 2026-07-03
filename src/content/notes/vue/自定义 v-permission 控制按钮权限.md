---
slug: vue3-define-expose
title: 自定义 v-permission 控制按钮权限
category: Vue
type: snippet
description: 自定义 v-permission 控制按钮权限的步骤记录。
status: published
tags: Vue, Snippet, permission
updatedAt: 2024-05-30
---

# 1. 定义 v-permission 指令

创建一个文件来定义自定义指令，例如 directives/permission.js。

```js
// directives/permission.js

import { useUserStore } from "../store/userStore"; // 假设你有一个存储用户权限的 store

export default {
  mounted(el, binding) {
    const { value: permissionName } = binding;

    // 获取用户的权限列表，假设通过 store 获取
    const userStore = useUserStore();
    const permissions = userStore.permissions;

    if (!permissions.includes(permissionName)) {
      el.style.display = "none"; // 如果没有权限，则隐藏按钮
    }
  },
  updated(el, binding) {
    const { value: permissionName } = binding;

    const userStore = useUserStore();
    const permissions = userStore.permissions;

    if (!permissions.includes(permissionName)) {
      el.style.display = "none";
    } else {
      el.style.display = ""; // 如果有权限，则显示按钮
    }
  },
};
```

# 2. 在主文件中全局注册指令

在主入口文件中（如 main.js），全局注册自定义指令。

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import permission from "./directives/permission"; // 导入指令

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);

// 注册全局指令
app.directive("permission", permission);

app.mount("#app");
```

# 3. 使用指令来控制按钮显示

在需要控制按钮显示的地方，使用 v-permission 指令，并传递按钮的 name 作为指令的值。

```jsx
<template>
  <div>
    <button v-permission="'edit'" name="edit-button">
      Edit
    </button>
    <button v-permission="'delete'" name="delete-button">
      Delete
    </button>
    <button v-permission="'view'" name="view-button">
      View
    </button>
  </div>
</template>
```

# 4. 设置用户权限存储 (假设你使用的是 Pinia)

```js
// store/userStore.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    permissions: ["view", "edit"], // 示例权限列表，实际可以通过 API 获取并设置
  }),
  actions: {
    setPermissions(permissions) {
      this.permissions = permissions;
    },
  },
});
```

# 5. 其它

> 如果使用 el.style.display = 'none' 来隐藏按钮，用户可以在浏览器的开发者工具（控制台）中手动修改 display 样式来显示按钮。这种方式并不是真正的安全控制，只是简单地在前端隐藏元素。

```js
if (!permissions.includes(permissionName)) {
  el.parentNode && el.parentNode.removeChild(el); // 完全移除元素
}
```

> 也可以使用v-if

```jsx
<template>
  <div>
    <!-- 使用 Pinia 状态或计算属性来控制显示 -->
    <button v-if="hasPermission('edit')" name="edit-button">Edit</button>
    <button v-if="hasPermission('delete')" name="delete-button">Delete</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../store/userStore';

const userStore = useUserStore();

// 使用计算属性来检查权限
const hasPermission = (permissionName) => {
  return computed(() => userStore.permissions.includes(permissionName));
};
</script>
```
