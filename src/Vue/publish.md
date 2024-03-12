# 打包并部署到npm

## package.json
```json
{
  "name": "@entity-now/beginedit-mk",
  "description": "BeginEdit一个基于Markdown-it的编辑器",
  "version": "1.0.4",
  "type": "module",
  "author": "entity-now",
  "main": "/src/main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "publishConfig": {
    // 这里要设置npm的路径，如果设置https://npm.pkg.github.com会报错误
    "registry":"https://registry.npmjs.org/"
  },
  "repository": {
    "type":"git",
    "url":"https://github.com/Entity-Now/BeginEdit-mk.git"
  },
  "homepage": "https://github.com/Entity-Now/BeginEdit-mk"
}
```

## action
> .github/workflows/publish.yml
> 涉及到的NPM_TOKEN & GIT_TOKEN前者到npm官网生成，后者到github生成

```yml
name: Publish npm package

on:
  release:
    types: [published]
  push:
    branches: [master]
  workflow_dispatch:

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      - run: npm publish --access public # publish to npm registry without specifying registry url
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} # use your npm token stored as a secret

  publish-github-packages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com' # specify the registry url for github packages
          scope: '@entity-now' # optional, default is repository owner
      - run: npm install
      - run: npm publish --access public # publish to github packages using the registry url in package.json 
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GIT_TOKEN }} # use the github token provided by default
```