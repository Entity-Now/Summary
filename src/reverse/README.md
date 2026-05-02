# 移动端逆向工具汇总 (Reverse Engineering Tools)

本目录收集了在 Android/iOS 逆向工程中常用的工具及其基本命令。

## 目录索引

### 1. [ADB (Android Debug Bridge)](./adb.md)
Android 设备调试的核心工具。支持文件传输、应用管理、日志查看及系统交互。
- **核心用途**: 设备连接、安装/卸载、Shell 交互、性能监控。

### 2. [JADX-GUI (Java Decompiler)](./jadx-gui.md)
最受欢迎的反编译可视化工具。
- **核心用途**: 查看 APK 源码、资源文件、查找引用、去混淆分析。

### 3. [Frida (Dynamic Instrumentation)](./frida.md)
强大的动态插桩引擎，支持 Hook Java 与 Native 层代码。
- **核心用途**: 动态分析、协议破解、内存修改、自动脱壳。

### 4. [Dalvik & Smali](./dalvik.md)
Android 虚拟机的运行机制与汇编语言基础。
- **核心用途**: 修改代码逻辑（重打包）、理解寄存器操作、分析 Smali 语法。

### 5. [JNI (Java Native Interface)](./JNI.md)
Java 与本地 C/C++ 代码交互的桥梁。
- **核心用途**: 分析 .so 动态库逻辑、掌握静态/动态注册、Native 层 Hook。

### 6. 其它推荐工具
- **GDA**: 国产优秀的反编译器，速度极快。
- **Charles / Fiddler**: 抓包工具，用于分析 HTTP/HTTPS 通信。
- **IDA Pro**: 静态分析 Native (C/C++) 代码的黄金标准。
- **LSPatch / LSPosed**: 模块化注入框架。

---
> [!TIP]
> 逆向工程是一个不断学习的过程，工具只是辅助，理解底层原理（如 Dalvik 虚拟机、ARM 架构、JNI 调用等）更为关键。
