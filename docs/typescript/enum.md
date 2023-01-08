# 枚举 enum
```js
enum Direction{
    up = 1,
    Down,
    left,
    right
}
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
console.log(FileAccess.ReadWrite); // output : 6

```
## 外部枚举 declare enum
```js
// 外部枚举，用来描述已经存在的枚举类型的形状
declare enum Direction{
    C = 2
}
```