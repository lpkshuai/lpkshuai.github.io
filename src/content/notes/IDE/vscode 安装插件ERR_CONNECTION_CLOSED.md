---
slug: vscode-err-connection-closed
title: vscode 安装插件报错：ERR_CONNECTION_CLOSED 
category: Tooling
type: debugging
description: vscode 安装插件时报错 [error] Download: net::ERR_CONNECTION_CLOSED 。
status: published
tags: VScode, Error
updatedAt: 2023-10-30
---

## 背景：

vscode安装扩展插件时报错，显示下载失败：
`[error] Download: net::ERR_CONNECTION_CLOSED`
`[error] net::ERR_CONNECTION_CLOSED: Download: net::ERR_CONNECTION_CLOSED`

![image](/notes/ide/err-connection-closed.png)

## 解决方法：

查找相关文档发现这么一段：
**If you are behind a firewall that needs to allow specific domains used by VS Code, here's the list of hostnames you should allow communication to go through:**
猜测可能是防火墙的问题，关闭后问题解决。

## 链接：

[Network Connections in Visual Studio Code](https://code.visualstudio.com/docs/setup/network "Network Connections in Visual Studio Code")
