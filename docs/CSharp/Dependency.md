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