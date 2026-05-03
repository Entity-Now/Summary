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

## InterLocked 
Interlocked 是一个线程安全的类，提供了原子性的操作，用于对某个变量进行自增、自减等操作，避免了多线程环境下因为竞争导致数据不一致的问题。

Interlocked 提供了以下方法：

- `Increment`：对整数变量进行自增操作。
- `Decrement`：对整数变量进行自减操作。
- `Exchange`：交换两个变量的值。
- `CompareExchange`：比较两个变量的值，如果相等就用第三个参数替换第一个参数的值。

使用 Interlocked 可以在多线程环境下对变量进行操作而不会出现数据不一致的情况。通常情况下，我们应该尽量避免使用 Interlocked，因为它的效率不如普通的变量操作。只有在确实需要在多线程环境下操作变量时，才应该使用 Interlocked。

## Parallel
`Parallel`是一个C#中的并行计算库，可以方便地实现多线程并行计算，提高程序的运行效率。下面是`Parallel`的详细使用方法：

1. 使用`Parallel.ForEach`方法实现并行循环：

   ```csharp
   Parallel.ForEach(source, item =>
   {
       // 这里是循环体
   });
   ```

   其中，`source`是需要遍历的集合或数组，`item`是集合或数组中的每一个元素。

2. 使用`Parallel.For`方法实现并行循环：

   ```csharp
   Parallel.For(0, count, i =>
   {
       // 这里是循环体
   });
   ```

   其中，`count`是循环次数，`i`是循环变量。

3. 使用`Parallel.Invoke`方法执行多个任务：

   ```csharp
   Parallel.Invoke(
       () =>
       {
           // 这里是第一个任务
       },
       () =>
       {
           // 这里是第二个任务
       },
       // ...
   );
   ```

   该方法可以同时执行多个任务，当所有任务都执行完毕后，该方法才会返回。

4. 设置并行度：

   ```csharp
   Parallel.ForEach(source, new ParallelOptions { MaxDegreeOfParallelism = 4 }, item =>
   {
       // 这里是循环体
   });
   ```

   通过设置`ParallelOptions`的`MaxDegreeOfParallelism`属性，可以控制并行度，即同时执行的任务数。

需要注意的是，在使用`Parallel`库时需要谨慎，避免出现线程安全问题。可以使用`Interlocked`类来进行原子操作，避免多线程竞争导致的数据不一致问题。