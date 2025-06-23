
# 创建数据库并简单使用

```python
from tortoise import Tortoise, run_async
from models import Author, Book  # 假设你已经定义了Author和Book模型

async def create_instances():
    # 初始化数据库连接
    await Tortoise.init(
        db_url='sqlite://db.sqlite3',  # 这里使用 SQLite 数据库
        modules={'models': ['__main__']}
    )
    await Tortoise.generate_schemas()

    # 创建并保存作者
    author = await Author.create(name='J.K. Rowling', birth_date='1965-07-31')

    # 创建并保存书籍，关联作者
    await Book.create(title='Harry Potter and the Philosopher\'s Stone',
                      published_date='1997-06-26',
                      author=author)

    # 查询并打印数据
    book = await Book.get(title='Harry Potter and the Philosopher\'s Stone')
    print(f'Book title: {book.title}, Author: {book.author.name}')

    # 关闭数据库连接
    await Tortoise.close_connections()

# 运行异步任务
run_async(create_instances())
```

这个示例展示了如何在 Tortoise ORM 中创建实例并保存到数据库，涉及到作者和书籍的创建及其关联。