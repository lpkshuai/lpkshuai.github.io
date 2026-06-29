---
slug: vue3-define-expose
title: Vue3 父组件调用子组件内部的方法
category: Vue
type: snippet
description: vue3 通过 defineExpose 和 ref ，父组件可访问子组件中定义的方法。
status: published
tags: Vue, Snippet
updatedAt: 2023-03-03
---

### 1. 子组件中定义方法并通过defineExpose暴露出去

```js
import { reactive, defineExpose } from "vue";
const state = reactive({
  dataList: [],
});
const changeData = () => {
  state.dataList.push(1);
};
defineExpose({
  changeData,
});
```

### 2. 父组件通过ref调用子组件暴露的方法

```js
<child ref="childRef"></child>

import {ref} from "vue"；
const childRef = ref(null);
childRef.value.changeData();
```

_vue2中通过$refs方法调用_
