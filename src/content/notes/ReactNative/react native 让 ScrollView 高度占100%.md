---
slug: react-native-ScrollView-height
title: react native 让 ScrollView 高度占100%
category: ReactNative
type: snippet
description: react native 让 ScrollView 高度占100%的方法记录。
status: published
tags: React Native, ScrollView, flex
updatedAt: 2024-01-30
---

ScrollView 高度占满页面的剩余高度，开始设置 `flex: 1` 发现高度占满了，但是滚动失效了。
经过测试修改：

```jsx
<ScrollView contentContainerStyle={{ flexGrow: 1 }}></ScrollView>
```
