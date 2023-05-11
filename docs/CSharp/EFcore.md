# EF core 

## ConnectionString
它通常由多个参数组成，以分号隔开。以下是一些常用的参数：

1. `Server`：指定 SQL Server 的名称或网络地址。

2. `Database`：指定要连接的数据库名称。

3. `User ID` 和 `Password`：指定连接数据库时要使用的用户名和密码。

4. `Integrated Security`：指定是否使用 Windows 身份验证来进行连接。如果设置为 true，则将使用当前 Windows 用户的凭据。

5. `Pooling`：指定是否启用连接池。如果设置为 true，则启用连接池；否则禁用连接池。

6. `Min Pool Size` 和 `Max Pool Size`：指定连接池的最小和最大连接数。当连接池中的连接数低于最小连接数时，将创建新的连接；当连接池中的连接数达到最大连接数时，将阻止创建新的连接。

7. `Connect Timeout`：指定连接超时的时间（以秒为单位）。如果在指定的时间内无法建立连接，则抛出异常。

8. `MultipleActiveResultSets`：指定是否允许在单个连接上同时执行多个命令。如果设置为 true，则可以在同一个连接上执行多个命令。

9. `Encrypt` 和 `TrustServerCertificate`：指定是否使用加密连接和信任服务器证书。

以下是一个使用 Connection String 的示例：

```
Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;
```

在实际应用中，还可以通过 `DbContextOptionsBuilder` 类来创建 Connection String，这样可以更方便地设置参数和属性，避免出错。例如：

```csharp
optionsBuilder.UseSqlServer("Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;");
```

同样需要注意，Connection String 中包含敏感信息，应该进行妥善保护和管理，避免泄露。

## 导航属性
### include 
EF Core 中的导航属性标记后，可以通过 LINQ 查询自动加载相关数据。当你在查询中使用导航属性时，EF Core 会自动执行懒加载并加载相关数据，从而减少了手动加载相关数据的代码量。

例如，如果你有两个实体类 `Author` 和 `Book`，并且 `Author` 类有一个导航属性 `Books`，你可以使用以下代码查询指定作者的所有书籍：

```cs
var author = context.Authors.Include(a => a.Books).FirstOrDefault(a => a.Name == "Stephen King");
var books = author.Books;
// 如果要限制数量,可以使用take限制
var author = context.Authors.Include(a => a.Books.Take(3)).FirstOrDefault(a => a.Name == "Stephen King");
```

在这个例子中，我们首先使用 `Include` 方法标记了 `Author` 实体的导航属性 `Books`，以便在查询 `Author` 实体时加载所有相关的 `Book` 实体。然后，我们通过 `FirstOrDefault` 方法查询名为 "Stephen King" 的作者实体，并通过导航属性 `Books` 获取其所有的书籍。

需要注意的是，使用导航属性自动加载相关数据可能会导致性能问题，因为它可能会生成大量的 SQL 查询。因此，在使用导航属性时，应该避免使用循环和大量的关联实体，以减少 SQL 查询的数量。

### 惰性加载
在 EF Core 中，将实体类中的属性、导航属性或方法标记为 `virtual` 关键字是一种惯用的做法，它可以启用 EF Core 的延迟加载和自动跟踪功能。具体来说，`virtual` 关键字的作用如下：

1. 启用延迟加载：使用 `virtual` 关键字标记导航属性时，EF Core 可以延迟加载关联的实体数据。这意味着当你首次访问导航属性时，EF Core 会自动执行另一个查询以加载关联的实体数据。如果你没有标记导航属性为 `virtual`，则导航属性将不会被延迟加载，而是在首次查询实体时立即加载所有的关联实体数据。

2. 启用自动跟踪：使用 `virtual` 关键字标记实体类的属性或方法时，EF Core 可以自动跟踪实体的状态，并在保存更改时自动更新数据库。这意味着当你更改实体的属性或调用其方法时，EF Core 会自动将这些更改标记为 `Modified`，并在保存更改时将它们更新到数据库中。

需要注意的是，启用延迟加载和自动跟踪功能可能会对性能产生一些影响，因为它们需要在运行时执行额外的代码。因此，在设计 EF Core 实体类时，应该根据具体情况选择是否启用 `virtual` 关键字。如果你的实体数据量很小或对性能要求很高，可以考虑禁用延迟加载和自动跟踪功能，以提高查询和更新的效率。

### 属性使用virtual与不使用virtual标记的区别是什么
> 用一句话描述：使用virtual标记后即使不使用include标记数据，当访问该数据的时候依然后自动加载相关数据。反之会抛出错误

加上 `virtual` 关键字后，EF Core 会自动将导航属性声明为虚拟属性，这样可以启用 EF Core 的延迟加载功能。如果你没有使用 `virtual` 关键字，EF Core 会将导航属性声明为普通的属性，这样就无法使用延迟加载功能。

延迟加载是 EF Core 中的一个重要特性，它可以帮助你避免在查询时加载过多的数据。当你使用 `virtual` 关键字标记导航属性时，EF Core 会将导航属性的值视为“未加载”，只有在你访问导航属性时才会触发加载操作。这样可以避免在查询时加载过多的数据，提高查询性能。

另外，使用 `virtual` 关键字标记导航属性还可以帮助你实现一些高级特性，例如 EF Core 中的代理对象、更改跟踪、惰性加载等功能。这些特性可以让你更方便地编写 EF Core 应用程序，提高代码的可维护性和可扩展性。

因此，建议在定义实体类时使用 `virtual` 关键字标记导航属性，这样可以获得更好的性能和更丰富的特性支持。

### include 查询数据库导致死循环
为了解决这个问题，您可以考虑使用投影查询或者延迟加载来避免加载关联实体时产生循环引用。例如，使用投影查询，您可以只选择需要的属性，并将其转换为一个匿名对象，如下所示：

```
var users = dbContext.Users.Select(u => new {
    u.Id,
    u.Name,
    Signs = u.Signs.Select(s => new {
        s.Id,
        s.Description
    })
}).ToList();
```

在此代码中，我们选择了`User`实体的`Id`和`Name`属性，并选择了`Signs`属性的`Id`和`Description`属性。在选择`Signs`属性时，我们使用了另一个选择，以选择我们需要序列化的`Sign`属性。这样，我们就可以控制序列化的内容，而不必使用`[JsonIgnore]`属性。

:::warning
暂时没有发现其他解决方案
:::

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