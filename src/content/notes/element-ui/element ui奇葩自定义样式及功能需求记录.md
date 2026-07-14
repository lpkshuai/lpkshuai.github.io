---
slug: element-custom-component
title: element ui奇葩自定义样式及功能需求记录
category: Vue
type: snippet
description: element ui奇葩自定义样式及功能需求记录。
status: published
tags: Vue, Element
updatedAt: 2023-02-09
---

## 1、表单el-checkbox中添加全选

> 在正常的el-checkbox-group前增加全选并且不影响表单验证。

![image](/notes/element-ui/el-custom-component-checkbox.png)

```jsx
<el-form
  ref="formRef"
  :model="form"
  :rules="formRules"
  class="form-box"
  status-icon
  label-width="112px"
  label-position="left"
>
  <div class="pos-r">
    <el-checkbox
      style="position: absolute; left: 112px; z-index: 1"
      v-model="state.checkAll"
      :indeterminate="state.isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </el-checkbox>
  </div>
  <el-form-item prop="type" label="类目">
    <el-checkbox-group
      class="type-list"
      v-model="form.type"
      @change="handleCheckedChange"
    >
      <el-checkbox :label="0">item1</el-checkbox>
      <el-checkbox :label="1">item2</el-checkbox>
      <el-checkbox :label="2">item3</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</el-form>
```

```js
const state = reactive({
  checkAll: false,
  isIndeterminate: false,
});

const handleCheckAllChange = (val) => {
  form.type = val ? [0, 1, 2] : [];
  state.isIndeterminate = false;
};
const handleCheckedChange = (value) => {
  const checkedCount = value.length;
  state.checkAll = checkedCount === 3;
  state.isIndeterminate = checkedCount > 0 && checkedCount < 3;
};
```

```css
.type-list .el-checkbox:first-of-type {
  margin-left: 80px;
}
```

## 2、分页el-pagination圆角

```css
.pagination-box .el-pager li,
.pagination-box .el-pagination .btn-prev,
.pagination-box .el-pagination .btn-next {
  border-radius: 50%;
  background-color: #ffffff !important;
  box-shadow: 0px 2px 8px 0px rgba(0, 35, 114, 0.1);
}

.el-pagination.is-background .btn-next.is-active,
.el-pagination.is-background .btn-prev.is-active,
.el-pagination.is-background .el-pager li.is-active {
  background-color: #1e5eff !important;
}

.el-pagination .el-pagination__sizes .el-input__wrapper {
  border-radius: 14px;
  box-shadow: 0px 2px 8px 0px rgba(0, 35, 114, 0.1);
}
```

![image](/notes/element-ui/el-custom-component-radius-pagination.png)
