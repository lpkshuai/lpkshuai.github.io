---
slug: react-native-icon-problem
title: react native app 图标在安卓上内容被切割问题记录
category: ReactNative
type: debugging
description: react native app 图标在安卓上内容被切割问题记录
status: published
tags: RN, App, icon
updatedAt: 2023-10-17
---

## 问题背景：

react native开发app，设置的app图标在安卓中会被切割，导致周围的留白被切掉，看起来很奇怪。甚至有些文字内容被切割掉，显示不全。

> 在不同手机上，icon可能会被切割成各种圆角，如果留白不够，内容可能会被切割。在iOS上icon也有相应的规范，比如需要1024尺寸等。
> ![image](/notes/react-native/rn-app-icon-android-peoblem.png)

## 解决方法：

在查找问题的过程中发现一个图标在线处理网站，经过处理后问题解决。

## 相关链接：

在线工具地址：
[Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html "Android Asset Studio")
[IconKitchen](https://icon.kitchen/ "IconKitchen")
安卓文档地址：
[https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#design-adaptive-icons)
