---
slug: react-native-cli-android-build
title: react native cli Android app 真机调试及打包常用指令记录
category: ReactNative
type: snippet
description: react native cli Android app 真机调试及打包常用指令记录。
status: published
tags: RN, Android
updatedAt: 2024-03-28
---

### 1. 手机开启开发者模式并打开USB调试

设置 -> 关于手机 -> 版本号 -> 点击7次，然后在设置中找开启USB调试选项，具体视手机而定。连接数据线。
执行下面的指令会自动安装app并运行：

```sh
npx react-native run-android
```

### 2. 打包app

> 前提：生成一个签名密钥 [点击跳转](https://reactnative.cn/docs/signed-apk-android#%E7%94%9F%E6%88%90%E4%B8%80%E4%B8%AA%E7%AD%BE%E5%90%8D%E5%AF%86%E9%92%A5 "点击跳转")

apk:

```sh
cd android
./gradlew assembleRelease
```

aab:

```sh
cd android
./gradlew bundleRelease
```

> 安装测试效果 `npx react-native run-android --mode=release`
