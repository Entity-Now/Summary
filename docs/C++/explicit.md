# explicit 关键词

## 什么是隐式转换？
> explicit关键词只对有一个参数的类构造函数有效，如果类构造函数大于或等于两个时，是不会产生隐式转换的，所以explicit就无效了。

```cpp
class test {
public:
    int age;
    int val;
public:
    test(int a = 0, int b = 1):age(a),val(b) {
        cout << a << "<->" << b << endl;
    }
};
void Func(test t) {
    cout << "func" << endl;
}
```
 ```cpp
// 隐式转换，
Func((3,3)); // 3 <-> 3
Func(2); // 2 <-> 1
// 
test t = (3,3); // 3 <-> 3
// 会把值赋值给第一个参数
test t2 = 2; // 2 <-> 1

```

## 使用explicit
```cpp
class test {
public:
    int age;
    int val;
public:
    // 使用explicit限定符
    explicit test(int a = 0, int b = 1):age(a),val(b) {
        cout << a << "<->" << b << endl;
    }
};
```
```cpp
Func(3); // error，必须使用对应的类型

Func(test(3,3)) // OK

test t = 2; // error

test t2 = test(2,3); // OK
```