# python & class

## 类的定义

```py
    class parent:
     pass # 使用passs关键字表示空类
```

## 构造函数

1. python使用`__init__`来表示构造函数，在实例化对象时自动调用
2. self表示实例本身，类似于c#中的this

```py
    class parent: 
        staticVarParam = '这是一个类变量，在c#中叫做静态变量'
        def __init__(self, param1): # 构造函数
            self.param1 = param1 # self表示实例本身
```

### 实例变量和类变量

> 用白话文说就是*静态变量*和*实例变量*

### 实例方法和类方法

> 和上面的原理一直，类方法就是c#中的静态方法

```py
class parent:
    staticVarA = None
    def __init__(self):
        self.name = "my is you parent"
    @staticmethod
    def static_method(): # 静态方法，可以通过类调用，也可以通过实例调用，但是没有参数
        print("parent static method")
    @classmethod
    def class_method(cls): # cls 是类本身，而不是实例，所以可以初始化
        staticVarA = cls() # 可以访问到类属性，也就是静态变量
        staticVarA.instance_method()
    def instance_method(self): # 实例方法，只能通过实例调用
        print(self.name)
# 实例化
p = parent()
# 调用实例方法
p.instance_method()
# 通过实例，调用类方法
p.class_method()
# 通过类，调用类方法
parent.class_method()
```

### 访问控制

> python没有访问控制，但是可以通过`_`or`__`来模拟

1. 单个`_`表示“受保护的”，即只能被类本身和子类访问，不能被外部访问
2. 双个`__`表示“私有的”，即只能被类本身访问，不能被外部访问和子类访问

```py
class parent:
    def __init__(self):
        self._privatevar_ = 1 # 受保护的变量
        self.__privatevar = 2 # 私有变量
        
    def run(self):
        print("parent: ", self._privatevar_)
        print("parent: ", self.__privatevar)
        
        
p = parent()

p.run() # 可以访问受保护的变量
```

### 装饰器

> 类似于c#中的getter和setter，但是python没有getter和setter，只能通过装饰器来实现


```py
class parent:
    def __init__(self, name):
        self._name = name;
    @property
    def name(self):
        return self._name;
    @name.setter
    def name(self, name):
        self._name = name;
        
p = parent("parent");

print(p.name); # parent
```

### 继承

> python的继承是写在括号中的，类似于c#中的冒号

1. 可以使用super来调用父类的实现
2. 可以使用super来调用父类的构造函数

```py

class parent:
    def __init__(self, name):
        self._name = name;
    def run(self):
        print("parent run.")

class sun(parent):
    def __init__(self, name):
        parent.__init__(self, name);
        
    def run(self):
        super().run(); # 调用父类的方法
        
class son(parent):
    def __init__(self, name):
        self._name = name;
    def run(self): # 重写父类的方法
        print("son run.")

s = sun("sun");
s.run();

s_2 = son("son");
s_2.run();
```

### 多态

> 在python中，多态是隐式的，因为是动态语言，所以不需要显式声明接口或者类，只要有相同的方法即可

