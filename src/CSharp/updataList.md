# 版本更新

## 各个版本更新的功能
以下是C# 7至C# 11更新的一些功能：

C# 7:
- Tuples（元组）
- Local Functions（局部函数）
- Pattern matching（模式匹配）
- Deconstruction（解构）
- Digit Separators（数字分隔符）
- Ref locals and returns（引用返回）

C# 7.1:
- Async Main（异步主函数）
- Default expressions in parameters（参数默认值）
- Infer tuple names（元组名称推断）

C# 7.2:
- Non-trailing named arguments（非尾随命名参数）
- Leading underscores in numeric literals（数字字面值中的前导下划线）

C# 7.3:
- Accessing fixed fields without pinning（不固定访问固定字段）
- Stackalloc initializers（栈上分配的数组初始化器）
- Tuple equality operators（元组相等运算符）

C# 8:
- Nullable reference types（可空引用类型）
- Async streams（异步流）
- Default interface methods（接口默认实现）
- Recursive patterns（递归模式）
- Ranges and indices（范围和索引）
- Switch expressions（Switch表达式）
- Using declarations（使用声明）

C# 9:
- Init-only properties and setters（只初始化属性和设置器）
- Top-level statements（顶层语句）
- Records（记录）
- Pattern-based indexing（基于模式的索引）
- Function pointers（函数指针）
- Native sized integers（本机大小的整数）
- Improved performance for the System.Text.Json APIs（针对System.Text.Json API的性能改进）

C# 10:
- Global usings（全局using语句）
- Constant interpolated strings（常量插值字符串）
- Improved lambda support for Func delegates（Func委托的lambda支持改进）
- File-scoped namespaces（文件范围的命名空间）
- Global namespace usings（全局命名空间using语句）

C# 11:
- Interpolated string handlers（插值字符串处理程序）
- Implicit using of System namespaces（隐式使用System命名空间）
- Extended property patterns（扩展属性模式）
- Support for interpolated strings in attributes（插值字符串在属性中的支持）
- Target-typed new expressions（目标类型的新表达式）

## C# 8.0 接口默认实现是什么
接口默认实现是C# 8中引入的一项功能，它允许在接口中定义默认实现，这样实现该接口的类就不需要必须提供实现。如果实现类没有提供自己的实现，就会使用接口的默认实现。

例如，以下是一个定义了默认实现的接口：

```cs
public interface IMyInterface
{
    void MyMethod()
    {
        Console.WriteLine("Default implementation of MyMethod.");
    }
}
```

现在，任何实现 `IMyInterface` 接口的类都可以使用默认的 `MyMethod()` 实现，例如：

```cs
public class MyClass : IMyInterface
{
    // 没有提供自己的实现，将使用默认实现
}
```

如果在 `MyClass` 中没有实现 `MyMethod()` 方法，将会使用 `IMyInterface` 中的默认实现。这可以让接口的实现类更加简洁，减少不必要的代码重复。但是需要注意，如果实现类提供了自己的实现，那么它将会覆盖接口中的默认实现。

## C# 8.0 递归模式的详细说明
递归模式是C# 8中引入的一项功能，它可以在一种更直观的方式下进行复杂的模式匹配。通常，在使用模式匹配时，需要多次嵌套使用 switch 或 if 语句来处理复杂的数据类型。而递归模式可以在一个匹配语句中递归地匹配一个复杂的数据结构。

例如，假设有一个表示二叉树的数据结构：

```cs
public class BinaryTree
{
    public int Value { get; set; }
    public BinaryTree Left { get; set; }
    public BinaryTree Right { get; set; }
}
```

现在，假设想要遍历该二叉树并对每个节点执行某些操作。使用递归模式，可以这样做：

```cs
void Traverse(BinaryTree node)
{
    switch (node)
    {
        case null:
            return;
        case { Left: var left, Right: var right }:
            Traverse(left);
            Traverse(right);
            break;
        case { Left: var left }:
            Traverse(left);
            break;
        case { Right: var right }:
            Traverse(right);
            break;
        case { Value: var value }:
            Console.WriteLine(value);
            break;
    }
}
```

在这个示例中，使用了一个 switch 语句来匹配不同类型的 BinaryTree 对象。在这里，递归模式允许匹配嵌套属性（例如 Left 和 Right）和字段（例如 Value）的值，并在一个匹配语句中递归地遍历二叉树。

总体而言，递归模式使得处理复杂的数据类型更加容易和直观。它可以在一个匹配语句中处理嵌套的数据结构，减少了代码嵌套层次，提高了代码的可读性和可维护性。

## 只初始化属性和设置器的说明
C# 9中引入了只初始化属性和设置器的功能，这使得属性的初始化更加简单和直观。该功能使得可以定义一个只读的自动属性，该属性只能在构造函数中进行初始化。这可以确保在对象创建之后，该属性的值不会发生变化。

