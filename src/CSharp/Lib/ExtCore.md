# ExtCore

ExtCore是一个用于构建模块化和可扩展ASP.NET Core应用程序的开源框架。它提供了一种简便的方式来组织和管理应用程序功能的模块，使开发人员能够轻松地添加、移除或替换功能模块。

其主要功能包括：

1. **模块化设计：** ExtCore允许将应用程序划分为多个模块，每个模块可独立开发、测试和部署。这样的设计有助于保持代码的清晰性和可维护性。

2. **可扩展性：** 开发人员可以通过简单地添加新模块来扩展应用程序的功能，而不会影响现有的代码。这使得应用程序更容易适应变化和增长。

3. **插件支持：** ExtCore支持插件式架构，允许在应用程序运行时动态加载和卸载插件。这使得应用程序可以在不停机的情况下进行功能扩展。

4. **依赖注入：** 框架集成了ASP.NET Core的依赖注入系统，简化了模块之间的依赖关系管理。

总体而言，ExtCore提供了一种灵活而可扩展的方式来构建ASP.NET Core应用程序，使开发人员更容易实现模块化和可维护的代码结构。

## 简单使用
- 在Startup.cs中添加 `AddExtCore` 和 `UseExtCore`
- 设置扩展的存储路径

```cs
  public class Startup
  {
    private string extensionsPath;

    public Startup(IConfiguration configuration, IWebHostEnvironment webHostEnvironment)
    {
      this.extensionsPath = webHostEnvironment.ContentRootPath + configuration["Extensions:Path"];
    }

    public void ConfigureServices(IServiceCollection services)
    {
      // 添加ExtCore服务
      services.AddExtCore(this.extensionsPath);
    }

    public void Configure(IApplicationBuilder applicationBuilder)
    {
      // 使用ExtCore中间件
      applicationBuilder.UseExtCore();
      applicationBuilder.Run(async (context) =>
      {
        await context.Response.WriteAsync(ExtensionManager.GetInstance<IExtension>().Name);
      });
    }
  }
```
 