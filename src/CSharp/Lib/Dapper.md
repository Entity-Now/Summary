# ORM框架Dapper

Dapper是一个轻量级的对象关系映射（ORM）库，用于在C#和数据库之间进行数据映射。Dapper旨在提供高性能和简洁性，同时允许开发人员编写原生SQL查询，并将结果映射到.NET对象。

## 常用api
Dapper提供了一系列常用的API，用于执行SQL查询和映射结果。以下是一些常见的Dapper API：

1. `Query<T>`：执行SQL查询，并将结果映射为IEnumerable<T>。
```csharp
var results = connection.Query<MyClass>("SELECT * FROM MyTable");
```

2. `QueryFirstOrDefault<T>`：执行SQL查询并返回结果集的第一行，如果没有结果则返回默认值。
```csharp
var result = connection.QueryFirstOrDefault<MyClass>("SELECT * FROM MyTable WHERE Id = @Id", new { Id = 1 });
```

3. `QueryMultiple`：执行包含多个结果集的SQL查询。
```csharp
var multiResult = connection.QueryMultiple("SELECT * FROM Table1; SELECT * FROM Table2;");
var result1 = multiResult.Read<MyClass1>();
var result2 = multiResult.Read<MyClass2>();
```

4. `Execute`：执行不返回结果集的SQL语句，通常用于更新或插入操作。
```csharp
int affectedRows = connection.Execute("UPDATE MyTable SET Column1 = @Value WHERE Id = @Id", new { Value = "NewValue", Id = 1 });
```

5. `Insert`：执行插入操作并返回自增列的值。
```csharp
int newId = connection.QuerySingle<int>("INSERT INTO MyTable (Column1, Column2) VALUES (@Value1, @Value2); SELECT CAST(SCOPE_IDENTITY() as int)", new { Value1 = "Value1", Value2 = "Value2" });
```

这些是Dapper的一些基本API，但还有其他更高级的功能和选项可供使用，具体取决于您的需求。

## 参数化查询
Dapper中的参数化查询是一种安全和有效的执行SQL查询的方式。参数化查询通过将参数与SQL语句分离，确保了用户输入不会被直接嵌入到SQL中，从而防止SQL注入攻击。以下是一个简单的例子，说明Dapper中的参数化查询：

```csharp
string name = "John";
int age = 25;

var result = connection.Query<Person>("SELECT * FROM People WHERE Name = @Name AND Age = @Age", new { Name = name, Age = age });
```

在这个例子中，`@Name`和`@Age`是参数占位符，它们与实际的参数值通过匿名类型进行关联。Dapper会将这些参数值安全地插入SQL查询，避免潜在的安全风险。

通过参数化查询，您可以：
- 避免手动构建SQL字符串，减少了错误的可能性。
- 增强了代码的可读性，参数值清晰可见。
- 防止SQL注入攻击，因为用户输入不会直接嵌入到SQL语句中。

总体而言，使用Dapper的参数化查询是一种良好的实践，能够提高应用程序的安全性和可维护性。

## DynamicParameter
```cs
var parameters = new DynamicParameters();
parameters.Add("@Name", "John", DbType.String, ParameterDirection.Input);
parameters.Add("@Age", 25, DbType.Int32, ParameterDirection.Input);

con.Query<T>('select * from xxx where Name=@Name and Age=@Age', parameters);
```

### Add和AddDynamicParams的区别
`DynamicParameters`类中有两个用于添加参数的方法，分别是`Add`和`AddDynamicParams`。这两者的使用场景略有不同：

1. **Add方法：**
   - `Add`方法用于显式地为`DynamicParameters`添加一个具体的参数。
   - 您需要指定参数的名称、值、数据类型和参数方向等信息。
   - 这是一个示例：
     ```csharp
     var parameters = new DynamicParameters();
     parameters.Add("@Name", "John", DbType.String, ParameterDirection.Input);
     parameters.Add("@Age", 25, DbType.Int32, ParameterDirection.Input);
     ```

2. **AddDynamicParams方法：**
   - `AddDynamicParams`方法用于从一个匿名类型或`DynamicParameters`实例中动态添加一组参数。
   - 这在需要动态生成参数集合的情况下很有用。
   - 这是一个示例：
     ```csharp
     var additionalParameters = new { City = "New York", Country = "USA" };
     var parameters = new DynamicParameters();
     parameters.AddDynamicParams(additionalParameters);
     ```

两者的选择取决于您的需求。如果您已经知道参数的具体信息，使用`Add`方法是直观和明确的。而如果您有一个动态的参数集合，例如从匿名类型中动态获取参数，那么使用`AddDynamicParams`方法更为方便。