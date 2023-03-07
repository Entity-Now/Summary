# conan包管理工具

## 配置CMakeLists.txt文件
```cmake
project(FoundationTimer)
cmake_minimum_required(VERSION 2.8.12)

# 引入conan生成的文件
include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
# 启动conan
conan_basic_setup()

add_executable(timer timer.cpp)
```

## 配置conanfile.txt
```
[recipe_hash] # 这是远程库的hash值
    faa6eb03bd1009bf2070b0c77e4f56a6

[generators] 
cmake

[env]
```

## 创建与我的系统匹配的配置文件
```
conan profile detect --force
```

## 获取默认配置的路径
```
conan profile path default
```