---
slug: react-native-gradle-timeout
title: react native android 构建时 Gradle Wrapper 下载 gradle包 超时
category: ReactNative
type: debugging
description: react native android 构建时 Gradle Wrapper 下载 gradle包 超时
status: published
tags: React Native, Gradle, android
updatedAt: 2025-07-21
---

#### 1. 在以下地址手动下载需要的版本压缩包

> 打开浏览器，访问以下链接下载（可用代理或加速器）：[gradle.org](https://services.gradle.org/distributions/ "gradle.org")

#### 2. 下载完成后，将 gradle-xxx-bin.zip 文件放到本地目录：

```sh
C:\Users\xxx\.gradle\wrapper\dists\gradle-xxx-bin\5xuhj0ry160q40clulazy9h7d\
```

> 注意：5xuhj0ry160q40clulazy9h7d 这个文件夹名会不一样，请以你本地路径为准。如果没有对应版本的文件夹可以先修改项目目录下的 `/android/gradle/wrapper/gradle-wrapper.properties` 文件的 `distributionUrl` 为需要的版本包地址，
> 如：`distributionUrl=https\://services.gradle.org/distributions/gradle-8.11.1-all.zip`，然后执行 `./gradlew clean` ，该操作会帮你创建文件夹。

#### 3. 不要解压，Gradle Wrapper 会自动解压。

#### 4. 进入项目的android目录，执行 `./gradlew clean` 即可执行build操作。

> 也可以使用 Gradle 国内镜像
> [阿里云镜像](https://developer.aliyun.com/mirror/gradle "阿里云镜像")
