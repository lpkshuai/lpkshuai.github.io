---
slug: react-native-qrcode-svg
title: react native 生成二维码
category: ReactNative
type: snippet
description: react native 生成二维码。
status: published
tags: RN, qrcode
updatedAt: 2024-02-29
---

## 1. 安装

```bash
npm i -S react-native-svg react-native-qrcode-svg
```

## 2. 引入使用

默认用法

```js
import QRCode from 'react-native-qrcode-svg';

// 不带logo
render() {
  return (
    <QRCode
      value="http://awesome.link.qr"
      size={200}
    />
  );
};
```

添加logo

```js
render() {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <QRCode
      value="Just some string value"
      logo={{uri: base64Logo}}
      logoSize={30}
      logoBackgroundColor='transparent'
    />
  );
};
```

参数配置
| 参数名 | 默认值 | 描述 |
| ------------ | ------------ | ------------ |
| size | 100 | 渲染图像的大小（以像素为单位） |
| value | 'this is a QR code' | 二维码的字符串值。[{ data: 'ABCDEFG', mode: 'alphanumeric' }, { data: '0123456', mode: 'numeric' }, { data: [253,254,255], mode: 'byte' }] |
| color | 'black' | 二维码颜色 |
| backgroundColor | 'white' | 背景颜色 |
| enableLinearGradient | false | 启用或禁用线性渐变 |
| linearGradient | ['rgb(255,0,0)','rgb(0,255,255)'] | 用于创建线性渐变的 2 个 RGB 颜色数组 |
| gradientDirection | [170,0,0,0] | 线性梯度的方向 |
| logo | null | logo |
| logoSize | size的20% | logo尺寸 |
| logoBackgroundColor | backgroundColor | 背景色 |
| logoMargin | 2 | 间距 |
| logoBorderRadius | 0 | 圆角 |
| quietZone | 0 | quiet zone |
| getRef | null | 获取 SVG 参考以进一步使用 |
| ecl | 'M' | 纠错级别 |
| onError(error) | undefined | 代码生成过程中发生异常时触发的回调 |

## 3. 参考文档

[react-native-qrcode-svg npm 地址](https://www.npmjs.com/package/react-native-qrcode-svg "react-native-qrcode-svg npm 地址")
