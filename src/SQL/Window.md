# 窗口函数
窗口函数是一类在SQL中用于在查询结果集内执行计算的函数。这些函数通常涉及到对某一列的排序和分组，并在一定范围内进行计算，这个范围被称为窗口（window）。窗口函数通过使用 `OVER` 子句来定义这个窗口。

## 常见的窗口函数

以下是一些常见的窗口函数，它们通常在SQL中使用：

1. **ROW_NUMBER():** 为结果集中的每一行分配一个唯一的行号。

2. **RANK():** 为结果集中的每一行分配一个排名，相同值得到相同的排名，但会跳过相同排名数量。

3. **DENSE_RANK():** 为结果集中的每一行分配一个密集排名，相同值得到相同的排名，不会跳过相同排名数量。

4. **SUM():** 对窗口内的数值进行求和。

5. **AVG():** 对窗口内的数值进行平均计算。

6. **MIN():** 获取窗口内的最小值。

7. **MAX():** 获取窗口内的最大值。

8. **LEAD():** 获取当前行之后的行的值。

9. **LAG():** 获取当前行之前的行的值。

10. **FIRST_VALUE():** 获取窗口内第一行的值。

11. **LAST_VALUE():** 获取窗口内最后一行的值。

这些窗口函数可根据具体的需求在查询中使用，并通过 `OVER` 子句定义窗口的排序和分组规则。不同的数据库系统可能支持不同的窗口函数，具体取决于数据库的实现。

## ROW_NUMBER() 函数

使用PARTITION BY和不使用的区别：
- 不使用`PARTITION BY`：`ROW_NUMBER()`函数会为结果集中的每一行分配一个唯一的行号。
- 使用`PARTITION BY`：`ROW_NUMBER()`函数会为结果集中的每一行分配一个唯一的行号，并按照指定的分区字段进行分组。

```SQL
SELECT Id, OutTradeNo, TradeNo, ROW_NUMBER() OVER(PARTITION BY TradeNo ORDER BY OutTradeNo) as rowId
FROM `transaction`
WHERE Id >= 10
LIMIT 1000;
```

![截图](/images/over_partition.png)