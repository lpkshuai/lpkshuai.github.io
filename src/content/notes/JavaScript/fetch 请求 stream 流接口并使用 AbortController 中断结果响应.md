---
slug: js-fetch-stream-abort
title: fetch请求stream流接口并使用AbortController中断结果响应
category: JavaScript
type: snippet
description: 记录 fetch 请求 stream 流接口的写法并且使用 AbortController 中断结果响应。
status: published
tags: fetch, stream, AbortController
updatedAt: 2023-12-29
---

### 1. 使用fetch请求stream流接口：

封装fetch工具方法 `fetchRequest.js`

```js
const fetchStream = async (url, options) => {
  const response = await fetch(url, options);
  if (response.status !== 200) {
    return false;
  }
  const reader = response.body.getReader();
  return reader;
};

export default fetchStream;
```

统一管理api `api.js`

```js
// 引入封装好的 fetchRequest.js
import fetchRequest from "./fetchRequest";

const abortController = new AbortController();
const abortSignal = abortController.signal;

// 请求
export function chatApi(data) {
  return fetchRequest("/api/xxx", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    signal: abortSignal,
    body: JSON.stringify(data),
  });
}

// 中断请求方法
export function abortFetch() {
  abortController.abort();
}
```

使用封装好的方法进行请求，并处理响应结果

```js
...
let params = {
    message: xxx,
};
let reader = await $api.chatApi(params);
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break; // 读取完毕
  } else {
    console.log("message: ", new TextDecoder().decode(value));
  }
}
...
```

### 2. 使用AbortController中断请求：

AbortController 是一个用于控制一个或多个 AbortSignal 对象的接口，通过调用 AbortController 的 abort 方法，可以中断一个或多个关联的 AbortSignal。
上面的 `api.js` 中，AbortController 创建了一个与 fetch 请求关联的 AbortSignal，然后将该 AbortSignal 传递给 fetch 的 signal 选项。当需要中断请求时，调用 `abortController.abort()` 方法即可。

> 注意fetch请求中设置的 **signal: abortSignal**

```js
const abortController = new AbortController();
const abortSignal = abortController.signal;

function abortFetch() {
  abortController.abort();
}
```

```js
// 按自己导出的方式引入并使用中断请求
import { abortFetch } from "./api.js";
abortFetch();
```

### 3. 参考文档

[AbortController 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController "AbortController 文档")
