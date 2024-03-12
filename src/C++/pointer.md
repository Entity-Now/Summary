# 指针

## 指针常量vs常量指针
```cpp
int a = 10;
// 常量指针
const int * b = &a;
// 指针常量
int * const c = &a;
```
### 指针常量
> 特点：指针的指向不可以修改，指针指向的内存的值可以修改
- 什么意思？
    - 变量指向的地址不可以更改，变量指向的地址的值可以修改
    ```cpp
    int a = 10;
    int * const b = &b;
    *b = 20; // input :  20
    int c = 12;
    b = &c; // error , 不可以修改指向
    ```
### 常量指针
> 特点：指针的指向可以修改，但是指针指向的值不可修改

```cpp
int a = 10;
const int * b = &a;
*b = 20; // error ，指针指向内容的值不可修改
int c = 12;
b = &c; // ok，可以修改指针的指向
```

### 指向常量的常指针
>特点：指针的指向不可以修改，指针指向的值也不可更改 

```cpp
int a = 10;
const int * const b = &a;

int c = 12;
b = &c; // error
*b = 20; // error
```

## 空指针、野指针
> 空指针就是指向地址为空的指针
```cpp
int * ptr = NULL;
```
> 野指针就是指针指向一个随意的内存地址，如果使用，会造成不可预知的内存错误
```cpp
int * ptr = 0x1100; // 任意赋值的野指针

// 删除指针
int * ptr = new int(5);
delete ptr;
ptr = NULL;
```

## 函数后面跟着const
> 在函数后面加const表示函数不可以修改class的成员

```cpp
class test{
    public:
    int val;
    void setVal() const {
        val = 10; // error，不可以修改class成员
    }
    // 前面有const表示返回的值是const类型的
    const int GetVal(){
        const int temp = val;
        return temp;
    }
}
```

## 函数指针
> 是指向函数的指针变量，即本质是一个指针变量
>
>函数指针的定义为：类型说明符 (*函数名) (参数)，例如：int (*P) (int x);
```cpp
void (*func)(int x);
// 
void funcTest(int x);
func = funcTest;
(*func)();
```

## 指针函数
> 是指函数返回值是某一类型的指针，本质是一个函数
>
>指针函数的定义为： 类型标识符 *函数名(参数表)， 例如： int *f(x，y);
```cpp
int *func();

int *a = func();
```

## 智能指针
- 为什么要用智能指针？
    - 智能指针的作用是管理一个指针，因为存在以下这种情况：申请的空间在函数结束时忘记释放，造成内存泄漏。使用智能指针可以很大程度上的避免这个问题，因为智能指针是一个类，当超出了类的实例对象的作用域时，会自动调用对象的析构函数，析构函数会自动释放资源。所以智能指针的作用原理就是在函数结束时自动释放内存空间，不需要手动释放内存空间。

| 智能指针 | 说明 |
| ---- | ---- |
| shared_ptr | C++ 11中最常用的智能指针类型为`shared_ptr`,它采用引用计数的方法，记录当前内存资源被多少个智能指针引用。该引用计数的内存在堆上分配。当新增一个时引用计数加1，当过期时引用计数减一。只有引用计数为0时，智能指针才会自动释放引用的内存资源。对shared_ptr进行初始化时不能将一个普通指针直接赋值给智能指针，因为一个是指针，一个是类。可以通过make_shared函数或者通过构造函数传入普通指针。并可以通过get函数获得普通指针 | 
| auto_ptr | c++11已经抛弃，存在潜在的内存崩溃问题 | 
| unique_ptr | （替换auto_ptr）unique_ptr实现独占式拥有或严格拥有概念，保证同一时间内只有一个智能指针可以指向该对象。它对于避免资源泄露(例如“以new创建对象后因为发生异常而忘记调用delete”)特别有用。 | 
### 使用智能指针
> 使用智能指针的时候需要加上头文件memory
```cpp
#include <memory>
using namespace std;
```

### unique_ptr
> 当程序试图将一个 unique_ptr 赋值给另一个时，如果源 unique_ptr 是个临时右值，编译器允许这么做；如果源 unique_ptr 将存在一段时间，编译器将禁止这么做，比如：
```cpp
unique_ptr<string> p3(new string("auto"));
unique_ptr<string> p4;
p4 = p3; // 会报错

p4 = unique_ptr<string>(new string("new")); // 允许
```

### shared_ptr
shared_ptr实现共享式拥有概念。多个智能指针可以指向相同对象，该对象和其相关资源会在“最后一个引用被销毁”时候释放。从名字share就可以看出了资源可以被多个指针共享，它使用计数机制来表明资源被几个指针共享。可以通过成员函数use_count()来查看资源的所有者个数。除了可以通过new来构造，还可以通过传入auto_ptr, unique_ptr,weak_ptr来构造。当我们调用release()时，当前指针会释放资源所有权，计数减一。当计数等于0时，资源会被释放。

