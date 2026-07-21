---
slug: react-native-px2dp
title: react native 将设计稿中的像素值转换为设备独立像素值（dp）以适配不同设备
category: ReactNative
type: snippet
description: react native 将设计稿中的像素值转换为设备独立像素值（dp）以适配不同设备。
status: published
tags: RN, px, dp
updatedAt: 2024-05-14
---

### 封装文件，将设计稿中的像素值转换为设备独立像素值（dp）。

首先，获取屏幕的宽度（screenWidth）和设计稿的宽度（uiWidth）。
然后，定义一个函数 pxToDp，它将设计稿中的像素值（uiElementPx）转换为设备独立像素值（dp）。计算公式为：
`const dpValue = (uiElementPx * screenWidth) / uiWidth;`

> 其中，uiElementPx 是设计稿中的像素值，screenWidth 是屏幕的宽度，uiWidth 是设计稿的宽度。通过这个计算，可以将设计稿中的像素值转换为适应当前屏幕的设备独立像素值。

```jsx
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const uiWidth = 375;

function pxToDp(uiElementPx) {
  return (uiElementPx * screenWidth) / uiWidth;
}

const adaptiveStyleSheet = {
  create(styles) {
    const transformedStyles = { ...styles };
    const propertiesToAdapt = [
      "width",
      "height",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginHorizontal",
      "marginVertical",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingHorizontal",
      "paddingVertical",
      "top",
      "right",
      "bottom",
      "left",
      "fontSize",
      "lineHeight",
    ];
    for (let key in transformedStyles) {
      const style = transformedStyles[key];
      for (let property in style) {
        if (
          propertiesToAdapt.includes(property) &&
          typeof style[property] === "number"
        ) {
          style[property] = pxToDp(style[property]);
        }
      }
    }
    return StyleSheet.create(transformedStyles);
  },
};

export { adaptiveStyleSheet as StyleSheet, pxToDp };
```

### 使用

使用时直接按照设定的设计稿的尺寸书写样式(`const uiWidth = 375;`)。

```jsx
import { StyleSheet } from "./adaptiveStyleSheet";

const styles = StyleSheet.create({
  container: {
    width: 200, // 在不同设备下会自动适配为设备独立像素
    height: 100,
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
```

### 行内使用

```jsx
import { StyleSheet, pxToDp } from "./adaptiveStyleSheet";

<View style={{ width: pxToDp(200) }} />;
```
