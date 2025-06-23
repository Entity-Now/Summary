# python learn

## 基本语法

1. python不使用大括号来定义代码块，而是使用缩进来定义代码块。
2. python中使用#来注释代码
3. python中使用三引号（'''或"""）来定义多行字符串
4. python中使用冒号（:）来定义函数、类、循环、条件语句等代码块
5. python是动态类型语言，无需提前声明变量，类型在运行时确定

### 基本类型

1. int 整数
2. float 浮点数
3. bool 布尔值
4. str 字符串

### 容器类型

1. list 列表，类似c#的list
2. tuple 元组，只读列表
3. dict 字典，类似c#的dictionary
4. set 集合，类似c#的hashSet

### 特殊类型

1. None 空值，类似c#中的null
2. bytes 二进制数据，如

    ```py
    text = b"hello"
    ```

3. range 范围，如

    ```py
    for i in range(10):
        print(i)
    ```

### 自定义类型

1. class 类，如

    ```py
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

        def say_hello(self):
            print("Hello, my name is " + self.name + ", I'm " + str(self.age) + " years old.")
    ```

2. function 函数，如

    ```py
    def add(a, b):
        return a + b
    ```

## throw & raise 

> python中抛出异常不用throw，而是使用raise

```py
raise Exception("error message")
```

### try & except

```py
@app.post("/test_4")
async def test_4():
    try:
        print('我是被try包裹的代码.')
        raise HTTPException("我主动抛出异常了.")
    except Exception as e:
        print(e)
    return 'hello'
```

### with 

Python 中的 `with` 语句和 C# 中的 `using` 语句在功能上是类似的。它们都是用于管理资源的上下文管理器，确保在代码块结束时释放资源。

在 C# 中，`using` 语句用于管理和释放资源，例如文件流、数据库连接等：

```csharp
using (var file = new StreamWriter("test.txt"))
{
    file.WriteLine("Hello, World!");
}
// 这里文件流自动关闭，不需要显式调用 file.Close()
```

在 Python 中，`with` 语句实现了类似的功能，确保资源在代码块结束时被正确释放：

```python
with open("test.txt", "w") as file:
    file.write("Hello, World!")
# 这里文件流自动关闭，不需要显式调用 file.close()
```

两者都利用了上下文管理器的概念。在 Python 中，实现上下文管理器需要定义 `__enter__` 和 `__exit__` 方法，而在 C# 中，实现 `IDisposable` 接口并定义 `Dispose` 方法即可。