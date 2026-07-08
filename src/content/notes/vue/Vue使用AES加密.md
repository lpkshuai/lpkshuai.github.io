---
slug: vue-crypto-js
title: Vue使用AES加密
category: Vue
type: snippet
description: vue 中使用 AES 加密。
status: published
tags: Vue, AES, crypto-js
updatedAt: 2024-05-16
---

## 1. 安装crypto-js库：

```bash
npm install crypto-js
# 或
yarn add crypto-js
```

## 2. 封装encryption.js

```JavaScript
// utils/encryption.js
import CryptoJS from 'crypto-js';

// AES加密
export function encrypt(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString();
}

// AES解密
export function decrypt(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
```

## 3. 使用

```jsx
<template>
  <div>
    <h1>AES Encryption Example</h1>
    <input v-model="inputText" placeholder="Enter text to encrypt" />
    <input v-model="encryptionKey" placeholder="Enter encryption key" />
    <button @click="handleEncrypt">Encrypt</button>
    <button @click="handleDecrypt">Decrypt</button>
    <p>Encrypted Text: {{ encryptedText }}</p>
    <p>Decrypted Text: {{ decryptedText }}</p>
  </div>
</template>

<script>
// 导入封装好的加解密方法
import { encrypt, decrypt } from "@/utils/encryption";

export default {
  data() {
    return {
      inputText: "",
      encryptionKey: "",
      encryptedText: "",
      decryptedText: "",
    };
  },
  methods: {
    handleEncrypt() {
      this.encryptedText = encrypt(this.inputText, this.encryptionKey);
    },
    handleDecrypt() {
      this.decryptedText = decrypt(this.encryptedText, this.encryptionKey);
    },
  },
};
</script>

<style scoped>
/* 添加一些简单的样式 */
input {
  margin-bottom: 10px;
  display: block;
}
button {
  margin-right: 10px;
}
</style>
```
