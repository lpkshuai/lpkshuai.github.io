---
slug: react-native-expo-speech
title: Expo Speech 文字转语音
category: ReactNative
type: snippet
description: react native 使用 Expo Speech 文字转语音。
status: published
tags: RN, Expo, Speech
updatedAt: 2023-11-09
---

## 安装：

```bash
npx expo install expo-speech
```

## 引入使用：

```jsx
import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const speak = () => {
    Speech.speak("한국어", { language: "ko" });
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
```

## 链接：

更多配置项： [Expo Speech](https://docs.expo.dev/versions/latest/sdk/speech/ "Expo Speech")
支持的语言： [IETF BCP 47 ](https://en.wikipedia.org/wiki/IETF_language_tag "IETF BCP 47 ")
