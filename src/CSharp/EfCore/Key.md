# Key

## 备用键和复合键
在EF Core中，**备用键**和**复合键**有着特殊的含义和用途。

**备用键**：
- 除了主键之外，备用键也能唯一标识一条数据（跟主键一样具有唯一约束)。备用键可以用作外键关系的目标¹。
- 当使用关系数据库时，系统通常会在需要时默认你引入备用键，你无需手动配置它们，当然也可以手动配置¹。
- 在EF中，备用键是只读的，并且在唯一索引上提供额外的语义，因为它们可以用作外键的目标。

**复合键**：
- 复合键是由多个字段组成的键，这些字段一起唯一标识记录。在EF Core中，你可以使用`HasIndex`方法创建复合索引¹。
- 例如，你可以创建一个由`FirstName`和`LastName`字段组成的复合索引，如下所示：
```csharp
modelBuilder.Entity<Person>()
    .HasIndex(p => new { p.FirstName, p.LastName }); //创建多个列的索引
```

## Generic

在EF Core中，DatabaseGenerated特性用于指定数据库如何为属性生成值。这个特性接受一个DatabaseGeneratedOption枚举值，该枚举有以下三个值：
- DatabaseGeneratedOption.None：此选项指定属性的值不会由底层数据库生成。这对于覆盖id属性的默认约定很有用。例如，如果你想为id属性提供自己的值，而不是数据库生成的值，可以使用None选项。例如：
```cs
public class Course  
{  
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int CourseId { get; set; } 
    public string CourseName { get; set; } 
}
```

在上面的例子中，EF将在数据库中创建CourseId列，并且不会将其标记为IDENTITY列。所以，每次在调用SaveChanges()方法之前，你都必须提供CourseId属性的值。
- DatabaseGeneratedOption.Identity：你可以使用DatabaseGeneratedOption.Identity选项将非键（非id）属性标记为DB生成的属性。这指定了在INSERT语句上由数据库生成属性的值。这个Identity属性不能被更新。例如：
```cs
public class Course  
{ 
    public int CourseId { get; set; } 
    public string CourseName { get; set; }   
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int RecordNum { get; set; } 
}
```

- DatabaseGeneratedOption.Computed：你可以将属性配置为在添加或更新时生成其值。例如：
```cs
public class Blog 
{ 
    public int BlogId { get; set; } 
    public string Url { get; set; } 
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime LastUpdated { get; set; } 
}
```

```cs   
class key{
/// <summary>
/// 创建时间
/// </summary>
[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
public DateTime CreateTime { get; set; }
/// <summary>
/// 更新时间
/// </summary>
[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
public DateTime UpdateTime { get; set; }
}
```