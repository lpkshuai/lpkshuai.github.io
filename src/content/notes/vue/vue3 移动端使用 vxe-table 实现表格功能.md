---
slug: vue3-mobile-vxe-table
title: vue3 移动端使用 vxe-table 实现表格功能
category: Vue
type: snippet
description: vue3 移动端使用 vxe-table 实现表格功能。
status: published
tags: Vue3, 移动端, Table
updatedAt: 2024-09-24
---

### 1. 背景：

移动端项目使用vue3+vant4，由于vant没有默认的表格组件，使用 van-list 实现效果不理想且过于复杂。经过对比多个表格组件，vxe-table 支持很多功能且使用简单，因此决定使用 vxe-table 组件库来实现。
![image](/notes/vue/vue3-mobile-vxe-table.png)

### 2. 安装：

```shell
npm install vxe-table@next
```

### 3. 示例：

导入并使用

```js
// ...
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
// ...

createApp(App).use(VxeTable).mount("#app");
```

> 需要按需引入或局部引入，参考 [点击这里](https://vxetable.cn/#/start/useImport "点击这里")

```jsx
<template>
  <div class="flex-1">
    <vxe-table :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>
<script setup>
const tableData = ref([
  {
    id: 10001,
    name: "Test1",
    role: "Develop",
    sex: "Man",
    age: 28,
    address: "test abc",
  },
  {
    id: 10002,
    name: "Test2",
    role: "Test",
    sex: "Women",
    age: 22,
    address: "Guangzhou",
  },
  {
    id: 10003,
    name: "Test3",
    role: "PM",
    sex: "Man",
    age: 32,
    address: "Shanghai",
  },
  {
    id: 10004,
    name: "Test4",
    role: "Designer",
    sex: "Women",
    age: 24,
    address: "Shanghai",
  },
]);
</script>
```

> 此为最基础案例，其它功能和更多案例可参考官方文档

### 4. 链接：

[vxe-table GitHub地址](https://github.com/x-extends/vxe-table "vxe-table GitHub地址")
[vxetable 官网](https://vxetable.cn/ "vxetable 官网")
