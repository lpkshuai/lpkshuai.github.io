---
slug: vue-el-menu-white-space
title: el-menu文本长度过长时换行展示
category: Vue
type: snippet
description: 让el-menu文本长度过长时进行换行展示的方法记录。
status: published
tags: Vue, Element, Snippet
updatedAt: 2023-05-10
---

### **el-menu菜单文字字数过多时默认是设置的不进行换行，如下所示：**

![image](/notes/element-ui/el-menu-text-nowrap.png)

![image](/notes/element-ui/el-menu-text-default.png)

### **如果需要让文本换行展示需要自定义样式，代码如下：**

```css
{
  white-space: normal; // 允许换行显示
  word-break: break-all; // 英文单词允许拆分显示
  line-height: normal; // 调整行高
}
```

![image](/notes/element-ui/el-menu-text-normal.png)
