# comprehensions 推导式

Python 中的推导式是一种简洁而强大的语法，可以用来从一个数据序列构建另一个新的数据序列的结构体。推导式适用于生成列表、字典、集合和生成器。以下是一些常见的推导式及其示例：

### 列表推导式
格式：`[表达式 for 变量 in 列表]` 或 `[表达式 for 变量 in 列表 if 条件]`

示例：
```python
# 过滤掉长度小于或等于3的字符串列表，并将剩下的转换成大写字母
names = ['Bob', 'Tom', 'alice', 'Jerry', 'Wendy', 'Smith']
new_names = [name.upper() for name in names if len(name) > 3]
print(new_names)  # 输出: ['ALICE', 'JERRY', 'WENDY', 'SMITH']
```

### 字典推导式
格式：`{key_expr: value_expr for value in collection}` 或 `{key_expr: value_expr for value in collection if condition}`

示例：
```python
# 使用字符串及其长度创建字典
listdemo = ['Google', 'Runoob', 'Taobao']
newdict = {key: len(key) for key in listdemo}
print(newdict)  # 输出: {'Google': 6, 'Runoob': 6, 'Taobao': 6}
```

### 集合推导式
格式：`{expression for item in Sequence}` 或 `{expression for item in Sequence if condition}`

示例：
```python
# 计算数字1, 2, 3的平方数
setnew = {i ** 2 for i in (1, 2, 3)}
print(setnew)  # 输出: {1, 4, 9}
```

### 元组推导式（生成器表达式）
格式：`(expression for item in Sequence)` 或 `(expression for item in Sequence if condition)`

示例：
```python
# 生成包含数字1~9的元组
a = (x for x in range(1, 10))
print(tuple(a))  # 输出: (1, 2, 3, 4, 5, 6, 7, 8, 9)
```

