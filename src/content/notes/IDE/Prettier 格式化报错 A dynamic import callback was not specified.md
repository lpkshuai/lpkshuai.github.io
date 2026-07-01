---
slug: vscode-prettier-typeError
title: Prettier格式化报错 A dynamic import callback was not specified
category: Tooling
type: debugging
description: Prettier 格式化报错 TypeError: A dynamic import callback was not specified。
status: published
tags: VScode, Prettier, TypeError
updatedAt: 2024-01-26
---

记录今天遇到的奇怪的问题，在vscode中使用Prettier格式化代码时，控制台报错：

```bash
["ERROR" - 9:30:18 AM] Error resolving prettier configuration for c:\My\Test\learning\src\utils\index.js
["ERROR" - 9:30:18 AM] A dynamic import callback was not specified.
TypeError: A dynamic import callback was not specified.
```

尝试修改Prettier配置文件`.prettierrc`或者` prettier.config.js`，没有效果。
最后重启vscode发现问题解决了，不再报错了。。
