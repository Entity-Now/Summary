<!--
 * @作者: 14770137
 * @Date: 2022-09-21 16:44:16
-->
 ## git 入门

#### 初始化
```cmd
// 初始化config
git config --global user.name ""
git config --global user.email ""
git config --global http.sslVerify "false" // 关闭ssl认证
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
// 删除关联的远程项目
git remote rm origin

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

// 查看本地与远程的分支
git branch -a
git branch -v

// 上传到服务器
git push -u origin master // master 可以改为其他分支

// 从远程地址拉取并更新分支
git poll origin master // master 可以改为其他分支



```