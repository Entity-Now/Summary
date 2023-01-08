# #预处理器

| 预处理器 | 说明 |
| ---- | --- |
| #define | 定义一个预处理器宏 |
| #undef | 取消宏定义 |
| | |
| #if | 预处理器中的条件命令 |
| #ifdef | 判断某个宏是否被定义 |
| #ifndef | 判断某个宏是否未被绑定 |
| #elif | 若#if, #ifdef, #ifndef或前面的#elif条件不满足, 则执行#elif之后的语句, 相当于C语法中的else-if |
| #else | 与#if, #ifdef, #ifndef对应, 若这些条件不满足, 则执行#else之后的语句, 相当于C语法中的else |
| #endif | #if, #ifdef, #ifndef这些条件命令的结束标志. |
|  | |
| #include | 包含文件命令 |
| #include_next | 与#include相似, 但它有着特殊的用途 |
|  | |
| ## | 用于将它前后的两个 token 组合在一起转换成以这两个 token 为内容的字符串常量 |
| # | 它把其后的串变成用双引号包围的串 |
| #line | 标记该语句所在的行号 |
| #pragma | 说明编辑器信息 |
| #warning | 显示编辑器警告 |
| #error | 显示编辑器错误信息 |

## 预处理的文法
> #command name(...) tokens(...)

- command 预处理命令的名称
- name表示宏名称
- tokens() 宏体，将替换宏名称的语句，语句中可以使用`\`来换行。 

## #define
### #define字符串宏
```cpp
#define Max 100;

#define S "字符串宏，编译后将替换为此内容";
```

### 函数宏
带参数的宏也被称为函数宏，

```cpp

```