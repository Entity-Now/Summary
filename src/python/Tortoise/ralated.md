# related 对应关系


```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)
    author = fields.ForeignKeyField('models.Author', related_name='books')

# 使用 prefetch_related 进行预取
async def get_books_with_authors():
    books = await Book.all().prefetch_related('author')
    for book in books:
        print(f"Book: {book.title}, Author: {book.author.name}")
```

#### 解释：

- `prefetch_related('author')` 会提前加载每本书的作者数据，避免对每一本书的作者进行单独查询。
- 通过 `prefetch_related`，可以减少数据库的查询次数，提高性能。

### 2. **多对多 (Many-to-Many)**

多对多关系意味着一个模型的实例可以与另一个模型的多个实例相关联，反之亦然。Tortoise ORM 使用 **`ManyToManyField`** 来表示这种关系。

#### 示例：

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    books = fields.ManyToManyField('models.Book', related_name='authors')

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)

# 使用 Many-to-Many 关系
async def create_book_author():
    author = await Author.create(name="J.K. Rowling")
    book1 = await Book.create(title="Harry Potter and the Philosopher's Stone")
    book2 = await Book.create(title="Harry Potter and the Chamber of Secrets")

    await author.books.add(book1, book2)  # 关联作者和书籍
```

#### 解释：

- 在这个例子中，`Author` 和 `Book` 模型之间有一个多对多关系，`Author.books` 是通过 `ManyToManyField` 实现的。
- `author.books.add(book1, book2)` 会将两本书与该作者关联。

### 3. **多对一 (Many-to-One)**

多对一关系是指多个模型的实例可以与另一个模型的单一实例相关联。Tortoise ORM 使用 **`ForeignKeyField`** 来表示这种关系。

#### 示例：

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)
    author = fields.ForeignKeyField('models.Author', related_name='books')

# 使用 Many-to-One 关系
async def create_book():
    author = await Author.create(name="J.K. Rowling")
    book = await Book.create(title="Harry Potter and the Philosopher's Stone", author=author)
```

#### 解释：

- `Book` 模型通过 `ForeignKeyField` 与 `Author` 模型建立了多对一的关系。
- 每本书都有一个 `author` 外键，表示这本书属于某个作者。

### 4. **组合使用 Prefetching 和 多对多、多对一**

当你在查询包含多对多或多对一关系的模型时，通常会结合使用 `prefetch_related` 来优化查询效率，避免多次查询。

#### 示例（多对多与预取）：

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    books = fields.ManyToManyField('models.Book', related_name='authors')

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)

# 预取多对多关系
async def get_books_with_authors():
    books = await Book.all().prefetch_related('authors')  # 预取书籍的作者
    for book in books:
        print(f"Book: {book.title}")
        for author in book.authors:
            print(f"Author: {author.name}")
```

#### 示例（多对一与预取）：

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)
    author = fields.ForeignKeyField('models.Author', related_name='books')

# 预取多对一关系
async def get_books_with_authors():
    books = await Book.all().prefetch_related('author')  # 预取每本书的作者
    for book in books:
        print(f"Book: {book.title}, Author: {book.author.name}")
```

### 总结：

- **Prefetching**：使用 `prefetch_related` 来优化查询，减少数据库访问次数，尤其是用于一对多和多对多关系。
- **多对多 (Many-to-Many)**：使用 `ManyToManyField` 来表示模型之间的多对多关系。
- **多对一 (Many-to-One)**：使用 `ForeignKeyField` 来表示模型之间的多对一关系。

通过结合使用 `prefetch_related` 和这些关系字段，你可以高效地查询和操作关联数据，同时避免过多的数据库查询。

### Prefetch

在 Tortoise ORM 中，`prefetch_related` 和 `Prefetch` 结合使用是一个非常强大的功能，它可以让你在预取相关数据时进行更精细的控制，特别是对子集进行筛选或进一步限制查询。

### 1. **`prefetch_related` 和 `Prefetch`**

- **`prefetch_related`** 是用于批量加载关联数据的工具。它会在查询中预先获取相关数据，避免在循环中多次查询数据库。
- **`Prefetch`** 是用于自定义 `prefetch_related` 中的查询，它允许你在预取数据时进行更复杂的操作，例如筛选特定的子集数据、排序或只加载部分字段等。

### 2. **`Prefetch` 的作用**

`Prefetch` 主要用于对子集进行筛选或限制加载的数据。这对于某些复杂查询非常有用，例如：

- 只获取符合特定条件的关联数据。
- 对关联数据进行排序。
- 只加载某些字段。

### 3. **示例：`prefetch_related` 与 `Prefetch` 组合使用**

假设我们有以下模型：

```python
from tortoise import fields
from tortoise.models import Model

class Author(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    books = fields.ManyToManyField('models.Book', related_name='authors')

class Book(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=100)
    published_year = fields.IntField()
```

现在，假设我们只想预取与特定年份之后出版的书籍，并且按书名排序，可以使用 `Prefetch` 来控制预取的数据。

#### 示例：

```python
from tortoise import Tortoise
from tortoise.models import Prefetch

async def get_author_books():
    # 假设要获取 2000 年之后出版的书籍，按书名排序
    books_prefetch = Prefetch('books', queryset=Book.filter(published_year__gt=2000).order_by('title'))

    authors = await Author.all().prefetch_related(books_prefetch)

    for author in authors:
        print(f"Author: {author.name}")
        for book in author.books:
            print(f"Book: {book.title}, Published Year: {book.published_year}")
```

#### 解释：

- **`Prefetch('books', ...)`**：我们创建了一个 `Prefetch` 对象，指定我们想要预取的 `books` 关系，并进一步用 `queryset` 来过滤和排序书籍数据。这里 `filter(published_year__gt=2000)` 表示只加载出版年份大于 2000 年的书籍，并且通过 `order_by('title')` 按书名排序。
- **`prefetch_related(books_prefetch)`**：通过 `prefetch_related` 加载 `Author` 模型和其关联的书籍数据，并应用我们定义的筛选条件和排序。

### 4. **`Prefetch` 的更多应用场景**

- **加载特定字段**：你可以指定只加载部分字段，而不是加载所有字段，减少数据量。

  ```python
  books_prefetch = Prefetch('books', queryset=Book.all().only('title'))
  ```

- **对子集进行排序**：你可以指定在预取时对子集进行排序，如上面的示例。
- **进行更复杂的查询**：如进行多级过滤、聚合等。

### 5. **总结**

- `prefetch_related` 是一个用于批量加载关联数据的工具，而 `Prefetch` 允许你对预取的数据进行更细粒度的控制，例如筛选、排序或选择特定字段。
- **`Prefetch` 的作用**确实可以是对子集进行筛选、排序或者限制数据的加载内容，从而提高查询的灵活性和效率。

通过组合 `prefetch_related` 和 `Prefetch`，你可以灵活地控制如何加载和筛选关联数据，优化数据库查询性能。