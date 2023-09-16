<!--
 * @作者: 14770137
 * @Date: 2022-09-22 15:15:58
-->
# cmake 包管理工具

## CMake的常用的参数及其作用：

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

## CMakeLists.txt配置
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
```sh
# 创建一个build目录
mkdir build
cd build

# 构建项目，由于当前目录是build，所以使用..指向上一级目录
cmake ..

# 2
cmake -
```
### 假设现在的目录是这样的
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

## add_subdirectory 添加子文件
> 该语句会在执行完当前文件夹CMakeLists.txt之后执行src子目录下的CMakeLists.txt
```cmake
add_subdirectory(src)
```

## link_directories()
> 设置库目录
```cmake
# PROJECT_SOURCE_DIR 是 cmake的环境变量
link_directories( ${PROJECT_SOURCE_DIR}/lib/linux)
```
## link_libraries
> 链接静态库
```cmake
#设置链接目录
link_directories( ${PROJECT_SOURCE_DIR}/lib/linux)
link_libraries(
        lib1.a
        lib2.a
)
```

## include_directories()
> 设置项目的包含目录
> include_directories 是用来指定头文件的搜索路径，让编译器能够找到需要的头文件。
```cmake
# 假设当前源码路径为 /home/user/project
# 假设有一个头文件 hello.h 在 /home/user/project/include 目录下
# 假设有一个源文件 main.cpp 在 /home/user/project/src 目录下

# 添加 include 目录到头文件搜索路径
include_directories(include) # include是文件目录

# 添加 src 目录到源文件搜索路径
add_executable(hello src/main.cpp)

# 这样编译器就能找到 hello.h 文件了
```

## 递归搜索该文件夹，将文件夹下（包含子目录）符合类型的文件添加到文件列表
> 例如将当前文件夹下（包括子目录下）所有.cpp文件的文件名加入到MAIN_SRC中，所有.h加入到MAIN_HDR中
```cmake
file(GLOB_RECURSE MAIN_SRC ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)
file(GLOB_RECURSE MAIN_HDR ${CMAKE_CURRENT_SOURCE_DIR}/*.h)
```

## aux_source_directory();
> aux_source_directory 把指定目录的源文件加载到变量里面

```cmake
# 第一个参数为源文件的目录
# 第二个参数为自定义变量（无需声明）
aux_source_directory(. SOURCES);
# model目录
aux_source_directory("./Model/." Model);

```

## add_executable 生成应用程序
```cmake
add_executable(应用程序 源文件);
```

## add_library 生成库文件
```cmake
# 动态库文件
add_library(lib_hello SHARED main.cpp);
# 静态库文件
add_library(lib_hello STATIC Main.cpp);
```

## set_definitions()
> add_definitions是一个CMake命令，它可以给当前目录和子目录中的目标(target)添加编译器定义(define)。它的语法是：

`add_definitions (-DFOO -DBAR ...)`

其中-D表示定义一个宏，FOO和BAR是宏的名字，你也可以给它们赋值，比如-DFOO=1 -DBAR=2。这些定义会被添加到编译器命令行中，影响源文件的编译。
```cmake
# 定义一个TEST的宏
add_definitions("-DTEST");
# 给宏赋值
add_definitions("-DTEST=1");
```


## set_target_properties();
> set_property可以设置的属性取决于您指定的范围，例如目标、源文件、目录、测试或安装文件。每种范围都有一些特定的属性，您可以在[cmake-properties](https://cmake.org/cmake/help/v3.3/manual/cmake-properties.7.html)文档中查看 

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