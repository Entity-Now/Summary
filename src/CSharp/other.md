# 常用
::: tip
使用C#可能会经常使用的技术
:::

## Deconstruct 将元组分解赋值
在 C# 中，Deconstructor（析构函数）是一种特殊的方法，它可以将一个对象分解为其组成部分，并将这些部分分配给单独的变量。Deconstructor 方法通常与构造函数一起使用，用于创建自定义类型的对象。

```cs
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Country { get; set; }

    public Person(string name, int age, string country)
    {
        Name = name;
        Age = age;
        Country = country;
    }

    public void Deconstruct(out string name, out int age, out string country)
    {
        name = Name;
        age = Age;
        country = Country;
    }
}
```
在上面的代码中，我们定义了一个名为 Person 的类，该类包含三个属性：Name、Age 和 Country。我们还定义了一个构造函数和一个 Deconstructor 方法，用于将 Person 对象分解为其组成部分。

```cs

Person person = new Person("John", 30, "USA");
(string name, int age, string country) = person;
Console.WriteLine($"Name: {name}, Age: {age}, Country: {country}");
```
> 在上面的代码中，我们将 Person 对象的值分配给名为 name、age 和 country 的变量，然后将这些变量打印到控制台。

## dynamic
```cs
class Foundation{
    public string Value = "hello world ~";
    public string GetValue(){
        return Value;
    }
}

// 使用properties
var obj = new Foundation();
obj.GetType().GetProperty("Value").GetValue(obj,null);
// 使用 dynamic
dynamic obj2 = new Foundation();
// 可以直接使用
Console.WriteLine(obj2.Value);
```

### dynamic 访问未知属性
```cs
dynamic person = new ExpandoObject();
person.Name = "John";
person.Age = 30;

string propertyName = "Name";
Console.WriteLine($"{propertyName}: {person[propertyName]}");

propertyName = "Age";
Console.WriteLine($"{propertyName}: {person[propertyName]}");

propertyName = "Address";
person[propertyName] = "123 Main St";
Console.WriteLine($"{propertyName}: {person[propertyName]}");

```
在上面的代码中，我们使用 `dynamic` 对象 `person` 来访问和操作动态属性。首先，我们为 `person` 对象设置了 `Name` 和 `Age` 属性，然后我们使用字符串 `propertyName` 访问 `Name` 和 `Age` `属性的值。此时，propertyName` 变量的值是动态的，可以在运行时更改。

最后，我们通过设置 `person[propertyName]` 的值为字符串 123 Main St，动态地添加了一个名为 `Address` 的属性，并打印出该属性的值。

总之，`dynamic` 可以用于访问和操作动态属性，这使得我们可以轻松地处理动态添加的属性，而无需事先知道它们的名称或类型。

## 时间戳
```csharp
var time = (DateTime.Now - new DateTime(1970,1,1).AddHours(8)).Ticks;
            
Console.WriteLine(time / 10000);
// 时间戳  秒
Console.WriteLine((DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000);
// 时间戳 毫秒
Console.WriteLine((DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000);
```

## 位运算符

```c#
    Console.WriteLine($"位与运算符 {(8 & 12)} ");    // = 8
        
    Console.WriteLine($"位或运算符 {(8 || 12)}");    // = 12
    
    Console.WriteLine($"位异或运算符 {(8 ^ 12)}");    // = 4
    
    Console.WriteLine($"取反运算符 {(~123)}");       // = -124
```

## 移位运算符

```c#
  Console.WriteLine($"移位运算符 { 8 >> 2}");      // 8 * 2的2次幂(4) = 32
  
  Console.WriteLine($"移位运算符 { 8 << 2}");      // 8 / 2的2次幂(4) = 2
```

## null 合并赋值
```Csharp
  // ??= 只有当左操作数=null的时候才会赋值

  int? a = null;

  a ??= "123";
```
## init 仅限初始化赋值，可以代替set属性
```csharp
string a{
  get;
  init; // 只能初始化的时候赋值
  // set;
}

// new () { a = ""};
```

## with 处理不可变的数据类型时可以创建新值
```csharp
var person = new Person { FirstName = "Mads", LastName = "Nielsen" };
var otherPerson = person with { LastName = "Torgersen" };

```

