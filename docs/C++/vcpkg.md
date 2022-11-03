<!--
 * @作者: 14770137
 * @Date: 2022-09-22 15:18:35
-->
# 包管理工具 vcpkg

## 入门
```
// 首先就是clone项目
git clone https://github.com/Microsoft/vcpkg.git

// 构建vcpkg
.\vcpkg\bootstrap-vcpkg.bat

// 集成到全局
vcpkg integrate install
```

## 安装库
```
vcpkg install imgui
vcpkg isntall imgui:x64-windows
// 搜索库
vcpkg search imgui
// 删除一个已经安装的库
vcpkg remove imgui
```

## 查看已安装的库
```
vcpkg list
```

## 设置默认安装的库版本
```
// 更改环境变量
VCPKG_DEFAULT_TRIPLET=x64-windows
// 添加path变量-vcpkg的目录
```