# 依赖关系注入

## 依赖注入方法

以下是C#中常用的依赖注入方法以及它们的区别和简单描述的表格：

| 方法              | 区别和描述                                                                                                                    |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------|
| AddTransient     | 每次请求都会创建一个新的实例，并在请求结束后进行释放。适用于无状态的服务或短暂的对象。                                                    |
| AddScoped        | 每个请求范围内只创建一个实例，同一请求中的多个调用共享相同的实例。适用于有状态的服务或对象，比如数据库上下文。                                      |
| AddSingleton     | 创建单个实例，整个应用程序生命周期内都共享该实例。适用于全局共享的服务或单例对象。                                                         |
| AddInstance       | 注入指定的实例，通常在应用程序启动时创建实例并配置它们。适用于已经创建的特定实例。                                                         |
| AddTransient\<TService, TImplementation> | 注册服务和实现类型，每次请求都会创建一个新的实现类型实例。                                                              |
| AddScoped\<TService, TImplementation>    | 注册服务和实现类型，每个请求范围内只创建一个实现类型实例。                                                               |
| AddSingleton\<TService, TImplementation> | 注册服务和实现类型，创建单个实现类型实例，整个应用程序生命周期内共享。                                                         |
| AddInstance\<TService>(TService)            | 注入指定的实例作为服务的实现。                                                                                         |
| AddTransient\<TService>(Func<IServiceProvider, TService>) | 注册一个委托，每次请求时都会调用该委托以获取服务的新实例。|
| AddScoped\<TService>(Func<IServiceProvider, TService>)    | 注册一个委托，每个请求范围内都会调用该委托以获取服务的实例。 |
| AddSingleton\<TService>(Func<IServiceProvider, TService>) | 注册一个委托，仅在第一次请求服务时调用该委托以获取实例，并在后续请求中共享相同的实例。  |

这些方法是在ASP.NET Core中常用的依赖注入方法，它们提供了不同的生命周期和作用域选项，以满足不同场景下的需求。根据具体的应用程序需求，可以选择适当的方法来注册和注入依赖项。

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
```cs
public IActionResult About([FromServices] IDateTime dateTime)
{
    return Content( $"Current server time: {dateTime.Now}");
}
```

## WinUI3使用依赖注入
```cs
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

## 要使用CommunityToolkit实现依赖注入，你需要以下几个步骤：

- 安装`CommunityToolkit.Mvvm`和`Microsoft.Extensions.DependencyInjection`两个NuGet包。
- 在你的应用程序启动时，创建一个`IServiceCollection`对象，并使用`AddSingleton`、`AddScoped`或`AddTransient`方法注册你需要的服务。
- 使用`BuildServiceProvider`方法创建一个`IServiceProvider`对象，并将其保存为全局变量或属性。
- 在你的ViewModel类中，添加一个带有所需服务参数的构造函数，并使用`Ioc.Default.GetService<T>`方法获取服务实例。
- 在你的View类中，使用`Ioc.Default.GetRequiredService<T>`方法获取ViewModel实例，并将其设置为DataContext属性。

下面是一个简单的示例：

```cs
// App.xaml.cs
using CommunityToolkit.Mvvm.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

public partial class App : Application
{
    public App()
    {
        // Create a new service collection
        var services = new ServiceCollection();

        // Register your services here
        services.AddSingleton<IMessageService, MessageService>();

        // Build the service provider
        IServiceProvider provider = services.BuildServiceProvider();

        // Set it as the default service provider for the MVVM Toolkit Ioc module
        Ioc.Default.ConfigureServices(provider);
    }
}

// MainViewModel.cs
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.DependencyInjection;

public class MainViewModel : ObservableObject
{
    private readonly IMessageService _messageService;

    public MainViewModel(IMessageService messageService)
    {
        // Get the message service instance from the constructor parameter
        _messageService = messageService;
    }

    public void SendMessage(string message)
    {
        // Use the message service to send a message
        _messageService.Send(message);
    }
}

// MainWindow.xaml.cs
using CommunityToolkit.Mvvm.DependencyInjection;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

        // Get the MainViewModel instance from the Ioc module and set it as DataContext
        DataContext = Ioc.Default.GetRequiredService<MainViewModel>();
    }
}
```