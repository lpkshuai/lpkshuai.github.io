---
slug: react-native-build-version
title: react native cli 打包配置版本号和版本代码
category: ReactNative
type: setup
description: react native cli 打包配置版本号和版本代码。
status: published
tags: RN, Build, Version
updatedAt: 2024-05-17
---

# Android

在 android/app/build.gradle 文件中设置版本号和版本代码：

**1. 打开 android/app/build.gradle 文件。**
**2. 找到 defaultConfig 部分，并修改以下内容：**

```gradle
defaultConfig {
    applicationId "com.yourapp"
    minSdkVersion rootProject.ext.minSdkVersion
    targetSdkVersion rootProject.ext.targetSdkVersion
    versionCode 1
    versionName "1.0"
}
```

> `versionCode` 是一个整数，每次发布新版本时递增。
> `versionName` 是一个字符串，表示应用程序的版本号。

# iOS

在 ios/YourApp/Info.plist 文件中设置版本号：

**1. 打开 ios/YourApp/Info.plist 文件。**
**2. 找到 CFBundleShortVersionString 和 CFBundleVersion 键，并修改其值：**

```xml
<key>CFBundleShortVersionString</key>
<string>1.0</string>
<key>CFBundleVersion</key>
<string>1</string>
```

> `CFBundleShortVersionString` 表示用户可见的版本号（例如 "1.0"）。
> `CFBundleVersion` 表示内部版本号，每次发布新版本时递增。
