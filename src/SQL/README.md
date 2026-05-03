# sql 特殊语法

## 操作符号
存储过程中常用的操作符号包括：

1. **等于：** `=`
2. **不等于：** `!=` 或 `<>`
3. **大于：** `>`
4. **小于：** `<`
5. **大于等于：** `>=`
6. **小于等于：** `<=`
7. **逻辑与：** `AND`
8. **逻辑或：** `OR`
9. **逻辑非：** `NOT`
10. **模糊匹配：** `LIKE`
11. **通配符：** `%`（在 `LIKE` 中使用）
12. **IN运算符：** 用于指定条件范围，例如 `IN (value1, value2, ...)`

这些操作符可以在存储过程的查询语句中使用，以构建复杂的条件来过滤、排序或连接数据。

## ROW_COUNT()

`ROW_NUMBER()` 和 `ROW_COUNT()` 是两个不同的 SQL 中的概念，分别用于执行不同的任务。

1. **ROW_NUMBER():**
   - `ROW_NUMBER()` 是一个窗口函数，用于为查询结果集中的每一行分配一个唯一的行号。
   - 通常与 `OVER` 子句结合使用，以定义窗口和排序规则。
   - 用于产生行号，用于排序和分析数据，特别是在需要标识结果集中行的顺序时。
   - 示例：`ROW_NUMBER() OVER (ORDER BY column1) AS row_num`

2. **ROW_COUNT():**
   - `ROW_COUNT()` 是一个函数，用于返回最后一个执行的 SQL 语句受影响的行数。
   - 通常用于获取最近一次 `INSERT`、`UPDATE` 或 `DELETE` 语句影响的行数。
   - 与特定表或窗口无关，而是与最近一次 SQL 语句的执行结果有关。
   - 示例：`SELECT * FROM table_name; SELECT ROW_COUNT();`

总的来说，`ROW_NUMBER()` 是一个用于为查询结果集中的每一行分配行号的窗口函数，而 `ROW_COUNT()` 是一个用于获取最近一次 SQL 语句影响的行数的函数。它们在功能和用途上有很大的区别。

## CASE
`CASE` 在 SQL 中有多种用法，主要用于条件性的逻辑判断和返回不同的结果。以下是一些常见的 `CASE` 语句的用法：

1. **简单 CASE 表达式**：用于对单个表达式进行等值比较，类似于多个 `IF-THEN` 语句。
   ```sql
   CASE expression
      WHEN value1 THEN result1
      WHEN value2 THEN result2
      ...
      ELSE result_else
   END
   ```

2. **搜索 CASE 表达式**：用于对多个条件进行逐一判断，类似于多个 `IF-THEN-ELSE` 语句。
   ```sql
   CASE
      WHEN condition1 THEN result1
      WHEN condition2 THEN result2
      ...
      ELSE result_else
   END
   ```

3. **CASE 后带聚合函数**：可以在 `CASE` 语句内使用聚合函数。
   ```sql
   SELECT 
      ID,
      CASE 
         WHEN COUNT(*) > 10 THEN 'High'
         ELSE 'Low'
      END AS QuantityStatus
   FROM TableName
   GROUP BY ID;
   ```

4. **CASE 用于更新数据**：可以在 `UPDATE` 语句中使用 `CASE`。
   ```sql
   UPDATE TableName
   SET Status = 
      CASE 
         WHEN Condition1 THEN 'Active'
         WHEN Condition2 THEN 'Inactive'
         ELSE 'Unknown'
      END;
   ```

这些是 `CASE` 语句的一些常见用法，可以根据具体情况选择合适的形式来进行条件判断和结果返回。

## UNION

`UNION` 是 SQL 中用于合并两个或多个 `SELECT` 语句的结果集的操作符。它的一般语法为：

```sql
SELECT column1, column2, ...
FROM table1
WHERE condition
UNION
SELECT column1, column2, ...
FROM table2
WHERE condition;
```

以下是一些常见的 `UNION` 的用法：

1. **合并两个表的结果集**：将两个表的结果集合并成一个结果集。
   ```sql
   SELECT column1, column2 FROM table1
   UNION
   SELECT column1, column2 FROM table2;
   ```

2. **去重合并**：`UNION` 会自动去除重复的行，如果你想保留重复行，可以使用 `UNION ALL`。
   ```sql
   SELECT column1, column2 FROM table1
   UNION
   SELECT column1, column2 FROM table2;
   ```

3. **条件合并**：在每个 `SELECT` 语句中使用不同的条件。
   ```sql
   SELECT column1, column2 FROM table1 WHERE condition1
   UNION
   SELECT column1, column2 FROM table2 WHERE condition2;
   ```

4. **合并不同数据类型**：`UNION` 要求两个 `SELECT` 语句的列数和数据类型必须一致，如果需要合并不同数据类型，可以使用 `CAST` 或 `CONVERT` 函数。
   ```sql
   SELECT column1, column2 FROM table1
   UNION
   SELECT CAST(column3 AS VARCHAR), column4 FROM table2;
   ```

5. **多个表的合并**：可以使用多个 `UNION` 运算符合并多个表的结果。
   ```sql
   SELECT column1, column2 FROM table1
   UNION
   SELECT column1, column2 FROM table2
   UNION
   SELECT column1, column2 FROM table3;
   ```

这些是 `UNION` 操作符的一些常见用法，根据具体需求选择适当的方式。