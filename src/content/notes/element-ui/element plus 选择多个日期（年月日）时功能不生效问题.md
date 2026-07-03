---
slug: el-date-picker-invalid
title: element plus 选择多个日期（年月日）时功能不生效问题
category: Vue
type: debugging
description: 记录 element plus 选择多个日期（年月日）时功能不生效问题。
status: published
tags: Vue, Element
updatedAt: 2024-09-11
---

## 问题：

element plus 官网文档中的日期多选功能，设置 `type="months|years|dates"` 发现功能失效，日期选择面板显示也是默认的date，控制台警告提示type的值无效。

![image](/notes/element-ui/el-date-picker-muti-type.png)

```html
<div class="block">
  <span class="demonstration">Months</span>
  <el-date-picker
    v-model="value6"
    type="months"
    placeholder="Pick one or more months"
  />
</div>
```

## 解决：

首先检查element的版本，旧版本不支持该功能。
**重要：更新完版本后要删除node_modules重新安装，直接更新element后就使用也是不会生效的，需要把旧的依赖删除重新安装。**
