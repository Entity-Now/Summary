# 多对多关系

## 联合实体类型
“联接实体类型”是在处理数据库中的多对多关系时使用的一个概念。在关系型数据库中，一个实体类型的任意数量的实体可以与相同或另一个实体类型的任意数量的实体相关联，这就形成了多对多关系。然而，这种关系不能仅使用外键以简单方式表示，需要其他实体类型来“联接”关系的两端。这就是所谓的“联接实体类型”，它在关系数据库中对应于“联接表”。
联接实体类型的实体包含外键值对，其中一对指向关系一端的实体，另一对指向关系另一端的实体。因此，每个联接实体以及联接表中的每一行都表示关系中实体类型之间的一个关联。
让我们通过一个例子来理解这个概念。假设我们有一个博客系统，其中有两个实体类型：Post（帖子）和Tag（标签）。一个帖子可以有多个标签，一个标签也可以被多个帖子使用，这就形成了一个多对多的关系。在数据库中，我们不能直接表示这种关系，需要引入一个联接实体类型，比如叫做PostTag。PostTag中包含两个外键，一个指向Post，一个指向Tag。每一个PostTag实体都表示一个帖子和一个标签之间的关联。
以下是这个例子的代码表示：

public class Post 
{
    public int Id { get; set; }
    public List<PostTag> PostTags { get; } = new();
}

public class Tag 
{
    public int Id { get; set; }
    public List<PostTag> PostTags { get; } = new();
}

public class PostTag 
{
    public int PostsId { get; set; }
    public int TagsId { get; set; }
    public Post Post { get; set; }
    public Tag Tag { get; set; }
}

在这个例子中，PostTag就是我们的联接实体类型，它包含了两个外键PostsId和TagsId，分别指向Post和Tag。这样，我们就可以通过PostTag来表示Post和Tag之间的多对多关系了。。

## 跳过导航
在EF Core中，"跳过导航"是一种处理多对多关系的方式。在你给出的代码示例中，`Post`和`Tag`之间存在多对多关系，这种关系通过`PostTag`实体类型进行连接。然而，`Post`和`Tag`实体类型中都包含了`PostTag`和对方实体类型的集合导航属性，这就形成了冗余的导航路径。

在这种情况下，EF Core提供了"跳过导航"的功能，允许我们在模型中省略`PostTag`的导航属性，直接在`Post`和`Tag`之间建立导航。这样，我们就可以直接通过`Post.Tags`或`Tag.Posts`来获取相关联的实体，而无需通过`PostTag`。

在数据库中，这种结构会被表示为三个表：`Posts`，`Tags`和`PostTags`。`PostTags`表作为联接表，包含了`Posts`和`Tags`表的外键，用于表示`Post`和`Tag`之间的多对多关系。
```
public class Post
{
    public int Id { get; set; }
    public List<PostTag> PostTags { get; } = new();
    public List<Tag> Tags { get; } = new();
}

public class Tag
{
    public int Id { get; set; }
    public List<PostTag> PostTags { get; } = new();
    public List<Post> Posts { get; } = new();
}

public class PostTag
{
    public int PostsId { get; set; }
    public int TagsId { get; set; }
    public Post Post { get; set; } = null!;
    public Tag Tag { get; set; } = null!;
}
```