# premake5 包管理器

## 生成
> `premake5 [平台]`
```sh
premake5 vs2022
```

## 清理生成的文件
```sh
premake5 clean # 清理默认源
premake5 config=release clean # 清理指定配置
```

## 第一个项目
```c
/* hello.c */
#include <stdio.h>

int main(void) {
   puts("Hello, world!");
   return 0;
}
```
## premake5 脚本
```lua
-- premake5.lua
workspace "MemorizingWords"
    configurations { "Debug", "Release" }
    startproject "MemorizingWords"  -- 启动项目
    architecture "x64" -- 系统架构
    cppdialect "c++17" -- 方言

project "MemorizingWords"
    kind "ConsoleApp"
    language "C++"
    -- 设置obj文件的输出目录
    objdir "bin/%{cfg.platform}_%{cfg.buildcfg}"
    -- 设置编译文件的输出目录
    targetdir "bin/%{cfg.buildcfg}"
    -- 设置源文件等
    files{
        "src/**.h",
        "src/**.cpp",
        --[[ ImGui ]] --
        "vendor/imgui/**.h",
        "vendor/imgui/**.cpp",
    }
    -- 包含头文件的路径
    includedirs {
        "vendor"
    }
    links {
        "d3d12",
        "d3dcompiler",
        "dxgi"
    }
    filter "configurations:Debug"
        defines { "DEBUG" }
        runtime "Debug" -- 运行环境
        optimize "On" -- 指定项目配置时使用的优化级别
        symbols "On" -- 构建时生成调试符号

    filter "configurations:Release"
        defines { "NDEBUG" }
        runtime "Release"
        optimize "On"
        symbols "Off" -- 不生成调试符号
 
```