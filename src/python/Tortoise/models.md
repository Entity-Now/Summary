# Model 相关的功能

Tortoise ORM 是一个为 Python 提供的异步 ORM 框架，类似于 Django ORM，但支持异步操作。以下是一些常用功能和方法的表格：

| 方法/功能                  | 简单说明                                                     |
| -------------------------- | ------------------------------------------------------------ |
| `Model.create()`           | 创建并保存一个新实例到数据库。                               |
| `Model.get()`              | 获取符合条件的单个对象，若不存在则抛出 `DoesNotExist` 异常。 |
| `Model.all()`              | 获取所有记录，返回一个查询集（QuerySet）。                   |
| `Model.filter()`           | 过滤查询，返回符合条件的对象列表。                           |
| `Model.exclude()`          | 排除符合条件的对象，返回不满足条件的查询结果。               |
| `Model.update()`           | 更新查询结果中的字段，返回受影响的行数。                     |
| `Model.delete()`           | 删除符合条件的记录，返回受影响的行数。                       |
| `Model.first()`            | 获取符合条件的第一个对象。                                   |
| `Model.last()`             | 获取符合条件的最后一个对象。                                 |
| `Model.exists()`           | 判断某个条件是否存在符合的对象，返回 `True` 或 `False`。     |
| `Model.create_async()`     | 异步创建并保存一个新实例到数据库。                           |
| `Model.all_async()`        | 异步获取所有记录，返回一个查询集（QuerySet）。               |
| `Model.filter_async()`     | 异步过滤查询，返回符合条件的对象列表。                       |
| `Model.update_async()`     | 异步更新查询结果中的字段，返回受影响的行数。                 |
| `Model.delete_async()`     | 异步删除符合条件的记录，返回受影响的行数。                   |
| `Model.save()`             | 保存实例到数据库，若是新对象则插入，否则更新。               |
| `Model.save_async()`       | 异步保存实例到数据库，若是新对象则插入，否则更新。           |
| `Model.count()`            | 计算查询集中的记录数。                                       |
| `Model.count_async()`      | 异步计算查询集中的记录数。                                   |
| `Model.select_related()`   | 获取关联模型数据，执行连接查询。                             |
| `Model.prefetch_related()` | 获取关联模型数据，执行独立查询并进行数据预取。               |

这些是 Tortoise ORM 中一些常见的功能方法，适用于日常操作数据库时的异步和同步处理。如果有更具体的需求，欢迎继续提问！

## Model 示例

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    birth_date = fields.DateField()

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=200)
    published_date = fields.DateField()
    author = fields.ForeignKeyField('models.Author', related_name='books')
```
