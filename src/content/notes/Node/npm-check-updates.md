---
slug: node-npm-check-updates
title: 使用 npm-check-updates 检查项目的 npm 依赖项是否有更新。
category: Node.js
type: guide
description: 使用 npm-check-updates 检查项目的 npm 依赖项是否有更新。
status: published
tags: node, npm, ncu
updatedAt: 2023-05-23
---

## 一、 安装 npm-check-updates：

```shell
npm install -g npm-check-updates
```

## 二、 使用：

1. 在项目根目录运行以下命令，检查所有项目依赖项的最新版本：

```shell
ncu
```

执行结果如下：
![image](/notes/nodejs/npm-check-updates-ncu.png)

> 红色 = 主要升级
> 青色 = 小幅升级
> 绿色 = 补丁升级 2. 更新版本：

```shell
ncu -u
```

> 注意备份或者提交代码，确保包文件处于版本控制中并且所有更改均已提交，以防出现不兼容或其他问题。3. 运行 npm install 以安装新版本。

```shell
npm install       #更新已安装的软件包和 package-lock.json
```

## 三、其他选项：

其他高级功能及指令参见官方文档：
[npm 地址](https://www.npmjs.com/package/npm-check-updates "npm 地址")
[GitHub 地址](https://github.com/raineorshine/npm-check-updates "GitHub 地址")
