---
slug: vue3-el-menu-recursive
title: el-menu递归组件实现多级菜单（vue3+element plus版）
category: Vue
type: snippet
description: vue3 + element plus 中 使用 el-menu 递归组件实现多级菜单。
status: published
tags: Vue, Element, Snippet
updatedAt: 2024-04-23
---

vue2 + element ui版：[点击此处](https://www.cnblogs.com/lpkshuai/p/17310220.html "点击此处")

### 1. 外层菜单组件：

LeftMenu.vue

```js
<template>
  <el-menu
    :default-active="activeMenu"
    router
    :class="'menu-left'"
    :default-openeds="openedsArr"
    text-color="#fff"
  >
    <LeftSubMenu :menuData="menuData"></LeftSubMenu>
  </el-menu>
</template>

<script setup>
import LeftSubMenu from "@/components/LeftSubMenu.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const openedsArr = props.menuData.map((item) => {
  return item.path;
});

const props = defineProps({
  menuData: {
    type: Array,
    default: [],
  },
});

const activeMenu = computed(() => {
  const router = useRouter();
  const { meta, path } = router.currentRoute.value;
  if (meta.matchPath2) {
    return meta.matchPath2;
  } else {
    return path;
  }
});
</script>

<style scoped>
.menu-left {
  flex: 1;
  padding: 0 8px;
  border-right: none;
  background: none;
}
.menu-left:deep(.el-menu),
.menu-left:deep(.el-sub-menu__title:hover) {
  background: none;
}
.menu-left:deep(.el-menu-item),
.menu-left:deep(.el-sub-menu__title) {
  height: 36px;
  margin-bottom: 4px;
  border-radius: 4px;
  color: var(--text-main-color) !important;
}
.menu-left:deep(.el-menu-item:hover .icon),
.menu-left:deep(.el-menu-item.is-active .icon) {
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
.menu-left:deep(.el-menu-item:hover),
.menu-left:deep(.el-menu-item.is-active) {
  color: #ffffff !important;
  background-color: #243158;
}
</style>
```

### 2. 子菜单组件（递归主体）：

LeftSubMenu.vue

```js
<template>
  <template v-for="item in menuData">
    <el-sub-menu
      :key="item.path"
      v-if="item.children && item.children.length > 0"
      :index="item.path"
      :class="item.icon ? '' : 'noIcon'"
    >
      <template #title>
        <img
          class="icon pd-r-10"
          :src="curRoute.indexOf(item.path) != -1 ? item.iconActive : item.icon"
        />
        <img class="icon pd-r-10" :src="item.icon" />
        <span>{{ item.label }}</span>
      </template>
      <LeftSubMenu :menuData="item.children"></LeftSubMenu>
    </el-sub-menu>
    <el-menu-item
      :key="item.id"
      v-else
      :index="item.path"
      :disabled="item.disabled"
    >
      <template #title>
        <img class="icon pd-r-10" :src="item.icon" />
        <span>{{ item.label }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import LeftSubMenu from "./LeftSubMenu.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  menuData: {
    type: Array,
    default: [],
  },
});

const curRoute = computed(() => {
  const router = useRouter();
  const { path } = router.currentRoute.value;
  return path;
});
</script>
```

### 3. 使用：

```js
...
<LeftMenu :menuData="menuList"></LeftMenu>
...
```

```js
const menuList = [
  {
    title: "菜单一",
    path: "/menutest/menu1",
    icon: new URL("@/assets/images/icons/icon.png", import.meta.url).href,
    iconActive: new URL(
      "@/assets/images/icons/icon_active.png",
      import.meta.url,
    ).href,
    children: [
      {
        title: "子菜单一",
        path: "/menutest/menu1/menu1-1",
        // disabled: true,
      },
      {
        title: "子菜单二",
        path: "/menutest/menu1/menu1-2",
      },
    ],
  },
  {
    title: "菜单二",
    path: "/menutest/menu2",
    icon: new URL("@/assets/images/icons/icon.png", import.meta.url).href,
    iconActive: new URL(
      "@/assets/images/icons/icon_active.png",
      import.meta.url,
    ).href,
    children: [
      {
        title: "子菜单一",
        path: "/menutest/menu2/menu2-1",
      },
      {
        title: "子菜单二",
        path: "/menutest/menu2/menu2-2",
        children: [
          {
            title: "孙子菜单一",
            path: "/menutest/menu2/menu2-2/menu2-1-1",
          },
          {
            title: "孙子菜单二",
            path: "/menutest/menu2/menu2-2/menu2-2-2",
          },
        ],
      },
      {
        title: "子菜单三",
        path: "/menutest/menu2/menu2-3",
      },
    ],
  },
  {
    title: "菜单三",
    path: "/menutest/menu3",
    icon: new URL("@/assets/images/icons/icon.png", import.meta.url).href,
    iconActive: new URL(
      "@/assets/images/icons/icon_active.png",
      import.meta.url,
    ).href,
  },
];
```

> 注意vite图片引入的方式
