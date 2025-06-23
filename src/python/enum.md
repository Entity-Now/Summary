# 枚举 Enum

> 与c#不同的是，python中的枚举需要导入后使用，并且需要使用class继承Enum类

1. 直接输出是一个type name
2. 使用name属性获取枚举的名称
3. 使用value属性获取枚举的值
4. 枚举可以被循环


```py
from enum import Enum

class MyEnum(Enum):
    A = 1
    B = 2
    C = 3


print(MyEnum.A) # MyEnum.A
print(MyEnum.B.name) # B
print(MyEnum.C.value) # 3
```

## 循环

```py
for i in MyEnum:
    print(i.name , i.value)
```

## 比较

```py
if MyEnum.A == MyEnum(1):
    print('在里面')
```

## in

```py
print(1 in MyEnum) # true
print(55 in MyEnum) # false
```