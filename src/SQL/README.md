# sql 特殊语法

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