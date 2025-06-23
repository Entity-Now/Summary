# 函数

## annotate

`annotate` 是 Tortoise ORM 提供的一种方法，用于在查询结果中添加额外的计算字段。这些计算字段可以基于数据库函数，如聚合函数（例如 `Count`、`Sum`、`Min`、`Max`）或表达式函数（例如 `Lower`、`Upper`）。通过 `annotate` 方法，你可以在不修改原始数据表结构的情况下，动态地生成额外的信息。

### 示例用法
假设我们有一个模型 `Tournament`，我们可以使用 `annotate` 方法来计算每个锦标赛的事件数量：

```python
from tortoise.functions import Count

class Tournament(Model):
    id = fields.IntField(primary_key=True)
    name = fields.TextField()

class Event(Model):
    id = fields.IntField(primary_key=True)
    name = fields.TextField()
    tournament = fields.ForeignKeyField("models.Tournament", related_name="events")

# 使用 annotate 方法来计算每个锦标赛的事件数量
tournaments = await Tournament.annotate(events_count=Count("events")).all()

for tournament in tournaments:
    print(f"Tournament: {tournament.name}, Event Count: {tournament.events_count}")
```

### 参数说明
- **`annotate(*args, **kwargs)`**：接受多个位置参数和关键字参数。关键字参数的键为新字段的名称，值为计算字段的表达式。
  - 例如：`annotate(events_count=Count("events"))`，其中 `events_count` 是新字段名，`Count("events")` 是计算表达式。

通过 `annotate` 方法，你可以方便地在查询中添加各种聚合和表达式函数，以满足复杂的数据分析需求。如果你有更多问题，随时告诉我！

## function


以下是 Tortoise ORM 中常用函数的通用使用说明和参数说明，这些函数主要用于数据库查询和数据处理：

| 函数名称 | 说明 | 示例用法 |
| --- | --- | --- |
| `Coalesce` | 返回非空值的第一个参数。通常用于处理可能为 `NULL` 的列。 | `Coalesce("column_name", "default_value")` |
| `Count` | 计算满足指定条件的记录数。 | `Count("column_name", _filter=Q(condition))` |
| `Length` | 返回字符串的长度。 | `Length("column_name")` |
| `Lower` | 将字符串转换为小写。 | `Lower("column_name")` |
| `Min` | 返回指定列的最小值。 | `Min("column_name")` |
| `Sum` | 返回指定列的总和。 | `Sum("column_name")` |
| `Trim` | 去掉字符串两端的空格。 | `Trim("column_name")` |
| `Upper` | 将字符串转换为大写。 | `Upper("column_name")` |

### 通用参数说明
- `column_name`: 需要操作的列名。
- `_filter`: 可选参数，指定筛选条件（仅适用于 `Count` 函数）。
- `default_value`: 当列值为 `NULL` 时使用的默认值（仅适用于 `Coalesce` 函数）。

### 示例用法
```python
from tortoise.functions import Coalesce, Count, Length, Lower, Min, Sum, Trim, Upper

# 示例模型
class Tournament(Model):
    id = fields.IntField(primary_key=True)
    name = fields.TextField()
    description = fields.TextField(null=True)

# 使用示例
async def example():
    # 使用 Coalesce 函数
    tournaments = await Tournament.annotate(clean_description=Coalesce("description", "N/A")).all()

    # 使用 Count 函数
    event_count = await Tournament.annotate(events_count=Count("events")).all()

    # 使用 Length 函数
    name_lengths = await Tournament.annotate(name_length=Length("name")).all()

    # 使用 Lower 函数
    lower_case_names = await Tournament.annotate(lower_name=Lower("name")).all()

    # 使用 Min 函数
    min_event_id = await Event.annotate(min_id=Min("id")).all()

    # 使用 Sum 函数
    total_event_id = await Event.annotate(total_id=Sum("id")).all()

    # 使用 Trim 函数
    trimmed_names = await Tournament.annotate(trimmed_name=Trim("name")).all()

    # 使用 Upper 函数
    upper_case_names = await Tournament.annotate(upper_name=Upper("name")).all()
```

这些函数可以用于构建复杂的查询和数据处理逻辑，帮助你更高效地操作数据库。如果你有更多具体问题或需要进一步的帮助，请告诉我！
