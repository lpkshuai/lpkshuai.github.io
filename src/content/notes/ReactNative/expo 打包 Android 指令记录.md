---
slug: react-native-android-build
title: expo 打包 Android 指令记录
category: ReactNative
type: snippet
description: expo 打包 Android 指令记录。
status: published
tags: RN, Android，EAS
updatedAt: 2023-12-27
---

# 一、配置版本号

1. 配置app.json

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-name",
    "version": "1.0.0",
    "android": {
      "versionCode": 1
    },
    "ios": {
      "buildNumber": "1.0.0"
    }
  }
}
```

> 每次发布新版本时，更新以下字段：
> version: 表示应用的版本号，通常使用语义版本号（如 1.0.0）。
> android.versionCode: 必须是一个递增的整数，通常每次发布时增加 1。
> ios.buildNumber: 通常使用与 version 相同的格式（如 1.0.0），每次发布时增加。

# 二、使用 EAS Build

### 1. 安装 EAS CLI

如果还没有安装 EAS CLI，可以使用以下命令进行安装：

```sh
npm install -g eas-cli
```

### 2. 配置 EAS

如果你还没有配置 EAS，可以通过以下命令进行初始化：

```sh
eas build:configure
```

### 3. 运行 EAS 构建

在配置好版本号和其他构建设置后，可以使用以下命令运行 EAS 构建：

```sh
eas build --platform ios --local
# 或
eas build --platform android --local
```
