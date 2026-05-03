# Q 和 F 对象

在 Tortoise ORM 中，`Q` 和 `F` 对象用于**构建复杂查询**，类似于 Django ORM。

---

## **1. Q 对象**
`Q` 对象用于**组合多个查询条件**，支持 **AND（&）、OR（|）、NOT（~）** 操作符。  
它用于 **动态构建查询**，特别是在有可选过滤条件的情况下。

### **示例：Q 对象的使用**
```python
from tortoise.expressions import Q
from models import Book

# 查询 name="Python" 或 price 大于 50 的书籍
books = await Book.filter(Q(name="Python") | Q(price__gt=50))

# 查询 name="Python" 且 price 小于 100 的书籍
books = await Book.filter(Q(name="Python") & Q(price__lt=100))

# 查询 price 不等于 50 的书籍
books = await Book.filter(~Q(price=50))
```

🔹 **作用**：
- 允许 **OR 条件**（普通 `.filter(name="Python", price__gt=50)` 是 AND 关系）
- 允许 **动态构建查询**（可以根据条件是否存在来构造 `Q` 对象）

---

## **2. F 对象**
`F` 对象用于**引用数据库中的字段**，主要用于**字段间的比较或更新**。

### **示例：F 对象的使用**
```python
from tortoise.expressions import F
from models import Book

# 查询 price 大于 pages 数量的书籍
books = await Book.filter(price__gt=F("pages"))

# 将所有书籍的 price 提高 10
await Book.filter().update(price=F("price") + 10)

# 将 price 设为 pages 的 2 倍
await Book.filter().update(price=F("pages") * 2)
```

🔹 **作用**：
- 允许**字段之间的比较**（如 `price > pages`）
- 允许**数据库内的字段更新**（如 `price = price + 10`）
- 避免查询后再更新，提升**数据库性能**（直接在 SQL 层执行）

---

## **3. Q + F 组合使用**
```python
# 查询 price 大于 pages 并且 name 以 "Python" 开头的书籍
books = await Book.filter(Q(price__gt=F("pages")) & Q(name__startswith="Python"))
```

---

## **总结**
| 对象 | 作用 | 示例 |
|------|------|------|
| `Q` | **构造复杂查询**（支持 `&`、`|`、`~`） | `Book.filter(Q(name="Python") | Q(price__gt=50))` |
| `F` | **引用字段**（用于字段间比较或更新） | `Book.filter(price__gt=F("pages"))` |

**什么时候用？**
- **Q**：用于 **动态构建查询**，比如用户可选多个筛选条件时。
- **F**：用于 **字段计算**，比如 **批量更新** 时直接在数据库操作，提升性能。

你是要用 `Q` 和 `F` 来优化什么查询吗？😊