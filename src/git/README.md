# Git 基础指南

> [!TIP]
> 仅仅掌握基础命令是不够的。点击查看 [Git 团队协作与进阶工作流](./collaboration.md) 了解如何在团队中高效使用 Git。

本指南涵盖了 Git 的日常使用命令，从初始化配置到高级分支操作，旨在帮助你建立清晰的 Git 使用体系。

---

## 1. 环境配置
在开始使用 Git 之前，需要先配置用户信息及网络环境。

### 1.1 基础用户信息
```bash
# 设置全局用户名和邮箱
git config --global user.name "你的名字"
git config --global user.email "your_email@example.com"

# 查看所有配置
git config --list
```

### 1.2 网络与安全
```bash
# 关闭 SSL 认证（在公司内网或自签证书环境下常用）
git config --global http.sslVerify "false"

# 设置代理（解决 GitHub 访问慢的问题）
git config --global https.proxy http://127.0.0.1:7890
git config --global http.proxy http://127.0.0.1:7890

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 1.3 SSH 连接 GitHub
1. 生成密钥：`ssh-keygen -t rsa -C "your_email@example.com"`
2. 获取公钥：查看 `~/.ssh/id_rsa.pub` 内容。
3. 添加到 GitHub：`Settings -> SSH and GPG keys -> New SSH key`。

---

## 2. 基础操作流程
最常用的“三板斧”：添加、提交、推送。

### 2.1 初始化与获取
- `git init`: 在当前目录初始化本地仓库。
- `git clone <url>`: 克隆远程项目。
  - `git clone -b <branch> <url>`: 克隆指定分支。
  - `git clone --recursive <url>`: 递归克隆包含子模块的项目。

### 2.2 暂存与提交
- `git add .`: 将所有改动添加到暂存区。
- `git commit -m "feat: 描述信息"`: 将暂存区改动提交到本地仓库。
- `git commit --amend`: 修改上一次提交（可用于补漏或改注释）。

### 2.3 查看状态与日志
- `git status`: 查看当前工作区状态。
- `git log`: 查看提交历史。
  - `git log --oneline`: 一行显示一条记录。
  - `git log -p -2`: 查看最后两次提交的具体差异。

---

## 3. 远程仓库管理
与 GitHub/GitLab 建立连接并进行同步。

- `git remote add origin <url>`: 关联远程仓库。
- `git remote -v`: 查看远程仓库地址。
- `git remote set-url origin <url>`: 修改远程仓库地址。
- `git pull origin <branch>`: 从远程拉取并合并代码。
- `git push -u origin <branch>`: 推送代码并建立追踪关系。

---

## 4. 分支管理
分支是 Git 的灵魂，允许你在不干扰主线的情况下并行开发。

### 4.1 基础操作
- `git branch`: 查看本地分支。
- `git branch -a`: 查看所有分支（含远程）。
- `git checkout -b <name>`: 创建并切换到新分支。
- `git checkout <name>`: 切换到已有分支。
- `git merge <name>`: 合并指定分支到当前分支。

### 4.2 变基 (Rebase)
`rebase` 可以让提交历史变得更加整洁。
```bash
git checkout feature
git rebase master  # 将 feature 分支的改动平移到 master 的最新提交之后
```

### 4.3 删除分支
- `git branch -d <name>`: 删除本地分支。
- `git push origin --delete <name>`: 删除远程分支。

---

## 5. 撤销与回退
> [!CAUTION]
> `reset --hard` 会丢失所有未提交的修改，请谨慎使用。

- `git reset --hard HEAD`: 撤销工作区所有未提交的修改。
- `git reset --hard <commit-id>`: 回退到指定的提交版本。
- `git checkout -- <file>`: 撤销对某个文件的修改（回退到最近一次 add 或 commit 状态）。

---

## 6. 标签 (Tag)
用于标记发布版本。

- `git tag`: 列出所有标签。
- `git tag -a v1.0 -m "发布 1.0 版本"`: 创建带注释的标签。
- `git push origin v1.0`: 将标签推送到远程。
- `git tag -d v1.0`: 删除本地标签。
- `git push origin --delete v1.0`: 删除远程标签。

---
©2026 Entity-now | 持续更新中
