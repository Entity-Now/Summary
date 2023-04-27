# EF core 

## 事务


在Entity Framework Core中，事务用于管理对数据库的一组操作，这些操作必须在单个原子操作中完成，要么全部成功，要么全部失败。

以下是如何在EF Core中使用事务的步骤：

1. 创建一个数据库上下文实例。

2. 调用DbContext.Database.BeginTransaction()方法开始一个事务。

3. 执行需要在事务中完成的操作。

4. 如果所有操作都成功完成，调用DbContext.Database.CommitTransaction()方法提交事务。如果出现错误或异常，调用DbContext.Database.RollbackTransaction()方法回滚事务。

以下是一个简单的使用EF Core事务的示例：

```csharp
using (var context = new MyDbContext())
{
    using (var transaction = context.Database.BeginTransaction())
    {
        try
        {
            // 在事务中执行一些操作
            context.MyEntities.Add(new MyEntity { Name = "foo" });
            context.SaveChanges();
            context.MyEntities.Add(new MyEntity { Name = "bar" });
            context.SaveChanges();
            transaction.Commit();
        }
        catch (Exception ex)
        {
            transaction.Rollback();
        }
    }
}
```

在这个例子中，我们创建了一个新的MyDbContext实例，并在这个上下文中执行了一些操作。我们使用DbContext.Database.BeginTransaction()方法开始一个新的事务，并在try块中执行操作。如果所有操作都成功完成，我们调用DbContext.Database.CommitTransaction()方法提交事务。如果出现异常或错误，我们使用DbContext.Database.RollbackTransaction()方法回滚事务。

## 事务的进阶用法
除了基本的事务用法之外，EF Core还提供了一些进阶的事务用法，这些用法可以使事务更加灵活和高效。

1. 保存点（Savepoints）

在一个大的事务中，如果发生错误，我们可能需要回滚到一个早期的状态，并在这个状态下继续执行。在EF Core中，可以使用保存点来实现这个功能。

例如，我们可以在事务开始时创建一个保存点，然后在执行一些操作后，如果发生错误，可以回滚到这个保存点并继续执行。下面是一个使用保存点的示例：

```csharp
using (var transaction = context.Database.BeginTransaction())
{
    try
    {
        // 创建一个保存点
        await context.Database.CreateSavepointAsync("MySavepoint");

        // 在保存点下执行一些操作
        await context.MyEntities.AddAsync(new MyEntity { Name = "foo" });
        await context.SaveChangesAsync();

        // 模拟一个错误
        throw new Exception("Oops");

        // 如果没有错误，释放保存点
        await context.Database.ReleaseSavepointAsync("MySavepoint");

        // 提交事务
        await transaction.CommitAsync();
    }
    catch (Exception ex)
    {
        // 回滚到保存点
        await context.Database.RollbackToSavepointAsync("MySavepoint");

        // 回滚事务
        await transaction.RollbackAsync();
    }
}
```

在这个例子中，我们在事务开始时创建了一个保存点，并在这个保存点下执行了一些操作。如果出现异常，我们可以回滚到这个保存点并继续执行。如果没有错误，我们释放保存点并提交事务。

2. 并发控制（Concurrency control）

在EF Core中，我们可以使用乐观并发控制和悲观并发控制来处理并发访问。乐观并发控制基于数据版本（或时间戳）来检查并发更新冲突。悲观并发控制使用锁来防止并发访问。

例如，我们可以使用乐观并发控制来实现在一个实体上进行并发更新的功能。下面是一个使用乐观并发控制的示例：

```csharp
var entity = await context.MyEntities.FindAsync(id);
entity.Name = "new name";
entity.Version++;

context.Entry(entity).State = EntityState.Modified;

try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException ex)
{
    // 处理并发更新冲突
}
```

在这个例子中，我们在更新实体时增加了版本号，并在保存更改时检查版本号是否已经被修改。如果出现并发更新冲突，EF Core会抛出DbUpdateConcurrencyException异常，我们可以在异常处理程序中处理这个问题。

3. 分布式事务

在分布式系统中，可能需要在多个数据库实例之间执行事务。EF Core支持分布式事务，可以使用多个数据库上下文来处理分布式事务。

例如，我们可以使用两个数据库上下文来执行一个分布式事务，下面是一个使用分布式事务的示例：

```csharp
using (var transaction = context1.Database.BeginTransaction())
{
    try
    {
        // 在第一个数据库上下文中执行一些操作
        await context1.MyEntities.AddAsync(new MyEntity { Name = "foo" });
        await context1.SaveChangesAsync();

        // 在第二个数据库上下文中执行一些操作
        await context2.MyOtherEntities.AddAsync(new MyOtherEntity { Description = "bar" });
        await context2.SaveChangesAsync();

        // 提交事务
        await transaction.CommitAsync();
    }
    catch (Exception ex)
    {
        // 回滚事务
        await transaction.RollbackAsync();
    }
}
```

在这个例子中，我们使用了两个数据库上下文来执行一个分布式事务，我们可以使用事务对象来控制这两个上下文中的操作，并在最后一起提交或回滚。

总之，EF Core提供了许多进阶的事务用法，例如保存点、并发控制和分布式事务，这些用法可以让我们更加灵活地处理事务，并实现更高效的数据库操作。在使用这些进阶用法时，我们需要根据具体的业务场景选择合适的方式，并遵循最佳实践，以保证事务的正确性和高效性。