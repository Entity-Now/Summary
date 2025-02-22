# 模块

## 导入

```py
# 导入整个模块
import math

# 导入特定内容
from math import sqrt

# 导入模块并且起别名
import math as m

# 导入模块中的所有内容
from math import *
```

## 导出

> 使用`__all__`变量定义导出内容，不定义则默认导出所有内容

```py
# my_module.py
__all__ = ["foo", "bar"]

def foo():
    return "foo"

def bar():
    return "bar"

def baz():
    return "baz"
```

## 模块的路径搜索
当你导入一个模块时，Python 会按照以下顺序查找模块：

1. 当前目录：Python 首先会在当前脚本所在的目录中查找模块。
1. 环境变量 PYTHONPATH：如果当前目录中没有找到，Python 会查找 PYTHONPATH 中指定的路径。
1. 标准库路径：如果仍然没有找到，Python 会查找标准库路径。
1. 第三方库路径：最后，Python 会查找已安装的第三方库路径。
1. 你可以通过 sys.path 查看 Python 的模块搜索路径：

    ```py
    import sys
    print(sys.path)
    ```

### 相对导入和绝对导入

1. 相对导入

    ```py
        from .module1 import function1  # 从当前包的 module1 导入
        from ..subpackage.module2 import function2  # 从上级包的 subpackage 导入
    ```

2. 绝对导入

    ```py
        from my_package.module1 import function1
    ```
    