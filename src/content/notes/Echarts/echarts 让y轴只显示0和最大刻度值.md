---
slug: js-fetch-stream-abort
title: echarts 让y轴只显示0和最大刻度值
category: Echarts
type: snippet
description: 记录 echarts 中，让y轴只显示0和最大刻度值的办法。
status: published
tags: Echarts
updatedAt: 2023-02-16
---

# 效果

![image](/notes/echarts/echarts-y-0-max.png)

# 实现方法

### 1. 将interval属性设置为一个很大的数值

![image](/notes/echarts/echarts-y-interval-doc.png)

```js
yAxis: [{
  type: "value",
  interval: 100000000
}],
```

> 暂时只想到一种方法，后续补充。
