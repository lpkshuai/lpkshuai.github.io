---
slug: vite-https-plugin-basic-ssl
title: Vite 本地开启 https 模式便于调试
category: Tooling
type: setup
description: Vite 本地开启 https 模式配置。
status: published
tags: Vite, Https
updatedAt: 2023-08-17
---

### 1. 安装依赖

```shell
npm install @vitejs/plugin-basic-ssl -D
```

### 2. 配置 vite.config.js

```js
// vite.config.js
import  basicSsl  from  '@vitejs/plugin-basic-ssl'

export  default  {
  plugins : [
    basicSsl ( {
      /** 认证名称 */
      name : 'test' ,
      /** 自定义信任域 * /
      domains : [ '*.custom.com' ] ,
      /** 自定义认证目录 */
      certDir : '/Users/.../.devServer/cert'
    } )
  ]
}
```

### 3. 相关链接

[@vitejs/plugin-basic-ssl npm 地址](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl "@vitejs/plugin-basic-ssl npm 地址")
[GitHub 地址](https://github.com/vitejs/vite-plugin-basic-ssl "GitHub 地址")
[Vite server-https](https://vitejs.dev/config/server-options.html#server-https "Vite server-https")
