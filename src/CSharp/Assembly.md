# Assembly反射

## 使用Assembly.LoadFrom加载程序集
 LoadFrom()方法可以从指定文件中加载程序集
```cs
namespace TestDll
{
    public class TestDll
    {
        public string DefaultValue { get; set; } = "我是默认值";
    }
}
```
```cs
// 加载程序集
var a = Assembly.LoadFrom("DLL的路径");
// 获取对象类型，命名空间+类名
Type class_type = a.GetType("TestDll.TestDll");
// 创建对象实例
var T = Activator.CreateInstance(class_type);
// 输出对象属性
Console.WriteLine(((dynamic)T).DefaultValue);
```

## 使用Assembly.Load加载程序集
```cs


```

## 使用AppDomain.CurrentDomain.GetAssemblies()创建当前程序集的对象
```cs
var a = AppDomain.CurrentDomain.GetAssemblies() // 获取已加载到此应用程序域的执行上下文中的程序集。
    .FirstOrDefault(I=>I.GetName().Name == "reflection") // 获取name=reflection的程序集
    .DefinedTypes
    .FirstOrDefault(I=>I.Name == "TestReflection"); // 获取name = TestReflection的对象

var t = Activator.CreateInstance(a);
Console.WriteLine(((dynamic)t).Default);
```

## Assembly.DefinedTypes 与 Assembly.GetTypes()的区别
>DefinedTypes返回一个TypeInfo对象的集合，而GetTypes返回一个Type对象的数组。

>TypeInfo对象包含了类型的元数据和操作，而Type对象只包含了类型的元数据。

>TypeInfo对象可以访问到嵌套类型的信息，而Type对象不能。
```cs
// 获取当前程序集
var assembly = Assembly.GetExecutingAssembly();
// 使用DefinedTypes获取类型信息
var typeInfos = assembly.DefinedTypes;
// 使用GetTypes获取类型信息
var types = assembly.GetTypes();
// 打印两者的长度
Console.WriteLine(typeInfos.Count()); // 10
Console.WriteLine(types.Length); // 9
```

## 使用Type直接创建对象
```cs
// 直接获取类型，参数=（命名空间+类名,程序集的名称）
var t = Type.GetType("reflection.Model.TestReflection,reflection");
var obj = Activator.CreateInstance(t);
Console.WriteLine(((dynamic)obj).Default);
```

## MakeGenericMethod动态创建泛型方法
```cs
class TestMakeGenericMethod
{
    public void Input<T>(T value)
    {
        Console.WriteLine(value.ToString());
    }
}
```
```cs
// 先创建一个类的实例，后面会把创建的泛型方法注入到此实例
var entity = new TestMakeGenericMethod();

var Make = typeof(TestMakeGenericMethod).GetMethod("Input");
// 创建泛型方法并，其中参数是泛型的类型
Make.MakeGenericMethod(typeof(string))
    // 将方法传入到刚才创建的实例里面，第一个参数是实例，第二个是参数
    .Invoke(entity,new object[] {"动态创建泛型方法"});
```
> output: 动态创建泛型方法

## 使用Activator创建对象
使用类型名称创建一个字符串对象
```cs
// mscorlib是程序集的名字
// System.string是类名
var obj1 = Activator.CreateInstance("mscorlib", "System.String");
```
```cs
// 如果调用的对象有参数可以这样
var r = Activator.CreateInstance(typeof(TestReflection), new object[] { "我是参数" });
```
```cs
var r = Activator.CreateInstance(typeof(TestReflection));
// 
Console.WriteLine(r.GetType().Name); // TestReflection
// 使用dynamic反射获取属性
Console.WriteLine(((dynamic)r).Default);
// 反射获取属性
Console.WriteLine(r.GetType().GetProperty("Default").GetValue(r));
```

## 使用Assembly.GetReferencedAssemblies()方法
这个方法可以返回一个程序集引用了的所有程序集，不论是否已加载，都会返回。这个方法返回的是AssemblyName类的对象，而不是Assembly类的对象。这样可以避免不必要的程序集加载，提高性能。

这个方法只能获取直接引用了该程序集的程序集，不能获取间接引用了该程序集的程序集3。例如，如果A程序集引用了B程序集，B程序集引用了C程序集，那么使用A.GetReferencedAssemblies()方法只能获取到B，不能获取到C。
```cs
// 获取当前正在执行的代码所在的程序集
var assembly = Assembly.GetExecutingAssembly();
// 获取该程序集引用了的所有程序集
var referencedAssemblies = assembly.GetReferencedAssemblies();
// 遍历所有引用的程序集
foreach (var referencedAssembly in referencedAssemblies)
{
    // 通过名称加载引用的程序集
    var loadedAssembly = Assembly.Load(referencedAssembly);
    // 获取该程序集中定义的所有类型
    var types = loadedAssembly.GetTypes();
    // 筛选出枚举类型
    var enums = types.Where(t => t.IsEnum);
    // 遍历枚举类型
    foreach (var enumType in enums)
    {
        // 打印枚举类型名称和值
        Console.WriteLine(enumType.Name);
        foreach (var value in Enum.GetValues(enumType))
        {
            Console.WriteLine(value);
        }
    }
}
```

## AppDomain.CurrentDomain.GetAssemblies()
这个方法可以获取当前程序域中的所有程序集。程序域是一个应用程序执行的隔离环境，可以在其中加载和卸载程序集。您可以使用AppDomain类来管理程序域。

这个方法返回的是Assembly类的对象，而不是AssemblyName类的对象。这样可以方便地访问程序集中定义的类型和资源。

这个方法只能获取已经使用过的程序集，未使用的程序集不会包含在内。这是因为.NET CLR使用了即时编译技术，只有当引用的程序集被需要时才会加载到内存中。

```cs
// 获取当前应用程序域
var domain = AppDomain.CurrentDomain;
// 获取该应用程序域中加载过的所有程序集
var assemblies = domain.GetAssemblies();
// 遍历所有加载过的程序集
foreach (var assembly in assemblies)
{
    // 获取该程序集中定义的所有类型
    var types = assembly.GetTypes();
    // 筛选出枚举类型
    var enums = types.Where(t => t.IsEnum);
    // 遍历枚举类型
    foreach (var enumType in enums)
    {
        // 打印枚举类型名称和值
        Console.WriteLine(enumType.Name);
        foreach (var value in Enum.GetValues(enumType))
        {
            Console.WriteLine(value);
        }
    }
}
```

## 各种方法的区别
`AppDomain.CurrentDomain.GetAssemblies()` 方法返回当前应用程序域加载的所有程序集，包括主程序集和所有已加载的引用程序集。与 `Assembly.GetReferencedAssemblies()` 方法不同的是，它返回的是已经加载到应用程序域中的程序集，而不仅仅是引用的程序集。此外，它还包括动态加载的程序集和本地缓存的程序集。

相比之下，`Assembly.GetReferencedAssemblies()` 和 `Assembly.GetExecutingAssembly()` 方法只返回程序集的元数据信息，并不包括已加载的程序集实例。这意味着，它们只能用于获取程序集的元数据信息，而不能用于获取已加载的程序集实例。

因此，`AppDomain.CurrentDomain.GetAssemblies()` 方法通常用于获取应用程序域加载的所有程序集，以便在运行时对它们进行操作。而 `Assembly.GetReferencedAssemblies()` 和 `Assembly.GetExecutingAssembly()` 方法通常用于获取程序集的元数据信息，例如程序集名称、版本号、公共密钥等。