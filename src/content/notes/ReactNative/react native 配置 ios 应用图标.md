---
slug: react-native-ios-appIcon
title: react native 配置 ios 应用图标
category: ReactNative
type: setup
description: react native 配置 ios 应用图标步骤记录。
status: published
tags: RN, xcode, appIcon
updatedAt: 2024-04-29
---

### 1. 打开项目，点击打开Assets.xcassets文件，拖动多尺寸的图标到对用位置：

![image](/notes/react-native/rn-ios-app-icon-1.png)

### 2. 选择General选项，找到 App Icons and Lauch Screen，配置资源：

![image](/notes/react-native/rn-ios-app-icon-2.png)

### 3. 配置好之后重新打包运行。

### 4. 如果没有Assets.xcassets文件，需要自己创建。步骤如下：

- **右键点击项目，选择创建文件**
  ![image](/notes/react-native/rn-ios-app-icon-3.png)

- **下拉选择文件类型为 Asset CatCatalog**
  ![image](/notes/react-native/rn-ios-app-icon-4.png)

- **设置文件名称**
  ![image](/notes/react-native/rn-ios-app-icon-5.png)

- **点击打开刚创建的Assets，在左侧空白处鼠标右键点击创建App icon**
  ![image](/notes/react-native/rn-ios-app-icon-6.png)

- **默认单个尺寸，点击修改为All Sizes 就会显示全部尺寸的框**
  ![image](/notes/react-native/rn-ios-app-icon-7.png)
