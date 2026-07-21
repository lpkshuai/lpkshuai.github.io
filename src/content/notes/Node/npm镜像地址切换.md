---
slug: node-npm-set-registry
title: npm镜像地址切换。
category: Node.js
type: setup
description: npm镜像地址切换步骤及其它指令记录。
status: published
tags: node, npm, nrm, registry
updatedAt: 2022-11-07
---

### 1. 查看当前镜像地址

```sh
npm config get registry
```

### 2. 命令行修改

```sh
npm config set registry http://registry.npm.taobao.org
```

### 3. nrm修改

- 安装

```sh
npm install -g nrm
```

- 查看所有镜像

```sh
nrm ls
```

![image](/notes/nodejs/npm-nrm-ls.png)

- 修改镜像

```sh
nrm use xxx
```

- 镜像测速

```sh
nrm test xxx
```

![image](/notes/nodejs/npm-nrm-test.png)
