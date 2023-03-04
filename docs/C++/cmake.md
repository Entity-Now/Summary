<!--
 * @作者: 14770137
 * @Date: 2022-09-22 15:15:58
-->
# cmake 包管理工具

## CMakeLists.txt配置
```text
# CMake 最低版本号要求
cmake_minimum_required(VERSION 2.8);

# 项目信息
project("项目信息")

# 指定生成目标
# 第一个参数是程序名，第二个参数是源文件
add_executable(name source.cpp);
```