# 其他类

## CancellationToken
C# 中的 CancellationToken 类是用于实现任务取消的机制。CancellationToken 可以使异步方法能够优雅地处理取消请求，避免不必要的计算开销或等待时间。

CancellationToken 包含一个 CancellationTokenSource 实例，后者是一个可用于发送取消请求的对象。当 CancellationTokenSource 调用 Cancel 方法时，CancellationToken 实例会发出一个取消请求信号，通知任务应该停止执行并且将自己标记为已取消状态。

使用 CancellationToken 的步骤如下：

1. 创建一个 CancellationTokenSource 实例：
```csharp
CancellationTokenSource cts = new CancellationTokenSource();
```

2. 通过 CancellationTokenSource.Token 属性获取一个 CancellationToken 实例：
```csharp
CancellationToken token = cts.Token;
```

3. 在异步方法中使用 CancellationToken，如下所示：
```csharp
public async Task MyMethod(CancellationToken token)
{
    while (true)
    {
        // 检查取消请求
        token.ThrowIfCancellationRequested();

        // 执行需要取消的代码
        await DoSomethingAsync();

        // 检查取消请求
        token.ThrowIfCancellationRequested();
    }
}
```

4. 在需要取消异步方法的地方调用 CancellationTokenSource 的 Cancel 方法：
```csharp
cts.Cancel();
```

CancellationToken 还提供了其他的一些方法和属性，比如：

- `CanBeCanceled`：获取一个值，表示 CancellationToken 是否可以被取消。
- `IsCancellationRequested`：获取一个值，表示 CancellationToken 是否已经被请求取消。
- `Register`：向 CancellationToken 添加取消请求回调方法。
- `ThrowIfCancellationRequested`：检查 CancellationToken 是否已经被请求取消，如果是则抛出 OperationCanceledException 异常。

总的来说，CancellationToken 类是一种非常方便的机制，可以帮助我们更好地管理异步任务，避免因为不必要的计算开销或等待时间导致应用程序响应变慢的问题。

## StopWatch 测试程序运行时间
Stopwatch 是 C# 中一个用于测量时间的类，通常用于性能分析、算法优化、程序调试等场景。Stopwatch 类封装了高精度计时器，可以精确地测量代码的执行时间。

使用 Stopwatch 类需要先创建一个 Stopwatch 实例，然后通过调用 Start 方法开始计时，调用 Stop 方法停止计时，最后通过 Elapsed 属性获取计时结果。具体使用方法如下：

```csharp
Stopwatch stopwatch = new Stopwatch();
stopwatch.Start();

// 执行需要计时的代码

stopwatch.Stop();
TimeSpan elapsed = stopwatch.Elapsed;
Console.WriteLine($"Execution time: {elapsed.TotalMilliseconds} ms");
```

Stopwatch 类提供了以下属性和方法：

- `IsRunning`：获取一个值，表示 Stopwatch 当前是否正在运行。
- `Elapsed`：获取一个 TimeSpan 结构体，表示 Stopwatch 自开始计时以来经过的时间。
- `ElapsedMilliseconds`：获取一个 long 值，表示 Stopwatch 自开始计时以来经过的毫秒数。
- `ElapsedTicks`：获取一个 long 值，表示 Stopwatch 自开始计时以来经过的计时周期数。
- `Reset`：重置 Stopwatch 的计时器，将 Elapsed 属性和其他计时数据设置为零。
- `Start`：开始或继续计时。
- `Stop`：停止计时。

需要注意的是，Stopwatch 的精度取决于系统硬件和操作系统，一般情况下可以精确到毫秒或微秒级别，但并不保证绝对的准确性。同时，在多线程环境下使用 Stopwatch 时需要注意同步问题，避免并发访问导致的计时结果错误。