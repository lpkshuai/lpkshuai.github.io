---
slug: react-native-signature-conflict
title: react native 安装app时报错 ”已安装了签名冲突的应用“
category: ReactNative
type: debugging
description: react native 安装app时报错 ”已安装了签名冲突的应用“问题解决。
status: published
tags: RN, App, signature
updatedAt: 2024-04-22
---

### 1. 问题描述：

react native开发完app，手动安装app，报错”已安装了签名冲突的应用“。

或者执行命令安装`npx react-native run-android --mode=release`，报错
![image](/notes/react-native/rn-app-install-error.png)

### 2. 解决方法：

直接卸载原来的app发现无效，于是执行：
`adb uninstall "xxxxx"`

> xxxxx换成你的app名，在这里可以找到：
> ![image](/notes/react-native/rn-app-uninstall.png)
