# LINQ

## LINQ中常见的骚操作
1. GroupBy

`GroupBy`操作符可以将集合中的元素按照指定的属性进行分组，返回一个`IGrouping<TKey, TElement>`类型的集合，其中`TKey`表示分组的属性类型，`TElement`表示分组后每个组的元素类型。例如：

```cs
var result = collection.GroupBy(item => item.Property);
```

2. Join

`Join`操作符可以将两个集合按照指定的属性进行关联，返回一个新的集合，其中每个元素是关联后的结果。例如：

```cs
var result = collection1.Join(collection2, item1 => item1.Property1, item2 => item2.Property2, (item1, item2) => new { Item1 = item1, Item2 = item2 });
```

3. Union

`Union`操作符可以将两个集合合并成一个集合，去除重复的元素，返回一个新的集合。例如：

```cs
var result = collection1.Union(collection2);
```

4. Except

`Except`操作符可以从一个集合中排除另一个集合中的元素，返回一个新的集合。例如：

```cs
var result = collection1.Except(collection2);
```

5. Any

`Any`操作符可以判断集合中是否存在满足条件的元素，返回一个布尔值。例如：

```cs
var result = collection.Any(item => item.Property == value);
```

6. All

`All`操作符可以判断集合中的所有元素是否都满足条件，返回一个布尔值。例如：

```cs
var result = collection.All(item => item.Property == value);
```

7. Take

`Take`操作符可以从集合中取出指定数量的元素，返回一个新的集合。例如：

```cs
var result = collection.Take(count);
```

8. Skip

`Skip`操作符可以跳过指定数量的元素，返回一个新的集合。例如：

```cs
var result = collection.Skip(count);
```

9. OrderBy/OrderByDescending/ThenBy/ThenByDescending

这一系列操作符可以对集合中的元素按照指定的属性进行排序，分别表示升序、降序、第二关键字升序、第二关键字降序排序。例如：

```cs
var result = collection.OrderBy(item => item.Property1).ThenByDescending(item => item.Property2);
```

以上是一些常用的LINQ骚操作，除此之外还有很多其他的操作符可以帮助开发者快速高效地查询和操作数据。

## 模糊查询
在LINQ中，可以使用`Where`操作符和`Contains`方法实现模糊查询。`Where`操作符用于筛选集合中符合条件的元素，而`Contains`方法用于判断一个字符串是否包含另一个字符串。结合使用它们可以实现模糊查询。

例如，假设有一个字符串集合`stringCollection`，要查询其中包含特定子字符串`keyword`的元素，可以使用以下语法：

```cs
var result = stringCollection.Where(item => item.Contains(keyword));
```

其中，`item`是集合中的每个元素，`Contains`方法用于判断`item`是否包含`keyword`，如果包含则返回`true`，否则返回`false`。`Where`操作符用于筛选满足条件的元素，最终返回一个新的集合。

需要注意的是，这种模糊查询方式只能查询包含特定子字符串的元素，如果要查询以特定子字符串开头或结尾的元素，可以使用`StartsWith`或`EndsWith`方法代替`Contains`方法。

例如，要查询以特定子字符串`prefix`开头的元素，可以使用以下语法：

```cs
var result = stringCollection.Where(item => item.StartsWith(prefix));
```

要查询以特定子字符串`suffix`结尾的元素，可以使用以下语法：

```cs
var result = stringCollection.Where(item => item.EndsWith(suffix));
```

使用这些方法可以快速实现字符串的模糊查询。

## 一些不常用，但有用的操作
LINQ（Language-Integrated Query）是一种强大的查询语言和操作符，可以帮助开发者快速、方便地查询和操作数据。除了常见的操作符和用法外，LINQ中还有一些冷门的小知识，下面列举一些：

1. 连接多个集合

除了使用`Join`操作符连接两个集合外，LINQ还支持连接多个集合，可以使用`Join`和`SelectMany`操作符组合使用实现。例如：

```cs
var result = collection1.Join(collection2, item1 => item1.Property1, item2 => item2.Property2, (item1, item2) => new { Item1 = item1, Item2 = item2 })
                         .Join(collection3, item12 => item12.Item1.Property3, item3 => item3.Property4, (item12, item3) => new { Item1 = item12.Item1, Item2 = item12.Item2, Item3 = item3 })
                         .SelectMany(item => item.Item1.Collection4, (item, item4) => new { Item1 = item.Item1, Item2 = item.Item2, Item3 = item.Item3, Item4 = item4 });
```

其中，`Join`操作符用于连接集合，`SelectMany`操作符用于将连接后的集合与另一个集合进行连接，最终返回一个新的集合。

2. 使用方法调用语法

除了使用Lambda表达式实现LINQ查询外，还可以使用方法调用语法实现。例如：

```cs
var result = from item in collection
             where item.Property == value
             select item;
```

可以使用方法调用语法实现：

```cs
var result = collection.Where(item => item.Property == value).Select(item => item);
```

其中，`Where`方法用于筛选符合条件的元素，`Select`方法用于返回符合条件的元素，最终返回一个新的集合。

3. 使用`let`关键字定义变量

在LINQ查询中，可以使用`let`关键字定义变量，用于保存中间计算结果。例如：

```cs
var result = from item in collection
             let temp = item.Property + value
             where temp > 100
             select item;
```

上面的代码中，使用`let`关键字定义了一个变量`temp`，用于保存`item.Property`和`value`相加的结果。然后在`where`子句中筛选`temp`大于100的元素，最终返回符合条件的元素集合。

4. 使用`Cast`和`OfType`操作符转换类型

在LINQ查询中，可以使用`Cast`和`OfType`操作符将集合中的元素转换为指定类型。`Cast`操作符将集合中的元素强制转换为指定类型，如果元素类型与指定类型不兼容，则会抛出异常；`OfType`操作符只返回指定类型的元素，如果元素类型与指定类型不兼容，则会被忽略。例如：

```cs
var result1 = collection.Cast<DerivedType>().ToList();
var result2 = collection.OfType<DerivedType>().ToList();
```