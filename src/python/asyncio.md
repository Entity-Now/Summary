# asyncio 

asyncio 是 Python 中用于编写异步 I/O 操作的标准库。它提供了一个事件循环来执行异步任务，并且允许你编写协程（coroutines）来处理并发任务，尤其适用于网络编程和 I/O 密集型操作。

## 基本功能

| 方法/功能                      | 说明                                                         |
|-------------------------------|--------------------------------------------------------------|
| `asyncio.run(coro)`            | 启动事件循环并运行指定的协程 `coro`，执行完毕后关闭事件循环。 |
| `asyncio.create_task(coro)`    | 创建一个 Task 来调度协程执行，并将其添加到事件循环中。       |
| `asyncio.sleep(delay)`         | 暂停协程 `delay` 秒，模拟异步 I/O 操作。                     |
| `asyncio.gather(*tasks)`       | 运行多个协程任务并返回结果，直到所有任务完成。                |
| `asyncio.wait(*tasks)`         | 等待多个协程任务完成，可以指定条件如 `FIRST_COMPLETED`。     |
| `asyncio.Event()`              | 创建一个事件对象，协程可通过 `wait()` 和 `set()` 方法进行同步。 |
| `asyncio.Queue()`              | 创建一个异步队列，用于在协程之间传递数据。                   |
| `asyncio.Semaphore(value)`     | 创建一个信号量对象，用于限制并发任务的数量。                 |
| `asyncio.Lock()`               | 创建一个锁对象，用于协程之间的互斥同步。                      |
| `asyncio.Condition()`          | 创建一个条件对象，用于协程间的同步与通信。                   |
| `asyncio.shield(coro)`         | 保护协程，使其在事件循环中不会被取消。                       |
| `asyncio.to_thread(func, *args)`| 在后台线程中运行阻塞函数 `func`，并返回一个 `Future`。       |
| `asyncio.Futures`              | 用于在事件循环中表示某些尚未完成的操作。                     |


## 示例

好的，以下是 `asyncio` 常用方法的简洁示例代码：

```python
import asyncio

# 1. asyncio.run(coro)
async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("World")
asyncio.run(say_hello())  # 启动事件循环并运行协程

# 2. asyncio.create_task(coro)
async def task_example():
    print("Task Started")
    await asyncio.sleep(1)
    print("Task Ended")
task = asyncio.create_task(task_example())  # 创建并调度任务
asyncio.run(task)

# 3. asyncio.sleep(delay)
async def sleep_example():
    print("Sleeping for 2 seconds")
    await asyncio.sleep(2)  # 暂停协程
    print("Woke up!")
asyncio.run(sleep_example())

# 4. asyncio.gather(*tasks)
async def gather_example():
    task1 = asyncio.create_task(sleep_example())
    task2 = asyncio.create_task(say_hello())
    await asyncio.gather(task1, task2)  # 同时运行多个任务
asyncio.run(gather_example())

# 5. asyncio.wait(*tasks)
async def wait_example():
    task1 = asyncio.create_task(sleep_example())
    task2 = asyncio.create_task(say_hello())
    await asyncio.wait([task1, task2])  # 等待多个任务完成
asyncio.run(wait_example())

# 6. asyncio.Event()
async def event_example():
    event = asyncio.Event()
    async def waiter():
        print("Waiting for event...")
        await event.wait()  # 等待事件被设置
        print("Event triggered!")
    async def setter():
        await asyncio.sleep(1)
        event.set()  # 设置事件
    await asyncio.gather(waiter(), setter())
asyncio.run(event_example())

# 7. asyncio.Queue()
async def queue_example():
    queue = asyncio.Queue()
    async def producer():
        await queue.put(42)  # 向队列中添加数据
    async def consumer():
        item = await queue.get()  # 从队列中获取数据
        print(f"Consumed: {item}")
    await asyncio.gather(producer(), consumer())
asyncio.run(queue_example())

# 8. asyncio.Semaphore(value)
async def semaphore_example():
    semaphore = asyncio.Semaphore(2)  # 限制并发数
    async def worker(id):
        async with semaphore:
            print(f"Worker {id} started")
            await asyncio.sleep(1)
            print(f"Worker {id} finished")
    await asyncio.gather(worker(1), worker(2), worker(3))
asyncio.run(semaphore_example())

# 9. asyncio.Lock()
async def lock_example():
    lock = asyncio.Lock()
    async def task_with_lock(id):
        async with lock:
            print(f"Task {id} started")
            await asyncio.sleep(1)
            print(f"Task {id} finished")
    await asyncio.gather(task_with_lock(1), task_with_lock(2))
asyncio.run(lock_example())

# 10. asyncio.Condition()
async def condition_example():
    condition = asyncio.Condition()
    async def waiter():
        async with condition:
            print("Waiting for condition...")
            await condition.wait()  # 等待条件被满足
            print("Condition met!")
    async def setter():
        await asyncio.sleep(1)
        async with condition:
            condition.notify()  # 满足条件，通知等待的协程
    await asyncio.gather(waiter(), setter())
asyncio.run(condition_example())

# 11. asyncio.shield(coro)
async def shield_example():
    async def long_task():
        print("Long task started")
        await asyncio.sleep(2)
        print("Long task finished")
    task = asyncio.create_task(long_task())
    await asyncio.shield(task)  # 防止协程被取消
asyncio.run(shield_example())

# 12. asyncio.to_thread(func, *args)
def blocking_io():
    print("Performing blocking I/O")
    return "Done"
async def thread_example():
    result = await asyncio.to_thread(blocking_io)  # 在后台线程中运行阻塞操作
    print(result)
asyncio.run(thread_example())
```

这些代码展示了每个 `asyncio` 常用方法的基本用法，按照顺序进行演示。每段代码简单地描述了该功能的目的，并通过异步协程来进行操作。如果你有具体问题或想要深入了解某个方法，可以继续问我！