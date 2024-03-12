# Cmake 包管理器

## 安装
到官网下载

## cmake 命令，常用参数

- `-S <path-to-source>`：指定源代码目录。
- `-B <path-to-build>`：指定构建目录。
- `--build <dir>`：指定构建目录并执行构建。
- `--config <name>`：指定构建类型（例如Debug或Release）。

例如，要在`/path/to/source`目录中构建项目并将生成的Makefile文件保存到`/path/to/build`目录中，可以使用以下命令：

```bash
cmake -S /path/to/source -B /path/to/build
```

要在`/path/to/build`目录中执行构建，请使用以下命令：

```bash
cmake --build /path/to/build
```

要在`/path/to/build`目录中执行Release构建，请使用以下命令：

```bash
cmake --build /path/to/build --config Release
```

## 基本配置
`CMakeLists.txt`
```cmake
# CMake 最低版本号要求, 此行必须在顶层
cmake_minimum_required(VERSION 3.27.5)

# 项目信息
project("项目信息")

# 指定生成目标
# 第一个参数是程序名，第二个参数是源文件
add_executable(name source.cpp)
```

## 构建项目
> 假设当前目录结构是这样的

- 根目录
   - src
      - CMakeLists.txt
      - main.cpp
   - build

> *当前的目录是根目录*
```sh
# 使用cmake 3.*的功能构建
cmake -S src -B build

# 项目会在build目录成功构建
```

## 生成项目
```sh
#其中src是构建的项目目录
cmake --build src
# --config 可以指定生成的类型
cmake --build . --config Release
```

## 打开项目
```sh
cmake --open src
```

## 配置或者生成预设
> 如果不生成预设，vs编辑器无法打开源文件

vs code编辑器可以按`ctrl+shift+p`输入`Cmake: Select Configure Preset`
然后选择已有的预设