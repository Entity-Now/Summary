# Frida 动态插桩工具大全

Frida 是一款面向开发人员、逆向工程师和安全研究人员的动态插桩工具包。

## 1. 安装与环境
- **PC 端安装**: `pip install frida-tools`
- **Frida-server**: 
  1. 下载对应架构的 `frida-server` (如 android-arm64)。
  2. `adb push frida-server /data/local/tmp/`
  3. `adb shell "chmod 755 /data/local/tmp/frida-server"`
  4. `adb shell "/data/local/tmp/frida-server &"` (启动并挂后台)

## 2. 常用命令行工具
- `frida-ps -U`: 列出 USB 连接设备的所有进程。
- `frida-ps -Uai`: 列出已安装的所有应用及其包名。
- `frida -U -f <package_name> -l <script.js>`: 启动应用并注入脚本。
- `frida -U -p <pid> -l <script.js>`: 附加到正在运行的进程。
- `frida-trace -U -i "open*" <package_name>`: 追踪匹配 "open" 开头的 API 调用。
- `frida-kill -U <package_name>`: 终止远程设备上的应用。

## 3. Frida-Dexdump (脱壳)
用于从内存中 dump 出 DEX 文件，常用于对抗简单的加固。
- **安装**: `pip install frida-dexdump`
- **使用**:
  - `frida-dexdump -U -f <package_name>`: 启动应用并 dump DEX。
  - `frida-dexdump -U -p <pid>`: 针对已运行的进程 dump。
  - `frida-dexdump -U -n <process_name>`: 按照进程名 dump。

## 4. 基础 Hook 脚本模版 (JavaScript)

### Java 层 Hook (Android)
```javascript
Java.perform(function () {
    var targetClass = Java.use("com.example.app.MainActivity");
    
    // Hook 特定方法
    targetClass.targetMethod.implementation = function (arg1, arg2) {
        console.log("Original arguments: " + arg1 + ", " + arg2);
        
        // 调用原始方法
        var result = this.targetMethod(arg1, arg2);
        
        console.log("Return value: " + result);
        return result;
    };

    // Hook 重载方法
    targetClass.overloadMethod.overload('java.lang.String').implementation = function (str) {
        return this.overloadMethod("Hacked: " + str);
    };
});
```

### Native 层 Hook
```javascript
Interceptor.attach(Module.findExportByName("libc.so", "open"), {
    onEnter: function (args) {
        console.log("Opening: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function (retval) {
        console.log("Return fd: " + retval);
    }
});
```

## 5. 进阶技巧
- **spawn 与 attach**: 
  - `spawn` 模式可以在应用最早启动时注入，适合 Hook `onCreate` 或静态代码块。
  - `attach` 模式适合分析已在运行的应用逻辑。
- **持久化保存**: 使用 `console.log` 记录关键数据，或使用 `File` 对象在脚本中写入文件。
