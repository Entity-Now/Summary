# 无键实体类型

:::tip
对于无键实体类型，由于它们通常映射到数据库视图或者存储过程，所以EF Core默认将它们视为只读的。这意味着我们不能直接使用EF Core的增删改查操作来修改无键实体类型的数据。

然而，这并不意味着我们不能修改这些数据。实际上，我们可以通过以下方式来修改这些数据：

1. **使用存储过程**：如果数据库视图或者存储过程支持修改数据，我们可以在DbContext中定义一个方法，使用`FromSqlRaw`或者`ExecuteSqlRaw`来调用存储过程。

2. **使用原始SQL命令**：我们也可以直接使用SQL命令来修改数据。我们可以使用DbContext的`Database.ExecuteSqlRaw`方法来执行SQL命令。

3. **使用其他实体类型**：如果无键实体类型的数据来自于其他的实体类型，我们可以通过修改这些实体类型的数据来间接修改无键实体类型的数据。

请注意，直接使用SQL命令或者存储过程来修改数据可能会绕过EF Core的一些功能，如跟踪更改、处理并发冲突等。
:::

## 使用场景
- 充当SQL查询返回的类型
- 映射到不包含主键的数据库视图
- 映射到未定义主键的表
- 映射到模型中定义的查询

## 定义无键实体类型
假设我们有一个数据库视图，它包含了一些用户的信息，我们可以创建一个无键实体类型来查询这个视图。

首先，我们需要定义一个无键实体类型的类。这个类的属性应该与数据库视图的列相对应。例如：

```csharp
public class UserView
{
    public string UserName { get; set; }
    public string Email { get; set; }
    // 其他属性...
}
```

然后，我们需要在 DbContext 中配置这个无键实体类型的映射。我们可以使用 Fluent API 的 `HasNoKey` 方法来指定这个实体类型没有键，并使用 `ToView` 方法来指定对应的数据库视图：

```csharp
public class MyDbContext : DbContext
{
    public DbSet<UserView> UserView { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserView>().HasNoKey().ToView("UserView");
    }
}
```

最后，我们就可以像查询其他的 DbSet 一样来查询这个无键实体类型了：

```csharp
using (var context = new MyDbContext())
{
    var users = context.UserView.ToList();
    // 处理查询结果...
}
```