以下是一个示例：

```cs
public class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }

    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
}
```

在上面的示例中，`FirstName`和`LastName`属性都使用了`init`关键字。这意味着它们只能在对象构造函数中初始化。也就是说，一旦对象被创建，这些属性的值就不能再次修改。

使用这种模式，可以让代码更加简洁，减少不必要的赋值操作，并且可以提高代码的可读性和可维护性。此外，只初始化属性和设置器还可以让开发人员更容易地设计不可变对象，这在多线程和并发编程中非常有用。

## init加上readonly有什么作用吗，以及readonly的说明
将 `init` 与 `readonly` 关键字一起使用，可以创建只读属性，该属性的值只能在对象的构造函数中初始化，并且在初始化后不能被更改。

以下是一个示例：

```cs
public class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public readonly DateTime DateOfBirth;

    public Person(string firstName, string lastName, DateTime dateOfBirth)
    {
        FirstName = firstName;
        LastName = lastName;
        DateOfBirth = dateOfBirth;
    }
}
```

在上面的示例中，`DateOfBirth` 属性使用了 `readonly` 关键字，这意味着它只能在对象构造函数中初始化，并且在初始化后不能被更改。

注意，只有在使用 `init` 关键字时，才能将 `readonly` 关键字与属性一起使用，因为 `init` 关键字指定属性只能在对象构造函数中进行初始化。

`readonly` 关键字可以用于类的字段和局部变量。用于字段时，它使该字段成为只读字段，即该字段的值只能在对象的构造函数中或在定义该字段的初始化器中进行初始化，不能在其他位置被修改。用于局部变量时，它将确保该变量被声明后不能被重新赋值。

`readonly` 关键字通常用于创建不可变对象，这在多线程和并发编程中非常有用。此外，使用只读字段可以提高代码的安全性和可维护性。

## 字符串内插
```cs
string b = "hello word";
string a = $"{insert}";
```
### 原始字面量
```cs
int X = 2;
int Y = 3;

var pointMessage = $"""The point "{X}, {Y}" is {Math.Sqrt(X * X + Y * Y)} from the origin""";

Console.WriteLine(pointMessage);
// output:  The point "2, 3" is 3.605551275463989 from the origin.
```
可以在内插的原始字符串字面量中使用多个 $ 字符，以在输出字符串中嵌入 { 和 } 字符，而无需对这些字符进行转义
```cs
int X = 2;
int Y = 3;

var pointMessage = $$"""The point {{{X}}, {{Y}}} is {{Math.Sqrt(X * X + Y * Y)}} from the origin""";
Console.WriteLine(pointMessage);
// output:  The point {2, 3} is 3.605551275463989 from the origin.
```

## 范围运算符
C# 8.0 引入了两个新的运算符：范围运算符 `..` 和空合并运算符 `??=`。

范围运算符 `..` 可以用于创建一个值范围。它的语法如下：

```
start..end
```

其中 `start` 和 `end` 分别表示范围的开始和结束，可以是整数、浮点数、枚举或实现了 `IComparable` 接口的类型。

范围运算符可以用于数组、列表、字符串等类型的索引器中，用于指定需要访问的元素范围。例如，以下代码创建了一个整数数组，并使用范围运算符访问其中的一部分元素：

```csharp
int[] numbers = { 0, 1, 2, 3, 4, 5 };
int[] subset = numbers[2..4]; // subset 包含 {2, 3}
```

在上面的代码中，范围运算符 `2..4` 表示索引器需要返回从下标 2（包含）到下标 4（不包含）的元素。

范围运算符也可以与 `^` 运算符（用于表示从末尾开始的索引）一起使用。例如，以下代码返回数组的最后两个元素：

```csharp
int[] numbers = { 0, 1, 2, 3, 4, 5 };
int[] subset = numbers[^2..]; // subset 包含 {4, 5}
```

在上面的代码中，范围运算符 `^2..` 表示索引器需要返回从倒数第二个元素（包含）到数组末尾的元素。

需要注意的是，范围运算符 `..` 表示左闭右开区间。也就是说，范围 `start..end` 包含起始元素 `start`，但不包含结束元素 `end`。

范围运算符可以和其他运算符一起使用，例如：

```csharp
int[] numbers = { 0, 1, 2, 3, 4, 5 };
int[] subset = numbers[2..^1]; // subset 包含 {2, 3, 4}
```

在上面的代码中，范围运算符 `2..^1` 表示索引器需要返回从下标 2（包含）到倒数第二个元素（不包含）的元素。

总之，范围运算符 `..` 是一个非常有用的功能，可以使代码更加简洁、易读。