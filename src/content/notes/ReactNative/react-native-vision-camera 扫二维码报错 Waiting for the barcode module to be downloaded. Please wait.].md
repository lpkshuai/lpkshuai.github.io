---
slug: react-native-vision-camera
title: react-native-vision-camera 扫二维码报错 Waiting for the barcode module to be downloaded.
category: ReactNative
type: debugging
description: 使用react-native-vision-camera 库扫描解析二维码时，部分手机出现报错 [unknown/unknown] Waiting for the barcode module to be downloaded. Please wait.]。
status: published
tags: RN, Expo, camera
updatedAt: 2024-04-23
---

### 1. 问题：

使用react-native-vision-camera 库扫描解析二维码时，部分手机出现如下报错：

![image](/notes/react-native/rn-vision-camera-error.png)

### 2. 解决：

`android/app/build.gradle`文件中添加依赖：

```js
dependencies {
  // ...
  implementation 'com.google.mlkit:barcode-scanning:17.2.0'
}
```

### 3. 参考：

[GitHub 相关 issues](https://github.com/mrousavy/react-native-vision-camera/issues/2256 "GitHub 相关 issues")
