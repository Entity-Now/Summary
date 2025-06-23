# pydantic 库

> `pedantic` 中的e改为y = `pydantic` 发音是一样的

## 安装

```py
pip install pydantic
```

## 基本使用


```py
from pydantic import BaseModel

class Address(BaseModel):
    street: str
    city: str

class User(BaseModel):
    name: str
    address: Address

user = User(name="John Doe", address={"street": "123 Main St", "city": "Somewhere"})
print(user)

```

## 字段验证 (Validator)

```py
from pydantic import BaseModel, validator

class User(BaseModel):
    name: str
    age: int
    
    @validator('name')
    def check_name(cls, value):
        if not value.isalpha():
            raise ValueError('Name must only contain letters')
        return value

    @validator('age')
    def check_age(cls, value):
        if value < 0:
            raise ValueError('Age cannot be negative')
        return value

user = User(name='John', age=30)  # 正常
# user = User(name='John123', age=-5)  # 会抛出验证错误

```

### 对整个模型进行验证

```py

from pydantic import BaseModel, root_validator

class User(BaseModel):
    first_name: str
    last_name: str
    email: str

    @root_validator
    def check_names(cls, values):
        first_name = values.get('first_name')
        last_name = values.get('last_name')
        if first_name == last_name:
            raise ValueError('First name and last name cannot be the same')
        return values

# 测试
# user = User(first_name="John", last_name="John", email="john@example.com")  # 会抛出错误

```

## pydantic 中的field
`Pydantic` 中的 `Field` 是一个用于定义字段属性的函数，可以为模型字段添加额外的元数据、设置默认值、验证约束等。它通常用于替代直接在模型类中给字段赋值的方式，可以让你更灵活地配置模型的字段行为。

### 1. **定义字段的默认值和默认工厂**
`Field` 允许你为字段设置默认值或使用 `default_factory` 设置动态生成的默认值。

```python
from pydantic import BaseModel, Field
from datetime import datetime

class Event(BaseModel):
    name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)  # 动态默认值

event = Event(name="My Event")
print(event.timestamp)  # 输出当前时间
```

### 2. **字段描述**
你可以为字段添加描述性文本，通过 `description` 参数，通常用于文档生成，如 FastAPI 的 OpenAPI 文档。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., description="The name of the user")
    age: int = Field(..., description="The age of the user")

user = User(name="John", age=30)
print(user)
```

在这个例子中，`name` 和 `age` 字段都有相应的描述，当生成 OpenAPI 文档时，描述会出现在文档中。

### 3. **字段的别名**
`Field` 可以为字段指定别名，用于序列化时改变字段的名称。例如，可以将模型的字段名与 JSON 中的键名不同。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., alias="full_name")
    age: int

user = User(full_name="John", age=30)
print(user.name)  # 输出 John
```

在这个例子中，`name` 字段使用了 `full_name` 作为别名，在数据输入时可以使用 `full_name`，但内部字段名仍然是 `name`。

### 4. **限制字段的值**
可以使用 `gt`、`ge`、`lt` 和 `le` 等参数来对字段值进行限制，如限制一个数值字段的最小值和最大值。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    age: int = Field(..., ge=18, le=100)  # 限制年龄范围为 18 到 100

# 这个会验证年龄是否在 18 到 100 之间
user = User(age=25)
print(user)
```

这里的 `ge=18` 表示年龄不能小于 18，`le=100` 表示年龄不能大于 100。如果数据不满足这些限制，`Pydantic` 会抛出验证错误。

### 5. **正则表达式验证**
通过 `regex` 参数，你可以为字段指定正则表达式，用来验证字段值是否符合某个模式。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    email: str = Field(..., regex=r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')

# 只允许符合正则表达式的邮箱格式
user = User(email="example@example.com")
print(user)
```

在这个例子中，`email` 字段要求符合常见的电子邮件格式。

### 6. **字段的最小和最大长度**
`Field` 允许你为字符串类型的字段设置最小和最大长度限制。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., min_length=3, max_length=50)

# 名字必须在 3 到 50 个字符之间
user = User(name="John Doe")
print(user)
```

这里，`min_length=3` 和 `max_length=50` 限制了 `name` 字段的字符长度。

### 7. **字段的可选性（Optional）**
使用 `Optional` 时，你可以表示字段是可选的，并且可以为字段设置默认值。

```python
from pydantic import BaseModel, Field
from typing import Optional

class User(BaseModel):
    name: str
    email: Optional[str] = Field(None, description="The user's email")

user = User(name="John")
print(user.email)  # 输出 None
```

在这个例子中，`email` 字段是可选的，如果没有提供，将默认为 `None`。

### 8. **使用 `const` 设置常量字段**
你可以使用 `const` 参数，要求某个字段的值始终是一个常量。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    status: str = Field(..., const="active")  # status 必须为 "active"

# 如果 status 不是 "active"，会抛出验证错误
user = User(status="active")
print(user)
```

### 9. **字段的 `exclude` 参数**
当你转换为字典或 JSON 时，可以排除某些字段，使用 `exclude` 选项。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str
    age: int

user = User(name="John", age=30)
print(user.dict(exclude={"age"}))  # 输出 {'name': 'John'}，排除了 age 字段
```

### 10. **通过 `gt` 和 `lt` 限制数值范围**
你可以使用 `gt`（greater than）和 `lt`（less than）来限制字段的值。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    age: int = Field(..., gt=18)  # 年龄必须大于 18

user = User(age=25)
print(user)
```

### 11. **控制字段是否允许为空（`None`）**
可以通过 `allow_none` 参数来控制字段是否允许 `None` 值。

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(..., allow_none=False)

# name 字段不能为 None
```

### 总结

`Field` 是 `Pydantic` 中的一个非常强大的功能，可以让你灵活地控制字段的行为，主要功能包括：

- **默认值和动态默认值** (`default` 和 `default_factory`)
- **字段描述** (`description`)
- **字段别名** (`alias`)
- **字段值的限制** (`ge`, `le`, `gt`, `lt`, `min_length`, `max_length`, `regex`)
- **自定义字段验证**（`const`）
- **Optional 字段**（可选字段）
- **排除字段**（`exclude`）
- **常量值字段**（`const`）

通过 `Field`，你可以更加精细地控制数据模型的验证逻辑，并且方便地与外部系统进行交互。