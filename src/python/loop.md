# 循环

```py
# 1. 使用 for 循环遍历列表
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)

# 2. 使用 for 循环结合 range() 生成一系列数字
for i in range(5):  # 从 0 到 4
    print(i)

# 3. 使用 for 循环遍历字典
my_dict = {'a': 1, 'b': 2, 'c': 3}
for key, value in my_dict.items():
    print(f"{key}: {value}")

# 4. 使用 while 循环，直到条件为 False
count = 0
while count < 5:
    print(count)
    count += 1  # 更新条件

# 5. 使用 break 退出循环
for num in range(10):
    if num == 5:
        break  # 当 num 等于 5 时退出循环
    print(num)

# 6. 使用 continue 跳过当前循环
for num in range(5):
    if num == 3:
        continue  # 当 num 等于 3 时跳过当前循环
    print(num)

# 7. 使用 else 语句与循环结合，循环正常结束时执行 else
for num in range(5):
    print(num)
else:
    print("循环结束")

# 8. 嵌套循环
for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")

```


## for 循环和else结合

> 在 Python 中，else 语句不仅可以与 if 语句结合使用，也可以与 for 或 while 循环结合。当循环正常结束时（即没有因 break 语句退出循环），else 语句会执行。

```py
# 示例：使用 else 与 for 循环结合
for num in range(5):
    print(num)
else:
    print("循环正常结束")

```

## 使用zip()

> zip() 函数可以将多个可迭代对象组合成一个元组，常与 for 循环结合，用于并行迭代多个序列。

```py
names = ["Alice", "Bob", "Charlie"]
scores = [85, 90, 88]

# 使用 zip() 同时遍历两个列表
for name, score in zip(names, scores):
    print(f"{name}: {score}")

```

## 列表推导式

```py
# 生成一个包含 0 到 9 的偶数的列表
even_numbers = [x for x in range(10) if x % 2 == 0] # for 结束后可以跟随if，符合条件才输出结果
print(even_numbers)  # 输出 [0, 2, 4, 6, 8]

```