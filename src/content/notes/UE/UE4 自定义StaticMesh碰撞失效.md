---
slug: ue4-static-mesh-problem
title: UE4 自定义StaticMesh碰撞失效
category: UE
type: debugging
description: UE4 自定义StaticMesh碰撞失效。
status: published
tags: UE4, StaticMesh
updatedAt: 2023-06-10
---

将画刷编辑的Actor转换成静态网格体后，原有的碰撞消失了，解决办法如下：

1.首先在内容浏览器中找到需要更改碰撞配置的网格体

![image](/notes/ue/ue4-static-mesh-problem-1.png)

2.双击进入静态网格编辑器页面，右侧找到细节面板

![image](/notes/ue/ue4-static-mesh-problem-2.png)

3.找到碰撞 --> 碰撞复杂度 --> 选择将复杂碰撞用作简单碰撞

![image](/notes/ue/ue4-static-mesh-problem-3.png)

4.保存即可
