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
workspace "HelloWorld" -- 解决方案名称
   configurations { "Debug", "Release" } -- 定义配置

project "HelloWorld" -- 项目名
   kind "ConsoleApp" -- 类型
   language "C"      -- c语言
   targetdir "bin/%{cfg.buildcfg}"

   files { "**.h", "**.c" } -- 包含的文件

   filter "configurations:Debug" -- 配置
      defines { "DEBUG" }   -- 定义
      symbols "On"  -- 

   filter "configurations:Release"
      defines { "NDEBUG" }
      optimize "On"
```