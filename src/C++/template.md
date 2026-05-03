# 模板

## template
> 使用class与typename无任何区别
>
> `template<typename T>` or `template<class T> `

```cpp
template<typename T> void Swap(T *a, T *b){
    T temp = *a;
    *a = *b;
    *b = temp;
}

// 
int a = 1, b = 2;
Swap(&a, &b);

// char
char a = '1', b = '2';
Swap(&a, &b);
```

## 类模板
> 

```cpp
template<typename T>
class Point {
public:
    Point(T name) :name(name) {
        cout << name << endl;
    }
public:
    T name;
};

// 
Point<string> p("the type is string");
cout << p.name << endl;
// the type is string
```