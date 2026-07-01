---
slug: vscode-terminal-error
title: vscode终端报错：无法加载文件 D:\nodejs\npm.ps1，因为在此系统上禁止运行脚本
category: Tooling
type: debugging
description: vscode 终端报错：无法加载文件 D:\nodejs\npm.ps1，因为在此系统上禁止运行脚本。
status: published
tags: VScode, Error
updatedAt: 2023-09-12
---

## 问题：vscode终端执行npm指令时报错如下

![image](/notes/ide/vscode-terminal-err-running-script.png)

## 解决：

**1. 在终端通过输入指令 `get-ExecutionPolicy` 得到以下结果：**

![image](/notes/ide/vscode-terminal-err-get-ExecutionPolicy.png)

> 表示当前执行策略为受限的

**2. 执行指令 `Set-ExecutionPolicy -Scope CurrentUser`，并输入 `RemoteSigned`。**

![image](/notes/ide/vscode-terminal-err-set-ExecutionPolicy.png)

> Set-ExecutionPolicy 语法如下：

```shell
Set-ExecutionPolicy
   [-ExecutionPolicy] <ExecutionPolicy>
   [[-Scope] <ExecutionPolicyScope>]
   [-Force]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```

**3. 然后终端就可以正常使用了。**

## 参考：

[Set-ExecutionPolicy Microsoft 文档](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3 "Set-ExecutionPolicy Microsoft 文档")
