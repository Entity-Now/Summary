# 分支结构

## if 

```py
# 1. 简单的 if 语句
x = 5
if x > 0:
    print("x is positive")

# 2. if-else 语句
y = -3
if y >= 0:
    print("y is non-negative")
else:
    print("y is negative")

# 3. if-elif-else 语句
z = 0
if z > 0:
    print("z is positive")
elif z == 0:
    print("z is zero")
else:
    print("z is negative")

# 4. 带布尔表达式的 if 语句
a = 10
b = 20
if a < b and b > 0:
    print("a is less than b and b is positive")

# 5. 嵌套的 if 语句
score = 85
if score >= 60:
    if score >= 90:
        print("Grade A")
    else:
        print("Grade B")
else:
    print("Fail")

```

## if 的另一种用法

```py
num1 = float(5)
num2 = float(100)


print(num1 if num1 < 5 else num2) # 100
```

### if 嵌套使用

```py
# 示例：根据条件给变量赋值
x = 10
y = 20
z = 30

# 使用条件表达式来给变量赋值
result = x if x > y and x > z else (y if y > z else z)
print(result)  # 输出 30

```

## if 的骚操作

Python 中有很多有趣且高效的 `if` 语句用法，可以帮助你写出更简洁和表达力更强的代码。以下是一些常见的示例：

### `not`
反转一个条件的布尔值。例如，检查变量 `x` 是否为假值。

```python
x = 0
if not x:
    print("x is False or 0")
```

### `in`
检查一个元素是否在某个集合（如列表、元组或字符串）中。

```python
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits:
    print("Banana is in the list")
```

### `not in`
检查一个元素是否不在某个集合中。

```python
fruits = ["apple", "banana", "cherry"]
if "grape" not in fruits:
    print("Grape is not in the list")
```

### 三元表达式（条件表达式）
在一行代码中进行条件判断。

```python
x = 5
result = "Positive" if x > 0 else "Non-positive"
print(result)
```

### 链式比较
在一个表达式中进行多重比较。

```python
x = 10
if 0 < x < 20:
    print("x is between 0 and 20")
```

### `any` 和 `all`
使用 `any` 检查集合中是否有至少一个元素为真，使用 `all` 检查集合中是否所有元素都为真。

```python
# any 示例
values = [0, 1, 2, 3]
if any(values):
    print("At least one value is True")

# all 示例
values = [1, 2, 3]
if all(values):
    print("All values are True")
```

### `is`
检查两个变量是否引用同一个对象。

```python
a = [1, 2, 3]
b = a
if a is b:
    print("a and b refer to the same object")
```

### `is not`
检查两个变量是否引用不同的对象。

```python
a = [1, 2, 3]
b = [1, 2, 3]
if a is not b:
    print("a and b refer to different objects")
```

这些技巧和用法可以帮助你编写更优雅和高效的代码。如果你还有其他具体问题或者需要更多示例，请告诉我！
