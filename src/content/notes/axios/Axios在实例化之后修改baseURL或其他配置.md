## 一. 修改全局默认配置：

在使用axios请求的时候一般会进行封装，如：

```js
import axios from "axios";
const request = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASEURL,
  baseURL: "https://www.xxx.com",
  timeout: 10 * 1000,
});
...
export default request;
```

在有些情况下需要动态修改baseURL或其他配置，此时可通过以下方法修改默认配置：

```js
import request from "/xxx/xxx";
request.defaults.baseURL = "http://xxxxxx";
```

[官方文档相关链接](https://axios-http.com/zh/docs/config_defaults "官方文档相关链接")

## 二. 修改单个接口配置：

当不想修改全局设置，只要修改某个接口的配置项时，按以下方法修改：

1. 直接请求

```js
import request from "/xxx/xxx";
const config = {
  baseUrl: "http://xxxxxx",
  timeout: 5 * 1000,
};
export function getData(params) {
  return request({
    method: "get",
    url: "/api/get/xxx",
    params,
    ...config,
  });
}
export function postData(params) {
  return request({
    method: "post",
    url: "/api/post/xxx",
    data: params,
    ...config,
  });
}
```

2. 请求方式别名

```js
import request from "/xxx/xxx";
const config = {
  baseUrl: "http://xxxxxx",
  timeout: 5 * 1000,
};
// axios.get(url[, config])
export function getData(params) {
  return request.get("/api/get/xxx", { params, ...config });
}
// axios.post(url[, data[, config]])
export function postData(params) {
  return request.post("/api/post/xxx", params, config);
}
```

[其他配置项见官方文档](https://axios-http.com/zh/docs/req_config "其他配置项见官方文档")
[其他请求方式见官方文档](https://axios-http.com/zh/docs/api_intro "其他请求方式见官方文档")
