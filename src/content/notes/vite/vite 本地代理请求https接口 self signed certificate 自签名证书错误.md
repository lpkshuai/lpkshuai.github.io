---
slug: vite-https-self-signed-certificate
title: vite 本地代理请求https接口 self signed certificate 自签名证书错误
category: Tooling
type: debugging
description: 记录 vite 本地代理请求https接口时自签名证书错误。
status: published
tags: Vite, Tooling
updatedAt: 2023-06-14
---

### vite本地代理后端接口为https时，无法发送请求，并报错如下：

![image](/notes/vite/error-self-signed-certificate.png)

### 查询vite文档，更改配置 `server.https` 为 `true` ，无效

![image](/notes/vite/server.https-config.png)

### 又根据vite文档中描述添加 @vitejs/plugin-basic-ssl 到项目插件中，它会自动创建和缓存一个自签名的证书。 结果无效

### 于是本地添加证书文件并配置在 `server.https` 中 ，无效

### 最终 `server.proxy` 中增加配置 `secure: false` 后，请求发起成功，问题解决

```js
  server: {
    hmr: true,
    open: true,
    port: "8080",
    proxy: {
      "/api": {
        target: "https://xx.xx.xx.xx:xx",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
```

> [参考链接 https://github.com/vitejs/vite/issues/3475](https://github.com/vitejs/vite/issues/3475 "参考链接")
> ![image](/notes/vite/github-issues-error-self-signed-cetificate.png)
