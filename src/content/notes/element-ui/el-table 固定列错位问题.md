---
slug: el-table-display-issues
title: el-table固定列错位问题
category: Vue
type: debugging
description: 记录el-table设置固定列时，使用keep-alive后页面切换导致该列错位的问题。
status: published
tags: Vue, Element
updatedAt: 2023-01-05
---

#### **1. 问题描述：el-table使用固定列时，使用keep-alive后页面切换导致该列错位。**

![image](/notes/element-ui/el-table-fix-column-layout-error.png)

#### **2. 解决方法：使用el-table的doLayout方法对表格进行重新布局**

![image](/notes/element-ui/el-table-fix-column-layout-error-doc.png)

```js
  activated() {
    this.$nextTick(() => {
      this.$refs.myTable.doLayout();
    });
  },
```
