# lua 

## 全局变量
```lua
global = "这是全局变量，无论在何处声明都是全局的";
local part = "这是局部变量，只能在声明的函数或者作用域中使用";
```
## 注释

## 代码块
```lua{
    do
        -- 这是一个作用域，内部定义的局部变量外部无法访问
    end
}
```

## 数据类型
| 数据类型 | 描述 |
| --- | --- |
| nil | 空类型 |
| boolean | 布尔类型 |
| number | 双精度的浮点类型 |
| string | 字符串类型 |
| function | 函数 |
| userdata | 表示任意存储在变量中的C数据结构 |
| thread | 独立线程 |
| table | 数组或者对象 |

## for循环
```lua
for variable = start, stop, step do
    -- 循环体
end
```
```lua
for i = 1, 10 
do
    print(i);
end
```

## if 
```lua
if condition then
    -- 条件为真时执行的代码
else
    -- 条件为假时执行的代码
end
```

## 函数
```lua
function text()
    return "一个简单函数";
end
```
> 把函数当作一个值来使用，可以把它赋值给变量，也可以把它作为参数传递给其他函数。
```lua
delegate = function()
    print('我被调用了');
end

function run(callback)
    print("准备调用回调函数");
    callback();
end
```
> 多个返回值
```lua
function maximum(a, b)
    local a , b = 1, 3;
    return a , b;
end

a, b = maximum(1, 3);
```

## 数组
```lua
arr = {1, 2, 3, 4, 5};
```

## 对象
```lua
obj = {
    name = "张三",
    age = 18,
    sex = "男"
};
```

## 运算符
| 运算符 | 描述 |
| --- | --- |
| + | 加 |
| - | 减 |
| * | 乘 |
| / | 除 |
| % | 取余 |
| ^ | 取幂 |
| - | 负号 |
| // | 整除 |

### 关系运算符
| 操作符 | 描述 |
| --- | --- |
| == | 等于 |
| ~= | 不等于 |
| > | 大于 |
| < | 小于 |
| >= | 大于等于 |
| <= | 小于等于 |
### 逻辑运算符
| 操作符 | 描述 |
| --- | --- |
| and | 逻辑与 |
| or | 逻辑或 |
| not | 逻辑非 |

### 其他操作符
| 操作符 | 描述 |
| --- | --- |
| .. | 连接两个字符串 |
| # | 一元运算符，返回字符串或数组的长度 |

## 迭代器
Lua中的迭代器是一种用于遍历集合或序列的方式，通常使用 `for` 循环来使用。以下是一个简单的示例，展示如何创建和使用一个基本的迭代器：

```lua
-- 创建一个包含一些数据的表格
local myTable = {10, 20, 30, 40, 50}

-- 定义一个迭代器函数
function myIterator(collection)
    local index = 0
    local maxIndex = #collection

    -- 返回一个迭代器函数，该函数在每次迭代中返回下一个元素
    return function ()
        index = index + 1
        if index <= maxIndex then
            return collection[index]
        end
    end
end

-- 使用迭代器遍历表格
for value in myIterator(myTable) do
    print(value)
end
```

在这个示例中，我们首先创建了一个包含一些数据的表格 `myTable`。然后，我们定义了一个名为 `myIterator` 的迭代器函数，该函数接受一个集合（表格）作为参数，并返回一个迭代器函数。这个迭代器函数在每次调用时返回下一个元素，直到遍历完整个集合。

最后，我们使用 `for` 循环和迭代器来遍历 `myTable` 表格，依次打印出其中的元素。

这是一个基本的示例，说明了如何手动创建和使用迭代器。在实际应用中，Lua还提供了一些标准库函数来简化迭代过程，如 `ipairs` 用于遍历数组式表格和 `pairs` 用于遍历键-值表格。这些函数可以帮助您更方便地进行迭代操作。

