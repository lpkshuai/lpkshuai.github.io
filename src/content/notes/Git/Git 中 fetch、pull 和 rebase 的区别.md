---
slug: git-fetch-pull-rebase
title: Git 中 fetch、pull 和 rebase 的区别
category: Git
type: concept
description: Git 中 fetch、pull 和 rebase 的区别
status: published
tags: Git, fetch, pull, rebase
updatedAt: 2020-07-03
---

### 1. git fetch

- 仅下载远程仓库最新数据到本地（.git目录）
- 不会自动合并到工作目录
- 安全操作，不会改变本地代码
- 使用场景：查看他人提交的更新

### 2. git pull = git fetch + git merge

- 自动执行合并操作（默认使用 merge 方式）
- 会产生合并提交记录（merge commit）
- 使用场景：快速同步远程最新代码

### 3. git rebase

- 将当前分支的提交"嫁接"到目标分支最新提交之后
- 不会产生合并提交，保持线性历史
- 使用场景：整理本地提交历史

### 4. git pull --rebase = git fetch + git rebase

- 用 rebase 代替 merge 进行合并
- 保持提交历史的线性结构
- 使用场景：同步代码时保持干净的历史记录

| 命令          | 操作类型 | 历史记录 | 安全性 | 适用场景               |
| ------------- | -------- | -------- | ------ | ---------------------- |
| fetch         | 下载     | 无变化   | 高     | 查看远程更新           |
| pull (merge)  | 合并     | 有分叉   | 中     | 快速合并               |
| rebase        | 变基     | 线性     | 低     | 整理本地提交           |
| pull --rebase | 变基合并 | 线性     | 中     | 同步代码并保持历史整洁 |

> 注意：公共分支（如 master/main）慎用 rebase
> rebase 会修改提交历史，可能影响他人
