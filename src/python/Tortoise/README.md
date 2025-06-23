# Tortoise

在 Tortoise ORM 中，提供了几种注册和初始化数据库的方式。以下是 Tortoise ORM 常见的注册和初始化方法：

### 1. `Tortoise.init()`

`Tortoise.init()` 是最常用的方式，用于初始化 Tortoise ORM 配置，包括数据库连接和模型模块的加载。

#### 示例：

```python
from tortoise import Tortoise

async def init_db():
    await Tortoise.init(
        db_url='sqlite://db.sqlite3',
        modules={'models': ['__main__']}
    )
    await Tortoise.generate_schemas()  # 创建数据库表
```

- `db_url`：指定数据库的 URL 地址，支持多种数据库类型，如 SQLite、PostgreSQL、MySQL 等。
- `modules`：指定模型模块，通常是包含 `Model` 类定义的 Python 模块。

### 2. `Tortoise.register_connection()`

`register_connection()` 用于手动注册多个数据库连接。这种方式适合你需要连接多个数据库的场景。

#### 示例：

```python
from tortoise import Tortoise

async def register_connections():
    await Tortoise.register_connection(
        'default', 'sqlite://db.sqlite3'
    )
    await Tortoise.register_connection(
        'secondary', 'postgres://user:password@localhost:5432/dbname'
    )
```

- `default`：第一个连接的名称。
- `sqlite://db.sqlite3`：数据库的 URL 地址。

### 3. `register_tortoise()`

`register_tortoise()` 是一个用于 FastAPI 和 Starlette 框架的简化注册方式。它是一个方便的方法来初始化数据库和注册模型。

#### 示例（FastAPI）：

```python
from tortoise.contrib.fastapi import register_tortoise
from fastapi import FastAPI

app = FastAPI()

register_tortoise(
    app,
    db_url='sqlite://db.sqlite3',
    modules={'models': ['__main__']},
    generate_schemas=True
)
```

- `app`：传入 FastAPI 的应用实例。
- `db_url`：数据库 URL 地址。
- `modules`：指定模型模块。
- `generate_schemas`：是否自动生成数据库表结构。

### 4. `Tortoise.close_connections()`

`close_connections()` 用于关闭所有数据库连接，通常在应用退出时使用。

#### 示例：

```python
from tortoise import Tortoise

async def close_db():
    await Tortoise.close_connections()
```

### 5. `Tortoise.generate_schemas()`

`generate_schemas()` 会基于模型定义生成数据库表。通常在应用启动时调用。

#### 示例：

```python
from tortoise import Tortoise

async def generate_schemas():
    await Tortoise.generate_schemas()
```

### 6. `Tortoise.get_connection()`

`get_connection()` 用于获取特定连接的数据库实例。适用于你手动管理多个数据库连接的场景。

#### 示例：

```python
from tortoise import Tortoise

async def get_connection():
    conn = await Tortoise.get_connection('default')
    return conn
```

- `'default'`：连接名称，通常在注册连接时指定。

### 7. `Tortoise.get_schema_generator()`

`get_schema_generator()` 用于获取生成数据库表结构的生成器，通常用于自定义表生成逻辑。

#### 示例：

```python
from tortoise import Tortoise

schema_gen = Tortoise.get_schema_generator()
print(schema_gen)
```

### 总结：

这些方法各自适用于不同的场景：

- `Tortoise.init()` 是最基础和常用的初始化方式，适合大多数应用。
- `register_tortoise()` 是 FastAPI 和 Starlette 的专用注册方式，简化了 ORM 的集成。
- `Tortoise.register_connection()` 用于多个数据库连接的注册。
- `Tortoise.close_connections()` 用于关闭数据库连接。
- `Tortoise.generate_schemas()` 和 `Tortoise.get_schema_generator()` 用于生成数据库表结构。
- `Tortoise.get_connection()` 用于获取连接实例。

这些方法和方式为你提供了灵活的数据库连接管理、模型注册和操作功能。
