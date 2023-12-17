# C#中好用的开源库

## MediatR
MediatR是一个无依赖的进程内消息传递库，支持请求/响应、命令、查询、通知和事件，同步和异步，以及通过C#泛型变化实现的智能分发。下面是一些使用案例：

1. **请求/响应模式**：在ASP.NET Core Web API中使用MediatR来处理HTTP请求，将请求转换为命令或查询，并将响应返回给客户端。
2. **命令模式**：在ASP.NET Core Web API中使用MediatR来处理命令，例如创建、更新或删除资源。
3. **查询模式**：在ASP.NET Core Web API中使用MediatR来处理查询，例如获取资源列表或单个资源。
4. **通知模式**：在ASP.NET Core Web API中使用MediatR来发布通知，例如在资源创建、更新或删除时发布通知。
5. **事件模式**：在ASP.NET Core Web API中使用MediatR来发布事件，例如在资源创建、更新或删除时发布事件。

你可以参考这些案例来了解如何使用MediatR。

如果你想查看更多关于MediatR的示例代码，请参考以下链接：

- [第一节：MediatR简介、快速上手、基于MediatR实现领域事件](https://www.cnblogs.com/yaopengfei/p/16672851.html)
- [ASP.NET Core中使用MediatR实现命令和中介者模式](https://cloud.tencent.com/developer/article/1362488)
- [ASP.NET Core中使用MediatR实现命令和中介者模式](https://www.cnblogs.com/yilezhu/p/9866068.html)
- [在 ASP.NET Core 项目中使用 MediatR 实现中介者模式](https://www.cnblogs.com/danvic712/p/get-started-with-mediatr-in-asp-net-core.html)

## FluentValidation
这是一个流行的.NET验证库，用于构建强类型的验证规则。它使用流畅的接口和lambda表达式来定义验证逻辑。

## polly
- **Polly是什么**：Polly是一个.NET的弹性和瞬态故障处理库，它允许开发者以流畅和线程安全的方式表达诸如重试、断路器、超时、隔离和回退等策略。
- **Polly的特点**：Polly提供了多种弹性策略，包括反应式策略和主动策略。反应式策略处理执行回调时抛出或返回的特定异常或结果。主动策略可以主动决定取消或拒绝执行回调。
- **Polly的使用**：要使用Polly，你必须提供一个回调并使用弹性管道执行它。弹性管道是一个或多个弹性策略的组合，如重试、超时和限流。Polly使用构建器来将这些策略集成到管道中。

## Benchmark.net
- **BenchmarkDotNet**：一个强大的.NET库，用于进行性能基准测试。它可以帮助你将方法转换为基准，跟踪它们的性能，并分享可复现的测量实验。它的使用方式和编写单元测试一样简单！
- **BenchmarkDotNet的特点**：它具有以下四个方面的特点：简单性，自动化，可靠性和友好性。它提供了简洁的API，让你可以用声明式的风格设计复杂的性能实验。它还能保证测量结果的准确性和稳定性，避免常见的基准测试错误，并在发现问题时给出警告。它还能以用户友好的形式呈现结果，包括表格，统计数据，直方图和图表等。
- **BenchmarkDotNet的应用**：它已经被17700多个GitHub项目采用，包括.NET Runtime, .NET Compiler, .NET Performance等。它支持多种运行时，语言，操作系统和处理器架构。它还能帮助你进行一些高级的性能分析任务，如测量内存开销和反汇编代码。


## AutoFac
是一个依赖注入框架

## AutoMapper
是一个自动转换类型的库

## Collections.pooled
代替原生集合的库，速度更快

## EFCoreSecondLevelCacheInterceptor
一个EF Core的缓存拦截器，用于在EF Core中使用Second Level Cache


## Hangfire
一个后台任务调度的库