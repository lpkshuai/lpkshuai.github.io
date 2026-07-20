---
slug: react-native-expo-clipboard
title: react native 使用 Expo Clipboard 复制内容到剪切板
category: ReactNative
type: snippet
description: react native 使用 Expo Clipboard 复制内容到剪切板。
status: published
tags: RN, Expo, Clipboard
updatedAt: 2024-01-18
---

### 1. 安装

```sh
npx expo install expo-clipboard
```

### 2. 使用

```jsx
import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function App() {
  const [copiedText, setCopiedText] = React.useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("hello world");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Click here to copy to Clipboard"
        onPress={copyToClipboard}
      />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  copiedText: {
    marginTop: 10,
    color: "red",
  },
});
```

### 3. 链接

[expo clipboard 官方文档](https://docs.expo.dev/versions/latest/sdk/clipboard/ "expo clipboard 官方文档")
[expo-clipboard npm 地址](https://www.npmjs.com/package/expo-clipboard "expo-clipboard npm 地址")
