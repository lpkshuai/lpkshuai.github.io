---
slug: vue-history-router-404
title: vue项目本地启动history路由模式刷新页面404
category: Vue
type: debugging
description: 记录vue项目本地启动history路由模式刷新页面404的问题。
status: published
tags: Vue, Router
updatedAt: 2023-06-25
---

背景：之前一直用hash模式，改成history模式后刷新页面404

解决：`vue.config.js` 中 `publicPath: "/"`

> 如果是线上服务则还需要后端修改一些配置，见链接 [点击查看](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90 "点击查看")
