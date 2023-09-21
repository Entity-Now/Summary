# 使用CmakeToolChain快速创建包

## 创建项目
```sh
// 创建文件夹
mkdir test
// 创建项目
conan new -d name=test -d version=1.0 cmake_exe
```

## conan install
> 我们可以调用 conan install 来安装 Release 和 Debug 配置。 Conan会在对应的generators文件夹下生成一个 conan_toolchain.cmake ：

```sh
conan install .
conan install . -s build_type=Debug
```

## 构建项目

### 生成debug配置
```sh
cmake --preset conan-debug
cmake --build --preset conan-debug
```

### 生成release配置
```sh
cmake --preset conan-release
cmake --build --preset conan-release
```