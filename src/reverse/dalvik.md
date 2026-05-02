# Dalvik 虚拟机与 Smali 基础

Dalvik 是 Android 早期版本中使用的进程虚拟机，用于执行 Android 应用。了解它及其汇编语言 Smali 是逆向分析的基石。

## 1. Dalvik vs JVM
- **JVM (Java Virtual Machine)**: 基于**栈**架构。指令通常较短，但执行一个操作需要更多的指令。
- **Dalvik VM**: 基于**寄存器**架构。指令更长且更复杂，但通常执行速度更快，且针对移动设备内存有限的情况进行了优化。
- **文件格式**: JVM 运行 `.class` 文件；Dalvik 运行 `.dex` (Dalvik Executable) 文件（由多个类合并而成，减少冗余）。

## 2. ART (Android Runtime)
从 Android 5.0 开始，ART 取代了 Dalvik。
- **Dalvik**: 使用 JIT (Just-In-Time) 编译，应用运行时将字节码翻译为机器码。
- **ART**: 使用 AOT (Ahead-Of-Time) 编译，在安装时预编译。这提高了运行速度但增加了安装时间和存储空间。

## 3. Smali 指令基础
Smali 是 `.dex` 文件的汇编语言表现形式。

### 寄存器命名
- **v 命名法**: `v0`, `v1`, ... 代表局部寄存器。
- **p 命名法**: `p0`, `p1`, ... 代表参数寄存器。
  - 对于非静态方法，`p0` 总是 `this` 指针。
  - `p1` 是第一个参数，以此类推。

### 基础语法
- `.method`: 方法声明。
- `.end method`: 方法结束。
- `.field`: 字段声明。
- `.parameter`: 参数声明。
- `.registers`: 声明该方法使用的寄存器总数。

### 常用指令
- **数据操作**:
  - `const/4 v0, 0x1`: 将常量 1 放入 v0。
  - `move v0, v1`: 将 v1 的值赋给 v0。
- **对象/字段操作**:
  - `new-instance v0, Ljava/lang/StringBuilder;`: 创建对象实例。
  - `iget-object v0, p0, Lcom/app/MainActivity;->name:Ljava/lang/String;`: 获取成员变量。
  - `iput-object v1, p0, Lcom/app/MainActivity;->name:Ljava/lang/String;`: 设置成员变量。
- **方法调用**:
  - `invoke-virtual {p0, v0}, Lcom/app/MainActivity;->check(Ljava/lang/String;)Z`: 调用虚拟方法。
  - `invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z`: 调用静态方法。
- **判断与跳转**:
  - `if-eq v0, v1, :cond_0`: 如果 v0 == v1，跳转到 cond_0。
  - `goto :goto_0`: 无条件跳转。

## 4. 类型描述符
| 标识符 | Java 类型 |
| :--- | :--- |
| V | void |
| Z | boolean |
| B | byte |
| C | char |
| S | short |
| I | int |
| J | long |
| F | float |
| D | double |
| Lpackage/name; | 对象类型 (如 Ljava/lang/String;) |
| [ | 数组 (如 [I 代表 int[]) |
