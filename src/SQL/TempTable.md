# 临时表

在SQL Server中，临时表是一种临时存储数据的表，其范围仅限于当前会话或查询。它们通常用于存储中间结果，方便在查询中进行复杂的操作或者将数据暂时存储起来。有两种类型的临时表：局部临时表（以`#`开头）只在创建它们的会话中存在，而全局临时表（以`##`开头）在创建它们的会话结束前一直存在。

例如，创建一个局部临时表：

```sql
CREATE TABLE #TempTable (
    ID INT,
    Name VARCHAR(50)
);
```

然后可以在当前会话中使用`#TempTable`表来存储和检索数据。

## 创建临时表的几种方式
在SQL Server中，有几种方式可以创建临时表：

1. **局部临时表（Local Temporary Table）：**
   使用`#`作为前缀，创建的表只在当前会话中存在，会话结束后表自动删除。

   ```sql
   CREATE TABLE #TempTable (
       ID INT,
       Name VARCHAR(50)
   );
   ```

2. **全局临时表（Global Temporary Table）：**
   使用`##`作为前缀，创建的表在创建它的会话结束前一直存在，其他会话也可以访问。

   ```sql
   CREATE TABLE ##GlobalTempTable (
       ID INT,
       Name VARCHAR(50)
   );
   ```

3. **表变量（Table Variable）：**
   使用`DECLARE @variable TABLE`语法，表变量在当前批次或脚本执行期间存在，超出作用域后被销毁。

   ```sql
   DECLARE @TempTable TABLE (
       ID INT,
       Name VARCHAR(50)
   );
   ```

这些方式提供了不同的范围和生命周期，可以根据具体需求选择适当的方法。


## 使用select into来创建临时表
使用`SELECT INTO`语句可以从一个现有的表或查询结果创建一个新的表，也可以用于创建临时表。以下是一个简单的示例：

```sql
SELECT *
INTO #TempTable
FROM ExistingTable
WHERE SomeCondition;
```

在这个例子中，`#TempTable` 是一个局部临时表，它会从`ExistingTable` 中选择满足`SomeCondition` 的行，并将其复制到新创建的临时表中。在当前会话结束时，这个临时表将被自动删除。

你可以根据需要修改`SELECT`语句的条件和字段，以适应你的具体情况。