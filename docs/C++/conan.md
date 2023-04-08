# conan包管理工具

## 配置CMakeLists.txt文件
```cmake
cmake_minimum_required(VERSION 3.26.0)

PROJECT(ConanTest)
# 寻找ZLIB库
find_package(ZLIB REQUIRED)

add_executable(${PROJECT_NAME} src/main.cpp)

# 链接ZLIB库，这里的变量（ZLIB_LIBRARIES）在FindZBIB.cmake里面
# 变量PROJECT_NAME是项目名称
target_link_libraries(${PROJECT_NAME} ${ZLIB_LIBRARIES})
```


## profile配置
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
xxx

[generators]
CMakeDeps
CMakeToolchain
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
conan install . --output-folder=build --build=missing
```

## 构建
```sh
# 
came path -G "vs的版本"  -DCMAKE_TOOLCHAIN_FILE=你自己的build路径\conan_toolchain.cmake -DCMAKE_POLICY_DEFAULT_CMP0091=NEW

cmake .. -G "Visual Studio 17 2022" -DCMAKE_TOOLCHAIN_FILE=D:\Languages\conan\build\conan_toolchain.cmake -DCMAKE_POLICY_DEFAULT_CMP0091=NEW
```
![conan](/images/Conan.png)

## 生成
```sh
# 此命令在build目录里面执行
cmake --build . --config Release
```

## 配置预设
> 需配置预设，否则vs编辑器无法打开源文件

vs code编辑器可以按`ctrl+shift+p`输入`Cmake: Select Configure Preset`
然后选择已有的预设
