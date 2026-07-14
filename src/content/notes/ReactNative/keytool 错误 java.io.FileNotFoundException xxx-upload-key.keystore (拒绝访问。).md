---
slug: react-native-keytool-error
title: keytool 错误: java.io.FileNotFoundException: xxx-upload-key.keystore (拒绝访问。)
category: ReactNative
type: debugging
description: keytool 错误: java.io.FileNotFoundException: xxx-upload-key.keystore (拒绝访问。)
status: published
tags: RN, App, build
updatedAt: 2024-04-22
---

### 1. 问题描述：

react native cli 打包前生成证书时控制台报错
`keytool 错误: java.io.FileNotFoundException: xxx-upload-key.keystore (拒绝访问。)`

> 生成过程见：[apk打包过程](https://reactnative.dev/docs/signed-apk-android "apk打包过程")

### 2. 解决方法：

①用管理员身份打开控制台
②JDK转移到其它磁盘（非C盘）
