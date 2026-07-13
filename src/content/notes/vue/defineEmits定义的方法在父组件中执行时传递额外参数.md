---
slug: vue3-define-emits-param
title: defineEmits定义的方法在父组件中执行时传递额外参数
category: Vue
type: snippet
description: vue3 defineEmits定义的方法在父组件中执行时传递额外参数。
status: published
tags: Vue
updatedAt: 2024-05-27
---

**子组件中定义emit触发事件，当函数在父组件中使用时想要传递一个单独的在父组件中使用的参数（如使用for循环时）可以使用如下写法：**

```js
// 子组件
const emit = defineEmits(["checkChange"]);

watch(
  () => state.checkList,
  (newValue, oldValue) => {
    emit("checkChange", newValue);
  },
  { deep: true },
);
```

```jsx
// 父组件
<CustomCheck
  :checkData="state.checkOptionsUser[index]"
  @checkChange="(val) => typeChangeUser(val, index)"
  :defaultCheck="userSelect[index]"
></CustomCheck>
```

> 注意：`@checkChange="(val) => typeChangeUser(val, index)"`
