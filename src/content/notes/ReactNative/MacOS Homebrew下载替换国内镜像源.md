---
slug: react-native-macos-homebrew
title: MacOS Homebrew下载替换国内镜像源
category: ReactNative
type: setup
description: MacOS Homebrew下载时替换国内镜像源的步骤记录。
status: published
tags: RN, MacOS, Homebrew
updatedAt: 2024-05-8
---

共需要替换几个部分的镜像源：homebrew、homebrew-core、homebrew-cask、homebrew-bottles。

### 1. 查看地址：

```bash
echo $(brew --repo)
echo $(brew --repo homebrew/core)
echo $(brew --repo homebrew/cask)
```

### 2. 修改homebrew、homebrew-core、homebrew-cask地址：

```shell
$ git -C "$(brew --repo)" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
$ git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-cask.git
```

### 3. 修改homebrew-bottles地址：

先查看shell版本

```shell
echo $SHELL
```

如果输出是`/bin/bash`，执行：

```shell
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
```

```shell
$ source ~/.bash_profile
```

如果输出是`/bin/zsh`，执行：

```shell
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
```

```shell
$ source ~/.zshrc
```

> 如果需要重置回地址为官方：

```shell
$ git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core
$ git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask
```

### 4. 文档

[阿里云镜像](https://developer.aliyun.com/mirror/homebrew "阿里云镜像")
[Homebrew官网](https://brew.sh/?spm=a2c6h.13651104.d-4025.8.1fc17608aTal5l "Homebrew官网")
