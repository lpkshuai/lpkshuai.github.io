---
slug: react-native-expo-haptics
title: react native 中使用 Expo Haptics 实现长按按钮获得震动反馈效果
category: ReactNative
type: snippet
description: react native 中使用 Expo Haptics 实现长按按钮获得震动反馈效果。
status: published
tags: RN, Expo, Haptics
updatedAt: 2023-12-19
---

## 一、背景：

项目中有长按按钮开始录音功能，需要在长按开始时添加一次震动反馈以提高用户体验。由于项目使用expo开发，所以找到了 `Expo Haptics` 库。
![image](/notes/react-native/rn-expo-haptics.png)

## 二、使用过程：

### 1. 安装：

```sh
npx expo install expo-haptics
```

### 2. 引入并使用：

```jsx
import * as Haptics from "expo-haptics";

const startRecord = () => {
  Haptics.selectionAsync();
  // 其它操作
  ...
}
...
<Pressable onPress={() => startRecord()}>
  <Image
    source={require("../assets/chat/startRecord.png")}
    style={styles.startIcon}
  ></Image>
</Pressable>
...
```

其它配置和功能可以查看官方文档。

## 三、文档：

[npm 地址](https://www.npmjs.com/package/expo-haptics "npm 地址")
[GitHub地址](https://github.com/expo/expo/tree/sdk-49/packages/expo-haptics "GitHub地址")
[expo 文档地址](https://docs.expo.dev/versions/latest/sdk/haptics/ "expo 文档地址")
