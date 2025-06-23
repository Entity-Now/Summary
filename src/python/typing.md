# python 类型

```py
from typing import List, Tuple, Dict, Any, Union, Optional

# List 类型
x: List[int] = [1, 2, 3]

# Tuple 类型
y: Tuple[int, str] = (1, "hello")

# Dict 类型
z: Dict[str, int] = {"apple": 1, "banana": 2}

# Any 类型
a: Any = "Could be any type"

# Union 类型，表示多种类型的组合
b: Union[int, str] = 10

# Optional 类型，表示可以为某个类型或者是 None
c: Optional[str] = None

```

## callable 类型

> 类似于c#中的Func/delegate类型

```py
callable: Callable = lambda x : x + 1

callable(3) # input 4
```

## Type 类型

> 表示某个类型本身，类似于c#中的typeof(xxx)

```py
from typing import Type

# Type 类型
def get_class(cls: Type[int]) -> str:
    return cls.__name__

print(get_class(int))  # 输出: int

```

## Iterator & Iterable

> 类似于c#中IEnumerable & IEnumerable 类型

1. Iterable 表示可迭代对象，例如列表、元组、字典等
2. Iterator 表示迭代器，例如生成器函数返回的迭代器对象

```py
from typing import Iterable, Iterator

# Iterable 类型
def get_elements(iterable: Iterable[int]) -> int:
    return sum(iterable)

# Iterator 类型
def get_next(iterator: Iterator[int]) -> int:
    return next(iterator)

```

### 迭代器

> python 中的迭代器

```py
class MyIterator:
    def __init__(self, start, end):
        self.current = start
        self.end = end

    def __iter__(self):
        return self  # 返回迭代器本身

    def __next__(self):
        if self.current >= self.end:
            raise StopIteration  # 如果迭代完毕，抛出 StopIteration 异常
        self.current += 1
        return self.current - 1

# 使用自定义迭代器
iterator = MyIterator(0, 5)
for num in iterator:
    print(num)

```

> 手动操作迭代器

```py
my_list = [1, 2, 3]
it = iter(my_list)

print(next(it))  # 输出: 1
print(next(it))  # 输出: 2
print(next(it))  # 输出: 3

```

## NewType 

> 用于创建新的类型，可以用于类型检查，但不会影响运行时行为

```py
from typing import NewType

# NewType 类型
UserID = NewType('UserID', int)

```

## Literal 类型

> 表示某个具体的值类型（常用于限制某些值）。

如：

```py
from typing import Literal

# Literal 类型
def make_request(method: Literal['GET', 'POST']) -> None:
    print(f"Request method: {method}")

make_request('GET')  # 有效
make_request('POST')  # 有效

make_request('PUT')  # 无效


```

## Annotated 类型

> Annotated 是 typing 模块中的一个泛型类，可以将附加的元数据与类型一同传递。例如，我们可以使用它来指定一个字段的额外约束、校验规则等。

```py
from typing import Annotated

# 基本使用 - 添加描述信息
name: Annotated[str, "User's name"]

# 多个元数据 - 添加最小值和最大值
age: Annotated[int, "minimum: 18", "maximum: 100"]

# 与 Pydantic 配合使用 - 添加描述性元数据
from pydantic import BaseModel

class User(BaseModel):
    age: Annotated[int, "minimum: 18", "maximum: 100"]

# 结合 FastAPI 使用 - 额外元数据作为参数
from fastapi import FastAPI

app = FastAPI()

class UserModel(BaseModel):
    name: Annotated[str, "Name of the user", "required"]
    age: Annotated[int, "Age of the user", "minimum: 18"]

@app.post("/user")
def create_user(user: UserModel):
    return {"name": user.name, "age": user.age}

```

### 将一个非对象的参数加入到body中

> 例如，将一个字符串作为参数加入到body中，并且这个字符串是必填的

```py
from fastapi import FastAPI, Path, Body

@app.post("/test_3")
async def test_3(item_id: Annotated[str, "required", Body()]):
    return item_id
```