## 改进的匹配模式 when
```csharp
static string IsValue(object val)=> val switch{
  int => "is int",
  // 如果只想检查表达式类型，可使用弃元 _ 代替变量名
  string _ => "is string",
  // when表达式
  dataTime time when time.ToString() > dataTime.Now => "未过期",
  _ => "is null"
} 
```

## yield 迭代器
```csharp
public static class GalaxyClass
{
    public static void ShowGalaxies()
    {
        var theGalaxies = new Galaxies();
        foreach (Galaxy theGalaxy in theGalaxies.NextGalaxy)
        {
            Debug.WriteLine(theGalaxy.Name + " " + theGalaxy.MegaLightYears.ToString());
        }
    }

    public class Galaxies
    {

        public System.Collections.Generic.IEnumerable<Galaxy> NextGalaxy
        {
            get
            {
                yield return new Galaxy { Name = "Tadpole", MegaLightYears = 400 };
                yield return new Galaxy { Name = "Pinwheel", MegaLightYears = 25 };
                yield return new Galaxy { Name = "Milky Way", MegaLightYears = 0 };
                yield return new Galaxy { Name = "Andromeda", MegaLightYears = 3 };
            }
        }
    }

    public class Galaxy
    {
        public String Name { get; set; }
        public int MegaLightYears { get; set; }
    }
}
```

# c# 9.0
## 记录类型,类型kotlin的数据类 
##### kotlin: data class shu(a:int)
```csharp
public record Person(string FirstName, string LastName);

public static void Main()
{
    Person person = new("Nancy", "Davolio");
    Console.WriteLine(person);
    // output: Person { FirstName = Nancy, LastName = Davolio }
}
```
## 从c#9开始 只需要一句代码就能运行程序
```csharp
System.Console.WriteLine("Hello World!");
```

## 模式匹配
```csharp
public static bool IsLetter(this char c) =>
    c is >= 'a' and <= 'z' or >= 'A' and <= 'Z';


if (e is not null)
{
    // ...
}
```


## partial 扩展类
#####Partial关键词定义的类可以在多个地方被定义，最后编译的时候会被当作一个类来处理。
```Csharp
class partial a{
  partial public a{get;set;}
}
```


## 锁 look
```csharp
look(this){
  // 锁
}
```
## mutex 锁

## regex

```csharp
string[] a = {"","",""};
a[..]
a[^]
```

> internal 内部类,只能在内部引用否则会报错
```csharp
// Assembly2.cs  
// Compile with: /target:library  
public class BaseClass
{  
   internal static int intM = 0;  
}
// Assembly2_a.cs  
// Compile with: /reference:Assembly2.dll  
public class TestAccess
{  
   static void Main()
   {  
      var myBase = new BaseClass();   // Ok.  
      BaseClass.intM = 444;    // CS0117  
   }  
}
```

## 参数关键词`in` and `out`
- in
    - in 关键字用于声明一个输入参数。使用 in 关键字修饰的参数只能在方法中读取，不能被修改。这意味着，使用 in 关键字修饰的参数是只读的，可以保护方法中的数据不被意外修改。使用 in 关键字可以提高代码的安全性和可维护性。
     ```cs
        public void Print(in int value)
        {
            Console.WriteLine($"The value is {value}");
        }
    ```
- out
    - 使用 out 关键字修饰的参数必须在方法中被初始化，并且必须被方法修改。这意味着，使用 out 关键字修饰的参数是只写的，用于将方法的结果返回给调用方。
        ```cs
        public void Divide(int a, int b, out int quotient, out int remainder)
        {
            quotient = a / b;
            remainder = a % b;
        }
        ```

## timer 定时执行任务
```csharp
using System;
using System.Timers;

public class Program
{
    private static Timer timer;

    public static void Main()
    {
        // 创建一个 Timer 实例，并设置其周期为 1 秒
        timer = new Timer(1000);

        // 定义一个 Elapsed 事件的处理方法
        timer.Elapsed += OnTimerElapsed;

        // 启动计时器
        timer.Enabled = true;

        // 防止控制台应用程序在计时器退出时立即关闭
        Console.ReadLine();
    }

    private static void OnTimerElapsed(object sender, ElapsedEventArgs e)
    {
        // 执行需要周期性执行的操作
        Console.WriteLine($"The time is now {DateTime.Now}");
    }
}

```