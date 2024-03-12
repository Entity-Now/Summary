# action 自动化操作
```yml
# action 的name
name: docs

on:
  # 每当 push 到 blog 分支时触发部署
  push:
    branches: [blog]

  # 手动触发部署
  workflow_dispatch:

# 每一个jobs 都是一个任务，并且是同步执行的
jobs:
  # jobs 的 name
  docs:
    # 运行环境 可以是windows linux mac
    runs-on: ubuntu-latest
    # 每一个steps都是一个步骤
    steps: 
      # 引用的action , @v2是action的版本
      - uses: actions/checkout@v2
        with: # 可以使用with对引用的action传入参数
          # fect-depth 取出所有标签和历史提交记录
          fect-depth: 0

      - name: Setup Node.js
        # nodejs
        uses: actions/setup-node@v3
        with:
          node-version: '14' # 设置node的版本，可以为一个数组
      # 构建项目
      - name: npm build
        run: npm install && npm run docs:build
      
      # 提交到仓库
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deployment to github pages
        uses: crazy-max/ghaction-github-pages@v3
        with:
          # 部署到  gh-pages
          target_branch: gh-pages
          # 部署目录为 vuepress.dist
          build_dir: docs/.vuepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # Access_Token 需要到 security 里面添加
```