---
slug: uni-app-lazyCodeLoading
title: uni-app启用组件按需注入
category: UniApp
type: setup
description: uni-app 中通过配置"lazyCodeLoading" : "requiredComponents"启用组件按需注入。
status: published
tags: UniApp, 小程序
updatedAt: 2024-03-07
---

### 1. 打开 manifest.json 配置文件

### 2. 选择最后的源码视图，并找到小程序特有相关 `mp-weixin`

增加 `"lazyCodeLoading" : "requiredComponents"`

```json
    /* 小程序特有相关 */
    "mp-weixin" : {
        // ...
        "lazyCodeLoading" : "requiredComponents"
    },
```

![image](/notes/uni-app/uni-app-lazyCodeLoading-config.png)

### 3. 相关链接

[按需注入文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html "按需注入文档")
