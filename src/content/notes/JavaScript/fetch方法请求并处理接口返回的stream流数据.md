---
slug: js-fetch-stream-data
title: fetch方法请求并处理接口返回的stream流数据
category: JavaScript
type: snippet
description: 记录 fetch 请求 stream 流接口的写法并且处理返回的数据。
status: published
tags: fetch, stream
updatedAt: 2023-08-21
---

```js
const fetchStream = async (url, options) => {
  const response = await fetch(url, options);
  if (response.status !== 200) {
    return false;
  }
  const reader = response.body.getReader();
  return reader;

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    } else {
      console.log(new TextDecoder().decode(value));
    }
  }
};

fetchRequest("/api/chat/scend", {
  method: "post",
  body: JSON.stringify(data),
});
```
