# JADX-GUI 逆向分析工具指南

JADX 是一款将 Android APK、DEX、JAR 等文件反编译为 Java 源码的可视化工具。

## 1. 核心功能
- **反编译**: 将 DEX 转换为可读的 Java 代码。
- **资源解析**: 解析 `AndroidManifest.xml`、`res` 目录及 `resources.arsc`。
- **查找引用**: 快速定位变量、方法、类在何处被使用。
- **重命名/重构**: 对混淆后的类名、方法名进行重命名，方便理解逻辑（仅内存中，不修改 APK）。
- **去混淆 (Deobfuscation)**: 自动尝试恢复被混淆的包结构和名称。

## 2. 常用快捷键 (Windows/Mac)
- `Ctrl + N` / `Cmd + O`: 全局搜索（类、方法、字段）。
- `Ctrl + Shift + N` / `Cmd + Shift + O`: 搜索文件。
- `Ctrl + F`: 在当前编辑框内查找。
- `X`: 查看选中项的**引用 (Usage)**。
- `R`: **重命名**选中的类、方法或字段。
- `G`: 跳转到声明处。
- `Ctrl + Enter`: 在新标签页中打开。

## 3. 推荐设置
- **File -> Save as Gradle project**: 将反编译结果导出为标准的 Android Studio 项目，方便进行全文搜索和动态调试。
- **Options -> Preferences**:
  - `Deobfuscation`: 开启后，jadx 会自动给混淆后的 `a, b, c` 类起一个唯一的、基于包名的名字，极大提高阅读体验。
  - `Inline anonymous classes`: 开启可减少代码嵌套。
  - `Show inconsistent code`: 显示由于优化导致的反编译不完全的代码。

## 4. 插件支持
JADX 支持插件扩展，常见的有：
- **Frida snippet**: 直接生成针对当前选中方法的 Frida Hook 脚本片段。
- **Scripting**: 使用 Groovy 编写脚本批量处理任务。

## 5. 命令行版本 (jadx)
如果你需要批量处理或在服务器上运行：
- `jadx -d out-dir app.apk`: 将 APK 反编译到指定目录。
- `jadx --export-gradle app.apk`: 导出为 Gradle 项目。
- `jadx -j 8 app.apk`: 使用 8 个线程并行处理。
