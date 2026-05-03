# 事务


Tortoise ORM 支持数据库事务，允许你在操作数据库时将一组操作作为一个不可分割的单元来执行。如果其中任何一个操作失败，整个事务会回滚，以保证数据的一致性。

以下是 Tortoise ORM 中一些常用的事务管理方法：

| 方法名称 | 说明 |
| --- | --- |
| `in_transaction()` | 启动一个新的数据库事务，使用 `async with` 语法。 |
| `atomic()` | 自动管理事务的装饰器函数，可用于装饰异步函数。 |

### 使用 `in_transaction()`
这个方法用于在代码块中启动一个新的事务，确保所有操作要么全部成功，要么全部失败：

```python
from tortoise.transactions import in_transaction

async def run():
    async with in_transaction() as connection:
        event = Event(name="Test")
        await event.save(using_db=connection)
        await Event.filter(id=event.id).using_db(connection).update(name="Updated name")
        # 更多数据库操作...
```

### 使用 `atomic()`
这个方法是一个装饰器，用于自动管理事务：

```python
from tortoise.transactions import atomic

@atomic()
async def run():
    event = Event(name="Test")
    await event.save()
    await Event.filter(id=event.id).update(name="Updated name")
    # 更多数据库操作...
```

在这两种方法中，所有的数据库操作都会在一个事务中执行。如果操作中有任何异常发生，事务会自动回滚，以确保数据的一致性。

如果你有更多问题或者需要更多示例，随时告诉我！

