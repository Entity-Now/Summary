# 属性声明

## 静态属性

:::tip
与C#不一样的是，直接在class中声明的属性都是静态的，可以在ClassMethod中调用，并且每个实例都共享一个属性。
:::

```python
class test:
    Age = 18
```


## 实例属性

:::tip
这样声明的属性才是实例属性，每个实例都引用都不一样。
:::

```python
class test:
    def __init__(self, a, b):
        self.a = "hello"
        self.b = "world"

```
