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

## add_subdirectory 添加子文件
> 该语句会在执行完当前文件夹CMakeLists.txt之后执行src子目录下的CMakeLists.txt
```text
add_subdirectory(src)
```

## 递归搜索该文件夹，将文件夹下（包含子目录）符合类型的文件添加到文件列表
> 例如将当前文件夹下（包括子目录下）所有.cpp文件的文件名加入到MAIN_SRC中，所有.h加入到MAIN_HDR中
```text
file(GLOB_RECURSE MAIN_SRC ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)
file(GLOB_RECURSE MAIN_HDR ${CMAKE_CURRENT_SOURCE_DIR}/*.h)
```

## aux_source_directory();
> aux_source_directory 把指定目录的源文件加载到变量里面

```text
# 第一个参数为源文件的目录
# 第二个参数为自定义变量（无需声明）
aux_source_directory(. SOURCES);
# model目录
aux_source_directory("./Model/." Model);

```

## add_library 生成库文件
```text
# 动态库文件
add_library(lib_hello SHARED main.cpp);
# 静态库文件
add_library(lib_hello STATIC Main.cpp);
```

## set_target_properties();
> set_property可以设置的属性取决于您指定的范围，例如目标、源文件、目录、测试或安装文件。每种范围都有一些特定的属性，您可以在[cmake-properties](https://cmake.org/cmake/help/v3.3/manual/cmake-properties.7.html)文档中查看 

您可以使用set_property命令来设置不同范围的属性，例如：

- set_property(TARGET ...)：设置一个或多个目标的属性，例如：

```cmake
set_property(TARGET foo bar PROPERTY COMPILE_DEFINITIONS FOO=1 BAR=2)
```

- set_property(SOURCE ...)：设置一个或多个源文件的属性，例如：

```cmake
set_property(SOURCE src1.cpp src2.cpp PROPERTY SKIP_AUTOMOC ON)
```

- set_property(DIRECTORY ...)：设置一个或多个目录的属性，例如：

```cmake
set_property(DIRECTORY app/src PROPERTY VS_STARTUP_PROJECT myapp)
```

- set_property(TEST ...)：设置一个或多个测试的属性，例如：

```cmake
set_property(TEST mytest PROPERTY TIMEOUT 10)
```

- set_property(INSTALL ...)：设置一个或多个安装文件的属性，例如：

```cmake
set_property(INSTALL "bin/myapp" PROPERTY CPACK_START_MENU_SHORTCUTS "My App")
```