---
slug: js-blob-to-excel
title: js把文件流导出下载excel文件
category: JavaScript
type: snippet
description: 记录js中把文件流导出下载excel文件的方法。
status: published
tags: js, blob, excel
updatedAt: 2023-03-02
---

```js
let btn = document.querySelector('#app > button');
let resData = null;

fetch('http://127.0.0.1:3333', {
    method: "GET",
    responseType: "blob"
  })
  .then(response => {
    return response.blob()
  })
  .then(res => {
    console.log(res);
    resData = res;
  })

btn.addEventListener("click", () => {
  const link = document.createElement("a");
  let blob = new Blob([resData], {
    type: "application/octet-stream"
  });
  link.style.display = "none";
  link.href = URL.createObjectURL(blob);
  link.download = "xxxfile.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link);
})
```

> 注意：需要设置 `responseType: "blob"` ，否则可能会出现下载的文件打开损坏问题。

#### 动态截取请求中 `content-disposition` 的文件名:动态截取请求中 `content-disposition` 的文件名:

```js
let fileName = res.headers["content-disposition"]
    .split(";")[1]
    .split("filename=")[1];
...
link.download = decodeURIComponent(fileName);
```

> 使用 `decodeURIComponent` 可以解决文件名乱码问题。
