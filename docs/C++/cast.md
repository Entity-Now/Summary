# 类型强制转换

:::tip
类型转换有四种方式，分别是：static_cast ， const_cast，dynamic_cast和reinterpret
:::

## static_cast
> 基本类型的转换，但不能用于基本类型指针之间的转换(void指针和基本类型指针之间可以)

```cpp
// 
double d = 0;
int i = static_cast<
```

> 用于有继承关系的子类与父类之间的指针或引用的转换
> 
> 空类型指针转换为任意类型的指针
```cpp
int a = 0;;
int *b = &a;
// 这种转换极容易出错，需保证转换后的类型就是指针原先的类型
int *c = static_cast<int *>(b);
```

## const_cast
> const_cast转换符用来移除变量的const或volatile限定符。
```cpp
const int constant = 21;
const int * constantPtr = &constant;
int * constantCast = const_cast<int *>(constantPtr);
```
> 传统方式实现const_cast运算符
```cpp
const int constant = 21;
int * modifier = (int*)(&constant);
```

### 如果我们不想修改const变量的值，那我们又为什么要去const呢？
>原因是，我们可能调用了一个参数不是const的函数，而我们要传进去的实际参数确实const的，但是我们知道这个函数是不会对参数做修改的。于是我们就需要使用const_cast去除const限定，以便函数能够接受这个实际参数。

```cpp
void pointer(int *val){
    cout << val << endl;
}

int main(void){
    const int constant = 21;
    pointer(constant); // error

    pointer(const_cast<int *>(constant)); // ok
}
```

## dynamic_cast
> dynamic_cast是四个强制类型转换操作符中最特殊的一个，它支持运行时识别指针或引用
>
> 父转子难，子转父易
```cpp
// 类似于C# 里面的协变跟逆变
class Base {
public:
    Base() {};
    virtual void show()
    {
        cout << "this is base class" << endl;
    }
};

class derived : public Base {
public:
    derived() {};
    void show() {
        cout << "this is derived class" << endl;
    }
};

int main(){
    // 子类转换为父类
    Base* base = new derived;
    if (derived* d = dynamic_cast<derived*>(base)) {
        cout << "derived-》base." << endl;
        d->show();
    }
    // 父类转换为子类，使用指针转换会失败
    Base* base2 = new Base;
    if (derived* d = dynamic_cast<derived *>(base2)) {
        cout << "base -》 derived." << endl;
        base2->show();
    }
    else {
        cout << "base -》 derived转换失败" << endl;
    }
    // 可以改为引用
    Base base3;
    Base& base4 = base3;
    try
    {
        derived& d = dynamic_cast<derived&>(base4);
        d.show();
        cout << "Base -> derived" << endl;
    }
    catch (const std::exception& e)
    {
        cout << e.what() << endl;
        cout << "将父类转换为子类失败" << endl;
    }

    derived de;
    Base& Base5 = de;
    try
    {
        derived& base6 = dynamic_cast<derived &>(Base5);
        base6.show();
        cout << "转换成功" << endl;
    }
    catch (const std::exception& e)
    {
        cout << e.what() << endl;
    }
}
```