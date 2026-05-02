# Git 团队协作与进阶工作流

在团队开发中，仅仅会 `add` 和 `commit` 是不够的。如何高效管理分支、处理突发 Bug 以及解决冲突，是进阶开发者的必经之路。

## 1. 核心场景：紧急任务切换 (Git Stash)

**场景描述**：你正在 `feature-login` 分支开发一个大功能，代码写了一半（还不能提交），这时线上突然报了一个严重 Bug，需要你立刻切回 `master` 分支去修复。

**解决方案**：
1. **保存当前进度**：
   ```bash
   git stash  # 暂时把改动存入堆栈，工作区会变干净
   ```
2. **切回主分支修复 Bug**：
   ```bash
   git checkout master
   git pull origin master
   git checkout -b hotfix-bug-123
   # ... 进行修复 ...
   git add .
   git commit -m "fix: 修复了 XXX 崩溃问题"
   git checkout master
   git merge hotfix-bug-123
   git push origin master
   ```
3. **回到功能分支并还原进度**：
   ```bash
   git checkout feature-login
   git stash pop  # 将之前存入堆栈的改动重新应用到当前分支
   ```

---

## 2. 团队协作主流工作流：Git Flow

在团队中，通常遵循以下分支管理规范：

- **master (main)**：主分支，永远保持稳定，随时可发布到生产环境。
- **develop**：开发主分支，所有新功能的起点。
- **feature/***：功能分支，从 `develop` 拉取，完成后合并回 `develop`。
- **hotfix/***：紧急修复分支，从 `master` 拉取，修复后合并回 `master` 和 `develop`。

### 协作流程案例：
1. **领任务**：从 `develop` 分支拉出一个新分支 `feature-ui`。
2. **开发与提交**：遵循“小步快跑”原则，多次小提交。
3. **代码审查 (Code Review)**：推送到远程后，在 GitHub/GitLab 上发起 **Pull Request (PR)** 或 **Merge Request (MR)**。
4. **合并**：其他成员 Review 通过后，将代码合并到 `develop`。

---

## 3. 保持分支最新：Rebase vs Merge

**场景描述**：你在开发 `feature-x` 时，同事已经在 `develop` 提交了很多代码。为了避免最后合并时冲突太多，你需要定期同步 `develop` 的改动。

### 方式 A：Merge (生成一个新的合并节点)
```bash
git checkout feature-x
git merge develop
# 优点：记录完整，适合最后功能完成时的合并。
```

### 方式 B：Rebase (变基，推荐用于同步最新代码)
```bash
git checkout feature-x
git rebase develop
# 优点：提交历史会变成一条直线，非常整洁。
# 注意：严禁在公共主分支（如 master）上使用 rebase。
```

---

## 4. 处理冲突 (Conflict Resolution)

**场景描述**：当你执行 `merge` 或 `rebase` 时，如果两个人修改了同一行代码，Git 会停下来让你手动解决。

**解决步骤**：
1. **查看冲突文件**：Git 会在冲突的地方标记 `<<<<<<< HEAD` 和 `>>>>>>>`。
2. **手动编辑**：选择保留哪份代码，或者结合两份代码。
3. **继续操作**：
   ```bash
   git add <文件名>
   # 如果是 merge：
   git commit -m "fix: resolve conflict"
   # 如果是 rebase：
   git rebase --continue
   ```

---

## 5. 实用技巧：Cherry-pick (拣选提交)

**场景描述**：你在 `develop` 分支修了一个 Bug，但是这个 Bug 同时也存在于 `master`，你不想合并整个 `develop` 分支到 `master`，只想把这一个特定的提交挪过去。

**操作**：
1. 找到该提交的 ID (`git log`)。
2. 切到 `master`：`git checkout master`。
3. 执行：`git cherry-pick <commit-id>`。

---

## 总结：团队开发好习惯
- **频繁 Pull**：开始工作前先 `git pull`，减少冲突。
- **规范 Commit**：使用 `feat:`, `fix:`, `docs:` 等前缀，让人一眼看出提交性质。
- **不要直接推 Master**：所有代码必须经过分支合并和 Review。
- **善用 `.gitignore`**：不要把 `node_modules` 或本地配置文件推上去。
