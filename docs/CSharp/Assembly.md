# Assembly反射

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