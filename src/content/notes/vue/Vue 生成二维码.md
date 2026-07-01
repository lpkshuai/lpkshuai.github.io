---
slug: vue-qrcode-csv
title: Vue 二维码生成插件
category: Vue
type: snippet
description: Vue 项目中使用 qrcode.vue 实现二维码生成。
status: published
tags: Vue, qrcode
updatedAt: 2022-12-05
---

### 1. 安装 qrcode.vue

[仓库地址](https://github.com/scopewu/qrcode.vue "仓库地址")

```shell
// vue2 安装1.x版本、vue3 安装3.x版本
npm install --save qrcode.vue
// 或
yarn add qrcode.vue
```

### 2. 使用

```js
// 使用
import { createApp } from 'vue'
import QrcodeVue from 'qrcode.vue'

createApp({
  data: {
    value: 'https://example.com',
  },
  template: '<qrcode-vue :value="value"></qrcode-vue>',
  components: {
    QrcodeVue,
  },
}).mount('#root')

// 单文件组件使用
<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'https://example.com',
        size: 200,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>
```

### 3. 属性配置

| 属性名     | 类型   | 默认值  | 说明                                                                                                                              |
| ---------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| value      | string | ''      | 二维码的内容                                                                                                                      |
| size       | number | 100     | 二维码的尺寸                                                                                                                      |
| render-as  | string | canvas  | QRcode 渲染方式 canvas 或 svg。svg 可以在 SSR 上工作。                                                                            |
| margin     | number | 0       | margin宽度                                                                                                                        |
| level      | string | H       | 纠错级别（'L', 'M', 'Q', 'H'），[wikipedia: QR_code](https://en.wikipedia.org/wiki/QR_code#Error_correction "wikipedia: QR_code") |
| background | string | #ffffff | 二维码背景颜色                                                                                                                    |
| foreground | string | #000000 | 二维码颜色                                                                                                                        |
| class      | string | ''      | 二维码元素类名                                                                                                                    |
