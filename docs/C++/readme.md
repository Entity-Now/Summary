# c++基础教程
# c++基础
```csharp
using namespase A;   //名称空间
#include <iostream> //#include引用包含的意思 ， iostream标准库，输入输出的意思
```
# 八进制and十六进制
```cpp
 0开头 0-8是八进制
 ox开头 表示十六进制
 0-9表示十进制
```
# 常量
```csharp
#define 常量名 内容;
```
# 输入输出
```csharp
输出使用cout 输入使用cin

cout <<"Hello Word!";

char a;  //变量

cin >>a;  //接受输入

printf(控制格式,数值列表); 输出
    printf("123 \n");
    printf("%s","你是不是猪！\n");  //输出字符串
    printf("%f\n",1.00); //输出小数点
    printf("%d\n",10); //输出整数
```
# 格式字符
```csharp
%d      以十进制形式输出带符号整数
%o      以八进制形式输出无符号整数
%x      以十六进制形式输出无符号整数
%u      以十进制输出无符号整数
%c      输出单个字符
%s      输出字符串
%f      以小数形式输出单精度，双精度实数
%e      以指数形式输出单精度，双精度实数
%g      以%f%e中较短的输出宽度输出单精度。双精度实数
```
# 流操作的控制具体函数
```csharp
#include<iomanip> //引入类库





```
# 运算符
```csharp
    cout << (8^12) <<endl;   //等于4
    cout << (~123) <<endl;  //等于-124
    cout << (14|12) << endl; //等于14
    cout << (14&12) << endl; //等于12


```
# 判断字符占用几个字节
```csharp
Sizeof()；

    char a = '和';
    cout << sizeof(a) << endl;
    cout << sizeof("和") << endl;
```
# 重命名数据类型
```csharp
typedef int T;
现在 int 可以用T来表示

T A = 10;


```
# 科学计数法
```cpp
flot a = 1.2345e2;   //  = 123.45;
flot a = 1.2345e-2;   //  = 00.12345;
```
## entern变量,允许其他文件调用
```cpp
extern int a ; //
```
## 字符串复制
```cpp
strcpy("被复制变量","复制字符串");
```
## 指针 
```cpp
int A = 10;     //普通变量
int * a;        //声明指针变量

a = &A;         //赋值指针使用&符号
a = (int *) 10; //强行转换赋值

cout << "输出指针地址"       <<  a  <<endl;
cout << "输出指针里面的内容" << *a <<endl;

*a = 11;  //改变指针里面的值

cout << "指针数组---------------------------------------------------------------"<<endl;

int a[10] = {1,2,3,4,5,6,7,8,9,10};
int *P = a;             //数组不需要加&符号
//第一种方式
for(int i = 0; i < 10 ; *p++,i++)
{
    cout << *P << endl;
}
//第二中方式
for(int i = 0;i<10;i++)
{
    cout << *p++ <<endl;
}

cout << "二维数组----------------------------------------------------------------------------------" <<endl;

/// <summary>
/// 二维数组
/// </summary>
void P5() 
{
    int a[4][3] = {1,2,4,5,6,7,8,9,10.11,12};
    int* p = a[0];

    //sizeof(a) = 48 除 sizeof(int) = 4
    for(int i = 0;i<sizeof(a)/sizeof(int);i++)
    {
        cout << "address: ";
        cout << a[i];
        cout << "  is  ";
        cout << *p++ << endl;

    }


}
/// <summary>
/// 指针字符串-连接字符串
/// </summary>
void P6()
{
    char a[100], b[100];
    char* p1 = a;
    char* p2 = b;
    gets_s(a);
    gets_s(b);
    while (*p1 != '\0')
    {
        p1++;
    }
    while(*p2 !='\0')
    {
        *p1++ = *p2++;  //最简单的方式
      /*  *p1 = *p2;
        p1++;
        p2++;*/
    }
    *p1 = '\0';
    puts(a);
}
void P7()
{
    char a[100] = "hello word！";
    char* p = 0;
    int i;
    cout << "指针访问，指针输出" << endl;
    for(p = a;*p!='\0';p++)
    {
        cout << *p;
    }
    cout << endl;
    cout << "数组访问，数组输出" << endl;
    for(i=0;a[i]!='\0';i++)
    {
        cout << a[i];
    }
    cout << endl;
    cout <<"数组访问，指针输出"<< endl;
    for (i=0;*(a+i);i++) 
    {
        cout << *(a + i);
    }
    cout << endl;
    cout << "指针和下标访问，指针表示" << endl;
    for(i=0,p=a;*(p+i);i++)
    {
        cout << *(p+i);
    }
    cout << endl;
    cout << "指针和下标访问，下标表示" << endl;
    for(i=0,p=a;p[i];i++)
    {
        cout << p[i];
    }
}
```
## 指针数组
```cpp
void array1(char * [],int);
void array2();
int main()
{
    //一维指针数组使用
    //char* a[5] = { (char*)"a",(char *)"b" ,(char*)"c",(char*)"d"};
    //int n = 4;
    //array1(a, n);

    //二维数组使用
    array2();
}
/// <summary>
/// 一维指针数组
/// </summary>
/// <param name="a">指针数组</param>
/// <param name="b">计数变量</param>
void array1(char * a[] , int b)
{
    char *p = a[0];
    int i = 0;
    while (i < b)
    {
        p = (char *)*(a + i);
        i++;
        cout << p << endl;
    }
}

/// <summary>
/// 二维数组
/// </summary>
void array2()
{
    int *p[5];
    int a = 1,b=2,c=3,e=4,f=5;
    p[0] = &a;
    p[1] = &b;
    p[2] = &c;
    p[3] = &e;
    p[4] = &f;
    int** q = p;        //申明而二维数组

    cout << *(*q++) << endl;
    cout << *(*q++) << endl;
    cout << *(*q++) << endl;
    cout << *(*q++) << endl;
    cout << *(*q) << endl;
}
```
## 指针和函数
```cpp
char* str(char *name);
int call(int, int);
int main()
{
    int a = 3;
    int b = 6;
    int input;
    int (*pfun)(int,int);   //申明指针函数
    pfun = call;            //给指针函数赋值
    input = (*pfun)(a, b);  //运用指针函数
    cout << input << endl;

    return 0;
}
/// <summary>
/// 函数指针
/// </summary>
/// <param name="name">user</param>
/// <returns></returns>
char *str(char *name)
{
    char* str1 = (char*)"尊敬的会员：";
    char* str2 = (char*)",欢迎登录;";
    char* newstr = (char*)malloc(100); //malloc申请空间
    char* r = newstr;
    while (*str1)
        *r++ = *str1++;
    while (*name)
        *r++ = *name++;
    while (*str2)
        *r++ = *str2++;
    *r= '\0';
    return newstr;

    //使用方式
    //char name[100] = { '\0' };

    //gets_s(name);
    //char* s = str(name);
    //cout << s << endl;
    //free(s);  //释放malloc申请的空间
    //s = 0;        //赋值为空
}

/// <summary>
/// 指针函数
/// </summary>
/// <param name="a"></param>
/// <param name="b"></param>
/// <returns></returns>
int call(int a, int b) 
{
    return (a * b) / a;
}
```
## 引用 (&符号)
```cpp
#include <iostream>
using namespace std;
void yy();
void ys(int & a , int & b);
int& fh(int a , int b);
int J;
int main()
{
    fh(4,5);        

    cout << J << endl;
    fh(4, 5)=100;       //引用函数可以赋值：fh(4,5) =  100;
    cout << J << endl;
}

/// <summary>
/// &引用变量
/// </summary>
void yy()
{
    int a = 10;
    int & Aa = a;           //引用变量a
    cout << Aa << endl;
    a = 20;                 //a改变Aa也跟着改变
    cout << a << endl;
    Aa = 30;                //Aa改变a也跟着改变
    cout << Aa << endl;

}

/// <summary>
/// 更换外部变量内容
/// </summary>
/// <param name="a">a= 5 </param>
/// <param name="b">b= 6 </param>
void ys(int & a , int & b) 
{
    //使用方法
    //int a = 5;
    //int b = 6;
    //cout << "更换前a=  " << a << "  更换前b=  " << b << endl;
    //ys(a, b);
    //cout << "更换后a=  " << a << "  更换后b=  " << b << endl;
    int tmp = a;
    a = b;
    b = tmp;

}

/// <summary>
/// 函数返回值是引用类型，提前声明全局变量
/// </summary>
/// <param name="a"></param>
/// <param name="b"></param>
/// <returns></returns>
int & fh( int a , int b)
{
    return J = (a + b) * 5;
}
```
# 结构体 （struct）
```cpp
#include <iostream>
using namespace std;

struct struct_a  //结构体 struct
{
    int Aa;
    int Ab;
    int Ac;
}A,*B; //可以在后面直接添加变量（可以添加多个）

struct struct_b        //结构体嵌套
{
    int a;
    int b;
    struct_a c;
};

int main()
{

    cout << "结构体-----------------------------" << endl;
    A.Aa = 43;
    A.Ab = 63;
    A.Ac = 97;

    cout << A.Aa << endl;
    cout << A.Ab << endl;
    cout << A.Ac << endl;

    cout << "指针结构体---------------------" << endl;
    B = &A;                 //数组结构体：使用->访问
    cout << B->Aa << endl;
    cout << B->Ab << endl;
    cout << B->Ac << endl;
    cout << (*B).Aa << endl;    //还可以这样

    cout << "结构体嵌套-----------------------" << endl;
    struct_b Sb = { 1,2,{1,2,3} }; //使用方括号初始化
    cout << Sb.a << endl;
    cout << Sb.b << endl;
    cout << (Sb.c).Aa << endl;      //使用括号
    cout << (Sb.c).Ab << endl;
    cout << (Sb.c).Ac << endl;
    cout << Sb.c.Ac << endl;        //不要括号也可以

    cout << "结构体大小-----------------------" << endl;
    cout << sizeof(Sb) << endl;



}
```
## 结构体和函数
```csharp
struct Show         //声明结构体
{
    int age;
    int height;
    int weight;
};

void Message(struct Show S);
void Message2(struct Show * S);
void Message3(struct Show & S);

int main()
{
    //使用结构体函数
    Show S = { 18,170,110 };
    Message(S);

    //使用结构体指针
    Show S2 = { 18,170,110 };
    Message2(&S2);

    //使用引用,
    Show S4 = { 18,170,110 };
    Message3(S4);
    cout << "测试引用在外部是否被改变" << endl;
    cout << S4.age << endl;
    cout << S4.height << endl;
    cout << S4.weight << endl;

}


void Message(struct Show S)
{
    cout << "函数结构体----------变量" << endl;
    cout << S.age << endl;
    cout << S.height << endl;
    cout << S.weight << endl;

}

void Message2(struct Show * S)
{
    cout << "函数结构体----------指针" << endl;
    cout << S->age << endl;
    cout << S->height << endl;
    cout << S->weight << endl;

}

void Message3(struct Show& S)
{
    cout << "函数结构体----------引用" << endl;
    cout << S.age << endl;
    cout << S.height << endl;
    cout << S.weight << endl;
    S = { 0,0,0};

}
```
## 结构体和数组
```csharp
struct Show 
{
    int age;
    int weight;
    int height;
};

int main()
{
    Show S[5] = { {1,2,3},{11,2,3},{111,2,3},{1111,2,3},{1111,2,3} };
    //cout << S[0].age << endl;
    //cout << S[1].age << endl;
    //cout << S[2].age << endl;
    //cout << S[3].age << endl;
    //cout << S[4].age << endl;

    Show* S2;
    S2 = S;

    for (int i = 0; i<5 ; i++,S2++) 
    {
        cout << S2->age << endl;
        cout << S2->height << endl;
        cout << S2->weight << endl;
    }
}

```
## 共用体
```csharp
union(共用体),跟结构体相似，但是同时只能存在一个值

union Show          //声明共用体
{
    int age;
    int witght;
    int height;
};


int main()
{
    cout << "共用体同时只能存在一个值，字节占用最大那个" << endl;

    Show S;
    S.age= 1;
    S.height = 2;
    S.witght = 3;                       //共用体仅存在最后一次赋的值，每次只能存在一个值
    cout << S.age << endl;              //  = 3
    cout << S.witght << endl;           //  = 3
    cout << S.height << endl;           //  = 3

}
```
## 枚举
```csharp
enum Show
{
    age,
    weight,
    height
};


int main()
{
    Show S =(enum Show)0;

    cout << S << endl;
    if (S == (Show)weight) 
    {
        cout << "枚举值是：weight" << endl;
    }
    else if(S == (Show)age)
    {
        cout << "枚举值是：age" << endl;
    }
    else if (S == (Show)height)
    {
        cout << "枚举值是：height" << endl;
    }

}

```
## class类：创建头文件
```csharp
//创建一个头文件cs.h
class Cs
{
public:         //公开类型
    int get_age();
    int set_age(int age ,int weight ,int height);

private:        //私有类型
    int age;
    int weight;
    int height;
protected:      //保护类型

};
```
## class类：类文件
```csharp
#include "Cs.h"

using namespace std;

int main()
{
    Cs C;                       //使用Cs声明一个变量
    C.set_age(10);              //使用C.set_age();调用函数
    int a = C.get_age();
    cout << a << endl;
}

void Cs::set_age(int age )      //初始化Cs类里面的set_age();函数
{
    Cs::age = age;
}

int Cs::get_age()               //初始化Cs类里面的get_age();函数
{
    return age;
}
```
## class和指针
```csharp
#include "Cs.h"

using namespace std;

int main()
{
    Cs C;                               //声明普通类
    Cs *P = &C;                         //声明指针类  ， &符号取C的地址
    C.set_age(10);                      //使用普通类
    cout << P->get_age() << endl;       //指针调用函数使用->
}

void Cs::set_age(int age )
{
    Cs::age = age;
}

int Cs::get_age()
{
    return age;
}
```
## 构造函数和析构函数and变量初始化
```cpp
class Cs
{
public:
    Cs();       //构造函数
    ~Cs();      //析构函数
    int add();  //

public:
    int age;
    int weight;
    int height;
};

std::cout<<"函数定义--------------------------------------------------------------------"<<endl;

Cs::Cs():age(18),weight(110),height(170)            //函数后面跟着：加变量（）即可给变量赋值
{
    std::cout << "构造函数初始化" << std::endl;
}

int Cs::add()
{
    return age + weight + height;
}

Cs::~Cs()                           //析构函数
{
    age = 0;
    weight = 0;
    height = 0;
}
```