# 常用
::: tip
使用C#可能会经常使用的技术
:::

## Deconstruct 将元组分解赋值
```cs
class Point
{
    public int X { get; }
    public int Y { get; }

    public Point(int x, int y) => (X, Y) = (x, y);
    // 返回一个元组
    public void Deconstruct(out int x, out int y) => (x, y) = (X, Y);
}

var point = new Point(10, 20);
// 分解元组
var (x, y) = point; // deconstruct
Console.WriteLine(x); // 10
```

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
## 反射

## 特性

## assembly 动态反射

## activate 静态反射

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

## timer 定时执行任务
```csharp
public class Example
{
   private static System.Timers.Timer aTimer;
   
   public static void Main()
   {
      SetTimer();

      Console.WriteLine("\nPress the Enter key to exit the application...\n");
      Console.WriteLine("The application started at {0:HH:mm:ss.fff}", DateTime.Now);
      Console.ReadLine();
      aTimer.Stop();
      aTimer.Dispose();
      
      Console.WriteLine("Terminating the application...");
   }

   private static void SetTimer()
   {
        // Create a timer with a two second interval.
        aTimer = new System.Timers.Timer(2000);
        // Hook up the Elapsed event for the timer. 
        aTimer.Elapsed += OnTimedEvent;
        aTimer.AutoReset = true;
        aTimer.Enabled = true;
    }

    private static void OnTimedEvent(Object source, ElapsedEventArgs e)
    {
        Console.WriteLine("The Elapsed event was raised at {0:HH:mm:ss.fff}",
                          e.SignalTime);
    }
}
```