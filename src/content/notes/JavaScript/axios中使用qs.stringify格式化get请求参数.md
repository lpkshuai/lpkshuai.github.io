---
slug: js-axios-get-stringify
title: axios中使用qs.stringify格式化get请求参数
category: JavaScript
type: snippet
description: axios中使用qs.stringify格式化get请求参数。
status: published
tags: axios, qs, get
updatedAt: 2024-01-12
---

### 安装使用：

安装：

```shell
npm install qs
```

引入使用：

```js
// 引入封装的 request.js
import request from "@/utils/request";
import qs from "qs";

export function getXXX(params) {
  return request({
    url: "/api/xxx/xxx",
    method: "get",
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false });
    },
  });
}
```

### 其它选项：

```js
qs.stringify({ a: ["b", "c", "d"] }, { indices: false });
// 'a=b&a=c&a=d'
qs.stringify({ a: ["b", "c"] }, { arrayFormat: "indices" });
// 'a[0]=b&a[1]=c'
qs.stringify({ a: ["b", "c"] }, { arrayFormat: "brackets" });
// 'a[]=b&a[]=c'
qs.stringify({ a: ["b", "c"] }, { arrayFormat: "repeat" });
// 'a=b&a=c'
qs.stringify({ a: ["b", "c"] }, { arrayFormat: "comma" });
// 'a=b,c'
```

### 文档：

[GitHub地址](https://github.com/ljharb/qs "GitHub地址")
[npm 地址](https://www.npmjs.com/package/qs "npm 地址")
