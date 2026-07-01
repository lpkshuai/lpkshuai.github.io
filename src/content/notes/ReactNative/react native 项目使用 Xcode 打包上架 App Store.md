---
slug: react-native-xcode-appStore
title: react native项目使用Xcode打包上架App Store
category: ReactNative
type: setup
description: react native项目使用Xcode打包上架App Store的步骤记录。
status: published
tags: RN, xcode, app store
updatedAt: 2024-05-13
---

# 一、创建证书、标识符和描述文件等：

## **1. 前提条件**

**可正常运行和打包的代码、Apple开发者账号**

> [点击注册Apple开发者账号](https://developer.apple.com/account "点击注册Apple开发者账号")

**注册完进入页面可以看到证书、标识符和描述文件创建入口**

![image](/notes/react-native/rn-apple-account-register.png)

## **2. 创建App ID**

- **点击Identifiers旁边的加号**
  ![image](/notes/react-native/rn-apple-app-id-create-1.png)

- **选择 App IDs，点击 Continue。**
  ![image](/notes/react-native/rn-apple-app-id-create-2.png)

- **选择 App，点击 Continue。**
  ![image](/notes/react-native/rn-apple-app-id-create-3.png)

- **填写描述、包名（Bundle ID）、并且勾选需要的能力**
  ![image](/notes/react-native/rn-apple-app-id-create-4.png)

- **创建完毕回到第一个步骤中的列表就能看到新创建的App ID**

## **3. 生成CSR文件**

- **生成证书前需要先生成一个Certificate Signing Request (CSR)文件，在电脑中找到钥匙串访问并打开：**

![image](/notes/react-native/rn-csr-get-1.png)

- **点击屏幕左上角，选择钥匙串访问 -> 证书助理 -> 从证书颁发机构请求证书：**

![image](/notes/react-native/rn-csr-get-2.png)

- **填写完相关信息后存储到磁盘等下使用：**

![image](/notes/react-native/rn-csr-get-3.png)

## **4. 创建和配置证书**

- **点击证书，进入证书配置页。然后点击加号创建证书**
  ![image](/notes/react-native/rn-certificates-create-1.png)

- **选择分类**
  ![image](/notes/react-native/rn-certificates-create-2.png)

- **选择上面创建的CSR文件**
  ![image](/notes/react-native/rn-certificates-create-3.png)

- **创建完毕后下载文件（.cer格式）到本地，双击运行会导入到钥匙串中**
  ![image](/notes/react-native/rn-certificates-create-4.png)

- **如果需要在其他地方使用，可以导出为.p12格式文件。钥匙串中找到刚刚的证书鼠标右键点击，选择导出（导出文件为.p12格式）**
  ![image](/notes/react-native/rn-certificates-create-5.png)

## **5. 创建描述文件（Provisioning Profiles）**

- **点击描述文件，进入Profiles配置页。然后点击加号创建Profiles**
  ![image](/notes/react-native/rn-profiles-create-1.png)

- **选择App Store Connect**
  ![image](/notes/react-native/rn-profiles-create-2.png)

- **选择App ID**
  ![image](/notes/react-native/rn-profiles-create-3.png)

- **选择之前创建的证书**
  ![image](/notes/react-native/rn-profiles-create-4.png)

- **给描述文件命名，到此描述文件创建完毕**
  ![image](/notes/react-native/rn-profiles-create-5.png)

- **回到描述文件列表，下载刚创建好的描述文件**
  ![image](/notes/react-native/rn-profiles-create-6.png)
  > 下载的文件为（.mobileprovision）格式：
  > ![image](/notes/react-native/rn-profiles-create-7.png)

# 二、Xcode中配置证书和描述文件：

## 1. 配置Profile

- **Xcode打开项目，选择Signing & Capabilities选项，取消勾选Automatically manage signing，点击Provisioning Profiles，导入刚下载的profile文件（xxx.mobileprovision）：**
  ![image](/notes/react-native/rn-xcode-profile-config-1.png)

- **切换到Build Settings，可以看到刚配置的描述文件**
  ![image](/notes/react-native/rn-xcode-profile-config-2.png)

# 三、打包app：

- **选择Product -> Archive，等待打包**
  ![image](/notes/react-native/rn-xcode-product-archive-1.png)

- **点击分发app**
  ![image](/notes/react-native/rn-xcode-product-archive-2.png)

- **选择分发方式**
  ![image](/notes/react-native/rn-xcode-product-archive-3.png)

- **上传成功**
  ![image](/notes/react-native/rn-xcode-product-archive-4.png)

- **在 App Store Connect 中查看**
  [App Store Connect](https://appstoreconnect.apple.com/ "App Store Connect")

> 此处可以看见上传的app，创建测试群组选择用户可以进行内部测试。点击分发下面填写相关信息然后选择构建版本后可以提交审核发布App Store。
> ![image](/notes/react-native/rn-xcode-product-archive-5.png)
