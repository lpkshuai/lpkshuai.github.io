---
slug: js-data-problem
title: 设置data-*属性自定义数据获取不到的问题
category: JavaScript
type: debugging
description: 记录设置data-*属性自定义数据获取不到的问题。
status: published
tags: JavaScript
updatedAt: 2023-03-29
---

# 问题描述

项目中使用`:data-cateId="item.cateId"`自定义数据属性，在取值时为`undefined`，经过控制台打印发现问题由大小写导致。

```html
...
<div :data-cateId="item.cateId"></div>
...
```

```js
...
const fuc = (e) => {
  e = e || window.event;
  let target = e.target || e.srcElement;
  let cateId = parseInt(target.dataset.cateId, 10);
  console.log(cateId); // 打印值为undefined
}
...
```

控制台打印target发现`data-cateId`变成了`data-cateid`，发现问题原因。
![image](/notes/js/js-data-xxx.png)

# 解决方案

### 1. 改成小写命名

使用`target.dataset.cateid`获取值

```html
<div :data-cateid="item.cateId"></div>
```

### 2. 改成data-xx-xx格式

使用`target.dataset.cateId`或者`target.dataset["cateId"]`获取值

```html
<div :data-cate-id="item.cateId"></div>
```

# data-\*规则

[MDN文档地址链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-* "MDN文档地址链接")

### 1. 定义

data-\* 全局属性 是一类被称为自定义数据属性的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换。

### 2. \*命名限制

- 该名称不能以xml开头，无论这些字母是大写还是小写；
- 该名称不能包含任何分号 (U+003A)；
- 该名称不能包含 A 至 Z 的大写字母。
