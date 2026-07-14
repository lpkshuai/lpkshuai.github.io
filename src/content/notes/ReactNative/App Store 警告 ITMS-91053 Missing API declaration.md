---
slug: react-native-app-store-warning
title: App Store 警告 ITMS-91053: Missing API declaration
category: ReactNative
type: setup
description: App Store 警告 ITMS-91053: Missing API declaration。
status: published
tags: RN, App Store
updatedAt: 2024-04-11
---

### 问题：

**app虽然成功上架App Store，但是邮件提示了如下警告：**

![image](/notes/react-native/rn-app-store-waring-email.png)

### 解决：

**解决方法是添加隐私清单文件。**

> 参考官方说明：[官方文档](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api "官方文档")

**其它相关链接：**
[StackOverflow 中关于这个问题的讨论](https://stackoverflow.com/questions/78163859/itms-91053-missing-api-declaration-privacy "StackOverflow 中关于这个问题的讨论")
[这位作者分享了如何解决该问题](https://vikramios.medium.com/itms-91053-missing-api-declaration-3c2bef935bd3 "这位作者分享了如何解决该问题")
[这篇文章提供了解决该问题详细的指南](https://apps4world.com/privacy-details-ITMS-91053-tutorial.html "这篇文章提供了解决该问题详细的指南")