shared_ptr 是为了解决 auto_ptr 在对象所有权上的局限性(auto_ptr 是独占的), 在使用引用计数的机制上提供了可以共享所有权的智能指针。
#### 成员函数
| 函数 | 说明 |
| ---- | ---- |
| use_count | 返回引用计数的个数 |
| unique | 返回是否独占所有权(ues_count为1) |
| swap | 交换两个shared_ptr对象（即交换所拥有的对象） |
| reset | 放弃内部对象的所有权或拥有对象的变更，会引起源对象的引用计数减少 |
| get | 返回内部对象（指针），由于已经重载了方法，因此和直接使用对象是一样的 |
### shared_ptr的简单例子
```cpp
int main(){
    string *s1 = new string("s1");

    shared_ptr<string> ps1(s1);
    shared_ptr<string> ps2;
    ps2 = ps1;

    cout << ps1.use_count() << endl; // 2
    cout << ps2.use_count() << endl; // 2
    cout << ps1.unique() << endl; // 0

    cout << s1 << endl; // 0x00000
    cout << *s1 << endl; // s1

}
```
#### 使用make_shared创建指针
> 尽量使用make_shared初始化智能指针
```cpp
shared_ptr s1;
s1 = make_shared<string>("你好世界~");

cout << *s1 << endl; // 你好世界~
```
### weak_ptr

> 该类型的指针通常不单独使用（没有实际用处）,只能和shared_ptr类型指针搭配使用。甚至于，我们可以将weak_ptr类型指针视为shared_ptr指针的一种辅助工具。

> 当你想使用对象，但是并不想管理对象，并且在需要使用对象时可以判断对象是否还存在

```cpp
class B; // 前置声明类B
class A
{
public:
	A() { cout << "A()" << endl; }
	~A() { cout << "~A()" << endl; }
	weak_ptr<B> _ptrb; // 指向B对象的弱智能指针。引用对象时，用弱智能指针
};
class B
{
public:
	B() { cout << "B()" << endl; }
	~B() { cout << "~B()" << endl; }
	weak_ptr<A> _ptra; // 指向A对象的弱智能指针。引用对象时，用弱智能指针
};
int main()
{
    // 定义对象时，用强智能指针
	shared_ptr<A> ptra(new A());// ptra指向A对象，A的引用计数为1
	shared_ptr<B> ptrb(new B());// ptrb指向B对象，B的引用计数为1
	
    // A对象的成员变量_ptrb也指向B对象，B的引用计数为1，因为是弱智能指针，引用计数没有改变
	ptra->_ptrb = ptrb;
	// B对象的成员变量_ptra也指向A对象，A的引用计数为1，因为是弱智能指针，引用计数没有改变
	ptrb->_ptra = ptra;

	cout << ptra.use_count() << endl; // 打印结果:1
	cout << ptrb.use_count() << endl; // 打印结果:1

	/*
	出main函数作用域，ptra和ptrb两个局部对象析构，分别给A对象和
	B对象的引用计数从1减到0，达到释放A和B的条件，因此new出来的A和B对象
```

#### 属性
| 属性 | 说明 |
| --- | ---- |
| operator=() | 重载=赋值运算符，是的weak_ptr指针可以直接被weak_ptr或者shard_ptr类型指针赋值。 | 
| swap(x) | 其中x表示一个同类型的weak_ptr类型指针, 该函数可以互换2个同类型weak_ptr指针的内容 | 
| reset() | 将当前指针重置为空指针 | 
| use_count() | 查看指向和当前weak_ptr相同的shared_ptr指针数量 | 
| expired() | 判断当前指针是否过期 | 
| lock() | 如果当前weak_ptr已经过期 | 


### 删除指针
```cpp
int * ptr = (int *)234;
delete ptr;

// 管理动态数组时，需要指定删除器，shared_ptr默认的删除器（使用的是delete）不支持数组对象。
shared_ptr<int> ptr(new int[1],default_delete<int[]>());
// or，第二个参数是lambda表达式
shared_ptr<int> ptr2(new int[1],[](int *p){delete[] p;});

```

### 判断指针是否为空
```cpp
if(bool(ptr)){
    cout << "ptr is nullptr" << endl;
}else{
    cout << "the ptr is not nullptr" << endl;
}
```

### 注意事项

> 不用使用原始指针初始化多个shared_ptr，否则会造成二次释放同一个内存

```cpp
int * p = new int;
std::shared_ptr<int> p2(p);
std::shared_ptr<int> p3(p);
```

> 不要在实参中创建shared_ptr，应该先创建一个智能指针，再使用

```cpp
deleteIntPtr(shd::shared_ptr<int>(new int)); // 错误的
shd::shared_ptr<int> ptr(new int);
deleteIntPtr(ptr);  // ok
```
> 返回this指针要通过shared_from_this();
```cpp
struct A
{
    std::shared_ptr<A> getSelf(){
        return std::shared_ptr<A>(this); // 错误
    }
};
int main(){
    std::shared_ptr<A> p(new A);
    std::shared_ptr<A> p2 = p->getSelf(); // 会导致重复析构
}
```
> 应采用如下方式，继承`enable_shared_from_this`类的`shared_from_this()`方法返回this指针
```cpp
class A: public std::enable_shared_from_this
{
    public:
        std::shared_ptr<A> getSelf(){
            return shared_from_this();
        }
}
```

## 将DLL注入到其他进程，并使用基址+偏移获取属性的内容
```cpp
// 使用ce获取的基址
int* baseAddress = (int*)(0x0019975C);
// baseAddress是指针，并且它的值也是指针
int* pointer = (int*)*baseAddress;
// 偏移量
int deviation = 0x5578;
std::count << "" << pointer + deviation << std::endl;
*(pointer + deviation) = 999;
```
```cpp
int* inject = (int*)(0x0019975C);
int* two = (int*)*inject;
int off = 0x5578;
std::cout << "" << (int*)(*inject + off) << std::endl;
std::cout << "" << (int*)(*inject + 0x5578) << std::endl;
*(int*)(*inject + off) = 999;
```
