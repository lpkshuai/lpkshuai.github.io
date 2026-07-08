---
slug: git-ssh-key-gitee
title: 本地生成&添加SSH公钥并关联远端Gitee仓库
category: Git
type: setup
description: 本地生成并添加SSH公钥并关联远端Gitee仓库。
status: published
tags: Git, SSH, Gitee
updatedAt: 2022-10-18
---

### 1. 生成SSH公钥

执行如下命令来生成 sshkey:

```bash
ssh-keygen -t ed25519 -C "xxxxx@xxxxx.com"
# Generating public/private ed25519 key pair...
```

> 按照提示完成三次回车，即可生成 ssh key。

![image](/notes/git/git-add-ssh-key-gitee-1.png)

> 通过查看 ~/.ssh/id_ed25519.pub 文件内容，获取到你的 public key

![image](/notes/git/git-add-ssh-key-gitee-2.png)

### 2.添加到Gitee SSH公钥中

> 复制生成后的 ssh key，通过仓库主页 「设置」->「安全设置」->「SSH公钥」 ，添加生成的 public key 添加到仓库中。

![image](/notes/git/git-add-ssh-key-gitee-3.png)

> 添加后，在终端（Terminal）中输入 `ssh -T git@gitee.com`
> 返回 Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access. 内容，则证明添加成功。

![image](/notes/git/git-add-ssh-key-gitee-4.png)

### 3.本地项目关联远端仓库

> 关联远程仓库：

```bash
git init
git add .
git commit -m "这里是备注信息" -a
git remote add origin https://github.com/xxxx
git push -u origin master
```

> 冲突回退

```
git reset --hard head
```

> 提交冲突：

```
git pull origin master --allow-unrelated-histories
:wq
```
