# 值标记

- `%{}` 是 Premake5 中的字符串替换语法的标志。
- `cfg` 是一个预定义的 Lua 表，用于存储当前配置的信息。

## 使用方法
```
%{wks.name}
%{prj.location}
%{cfg.targetdir}
```

## 已知令牌
```
wks.name
wks.location -- (location where the workspace/solution is written, not the premake-wks.lua file)

prj.name
prj.location -- (location where the project is written, not the premake-prj.lua file)
prj.language
prj.group

cfg.longname
cfg.shortname
cfg.kind
cfg.architecture
cfg.platform
cfg.system
cfg.buildcfg
cfg.buildtarget -- (see [target], below)
cfg.linktarget -- (see [target], below)
cfg.objdir

file.path
file.abspath
file.relpath
file.directory
file.reldirectory
file.name
file.basename -- (file part without extension)
file.extension -- (including '.'; eg ".cpp")

-- These values are available on build and link targets
-- Replace [target] with one of "cfg.buildtarget" or "cfg.linktarget"
--   Eg: %{cfg.buildtarget.abspath}
[target].abspath
[target].relpath
[target].directory
[target].name
[target].basename -- (file part without extension)
[target].extension -- (including '.'; eg ".cpp")
[target].bundlename
[target].bundlepath
[target].prefix
[target].suffix
```