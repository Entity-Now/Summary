import{_ as e,o as i,c as n,e as r}from"./app.a158ac49.js";const l={},d=r(`<h1 id="依赖关系注入" tabindex="-1"><a class="header-anchor" href="#依赖关系注入" aria-hidden="true">#</a> 依赖关系注入</h1><h2 id="服务生命周期" tabindex="-1"><a class="header-anchor" href="#服务生命周期" aria-hidden="true">#</a> 服务生命周期</h2><p>可以使用以下任一生存周期注册服务：</p><ul><li>暂时（AddTransient） <ul><li>暂时生存期服务是每次从服务容器进行请求时创建的。 这种生存期适合轻量级、 无状态的服务。 向 AddTransient 注册暂时性服务。</li><li>在处理请求的应用中，在请求结束时会释放暂时服务</li></ul></li><li>作用域(AddScoped) <ul><li>对于 Web 应用，指定了作用域的生存期指明了每个客户端请求（连接）创建一次服务。 向 AddScoped 注册范围内服务。</li><li>在处理请求的应用中，在请求结束时会释放暂时服务</li></ul></li><li>单例(AddSingleton) <ul><li>在首次请求它们时进行创建；</li><li>在向容器直接提供实现实例时由开发人员进行创建。 很少用到此方法。</li><li>来自依赖关系注入容器的服务实现的每一个后续请求都使用同一个实例。 如果应用需要单一实例行为，则允许服务容器管理服务的生存期。 不要实现单一实例设计模式，或提供代码来释放单一实例。 服务永远不应由解析容器服务的代码释放。 如果类型或工厂注册为单一实例，则容器自动释放单一实例。</li></ul></li></ul><h2 id="注入到操作方法-fromservices" tabindex="-1"><a class="header-anchor" href="#注入到操作方法-fromservices" aria-hidden="true">#</a> 注入到操作方法 <code>FromServices</code></h2><blockquote><p>使用特性<code>[FromServices]</code>将依赖属性注入到方法</p></blockquote><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>public IActionResult About([FromServices] IDateTime dateTime)
{
    return Content( $&quot;Current server time: {dateTime.Now}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="winui3使用依赖注入" tabindex="-1"><a class="header-anchor" href="#winui3使用依赖注入" aria-hidden="true">#</a> WinUI3使用依赖注入</h2><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>using Microsoft.Extensions.DependencyInjection;
// 注册依赖
private static IServiceProvider ConfigureServices()
{
    var services = new ServiceCollection();

    services.AddSingleton&lt;IFilesService, FilesService&gt;();
    services.AddSingleton&lt;IConsoleService, ConsoleService&gt;();
    services.AddSingleton&lt;IFileLogger, FileLogger&gt;();

    return services.BuildServiceProvider();
}

// 获取依赖
// Retrieve a logger service with constructor injection
IFileLogger fileLogger = App.Current.Services.GetService&lt;IFileLogger&gt;();

// other
public static T? GetService&lt;T&gt;()
{
    return ActivatorUtilities.GetServiceOrCreateInstance&lt;T&gt;(serviceProvider);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[d];function a(c,t){return i(),n("div",null,s)}const o=e(l,[["render",a],["__file","Dependency.html.vue"]]);export{o as default};
