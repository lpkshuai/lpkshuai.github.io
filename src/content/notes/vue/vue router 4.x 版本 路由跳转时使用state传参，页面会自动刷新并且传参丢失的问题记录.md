---
slug: vue-router-state-error
title: vue router 4.x 版本state传参，页面自动刷新传参丢失
category: Vue
type: debugging
description: vue router 4.x 版本 路由跳转时使用state传参，页面会自动刷新并且传参丢失的问题记录。
status: published
tags: Vue, Vue-Router
updatedAt: 2024-08-21
---

## 1. 项目中部分相关依赖的版本

```json
"vue": "^3.2.45"
"vue-router": "^4.1.6"
"vite": "^4.1.0"
"element-plus": "^2.2.30"
```

## 2. 封装的vue router hooks代码如下

```js
import { useRouter } from "vue-router";

export default function useVueRouter() {
  const router = useRouter();
  const { query } = router.currentRoute.value;
  const routerState = window.history.state;

  const jumpPage = (name, state = {}) => {
    if (!name) {
      return;
    }
    router.push({
      name,
      state,
    });
  };
  const goBack = (step = -1) => {
    router.back(step);
  };

  return {
    query,
    routerState,
    jumpPage,
    goBack,
  };
}
```

## 3. 出现问题的背景

出现问题的部分如下：

```jsx
<el-table-column fixed="right" label="操作" width="250">
  <template #default="scope">
    <el-button
      link
      type="primary"
      @click="jumpPage('Detail', scope.row)"
    >
      詳情
    </el-button>
    <el-divider direction="vertical" />
    <el-button
      link
      type="primary"
      @click="jumpPage('Edit', scope.row)"
    >
      編輯
    </el-button>
  </template>
</el-table-column>
```

详情页执行如下代码发现没有接收到参数：

```js
import useRouter from "@/hooks/useRouter.js";
const { jumpPage, routerState } = useRouter();
console.log(routerState);
```

**由于在其他页面的表格操作列也使用同样的写法跳转，但是没有遇到该问题，所以开始寻找不同的地方，经过观察发现在点击跳转时页面会刷新然后传参丢失。**

**经过对比`scope.row`的内容以及依次删除其它不同类型属性的测试，最终找到了导致页面刷新的属性：`scope.row`中的tags数组**

```json
// scope.row 内容如下
{
  "shopId": 2,
  "shopName": "李家菜",
  "storeId": "218",
  "name": "李家宴（李家菜）",
  "tags": ["704"],
  "users": 0,
  "status": 1,
  "createTime": "1900-01-20",
  "creator": "system"
}
```

## 4. 解决方案

① 使用 `JSON.parse(JSON.stringify(scope.row))`
② 避免传递数组或其他会导致问题的复杂数据类型参数
③ 使用query或params传参
