# 模式匹配

以下是一些常见的模式匹配用法示例：

1. 类型模式匹配

```csharp
if (obj is string s) // 如果 obj 是 string 类型，则将其转换为 s
{
    Console.WriteLine(s.Length); // 输出字符串的长度
}
```

2. 常量模式匹配

```csharp
switch (input)
{
    case "add":
        Console.WriteLine("Performing addition...");
        break;
    case "subtract":
        Console.WriteLine("Performing subtraction...");
        break;
    default:
        Console.WriteLine("Unknown operation.");
        break;
}
```

3. 变量模式匹配

```csharp
if (obj is int i) // 如果 obj 是 int 类型，则将其转换为 i
{
    Console.WriteLine(i + 1); // 输出 i 加 1 的结果
}
```

4. 集合模式匹配

```csharp
if (list is { Count: > 0, [0]: int first }) // 如果 list 是非空且第一个元素是 int 类型，则将其转换为 first
{
    Console.WriteLine(first); // 输出第一个元素的值
}
```

5. 类型分解

```csharp
if (obj is Point { X: var x, Y: var y }) // 如果 obj 是 Point 类型，则将其分解为 x 和 y
{
    Console.WriteLine($"({x}, {y})"); // 输出点的坐标
}
```

6. 关系模式匹配

```csharp
if (input is >= 1 and <= 10) // 如果 input 是 1 到 10 之间的数字，则进行处理
{
    Console.WriteLine("Input is within range.");
}
```

7. 空模式匹配

```csharp
if (obj is null) // 如果 obj 为空，则进行处理
{
    Console.WriteLine("Object is null.");
}
```

除了上面列举的模式匹配，还有一些其他的用法：


1. with 表达式

```csharp
var newPoint = point with { X = 10 }; // 创建一个新的 Point 对象，仅修改 X 值
```

在模式匹配中，可以使用 `when` 关键字添加额外的条件，例如：

```csharp
if (obj is int i && i > 0 && i < 10) // 如果 obj 是 int 类型，并且值在 1 到 9 之间，则进行处理
{
    Console.WriteLine("Value is within range.");
}
```

或者在 switch 语句中使用 when 关键字：

```csharp
switch (input)
{
    case string s when s.Length > 10:
        Console.WriteLine("String is too long.");
        break;
    case int i when i > 0:
        Console.WriteLine("Value is positive.");
        break;
    default:
        Console.WriteLine("Unknown input.");
        break;
}
```

## when关键词的进阶用法

`when` 关键字的进阶用法主要涉及到模式匹配中的属性模式和递归模式。

属性模式允许你在模式匹配中使用对象的属性，例如：

```csharp
if (obj is Person { Age: > 18, Name: "John" }) // 如果 obj 是年龄大于 18，姓名为 "John" 的 Person 对象，则进行处理
{
    Console.WriteLine("Found John who is older than 18.");
}
```

递归模式允许你在模式匹配中使用树形结构或者其他递归结构，例如：

```csharp
public record Tree<T>(T Value, Tree<T> Left = null, Tree<T> Right = null);

var tree = new Tree<int>(1,
    new Tree<int>(2,
        new Tree<int>(4),
        new Tree<int>(5)),
    new Tree<int>(3,
        new Tree<int>(6),
        new Tree<int>(7)));

if (tree is Tree<int> { Left: { Left: { Value: 4 } }, Right: { Value: 5 } }) // 如果 tree 符合特定的树形结构，则进行处理
{
    Console.WriteLine("Found the pattern in the tree.");
}
```

在这些模式匹配中，`when` 关键字可以结合属性模式和递归模式使用，例如：

```csharp
if (obj is List<int> { Count: var count } list && count > 10 || obj is Tree<int> { Left: { Left: { Value: 4 } }, Right: { Value: 5 } } tree) // 如果 obj 是一个包含超过 10 个元素的 List，或者符合特定的树形结构，则进行处理
{
    Console.WriteLine("Found the pattern.");
}
```

这里的模式匹配包含两个分支，分别检查一个 List 和一个 Tree 是否符合特定的模式，并在成功匹配时执行相应的处理逻辑。`when` 关键字在每个分支中用于添加附加条件，以进一步限制匹配范围。