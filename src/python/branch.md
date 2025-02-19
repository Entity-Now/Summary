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

