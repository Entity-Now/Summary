# JNI (Java Native Interface) 基础

JNI 是一种编程框架，允许 Java 代码与使用 C、C++ 或汇编编写的本地应用和库进行交互。在逆向分析中，核心逻辑（如加密算法、核心协议）往往隐藏在 JNI 层。

## 1. 核心概念
- **本地方法 (Native Method)**: 在 Java 中声明但没有实现的方法，使用 `native` 关键字标记。
- **动态链接库**: Android 中通常是 `.so` 文件。
- **JNIEnv**: 指向 JNI 环境的指针，通过它 C/C++ 可以调用 Java 的方法、操作 Java 字段、创建 Java 对象等。

## 2. JNI 注册方式

### 静态注册 (Static Registration)
根据特定的命名规则匹配：`Java_包名_类名_方法名`。
- **优点**: 简单，反编译器（如 IDA）能直接搜到函数名。
- **缺点**: 灵活性差，名字长。
- **例子**:
  ```c
  JNIEXPORT jstring JNICALL
  Java_com_example_test_MainActivity_stringFromJNI(JNIEnv* env, jobject thiz) {
      return (*env)->NewStringUTF(env, "Hello from C++");
  }
  ```

### 动态注册 (Dynamic Registration)
在 `JNI_OnLoad` 函数中手动建立 Java 方法与 C 函数的映射。
- **优点**: 效率高，更隐蔽（IDA 中函数名不直观）。
- **流程**:
  1. 系统加载 `.so` 时自动调用 `JNI_OnLoad`。
  2. 使用 `RegisterNatives` 函数注册。
- **逆向技巧**: 在 IDA 中通过搜索 `JNI_OnLoad` 并定位 `RegisterNatives` 调用来找对应的 Native 实现。

## 3. 数据类型映射
| Java 类型 | JNI 类型 | 描述 |
| :--- | :--- | :--- |
| boolean | jboolean | 无符号 8 位 |
| int | jint | 有符号 32 位 |
| long | jlong | 有符号 64 位 |
| String | jstring | 字符串对象 |
| byte[] | jbyteArray | 字节数组 |
| Object | jobject | 任意 Java 对象 |
| Class | jclass | 类引用 |

## 4. 逆向常用 API
- `FindClass`: 获取 Java 类。
- `GetMethodID` / `GetStaticMethodID`: 获取方法 ID。
- `Call<Type>Method`: 调用方法（如 `CallObjectMethod`）。
- `GetFieldID` / `SetFieldID`: 操作成员变量。
- `GetStringUTFChars`: 将 Java 字符串转为 C 字符串。

## 5. 安全与防御
- **反调试**: 在 `JNI_OnLoad` 中检查 `ptrace` 或轮询 `/proc/self/status`。
- **代码混淆**: 使用 LLVM 指令混淆（OLLVM）处理 C 代码。
- **字符串加密**: 避免敏感字符串（如秘钥）以明文形式出现在 `.so` 中。
