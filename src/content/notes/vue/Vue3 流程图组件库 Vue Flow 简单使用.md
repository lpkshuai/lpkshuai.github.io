---
slug: vue3-vue-flow
title: Vue3 流程图组件库 Vue Flow 简单使用
category: Vue
type: snippet
description: 记录 Vue Flow 流程图组件库的使用。
status: published
tags: Vue, Frontend, Snippet
updatedAt: 2023-01-03
---

# 官网

[Vue Flow 官网](https://vueflow.dev/ "Vue Flow 官网")
[Vue Flow GitHub](https://github.com/bcakmakoglu/vue-flow "Vue Flow GitHub")

# 安装

```
npm i --save @vue-flow/core

yarn add @vue-flow/core

pnpm i @vue-flow/core
```

# 使用

```
<template>
  <VueFlow v-model="elements" />
</template>

<script setup>
import { VueFlow  } from '@vue-flow/core'

const elements = ref([
  // Nodes
  // An input node, specified by using `type: 'input'`
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },

  // Default nodes, you can omit `type: 'default'`
  { id: '2', label: 'Node 2', position: { x: 100, y: 100 }, },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },

  // An output node, specified by using `type: 'output'`
  { id: '4', type: 'output', label: 'Node 4', position: { x: 400, y: 200 } },

  // Edges
  // Most basic edge, only consists of an id, source-id and target-id
  { id: 'e1-3', source: '1', target: '3' },

  // An animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
])
</script>

<style>
/* these are necessary styles for vue flow */
@import "@vue-flow/core/dist/style.css";

/* this contains the default theme, these are optional styles */
@import "@vue-flow/core/dist/theme-default.css";
</style>
```

![image](https://img2023.cnblogs.com/blog/1857566/202301/1857566-20230103165738635-922559221.png)

常用功能：

1. 画布居中

```
import { VueFlow, useVueFlow } from "@vue-flow/core";
const { onPaneReady } = useVueFlow();
const state = reactive({
  instance: null,
});
onPaneReady((instance) => {
  instance.fitView();
  // 将对象缓存
  state.instance = instance;
});

// 设置缩放级别
state.instance.fitView({ offset: { y: 50 } });
state.instance.zoomTo(1);
```

2. 点击事件

```
  <VueFlow
    v-model="flowElement"
    :style="{ background: 'transparent' }"
    :default-zoom="1"
    fit-view-on-init
    @nodeClick="nodeClickHandler"
  />
  const nodeClickHandler = (props) => {
    const node = props.node;
    console.log(node.id);
  };
```
