# lambda 表达式

> python的lambda表达式和c#的有所不同

## 基本使用

```

l = lambda x: x + 1
# lambda 是一个关键词，用于定义lambda，其后空格后的是参数，冒号后的是返回值

print(l(5)) # 6
```

### 与c#的对比

```code
(x)=> x + 1

lambda x: x + 1
```

## 在函数中使用

```py
l = [1,3,5,7,9]

l_2 = sorted(l, key=lambda x: x, reverse=True) # lambda function


print(l_2) # [9, 7, 5, 3, 1]
```
