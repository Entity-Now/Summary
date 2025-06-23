# autoFac简单使用

Autofac 是一个强大的依赖注入容器，提供了丰富的 API 来管理对象的生命周期、注册和解析依赖等。以下是一些常用的 Autofac 对象 API：

1. **ContainerBuilder**: 用于构建容器的建造者，通过它可以注册组件和服务。

   ```csharp
   var builder = new ContainerBuilder();
   ```

2. **Container**: 容器对象，用于解析依赖和管理对象的生命周期。

   ```csharp
   var container = builder.Build();
   ```

3. **RegistrationBuilder**: 用于自定义注册组件的方式，提供了更高级的注册选项。

   ```csharp
   var registration = builder.Register(c => new MyService());
   ```

4. **ComponentRegistration**: 表示已注册的组件，提供了有关组件的元数据信息。

   ```csharp
   var registration = container.ComponentRegistry.Registrations.FirstOrDefault();
   ```

5. **IComponentContext**: 表示组件的上下文，用于解析依赖。

   ```csharp
   var service = container.Resolve<IMyService>();
   ```

6. **LifetimeScope**: 表示对象的生命周期范围，用于管理对象的生命周期。

   ```csharp
   using (var scope = container.BeginLifetimeScope())
   {
       var service = scope.Resolve<IMyService>();
   }
   ```

7. **Module**: 用于组织注册逻辑的模块，可以将相关的注册逻辑封装在一个模块中。

   ```csharp
   public class MyModule : Module
   {
       protected override void Load(ContainerBuilder builder)
       {
           builder.RegisterType<MyService>().As<IMyService>();
       }
   }
   ```

这些是一些常用的 Autofac 对象 API，你可以根据自己的需求进一步探索和使用 Autofac 的其他功能和 API。Autofac 的文档提供了详细的 API 参考和示例，你可以进一步阅读以便更好地了解和使用 Autofac。

## 函数
好的，以下是 `ContainerBuilder` 类中常用的函数和方法以及简单说明：

| 函数/方法                                    | 说明                                                                                                 |
|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| `ContainerBuilder()`                        | 构造函数，用于创建一个新的容器构建者实例。                                                          |
| `RegisterType<T>()`                         | 注册类型 `T` 到容器中，通常用于注册具体类型。                                                       |
| `RegisterInstance(object)`                  | 注册一个现有的实例到容器中，通常用于注册单例实例。                                                  |
| `RegisterInstance<T>(T)`                    | 注册一个现有的泛型实例到容器中，通常用于注册单例实例。                                              |
| `RegisterAssemblyTypes(Assembly)`           | 注册指定程序集中的所有类型到容器中，通常用于批量注册。                                              |
| `RegisterAssemblyModules(Assembly)`         | 注册指定程序集中的所有模块到容器中，通常用于自动注册模块。                                          |
| `RegisterGeneric(Type)`                     | 注册泛型类型到容器中，通常用于注册泛型类型。                                                       |
| `RegisterGeneric(typeof(T))`                | 注册泛型类型到容器中，通常用于注册泛型类型。                                                       |
| `RegisterCallback(ConfigurationAction)`    | 注册一个回调函数用于配置容器，通常用于复杂的注册逻辑。                                             |
| `RegisterSource(IRegistrationSource)`       | 注册一个注册源到容器中，通常用于自定义的注册逻辑。                                                 |
| `RegisterModule(Module)`                    | 注册一个模块到容器中，通常用于将相关的注册逻辑封装在一个模块中。                                    |
| `Update(Container)`                         | 更新容器的配置，通常用于重新配置容器或添加新的配置。                                                |
| `Build()`                                   | 构建容器，返回一个容器实例。                                                                          |

这些是 `ContainerBuilder` 类中常用的函数和方法以及简单说明。你可以根据具体的需求选择适合的方法来配置和构建 Autofac 容器。

## populate
在 Autofac 中，`Populate` 方法用于将已经注册到容器的服务注入到已经存在的对象中的属性或字段中。通常情况下，你可能会在使用 Autofac 进行依赖注入时遇到需要将已注册服务注入到已存在对象的场景。

例如，假设你有一个类 `MyClass`，它有一个依赖于 `IMyService` 接口的属性 `MyService`，并且你已经将 `IMyService` 注册到了 Autofac 容器中。现在，你希望通过 Autofac 将已注册的 `IMyService` 注入到 `MyClass` 对象的 `MyService` 属性中，而不是手动创建 `MyService` 实例并赋值给 `MyClass` 的属性。

这时，你可以使用 `Populate` 方法来完成这个任务。下面是一个示例代码：

```csharp
using Autofac;
using Autofac.Core;
using Autofac.Features.AttributeFilters;
using Autofac.Features.ResolveAnything;
using System;

public interface IMyService
{
    void DoSomething();
}

public class MyService : IMyService
{
    public void DoSomething()
    {
        Console.WriteLine("MyService is doing something...");
    }
}

public class MyClass
{
    public IMyService MyService { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        // 创建容器构建者
        var builder = new ContainerBuilder();

        // 注册服务
        builder.RegisterType<MyService>().As<IMyService>();

        // 构建容器
        var container = builder.Build();

        // 创建 MyClass 实例
        var myClass = new MyClass();

        // 使用 Populate 方法将已注册服务注入到 myClass 对象中
        container.Populate(new[] { new AutowiredPropertyModule(myClass) });

        // 现在 myClass 对象的 MyService 属性已经被注入了已注册的服务
        myClass.MyService.DoSomething();
    }
}
```

在这个示例中，我们创建了一个 `MyClass` 对象，并且通过 `Populate` 方法将已注册的服务注入到了 `MyClass` 对象的 `MyService` 属性中。这样，`MyClass` 对象就可以使用已注册的服务了。

## RegisterGeneratedFactory
`RegisterGeneratedFactory` 方法是 Autofac 中用于注册生成工厂的方法。这个方法通常与使用 Autofac 动态生成的工厂一起使用，以便在运行时动态创建对象。

工厂可以是用于创建一组相关对象的通用方式。当你无法在编译时知道要创建的具体类型时，使用工厂可以很方便地动态创建对象。

下面是一个简单的示例，演示了如何使用 `RegisterGeneratedFactory` 方法：

```csharp
using Autofac;
using Autofac.Features.GeneratedFactories;
using System;

public interface IMyService
{
    void DoSomething();
}

public class MyService : IMyService
{
    public void DoSomething()
    {
        Console.WriteLine("MyService is doing something...");
    }
}

public class MyClass
{
    private readonly Func<IMyService> _myServiceFactory;

    public MyClass(Func<IMyService> myServiceFactory)
    {
        _myServiceFactory = myServiceFactory;
    }

    public void UseService()
    {
        var myService = _myServiceFactory();
        myService.DoSomething();
    }
}

class Program
{
    static void Main(string[] args)
    {
        var builder = new ContainerBuilder();

        // 注册服务和工厂
        builder.RegisterType<MyService>().As<IMyService>();
        builder.RegisterType<MyClass>();
        builder.RegisterGeneratedFactory<Func<IMyService>>();

        var container = builder.Build();

        var myClass = container.Resolve<MyClass>();
        myClass.UseService();
    }
}
```

在这个示例中，我们注册了一个 `MyService` 类型的服务以及一个 `MyClass` 类型的类。然后，我们使用 `RegisterGeneratedFactory` 方法注册了一个生成工厂，这个工厂可以用来动态创建 `IMyService` 类型的对象。最后，我们在 `MyClass` 中注入了这个工厂，并在其中使用工厂动态创建了 `IMyService` 对象并调用了它的方法。