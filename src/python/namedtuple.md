# namedtuple

`namedtuple` 是 Python `collections` 模块中的一个工厂方法，它用于创建**不可变的、可读性强的元组对象**。它类似于 `tuple`，但允许你使用**字段名称**来访问元素，而不是使用索引。

---

## **1. namedtuple 的基本使用**
```python
from collections import namedtuple

# 创建一个 namedtuple 类型
Person = namedtuple('Person', ['name', 'age', 'city'])

# 创建 namedtuple 实例
p = Person(name="Alice", age=25, city="New York")

# 访问字段
print(p.name)  # 输出: Alice
print(p.age)   # 输出: 25
print(p.city)  # 输出: New York
```
🔹 **与普通 `tuple` 的区别**：  
- 普通 `tuple` 只能通过索引访问，`namedtuple` 可以通过**属性名**访问，代码更可读。

---

## **2. namedtuple 的方法**
| 方法 | 作用 |
|------|------|
| `._asdict()` | 将 namedtuple 转换为 `OrderedDict` |
| `._replace(**kwargs)` | 创建一个新的 namedtuple 实例，修改指定字段值 |
| `._fields` | 返回字段名称的元组 |
| `._make(iterable)` | 通过可迭代对象创建 namedtuple |

### **示例**
```python
# 1. 使用 _asdict() 转换为字典
print(p._asdict())  # {'name': 'Alice', 'age': 25, 'city': 'New York'}

# 2. 使用 _replace() 修改字段值（返回新的 namedtuple）
p2 = p._replace(age=30)
print(p2)  # Person(name='Alice', age=30, city='New York')

# 3. 查看字段名称
print(Person._fields)  # ('name', 'age', 'city')

# 4. 使用 _make() 从列表创建 namedtuple
data = ["Bob", 28, "Los Angeles"]
p3 = Person._make(data)
print(p3)  # Person(name='Bob', age=28, city='Los Angeles')
```

---

## **3. namedtuple 的应用场景**
### ✅ **适用于**
- **返回多个值**，但又不想用字典（提高可读性）。
- **作为轻量级对象**，避免定义类（占用更少的内存）。
- **数据不可变**（类似 `tuple`，不支持修改）。

### ❌ **不适用于**
- 需要**修改属性**的场景（可以使用 `dataclasses`）。
- 需要**定义方法**的对象（可以使用 `class`）。

---

## **4. namedtuple vs. dataclass**
| 特性 | `namedtuple` | `dataclass` |
|------|-------------|-------------|
| 主要用途 | 轻量级不可变对象 | 结构化数据类 |
| 是否可变 | ❌ 不可变 | ✅ 可变（默认） |
| 可否添加方法 | ❌ 不可以 | ✅ 可以 |
| 内存占用 | ⬇️ 更少 | ⬆️ 略多 |
| 适用场景 | 仅存储数据，不修改 | 需要修改属性、添加方法 |

如果你需要**可变对象**，推荐使用 `dataclasses`：
```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str
```

---

## **总结**
- `namedtuple` 是 `tuple` 的增强版，允许**按名称访问字段**。
- **不可变**，适用于**轻量级数据结构**，如坐标、数据库行等。
- **主要方法**：`_asdict()`（转字典）、`_replace()`（修改值）、`_fields`（字段列表）。
- 如果需要可变对象，可以使用 `dataclass` 代替。
