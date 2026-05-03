# decorator 装饰器

> 装饰器本质上是一个函数，它接受一个函数作为参数，并返回一个新的函数。
1. args （arguments）的缩写，表示函数可以接受任意数量的参数
2. kwargs （keyword arguments）的缩写，表示函数可以接受任意数量的关键字参数

```py
def MyDecorator(func): # MyDecorator 是自定义名称，但是需要包含一个func参数
    def custom(*args, **kwargs):: # custom也是自定义名称
        print('我是装饰器')
        func(*args, **kwargs) # 调用被包装的函数
        print('装饰器---')
    return custom()

@MyDecorator
def MyFunc():
    print('我是方法')

```
