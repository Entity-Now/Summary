# Frida 动态插桩工具大全

Frida 是一款面向开发人员、逆向工程师和安全研究人员的动态插桩工具包。

## 1. 安装与环境
- **PC 端安装**: `pip install frida frida-tools frida-dexdump objection`
- **Frida-server**: 
  1. 下载对应架构的 `frida-server` (如 android-arm64)。
  2. `adb push frida-server /data/local/tmp/`
  3. `adb shell "chmod 755 /data/local/tmp/frida-server"`
  4. `adb shell "/data/local/tmp/frida-server &"` (启动并挂后台)

## 2. 常用命令行工具 (Frida-Tools)

Frida 提供的命令行工具非常丰富，以下是核心工具及其详细参数：

### 2.1 frida (交互式 Shell)
- `frida -U -f <package_name>`: 以 Spawn 模式启动并注入。
- `frida -U -p <pid>`: 附加到指定 PID。
- `frida -U -n <process_name>`: 附加到指定进程名。
- `frida -U -l <script.js> <package_name>`: 加载脚本。
- **常用参数**:
  - `-U`: 连接 USB 设备。
  - `-R`: 连接远程设备。
  - `-H <host>`: 连接指定主机。
  - `-f <package>`: 强制启动应用。
  - `--no-pause`: 启动应用后不暂停（配合 `-f` 使用）。
  - `--codeshare <author/name>`: 直接加载 Frida Codeshare 上的脚本。

### 2.2 frida-ps (列出进程)
- `frida-ps -U`: 列出 USB 设备运行中的进程。
- `frida-ps -Uai`: 列出已安装的所有应用（包含未运行的）。
- `frida-ps -Uj`: 以 JSON 格式输出结果。

### 2.3 frida-trace (追踪调用)
- `frida-trace -U -i "open*"`: 追踪所有以 open 开头的导出函数。
- `frida-trace -U -j "com.example.app.MainActivity!*"`: 追踪指定类中的所有 Java 方法。
- `frida-trace -U -a "libc.so!0x1234"`: 追踪指定地址。
- **常用参数**:
  - `-i <glob>`: 匹配导入/导出函数。
  - `-a <module!offset>`: 匹配绝对地址。
  - `-j <glob>`: 匹配 Java 方法（仅限 Android）。
  - `-S <script>`: 指定自定义追踪脚本。

### 2.4 其他工具
- `frida-ls-devices`: 列出所有可见设备。
- `frida-kill -U <package_name>`: 终止目标设备上的进程。

## 3. Frida-Dexdump (脱壳工具)

用于从内存中 dump 出 DEX 文件，支持多种加固方式。

- **安装**: `pip install frida-dexdump`
- **详细用法**:
  - `frida-dexdump -U -f <package_name>`: 启动应用并自动 dump（推荐）。
  - `frida-dexdump -U -n <process_name>`: 按照进程名进行 dump。
  - `frida-dexdump -U -p <pid>`: 按照进程 ID 进行 dump。
- **可选参数**:
  - `-o <dir>, --output <dir>`: 指定导出 DEX 的保存目录。
  - `-d, --deep-scan`: 开启深度扫描，可能发现更多 DEX，但速度较慢。
  - `-s <sec>, --sleep <sec>`: 启动后延迟扫描（秒），适合等待动态加载完成。
  - `-h, --help`: 查看完整参数列表。

## 4. Wallbreaker (对象分析)

Wallbreaker 是一个基于 `objection` 的插件，用于实时分析 Android 内存中的 Java 堆对象。

- **安装与加载**:
  1. 将 Wallbreaker 插件下载到指定目录。
    ```sh
    mkdir -p ~/.objection/plugins/
    git clone https://github.com/hluwa/Wallbreaker ~/.objection/plugins/Wallbreaker
    ```
  2. start
    ```sh
    objection -n com.alibaba.android.rimet.zrhgz start
    plugin load ~/.objection/plugins/Wallbreaker
    ```
- **常用命令**:
  - `plugin wallbreaker classsearch <pattern>`: 在内存中搜索匹配的类。
  - `plugin wallbreaker classdump <class_name> [--fullname]`: 打印类的结构（字段、方法、静态变量）。
  - `plugin wallbreaker objectsearch <class_name>`: 搜索该类在内存中的所有实例。
  - `plugin wallbreaker objectdump <object_handle> [--fullname]`: 打印指定对象实例的实时字段值。
  - `plugin wallbreaker objectdump --as-class <class_name> <object_handle>`: 以特定父类视角解析对象。

## 5. 基础 Hook 脚本模版 (JavaScript)

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

## 6. 进阶技巧
- **spawn 与 attach**: 
  - `spawn` 模式可以在应用最早启动时注入，适合 Hook `onCreate` 或静态代码块。
  - `attach` 模式适合分析已在运行的应用逻辑。
- **持久化保存**: 使用 `console.log` 记录关键数据，或使用 `File` 对象在脚本中写入文件。
