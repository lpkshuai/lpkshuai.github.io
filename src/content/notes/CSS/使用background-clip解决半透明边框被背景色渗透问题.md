---
slug: css-background-clip
title: 使用background-clip解决半透明边框被背景色渗透问题
category: CSS
type: snippet
description: 记录使用background-clip解决半透明边框被背景色渗透问题。
status: published
tags: CSS, background-clip, border
updatedAt: 2023-03-06
---

## 1. 问题描述及解决

**在给元素设置半透明边框时发现边框颜色和预期效果不一致，发现边框颜色被背景色渗透了。默认状态下，背景会延伸到边框的区域下层。**

右侧图为预期效果，左侧图为实际效果：
![image](/notes/css/background-clip-transparent-border.png)

> 此处设置了边框颜色为粉色半透明，而实际效果被背景色渗透。

关键样式代码如下：

```css
.transparent-border {
  background-color: #55ffff;
  border: 5px solid rgba(255, 158, 254, 0.5);
}
```

添加background-clip之后：

```css
.transparent-border {
  background-color: #55ffff;
  background-clip: padding-box;
  border: 5px solid rgba(255, 158, 254, 0.5);
}
```

## 2. 关于background-clip

**MDN链接地址** [点击这里](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip "点击这里")

### 定义：

`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

### 语法：

```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```

### 详细：

| 属性值      | 描述                                                |
| ----------- | --------------------------------------------------- |
| border-box  | 背景延伸至边框外沿（但是在边框下层）。              |
| padding-box | 背景延伸至内边距（padding）外沿。不会绘制到边框处。 |
| content-box | 背景被裁剪至内容区（content box）外沿。             |
| text        | 背景被裁剪成文字的前景色。                          |
