# lambda表达式

## 仿函数
> 在lambda还未出现的时候是以operator实现相同效果的

```cpp
class RecallFunc 
{
public:
    // explicit 隐式调用构造函数
    explicit RecallFunc(string name) :name(name) 
    {
        cout << name;
    };
    // 重载operator构造函数方法
    string operator()(string name) const {
        cout << name << endl;
        return name;
    }
public:
    string name;
};

// use
 auto result = RecallFunc("Hello");
 result("World");
// 输出Hello world

cout << RecallFunc("Hello")("World") << endl;
// Hello World
// World
```
### 使用仿函数做到跟lambda一样的效果
```cpp
class RecallFunc 
{
public:
    explicit RecallFunc(){};
    string operator()(string name) const {
        return name;
    }
public:
    string name;
};

void test(function<string(string)> func)
{
    cout << func("Hello World") << endl;
}

int main(){
    auto RecallFunc = [](string name){
        return name;
    }   
    // lambda
    test(recallFunc);
    // 仿函数
    auto recall = RecallFunc();
    test(recall);
}

```

## 基本用法
```cpp
auto f = [](int a) -> int { return a + 1};

std::cout << f(1) << std::endl; // 2

// 可以省略返回值类型
auto f2 = [](int a){return a;}; // OK

// 另外当lambda表达式没有参数时，参数列表可以省略
auto f3 = []{return "456";};
auto f4 = [](){return "123"};
```

## 使用lambda表达式捕获列表
| 范围 | 说明 |
| ---- | ---- |
| [] | 不捕获任何变量 |
| [&] | 捕获外部作用域中的所有变量,并作为引用在函数体中使用（按引用捕获） |
| [=] | 捕获外部作用域中的所有变量,并作为副本在函数体中使用（按值捕获） |
| [=,&变量] | 按值捕获外部作用域中所有变量，并按引用捕获变量 |
| [变量] | 按值捕获变量，同时不捕获其他变量 |
| [this] | 捕获当前类中的this指针,让lambda表达式拥有当前类成员函数相同的访问权限。如果已经使用了 & 或者 =，就默认添加此选项。捕获 this 的目的是可以在 lamda 中使用当前类的成员函数和成员变量。 |

## 基本用法
```cpp
class A
{
    public:
    int i_ = 0;
    void func(int x, int y)
    {
        auto x1 = []{ return i_; };                    // error，没有捕获外部变量
        auto x2 = [=]{ return i_ + x + y; };           // OK，捕获所有外部变量
        auto x3 = [&]{ return i_ + x + y; };           // OK，捕获所有外部变量
        auto x4 = [this]{ return i_; };                // OK，捕获this指针
        auto x5 = [this]{ return i_ + x + y; };        // error，没有捕获x、y
        auto x6 = [this, x, y]{ return i_ + x + y; };  // OK，捕获this指针、x、y
        auto x7 = [this]{ return i_++; };              // OK，捕获this指针，并修改成员的值
    }
};
int a = 0, b = 1;
auto f1 = []{ return a; };               // error，没有捕获外部变量
auto f2 = [&]{ return a++; };            // OK，捕获所有外部变量，并对a执行自加运算
auto f3 = [=]{ return a; };              // OK，捕获所有外部变量，并返回a
auto f4 = [=]{ return a++; };            // error，a是以复制方式捕获的，无法修改
auto f5 = [a]{ return a + b; };          // error，没有捕获变量b
auto f6 = [a, &b]{ return a + (b++); };  // OK，捕获a和b的引用，并对b做自加运算
auto f7 = [=, &b]{ return a + (b++); };  // OK，捕获所有外部变量和b的引用，并对b做自加运算
```
> 需要注意的是lambda表达式无法修改通过复制方式捕获的外部变量.如果希望修改这些变量的话，我们需要使用引用的方式进行捕获
### 一个错误的细节
```cpp
int a = 0;
auto f = [=]{ return a; };      // 按值捕获外部变量
a += 1;                         // a被修改了
std::cout << f() << std::endl;  // 输出1
```
> 在捕获变量的一瞬间，a的值就已经被复制到f中了。之后a被修改，但此时f中存储的a仍然还是捕获时的值，因此，最终输出的结果是0.

> 如果非要修改按值捕获的变量可以使用mutable
```cpp
int a = 0;
auto f1 = [=]{return a++;}; // error
// 需要注意的是被mutable修饰的lambda就算没有参数也要写明参数列表
auto f2 = [=]() mutable {return a++;}; // OK
```

## lambda表达式的类型
> lambda的类型在c++中被称为“闭包类型（closure type）”。他是一个特殊的，匿名的非nunion的类类型。

> 因此，我们可以认为它是一个带有 operator() 的类，即仿函数。因此，我们可以使用 std::function 和 std::bind 来存储和操作 lambda 表达式：
```cpp
std::function<int(int)> f1 = [](int a){return a;};
// 返回值为int参数为void，使用bind绑定参数
std::function<int(void)> f2 = std::bind([](int a){return a;},123); // 123
```

### 没有捕获变量的lambda表达式可以直接转换为函数指针，而捕获变量的lambda则不能转换为函数指针
```cpp
typedef void(*ptr)(int);

ptr p = [](int p){delete p;}; // 正确
ptr p = [&](int p){delete p;}; // 错误，有状态的lambda不能直接转换为函数指针
```