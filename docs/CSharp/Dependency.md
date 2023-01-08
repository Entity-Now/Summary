# 依赖关系注入

## 服务生命周期
可以使用以下任一生存周期注册服务：
- 暂时（AddTransient）
    - 暂时生存期服务是每次从服务容器进行请求时创建的。 这种生存期适合轻量级、 无状态的服务。 向 AddTransient 注册暂时性服务。
    - 在处理请求的应用中，在请求结束时会释放暂时服务
- 作用域(AddScoped)
    - 对于 Web 应用，指定了作用域的生存期指明了每个客户端请求（连接）创建一次服务。 向 AddScoped 注册范围内服务。
    - 在处理请求的应用中，在请求结束时会释放暂时服务
- 单例(AddSingleton)
    - 在首次请求它们时进行创建；
    - 在向容器直接提供实现实例时由开发人员进行创建。 很少用到此方法。
    - 来自依赖关系注入容器的服务实现的每一个后续请求都使用同一个实例。 如果应用需要单一实例行为，则允许服务容器管理服务的生存期。 不要实现单一实例设计模式，或提供代码来释放单一实例。 服务永远不应由解析容器服务的代码释放。 如果类型或工厂注册为单一实例，则容器自动释放单一实例。

## 注入到操作方法 `FromServices`
> 使用特性`[FromServices]`将依赖属性注入到方法
```CSharp
public IActionResult About([FromServices] IDateTime dateTime)
{
    return Content( $"Current server time: {dateTime.Now}");
}
```

## WinUI3使用依赖注入
```CSharp
using Microsoft.Extensions.DependencyInjection;
// 注册依赖
private static IServiceProvider ConfigureServices()
{
    var services = new ServiceCollection();

    services.AddSingleton<IFilesService, FilesService>();
    services.AddSingleton<IConsoleService, ConsoleService>();
    services.AddSingleton<IFileLogger, FileLogger>();

    return services.BuildServiceProvider();
}

// 获取依赖
// Retrieve a logger service with constructor injection
IFileLogger fileLogger = App.Current.Services.GetService<IFileLogger>();

// other
public static T? GetService<T>()
{
    return ActivatorUtilities.GetServiceOrCreateInstance<T>(serviceProvider);
}
```
