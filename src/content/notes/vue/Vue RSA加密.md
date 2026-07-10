---
slug: vue-jsencrypt-rsa
title: Vue RSA加密
category: Vue
type: snippet
description: vue 中使用 RSA 加密。
status: published
tags: Vue, RSA, jsencrypt
updatedAt: 2022-12-02
---

### 1. 安装jsencrypt

```bash
npm install jsencrypt
```

### 2. 引入jsencrypt

```js
// 全局引入
import JSEncrypt from "jsencrypt";
Vue.prototype.$jsEncrypt = JSEncrypt;
// 局部引入
import JSEncrypt from "jsencrypt";
```

### 3. 使用

```js
// 定义公钥私钥
let publicKey = "公钥";
let privateKey = "私钥";

// 加密
RSAencrypt(password){
  // 实例化jsEncrypt对象
  let jseObj = new JSEncrypt();
  // 设置公钥
  jseObj.setPublicKey(publicKey);
  console.log("加密结果：" + jseObj.encrypt(password));
  return jseObj.encrypt(password);
}

// 解密
RSAdecrypt(password){
  // 实例化jsEncrypt对象
  let jseObj = new JSEncrypt();
  // 设置私钥
  jseObj.setPrivateKey(privateKey);
  console.log("解密结果：" + jseObj.decrypt(password));
  return jseObj.decrypt(password);
}
```
