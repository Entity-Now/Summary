<!--
 * @作者: 14770137
 * @Date: 2022-09-21 16:44:16
-->
# git 入门

## 初始化
```cmd
// 初始化config
git config --global user.name ""
git config --global user.email ""
git config --global http.sslVerify "false" // 关闭ssl认证
// cat config
git config --list
// proxy 代理
git config --global https.proxy
// 取消代理
git config --global --unset https.proxy

// 连接github
// 生成 ssh——key
ssh-keygen -t rsa -C "2966388213@qq.com"
// 设置ssh
登录github - 设置 - ssh - 添加

// 初始化
git init 

// 获取远程项目
git remote add origin url

// 删除项目
git remote rm origin 

// 将文件添加到缓存区
git add . // 所有文件
git add a.txt // 指定的文件

// 修改注释
git commit -m "text"

// 创建分支
git branch master
// 查看分支
git branch 
// 切换分支
git checkout name
// 创建并切换分支
git checkout -b name

// 合并分支
git merge name

// 查看本地与远程的分支
git branch -a
git branch -v

// 上传到服务器
git push -u origin master // master 可以改为其他分支
git push origin master -f // 强制合并线上分支

// 从远程地址拉取并更新分支
git poll origin master // master 可以改为其他分支

// 日志
git log
git log -p -2  // 查看最后两次的更新日志
git log --stat // 查询更新统计
//git log --pretty 使用不同的格式输出日志
git log --pretty=oneline // 每个提交都放在一行显示


```

## 克隆一个项目
```cmd
git clone url
// 克隆指定版本的库
git clone -b url
// 深度克隆，两同包含的项目一起下载
git clone --recursive url
```

## 更新分支的坑
```cmd
// 修改完文件需要更新到服务器时，首先把本地的变化连接到服务器
git pull origin mian
// 然后再提交就ojbk了
```

## 修改提交信息
```cmd
// 比如说你commit -m 之后发现描述或者文件有变动，可以使用amend修改
// 比如发现一个地方改错了，下一次提交的时候不想保存上一次的记录
git commit --amend
```

## 撤销操作
```cmd
git reset --hard
git reset id // id 是提交的唯一id
```

## 远程仓库管理
```cmd
// 修改仓库名称
git remote rename origin NewName
// 查询远程仓库地址
git remote -v
git remote -vv // 会显示更加详细的地址
// 修改远程仓库的地址
git remote set-url origin url
// 删除关联的远程项目
git remote rm origin
```

## 分支操作
```cmd
// 删除一个远程分支
git push origin --delete master
// 删除一个本地分支
git branch -d main
```
## 变基，当前分支的所有修改移到另一个分支上面
```cmd
git checkout maser
// 变基到master分支
git rebase main
// 切回主分支
git checkout main
// 然后进行合并
git merge maser

```

## 标签
```cmd
git tag
git tag -l 
git tag -list
// 创建标签 ， （lightweight，annotated）
// 创建带注释的标签（annotated）
git tag -a test -m "test标签"
// 创建轻量的标签
git tag pushTag

```