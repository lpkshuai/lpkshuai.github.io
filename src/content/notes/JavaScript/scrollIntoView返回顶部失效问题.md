---
slug: js-scrollIntoView-problem
title: scrollIntoView返回顶部失效问题
category: JavaScript
type: debugging
description: 记录scrollIntoView返回顶部失效问题。
status: published
tags: JavaScript, scrollIntoView
updatedAt: 2023-07-04
---


### 背景：

在vue项目中进入页面使用了 `scrollIntoView` 方法让页面滚动回顶部，同样的详情页面发现有的可以返回顶部，但是有的失效。

### 代码如下：

```js
import { onBeforeRouteUpdate } from "vue-router";

onBeforeRouteUpdate((to, from) => {
  setTimeout(() => {
    document.getElementById("main").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 300);
});
```

### 解决：

在经过对比排查之后，发现失效的页面获取数据的接口响应时间超出了300ms，即上面设置的定时器的时间。猜测是因为数据没渲染好便执行了 `scrollIntoView` 方法，导致滚动失效。把定时器事件改为500ms后问题得到解决。也可以在保证数据渲染完毕后再执行该方法。

### 一些已知的 scrollIntoView 生效的前提条件：

1. 元素的 CSS 属性 overflow 必须设置为 scroll 或 auto，或者其父级元素的 overflow 属性设置为 scroll 或 auto，以确保滚动条可见。
2. 元素的高度不能为0，且必须大于容器的高度，否则无需滚动。
3. 元素的 display 属性不能设置为 none，visibility属性不能为hidden，否则元素将不可见且无法滚动。
4. scrollIntoView 方法必须在已经完成页面的加载和渲染之后调用，否则可能无法正确滚动到指定的元素。
