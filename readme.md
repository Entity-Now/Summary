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

// 初始化
git init 

// 获取远程项目
git remote add origin url

// 删除项目
git remote rm origin 

// 将文件添加到缓存区
git add . // 所有文件
git add a.txt // 指定的文件

// 将暂存区的文件提交到本地的版本库
git commit -m origin master // master 可以改为其他分支

// 上传到服务器
git push -u origin master // master 可以改为其他分支

// 更新本地分支
git poll origin master // master 可以改为其他分支



```