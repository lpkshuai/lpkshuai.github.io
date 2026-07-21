---
slug: vue-router-transition
title: Vue3 + Vue Router 4.x 添加transition报错
category: Vue
type: debugging
description: Vue3 + Vue Router 4.x 添加transition报错。
status: published
tags: Vue, Vue-Router, transition
updatedAt: 2023-02-24
---

### 1. 报错信息

![image](/notes/vue/vue-router-transition.png)

### 2. 报错原因

检查页面代码发现动效出错页面为多根节点，修改后动效正常

```jsx
<template>
  <div>
    <div>xxx</div>
  </div>
</template>
```

### 3. 动效添加

```jsx
<router-view v-slot="{ Component }">
  <transition name="fade-slide" mode="out-in" appear>
    <component :is="Component" />
  </transition>
</router-view>
```

```css
/* router view transition fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
```

> Vue 可能会自动复用看起来相似的组件，可以通过添加一个 key 属性来强制过渡。
