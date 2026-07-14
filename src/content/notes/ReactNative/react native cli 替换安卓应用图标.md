---
slug: react-native-android-appIcon
title: react native cli 替换安卓应用图标
category: ReactNative
type: setup
description: react native cli 替换安卓应用图标步骤记录。
status: published
tags: RN, android, appIcon
updatedAt: 2024-04-25
---

### 1. 拿到需要替换的logo图标，最好是1024×1024尺寸。

### 2. 根据原图生成不同尺寸的logo：

> 有很多类似功能的网站，这里我使用的是图标工厂
> 图标工厂地址：[图标生成网站](https://icon.wuruihong.com/ "图标生成网站")

首先上传图片
![image](/notes/react-native/rn-android-appicon-1.png)
然后可以配置一些其他选项如圆角等等：
![image](/notes/react-native/rn-android-appicon-2.png)
上传后会看到预览效果：
![image](/notes/react-native/rn-android-appicon-3.png)

### 3. 替换项目中的logo图标：

找到图标位置：`项目目录 -> android -> app -> src -> main -> res `
![image](/notes/react-native/rn-android-appicon-4.png)

![image](/notes/react-native/rn-android-appicon-5.png)

> 图中为各种尺寸图标存放的文件夹，替换其中的图标即可。替换完重新打包图标就会更新。

### 4. 也可以自己设置图标名：

打开下面的文件：
![image](/notes/react-native/rn-android-appicon-6.png)
其中这两项就是logo和圆角logo配置的文件名：
![image](/notes/react-native/rn-android-appicon-7.png)
