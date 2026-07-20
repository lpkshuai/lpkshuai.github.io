---
slug: css-arrow-suffix
title: css 实现数据指标增减趋势箭头后缀
category: CSS
type: snippet
description: 通过伪元素实现数据指标增减趋势箭头后缀。
status: published
tags: CSS, 伪元素, arrow
updatedAt: 2022-11-11
---

### 1. 实现数据的变化趋势箭头后缀

![image](/notes/css/css-arrow-suffix.png)

### 2. css样式代码

```css
.arrowUp,
.arrowDown {
  position: relative;
  display: inline-block;
}
/* 字体颜色 */
.arrowUp {
  color: #00ae2b;
}
.arrowDown {
  color: #ff1f33;
}
/* 箭头样式 */
.arrowUp::after,
.arrowDown::after {
  content: "";
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 14px;
}
/* 箭头使用的图标 */
.arrowUp::after {
  background-image: url(../assets/images/icons/up.png);
}
.arrowDown::after {
  background-image: url(../assets/images/icons/down.png);
}
```

### 3. 使用方法

```html
<span :class="curData < 0 ? 'arrowDown' : 'arrowUp'">
  {{ curData || "-" }}%
</span>
```
