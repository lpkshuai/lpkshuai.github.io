---
slug: git-checkout-orphan
title: Git创建空分支
category: Git
type: snippet
description: Git创建空分支的方法步骤。
status: published
tags: Git
updatedAt: 2022-07-31
---

### 利用 `git checkout` 的 `--orphan` 参数:

---

1. 创建新分支

```sh
git checkout --orphan empty-branch
```

> 执行该命令会生成一个叫empty-branch的分支，该分支包含父分支的所有文件。新的分支不会指向任何以前的提交，没有历史，如果提交当前内容，这次提交就是该分支的首次提交。

2. 删除所有文件：

```sh
git rm -rf .
```

3. 提交分支：

> 若不提交文件则看不到这个分支

```sh
 echo '# new branch' >> README.md
 git add README.md
 git commit -m 'new empty branch'
```

4. 推送到远程仓库

```sh
git push origin empty-branch
```
