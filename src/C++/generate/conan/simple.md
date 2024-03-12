# 简单使用

## 配置CMakeLists.txt文件
```sh
cmake_minimum_required(VERSION 3.26.0)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
# 设置包的存放路径，否则cmake找不到
list(APPEND CMAKE_PREFIX_PATH "${CMAKE_CURRENT_SOURCE_DIR}/build/generators")
# 寻找目录和子目录下所有的cpp文件
file(GLOB_RECURSE ALL_SOURCE "*.cpp" "*.c")
file(GLOB_RECURSE ALL_HEAD "*.hpp" "*.h")

# 查找fmt库
find_package(fmt REQUIRED CONFIG)
find_package(rmlui REQUIRED CONFIG)
PROJECT(MemoryWord CXX)

add_executable(MemoryWord ${ALL_SOURCE} ${ALL_HEAD})
# 链接
target_link_libraries(MemoryWord fmt::fmt)
target_link_libraries(MemoryWord rmlui::rmlui)

```


## profile配置
> 这里无需手动配置，直接使用conan命令生成即可

```txt
[settings]
arch=x86_64
build_type=Release
os=Windows
# 微软编译器
compiler=msvc
# msvc编译器的版本
compiler.version=193
# cpp的版本
compiler.cppstd=17
# static dynamic应该时库的类型
compiler.runtime=dynamic
```

## conanfile.txt
```txt
[requires]
xxx...

[generators]
CMakeToolchain
CMakeDeps

[layout]
cmake_layout
```

## 创建与我的系统匹配的配置文件
```
conan profile detect --force
```

## 获取默认配置的路径
```
conan profile path default
```

## install

```sh
// conan install . --output-folder=build --build=missing
conan install .
```

## 构建
```sh
conan install .
conan install . -s build_type=Debug
```

## 构建项目

### debug
```sh
cmake --preset conan-debug
cmake --build --preset conan-debug
```

### release
```sh
# 构建release版本配置
cmake --preset conan-release
# 生成Release项目
cmake --build --preset conan-release
```

## 配置预设
> 需配置预设，否则vs编辑器无法打开源文件

vs code编辑器可以按`ctrl+shift+p`输入`Cmake: Select Configure Preset`
然后选择已有的预设
