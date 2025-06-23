# 配置项说明

| 类型 | 描述 | 
| --- | --- |
| workspaces | 工作空间，可以理解为解决方案 |
| configurations | 构建配置 |
| filename | 工作区文件的默认文件名 |
| project | 项目名称 |
| language | 编程语言 |
| kind | 项目类型，如ConsoleApp和WindowedApp |
| locations | 项目文件的存放位置 |
| defines | 定义预处理器宏 ，如DEBUG和TRACE |
| files | 将文件（源代码、资源等）添加到项目中 |
| removefiles | 移除某些不需要包含的文件 |
| links | 链接到外部库，应省略扩展名 |
| libdirs | 告诉premake在哪里搜索库 |
| includedirs | 告诉premake在哪里搜索头文件 |
| pchheader | 告诉premake在哪里搜索预编译头文件 |
| pchsource | 告诉premake在哪里搜索预编译头文件 |
| flags | 告诉编译器如何编译项目 |

## 构建配置
```lua
workspace "HelloWorld"
   configurations { "Debug", "Release" } -- 配置列表，可以使用任意名称

   filter "configurations:Debug"
      defines { "DEBUG" }
      flags { "Symbols" }

   filter "configurations:Release"
      defines { "NDEBUG" }
      optimize "On"
```

## 定义不同的目标平台
```lua
configurations { "Debug", "Release" }
platforms { "Win32", "Win64", "Xbox360" }

filter { "platforms:Win32" }
    system "Windows" -- 平台
    architecture "x86" -- 架构, 如 x64 , x86, x86_64

filter { "platforms:Win64" }
    system "Windows"
    architecture "x86_64"

filter { "platforms:Xbox360" }
    system "Xbox360"
```
```lua

```
```lua

```
```lua

```