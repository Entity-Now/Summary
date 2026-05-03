# static和class方法

## 🔹1. 普通方法（Instance Method）

* **定义方式**：方法的第一个参数是 `self`
* **调用方式**：通过类的实例来调用（object.method()）
* **特点**：可以访问实例属性和类属性

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):  # 普通方法
        print(f"{self.name} says woof!")

d = Dog("Buddy")
d.bark()  # 输出：Buddy says woof!
```

### ✅ 用途：

* 当方法**需要访问对象的属性或调用其他对象方法**时，就用普通方法。

---

## 🔹2. 类方法（Class Method）

* **定义方式**：用 `@classmethod` 装饰，第一个参数是 `cls`（class 本身）
* **调用方式**：可以通过类或者实例来调用
* **特点**：不能访问实例属性，但可以访问和修改**类属性**

```python
class Dog:
    count = 0

    def __init__(self):
        Dog.count += 1

    @classmethod
    def how_many(cls):  # 类方法
        print(f"We have {cls.count} dogs.")

Dog()
Dog()
Dog.how_many()  # 输出：We have 2 dogs.
```

### ✅ 用途：

* 当方法**不需要访问实例本身，但需要访问或修改类级别的数据**，用 classmethod 更合适。

---

## 🔹3. 静态方法（Static Method）

* **定义方式**：用 `@staticmethod` 装饰，没有 `self` 或 `cls` 参数
* **调用方式**：也可以通过类或实例调用
* **特点**：完全独立于类和对象——只是“在类命名空间中的函数”

```python
class Dog:
    @staticmethod
    def say_hello():  # 静态方法
        print("Hello from Dog!")

Dog.say_hello()  # 输出：Hello from Dog!
```

### ✅ 用途：

* 方法**不需要访问任何实例或类的数据**，就当它是类中的“工具函数”时，用 staticmethod 是最合适的。

---

## 🧠 一句话总结：

| 类型     | 关键字        | 第一个参数 | 是否能访问实例属性 | 是否能访问类属性 |
| -------- | ------------- | ---------- | ------------------ | ---------------- |
| 普通方法 | 无            | `self`   | ✅                 | ✅               |
| 类方法   | @classmethod  | `cls`    | ❌                 | ✅               |
| 静态方法 | @staticmethod | 无         | ❌                 | ❌               |
