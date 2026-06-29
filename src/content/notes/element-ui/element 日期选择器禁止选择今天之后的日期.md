---
slug: el-date-picker-before-today
title: element 日期选择器禁止选择今天之后的日期
category: Vue
type: snippet
description: element 日期选择器禁止选择今天之后的日期。
status: published
tags: Vue, Element, Snippet
updatedAt: 2023-05-25
---

### 1. Element UI

使用 `picker-options 的 disabledDate` 属性限制选择相应日期。

```js
...
<el-form-item prop="date" label="日期范围">
  <el-date-picker
    v-model="form.date"
    type="daterange"
    range-separator="－"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    value-format="YYYY-MM-DD HH:mm:ss"
    :picker-options="pickerOptions"
  />
</el-form-item>
...

...
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          // 获取今天的日期
          const today = new Date();
          // 如果选择的日期在今天之后，则禁用
          return time.getTime() > today.getTime();
        },
      },
    };
  },
...
```

> 官方文档：[点此查看](https://element.eleme.cn/#/zh-CN/component/date-picker "点此查看")
> ![image](/notes/element-ui/el-date-picker-options.png)
> ![image](/notes/element-ui/el-date-picker-options-2.png)

### 2. Element Plus

使用 `disabledDate` 属性限制选择相应日期。

```js
...
<el-form-item prop="date" label="日期范围">
  <el-date-picker
    v-model="form.date"
    type="daterange"
    range-separator="－"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    value-format="YYYY-MM-DD HH:mm:ss"
    :disabledDate="disabledDate"
  />
</el-form-item>
...

...
const disabledDate = (time) => {
  // 获取今天的日期
  const today = new Date();
  // 如果选择的日期在今天之后，则禁用
  return time.getTime() > today.getTime();
};
...
```

> 官方文档： [点此查看](https://element-plus.org/zh-CN/component/date-picker.html#%E5%B1%9E%E6%80%A7 "点此查看")
> ![image](/notes/element-ui/el-date-picker-options-3.png)
