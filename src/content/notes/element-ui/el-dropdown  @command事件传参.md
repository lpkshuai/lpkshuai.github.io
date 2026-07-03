---
slug: el-dropdown-command-param
title: el-dropdown  @command事件传参
category: Vue
type: snippet
description: element el-dropdown  @command事件传参方法记录。
status: published
tags: Vue, Element, dropdown, command
updatedAt: 2023-06-07
---

```jsx
<template>
  <el-dropdown @command="handleCommand($event, "111")">
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
```

```jsx
<script setup>
const handleCommand = (command, params) => {
  console.log(command, params);
}
</script>
```
