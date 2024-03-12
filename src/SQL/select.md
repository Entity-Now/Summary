# select

## select into 和 insert select 的区别
`SELECT INTO` 和 `INTO SELECT` 是 SQL 查询中的两种不同语法，它们在语法结构和使用场景上有一些区别。

1. **SELECT INTO:**
   - 用于创建新表并将查询结果插入到新表中。
   - 在使用 `SELECT INTO` 时，目标表不存在，系统会自动创建一个新表并将结果插入其中。
   - 适用于创建临时表或将查询结果存储到新表中的情况。

   示例：
   ```sql
   SELECT *
   INTO NewTable
   FROM ExistingTable;
   ```

2. **INTO SELECT:**
   - 用于将查询结果插入到现有表中。
   - 在使用 `INTO SELECT` 时，目标表必须事先存在，查询结果将插入到这个现有表中。
   - 适用于将查询结果添加到已存在的表中，而不是创建新表。

   示例：
   ```sql
   INSERT INTO ExistingTable
   SELECT *
   FROM AnotherTable;
   ```

使用场景：
- 如果你需要创建一个新表并将查询结果插入其中，选择 `SELECT INTO`。
- 如果你已经有一个目标表，并希望将查询结果插入到它中，使用 `INTO SELECT`。

选择合适的语法取决于你的需求和是否已有目标表存在。