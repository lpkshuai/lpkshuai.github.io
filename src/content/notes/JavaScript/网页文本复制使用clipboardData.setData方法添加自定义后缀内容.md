---
slug: js-ClipboardEvent-clipboardData
title: 网页文本复制使用clipboardData.setData方法添加自定义后缀内容
category: JavaScript
type: snippet
description: 网页文本复制使用clipboardData.setData方法添加自定义后缀内容。
status: published
tags: js, Clipboard
updatedAt: 2023-03-01
---

## 1. ClipboardEvent.clipboardData介绍

:pushpin: [MDN文档地址](https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent/clipboardData "MDN文档地址") :pushpin:

`ClipboardEvent.clipboardData` 属性保存了一个 `DataTransfer` 对象，这个对象可用于：

- 描述哪些数据可以由 cut 和 copy 事件处理器放入剪切板，通常通过调用 `setData(format, data)` 方法；
- 获取由 paste 事件处理器拷贝进剪切板的数据，通常通过调用 `getData(format)` 方法

## 2. 具体实现

```js
document.addEventListener("copy", (e) => {
  let clipboardData = e.clipboardData || window.clipboardData;
  if (!clipboardData) {
    return;
  }
  let selectData = window.getSelection();
  if (selectData) {
    e.preventDefault();
    clipboardData.setData(
      "text/plain",
      selectData + "\n--------------------\n后缀内容xxxxxxx",
    );
  }
});
```

粘贴效果：

![image](/notes/js/js-ClipboardEvent-clipboardData.png)
