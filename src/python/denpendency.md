# python 依赖注入

| 函数/方法/类               | 说明                              |
|---------------------------|-----------------------------------|
| `Depends`                  | 用于定义依赖关系的类              |
| `Depends()`                | 创建依赖实例                       |
| `FastAPI`                  | FastAPI 应用类，支持依赖注入       |
| `Dependency`               | 依赖注入的核心类，继承自 Depends  |
| `Request`                  | 请求对象，常用于获取依赖中的请求   |
| `Response`                 | 响应对象，常用于获取依赖中的响应   |
| `Body`                     | 请求体依赖注入                    |
| `Query`                    | 查询参数依赖注入                  |
| `Path`                     | 路径参数依赖注入                  |
| `Header`                   | 请求头依赖注入                    |
| `Cookie`                   | Cookie 参数依赖注入               |
| `Security`                 | 安全认证相关的依赖注入            |
| `OAuth2PasswordBearer`     | OAuth2 密码 bearer 认证依赖       |
| `OAuth2PasswordRequestForm`| OAuth2 密码请求表单依赖           |
| `Depends`(async)           | 异步依赖注入                      |
| `BackgroundTasks`          | 背景任务依赖注入                  |
| `APIRouter`                | 路由器类，支持依赖注入            |
| `BaseModel`                | Pydantic 模型类，支持在依赖注入中使用 |

## 简单应用

```python
from fastapi import FastAPI, Depends

# 创建一个服务类
class DatabaseService:
    def __init__(self, db_url: str):
        self.db_url = db_url

    def connect(self):
        return f"Connecting to database at {self.db_url}"

# 创建FastAPI应用
app = FastAPI()

# 创建一个依赖注入函数
def get_database_service() -> DatabaseService:
    # 创建数据库服务实例并注入
    return DatabaseService(db_url="mysql://localhost:3306")

# 使用依赖注入的方式注入服务
@app.get("/")
def read_root(db_service: DatabaseService = Depends(get_database_service)):
    # 使用注入的数据库服务
    return {"message": db_service.connect()}
``` 

### 简单说明：

1. `DatabaseService` 是我们自定义的服务类，具有 `connect` 方法。
2. `get_database_service` 函数负责创建并返回 `DatabaseService` 的实例。
3. 在 `read_root` 路由函数中，通过 `Depends(get_database_service)` 注入 `DatabaseService` 实例，并在请求中使用该服务。

## 类的依赖注入

Python 的 FastAPI 中，依赖注入主要是通过 **函数** 来实现的，因为 FastAPI 会通过 `Depends()` 来解析和注入依赖关系，函数是最常用的方式。不过，FastAPI 也可以直接注入类实例，尤其是在通过 **类实例化** 的方式时。


### 示例：注入类实例

```python
from fastapi import FastAPI, Depends

# 创建服务类
class DatabaseService:
    def __init__(self, db_url: str):
        self.db_url = db_url

    def connect(self):
        return f"Connecting to database at {self.db_url}"

# 创建FastAPI应用
app = FastAPI()

# 直接注入类实例
@app.get("/")
def read_root(db_service: DatabaseService = Depends(DatabaseService(db_url="mysql://localhost:3306"))):
    # 使用注入的数据库服务
    return {"message": db_service.connect()}
```

### 说明：

1. 通过 `Depends(DatabaseService(db_url="mysql://localhost:3306"))`，直接将 `DatabaseService` 类注入到路由函数中。
2. 在这个例子中，FastAPI 会在每次请求时实例化 `DatabaseService` 类并将其注入给 `db_service` 参数。

### 注意事项：
- 如果 `DatabaseService` 类需要依赖其他服务（如数据库连接池等），你可以在 `Depends()` 内部使用其他依赖。
- 如果你想避免每次请求都创建新实例，可以通过全局的 `Depends()` 配置来共享实例。

因此，Python 和 FastAPI 允许将类注入依赖，虽然通常使用函数来简化逻辑，但直接注入类实例也是完全可以的。