# C#基本语法

## 线程

```csharp
// 线程
new Thread(函数).start();

// UI线程
Dispatcher.Invoke();
```

控制台输出

\========

```csharp
Console.WriteLine("Hello Word"); //输入一行并换行

Console.Write("Hello Word"); //输入一行不换行

Console.Read()  //接收输入的内容

Console.ReadLine() //接收输入的一行内容
```

##  Async 和 Await 异步编程

```csharp
Async和Await异步编程

使用Async修饰 Bambda表达式和匿名方法

```

## 常量的定义

```csharp
const 常量
静态常量，必须先给常量赋值

readonly 动态常量
只能在类中定义
```

## c#变量类型

```csharp
sbyte  有符号8位整数
short  有符号16位整数
int    有符号32位整数
long   有符号64位整数

byte  无符号8位整数
ushort  无符号16位整数
uint    无符号32位整数
ulong   无符号64位整数

float   精确到7位数（浮点型）
double  精确到15-16位数（浮点型）
decimal 精确到128位数（高精度浮点型）

bool  布尔值（true / false）

char  字符类型

string 字符串类型
```

## 类型强制转换

```csharp
Convert.ToString();  //强制转换为字符串

Convert.Toint32();  //转换为int32位

int a = 1;
float b = 1.0F;
string c = "1.0";
// 几种转换方式
Convert.ToInt32(b);

// 转换失败判断，省去try catch
int.TryParse(c,out int errorB);
```

## class 转换

```cpp
class Ca { };
class Cb : Ca { };
class Cc : Cb { };

// 类型转换，使用as转换，转换失败为null
Cc CC = new Cc();
var IsCa = CC as Ca;
if (IsCa != null)
{

}

// 类型转换, 如果CC 是 Ca的子类那就把CC赋值给CC1
if (CC is Ca CC1)
{

}
```

## ((dynamc)x)

```cpp
class Ca
{
    public Date Date { get; set; }
}
class Date
{
    public string like { get; set; }
}

// object 对象
object Oa = new Ca
{
    Date = new Date
    {
        like = "10"
    }
};

// 普通获取like值方法
var OaVlue = Oa.GetType().GetProperty("Date").GetValue(Oa);
var value = OaVlue.GetType().GetProperty("like").GetValue(OaVlue);

Console.WriteLine(value);

// dynamic获取值

var value2 = ((dynamic)Oa).Date.like;
Console.WriteLine(value2);
```

## ？  ？？

```cpp
string? a = null;
// ?? 跟三元表达式类似( ? : ), Kotlin中的 （ ?: ）
var length = a?.Length ?? 0;
// ?? 的优先级高于 ? : ,
var IsNull = (length == 0 ? "1" : "0") ?? "1";
```

## const 与 readonly

```cpp
const # 变量，枚举等

readonly # 可以用于对象，枚举等类型第一次赋值后不可再次赋值。 对象可以改变。
```

## 位运算符

```csharp
Console.WriteLine("位与计算8与12=         " + (8&12)); //等于8
Console.WriteLine("位或计算8与12=         " + (8|12)); //等于12
Console.WriteLine("位异或计算8与12=       "+(8 ^ 12)); //等于4
Console.WriteLine("位取反计算= " + (~123)); //等于-124
```

## 移位运算符

```csharp
 Console.WriteLine("右移位运算符=   "+( 48 >> 3 ));  //  48 / 6  = 6    （3的2次幂=6）
 Console.WriteLine("左移位运算符=   "+( 48 << 6 ));   // 48 * 12 = 3072 （6的2次幂=12）
```

## 算数运算 Math

```csharp
double d = Math.Pow(4, 16); //取指定次幂，还有更多自行了解
```

## 指数

```csharp
科学计数法

double A = 123e3；  // 结果=123000
double B = 123e-3；  //结果=0.123
```

## 元组

```csharp
元组 var a = (1,2);

var Int = 1;
var Int2 = 2;
var C = (A:Int,B:Int2);  //具有名称的元组，类似json的name
var B = (Int,Int2);  //无名称的元组用 变量名替代
var A = ("你是猪吗？","你是啥？"); //无名称元组，用Item替代
MessageBox.Show(A.Item1);
MessageBox.Show(B.Int.ToString()); //因为是int类型所以要转换字符串
MessageBox.Show(C.A.ToString());
var Item1 = (A:"A",B:"B");
var Item2 = (A:"A",B:"B");
MessageBox.Show((Item1 == Item2).ToString());  //比较元组
(string A, string B)? nulltype = Item1;  //可空元组
MessageBox.Show((nulltype == Item2).ToString()); //可空元组比较
-----------------------------------------------------------------------------------------------------
    var Int = (A: 5,B:10);
(int? a, int? b) nullInt = (5,10);
MessageBox.Show((nullInt == Int).ToString()); //int类型元组比较值相同为true

(long a, long b) Long = (5,10);
MessageBox.Show((Long == Int).ToString()); //int类型和long类型比较值相同也为true

//不同的成员名称比较值相同为true，因为元组名称不参与比较
var Int2 = (5,10);
MessageBox.Show((Int2 == (A:5,B:10)).ToString());

(int a, (int b, int c)) Tuple = (5,(5,10));  //嵌套元组
MessageBox.Show((Tuple == (5,(5,10))).ToString());
------------------------------------------------------------------------------------------------------
//元组赋值,元素类型或者数量不同的元组无法赋值
var A = (5 , 10);
var B = (A:10,B:20);
A = B;
B = A;
MessageBox.Show(A.ToString());
MessageBox.Show(B.ToString());
```

### 协变 out， 逆变 in

```csharp
公式：

协变：IFoo<父类> = IFoo<子类>；

逆变：IBar<子类> = IBar<父类>；
```

### out 与 ref

```cpp
首先：两者都是按地址传递的，使用后都将改变原来参数的数值。

其次：ref可以把参数的数值传递进函数，但是out是要把参数清空，
就是说你无法把一个数值从out传递进去的，out进去后，参数的数值为空，
所以你必须初始化一次。这个就是两个的区别，或者说就像有的网友说的，ref是有进有出，out是只出不进。
```

## Lambda 表达式

```csharp
参数 => 表达式;
//左边是参数，另一边是表达式
Func<int, int> Fun = X => X * X; // X是Fun的参数
MessageBox.Show(Fun(5).ToString()); //output 25; 返回；5 * 5=25
-----------------------------------------------------------------------------------------
int[] a = { 1,2,3,4,5};
var Fun = a.Select(x=>x*x); //x = x * x
MessageBox.Show(string.Join("",Fun));
-------------------------------------------------------------------------------------------
delegate int del(int A, int B); //委托
private void CheckBox_Checked(object sender, RoutedEventArgs e) //点击事件
{

    del c = (int A,int B) => A + B; //lambda表达式
    MessageBox.Show(c(5,10).ToString()); //5+10 =15 再转换为字符转

}
------------------------------------------------------------------------------------------------
delegate int del(int A, int B); //委托
private void CheckBox_Checked(object sender, RoutedEventArgs e)
{
    del L = (int W, int R) => { int w = W + R; return w; }; //lambda表达式，具有多个语句要加{ 表达式 }
    MessageBox.Show(L(100,50).ToString());  //返回结果150

}
-------------------------------------------------------------------------------------------------------
List<string> list = new List<string>()  //
{
    "Participate",
    "参与",
    "warning",
    "警告",
    "initialization",
    "初始化",
    "database",
    "数据库",
    "different",
    "不同的",
    "meament",
    "成员",
    "Exposes",
    "公开",
    "over",
    "结束",
    "coliection",
    "收集",
    "simple",
    "简单的"
};
MessageBox.Show(list.First(x =>x.Length > 1)); //使用lambda表达式输出第一个大于1的成员
------------------------------------------------------------------------------------------------------------
private void CheckBox_Checked(object sender, RoutedEventArgs e)  //点击事件
{

    Lambda("你是猪",X=>X+"Pig");  //lambda表达式
}

public void Lambda(string a , Func<string , string>Fun)  //lambda函数
{
    MessageBox.Show(Fun(a));
}
--------------------------------------------------------------------------------------------------------
//元组和Lambda一起使用
Func<(int, int, int), (int, int, int)> Fun = a => (2*a.Item1,2*a.Item2,2*a.Item3);
var A = (3,6,9); //声明元组
MessageBox.Show(Fun(A).ToString()); //结果是（6，12，18）

//自定义元组的名称 ITEM1,ITEM2,ITEM3
Func<(int ITEM1, int ITEM2, int ITEM3), (int, int, int)> Fun = a => (2*a.ITEM1,2*a.ITEM2,2*a.ITEM3);
var A = (3,6,9); //声明元组
MessageBox.Show(Fun(A).ToString()); //结果是（9，12，18）
----------------------------------------------------------------------------------------------------------

```

## 事件与委托

```csharp
委托和事件
 首先 net团队为了实现一些类似于函数指针的通用的功能,经过各个应用场景的需求 创建了 委托这个东西,

 事件是对委托进一步具体化，其实事件也是委托  只是 事件对委托提出了更具体的规范，所以委托和事件 在功能上有很大的重叠。

 委托就像函数指针 你可以把一个函数进行传递 你也可以写个方法 方法的参数 是个委托  这样调用方法时可以传入一个函数作为参数，委托往往又返回值或数据更改，
 事件相对于委托的不同  在于  事件往往是多播的  事件 不需要返回任何值  事件可以被订阅 也可以不被订阅  ，也就是说事件只是发出一个通知，事件的处理程序还是一个委托  但是这个事件 你可以处理 也可以不处理 总之是事件发生了 你管与不管程序还在继续下一步操作，事件在 wpf winfrom 这些程序中被应用，事件的一般格式 是 无返回值 有两个参数 一个是 事件触发者 类一个参数是 事件参数
 委托相对于事件的不同，委托往往需要你返回一个值，委托单播的比较多，委托往往不能为空，也就是说委托就是交给调用程序去做某件事情，而且需要委托返回一个处理结果，委托的应用 在 ef实体框架里面 linqcha询方法 里面被广泛应用
```

## 委托与事件

```csharp
// 窗口一

public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }



    private void button1_Click(object sender, EventArgs e)
    {
        // 申明类

        CDeleGate CD = new CDeleGate();

        // 实例化委托,
        DELEGATE_ Dele = CD.PrintMsg;

        Dele("点击事件");

        // 绑定事件, 将PrinMsg跟Event_事件绑定
        CD.Event_ += Dele;

        // 委托作为参数，使用该参数就是调用事件
        CD.ReturnMsg(Dele);

        // 此时PrintMsg已经跟Event_事件绑定，所以调用此函数会输出"调用事件"
        CD.ClickMsg();
    }
}

// 类

namespace 委托与事件
{
    public delegate void DELEGATE_(string msg);

    class CDeleGate
    {
        // 注册事件
        public event DELEGATE_ Event_;

        // 功能
        public void PrintMsg(string msg)
        {
            MessageBox.Show(msg);
        }

        // 委托
        public void ReturnMsg(DELEGATE_ ms)
        {
            ms("我是委托");
        }

        // 调用事件

        public void ClickMsg()
        {
            Event_("调用事件");
        }
    }
}

```

## 委托类型

```csharp
Action<in T>-----------------------------------------------------------
public delegate void Action();
public delegate void Action<in T>(T A , T B);
public delegate void Action<in T2 , in T2>(T1 A , T2 B);
Func<in T>--------------------------------------------------------------
public delegate TResult Func<in TResult>();
public delegate TResult Func<in T , in TResult>(T ags);

```

## 委托的一个小列子

```csharp
窗口2的代码------------------------------------------------------------------------------------------------
public delegate void dele<in T>(T A , T B);  //delegate声明委托返回值为void参数类型为析构方法
public dele<int> Dele; //dele<T>类型的方法

private void Button_Click(object sender, RoutedEventArgs e) //按钮事件给Dele赋值Dele又给委托赋值
{
    Dele(10,10); //参数一是10，参数2是10
}
窗口1的代码-------------------------------------------------------------------------------------------------
private void Button_Click(object sender, RoutedEventArgs e) //按钮点击事件
{
    窗口2 F = new 窗口2(); //初始化窗口2
    F.Dele += mess;       //绑定委托给方法mess
    F.Show(); //显示窗口2

}

void mess(int a,int b)  //mess的返回值必须和委托的返回值一致
{
    MessageBox.Show(a+"：返回值");
}
```

## 委托通常和 event 一起使用

```csharp
窗口2的代码---------------------------------------------------------------------------------
public static class Action //声明一个静态类
{
    public static Action<string> ACtion;  //ACtion方法使用委托Action<T>
    public static void Mess(string msg)   //静态函数给委托赋值
    {
        ACtion(msg);
    }
}
private void Button_Click_3(object sender, RoutedEventArgs e) //按钮点击事件
{
    Action.Mess("ACtion回调！"); //使用静态函数Action.Mess("赋值的字符串")
}
窗口1的代码---------------------------------------------------------------------------------
private void Button_Click_2(object sender, RoutedEventArgs e)
{
    窗口2 F = new 窗口2();  //实例化窗口2
    Action.ACtion += mess;  //窗口2中的委托绑定mess方法
    F.Show();    //显示窗口2
}

private void mess(string a) //此方法的返回值必须和委托的返回值一致
{
    MessageBox.Show("收到子窗口传值："+a);
}
```

## 委托实例 3 delegate 和 event（事件）一起使用

```csharp
窗口2的代码-----------------------------------------------------------------------------------------
public delegate void Mydelegate(string a);  //delegate声明委托，无返回值，string类型的参数
public event Mydelegate Myevent; //Mydelegate类型的方法（Myevent）
private void Button_Click_2(object sender, RoutedEventArgs e)
{
    if (Myevent != null) //如果事件不为空
    {
        Myevent("我是委托的字符串");  //
    }
    this.Close(); //关闭当前窗口
}
窗口1的代码------------------------------------------------------------------------------------------
private void Button_Click_2(object sender, RoutedEventArgs e) //按钮点击事件
{
    窗口2 F = new 窗口2();          //初始化窗口2
    F.Myevent += mess;   //绑定委托给mess
    F.Show(); //显示窗口2
}

private void mess(string a)         //此方法的返回值必须和委托一致
{
    MessageBox.Show("收到子窗口传值："+a);
}
```

## 数组

```csharp
//一维数组

数组类型[] 数组名;  int[]  a;

//初始化数组

int[] a = new int[3]{1,2,3};  //表示该数组长度为3
int[] a = new int[]{1,2,3};   //不定义长度
int[] a = {1,2,3}

一维数组输出
Console.WriteLine(a[1]); 输出a数组第一个值
数组循环输出使用for循环

-------------------------------------------------------------------

//二维数组
数据类型[][] 数组名;
数据类型[,] 数组名;

int[][] a;
int[,] a;

-----------------------------------------------------------------
//初始化二维数组
第一种
int[][] a = new int[2][];
 a[0] = new int[]{ 1,2};
 a[1] = new int[]{ 1,2};

第二种
int[,] b = new int[2,3];
 b[0, 0] = 0;// 第一个0表示第一个数组，第二个0表示第一个数组里面的第一个值
 b[0, 1] = 0;// 第一个0表示第一个数组，第二个1表示第一个数组里面的第二个值
 b[1, 0] = 0;// 第一个1表示第二个数组，第二个0表示第二个数组里面的第一个值
 b[1, 1] = 0;// 第一个1表示第二个数组，第二个1表示第二个数组里面的第二个值
第三种
 int[,] c = new int[2, 2] { { 0, 1 }, { 1, 1 } };  //表示两个数组，两个值
 int[,] c = new int[,] { { 0, 1 }, { 1, 1 } };  //也表示两个数组，两个值
 int[,] c = { { 0, 1 }, { 1, 1 } };  //也表示两个数组，两个值

二维数组输出Console.WriteLine(a[0][0]);  //a[0][0]表示输出第1个数组第一个值
二维数组输出Console.WriteLine(a[1,0]);  //a[1,0]表示输出第2个数组第一个值

---------------------------------------------------------------------------
int[][] c = new int[2][];  //new int[2][]表示两个数组，值自定义
c[0] = new int[4] { 1, 2, 3, 4 };
c[1] = new int[6] { 1, 2, 3, 4,5,6 };


for(int i =0;i<c.Length; i++)
{
    for (int s =0;s<c[i].Length;s++)
    {
        Console.Write(c[i][s]);
    }
    Console.WriteLine();
}


## Foreach 数组循环

```csharp
foreach(数据类型 循环后的数据 in 数组)
{
    Console.WriteLine(循环后的数据);
}

 //实例

 int[][] c = new int[3][];  //表示两个数组，两个值
 c[0] = new int[4] { 1, 2, 3, 4 };
 c[1] = new int[6] { 1, 2, 3, 4,5,6 };
 c[2] = new int[6] { 1, 2, 3, 4,5,6 };

 Console.WriteLine("------------------------------------------------------------------------");
 for (int i=0;i<c.Length;i++)
 {
     foreach (int cc in c[i])
     {
         Console.WriteLine(cc);
     }
     Console.WriteLine("--------------------------------------------------------------");
 }
```

## 数组排序

```csharp
从小到大排序

array.sort(数组);

逆向排序

array.Reverse(数组);
```

## 字符串

```csharp
声明字符串

char a ='子';  //char 只能包含一个字符

string b = "多个字符串"; //string 可以定义多个字符串

Console.WriteLine("------------------------------------------------------------------------");
 char[] a = { '1','2','3','4','5'};
 string b = new string(a);
 string b2 = new string(a,1,2);
 //第一个参数是字符数组，第二个参数是从数组的哪个位置开始，第三个参数是从数组哪个位置结束
 b2的结果是：23
 b的结果是:12345

Console.WriteLine("------------------------------------------------------------------------");

获取字符串的长单

string str = "获取字符串的长度";
int str2 = str.Length;

Console.WriteLine("------------------------------------------------------------------------");

获取字符串指定位置
 string b = "获取字符串长度";
 char b2 = b[3]; //获取第三个字符

Console.WriteLine("------------------------------------------------------------------------");

字符串索引位置IndexOf
string b = "123132长获取长字符串长度";
int b2 = b.IndexOf("长");
int b3 = b.IndexOf("长",7); //从第7个字符串以后开始查找
int b4 = b.IndexOf("长",10,4); //从第10个字符串开始查找4个字符串内的索引

LastIndexOF返回字符最后一次出现的索引位置
string b = "123132长获取长字符串长度";
int b2 = b.LastIndexOf("长");
int b3 = b.LastIndexOf("长",7); //从倒数第7个字符串以后开始查找
int b4 = b.LastIndexOf("长",10,4); //从倒数第10个字符串开始查找4个字符串内的索引

Console.WriteLine("------------------------------------------------------------------------");

判断字符串首尾内容
StartsWith判断字符串的开始内容
StartsWith有三个参数第一个参数是寻找到字符串，第二个参数是是否区分大小写，第三个参数是null(他返回的是bool类型)
 string a = "你好C c#";
 bool b = a.StartsWith("你好c",true,null);
 Console.WriteLine(b);

EndsWith判断结束内容
Endswith有三个参数第一个参数是寻找到字符串，第二个参数是是否区分大小写，第三个参数是null(他返回的是bool类型)
 string a = "c# 你好C";
 bool b = a.EndsWith("你好c",true,null);
 Console.WriteLine(b);
PS:如果要区分大小写，请把后面两个参数删除即可

Console.WriteLine("------------------------------------------------------------------------");
比较两个字符串是否相同

Compare方法
数值类型.Compare(变量1,变量2);
数值类型.Compare(变量1,变量2,bool);  //boll值是否区分大小写
int.Compare(1,1);
PS：0=相同 -1=不相同

CompareTo方法
变量1.CompareTo(变量2);
PS：0=相同 -1=不相同

Equals方法
变量1.Equals(变量2);
数据类型.Equals(变量1,变量2);
Ps:ture=相同 flase=不相同

Console.Write("---------------------------------------------------------------------------------------");
字符串大小写转换
string a = "字符串大小写转换";
a.ToUpper();
a.ToLower();

Console.Write("----------------------------------------------------------------------------------------");
格式化字符串
Console.WriteLine(string.Format("货币显示：{0:C}", 10));
Console.WriteLine(string.Format("整型显示：{0:d}", 123456));
Console.WriteLine(string.Format("指数计数法显示：{0:E}", 123456));
Console.WriteLine(string.Format("精小数：{0:F}", 123456));
Console.WriteLine(string.Format("输入小数点后两位：{0:N}", 123456));
Console.WriteLine(string.Format("百分比显示：{0:P0}", 0.09)); //在P后面加0表示不保留小数
Console.WriteLine(string.Format("十进制显示：{0:X}", 123456));
格式化时间
DateTime time = DateTime.Now;   //初始化时间
Console.WriteLine(time);
Console.WriteLine(time.ToString("Y")); //年月格式
Console.WriteLine(time.ToString("d")); //长时间格式
Console.WriteLine(time.ToString("D")); //短时间格式
Console.WriteLine(time.ToString("f"));  //完整时间，不带秒  yyy年mm月dd日 hh:mm
Console.WriteLine(time.ToString("F"));  //完整时间，带秒  yyy年mm月dd日 hh:mm:ss
Console.WriteLine(time.ToString("G")); //完整时间，不带秒  yyy-mm-dd hh:mm
Console.WriteLine(time.ToString("g")); //完整时间，带秒  yyy-mm-dd hh:mm:ss
Console.WriteLine(time.ToString("M")); //mm月dd日
Console.WriteLine(time.ToString("T")); // hh:mm:ss
Console.WriteLine(time.ToString("t")); // hh:mm

Console.WriteLine("---------------------------------------------------------------------------");
截取字符串
string a = "截取字符串";
string b = a.Substring(2);  //结果是：字符串 （截取前两个字符）

 string a = "截取字符串.cs";
 string b = a.Substring(0,a.IndexOf("."));  //结果是：截取字符串
 string c = a.Substring(a.IndexOf("."));  //结果是：.cs

Console.WriteLine("-----------------------------------------------------------------------------");
分割字符串
Split()有两个参数，第一个参数是分割符，第二个参数是分割的次数！
 string a = "a1*s2*d3*f4*g5*h6*j7";
 string[] b = a.Split('*'); //用*号分割字符串
 foreach (string s in b)  //循环输出
 {
    Console.WriteLine(s+"\n");
 }
分割指定次数
string a = "a1*s2*d3*f4*g5*h6*j7";
tring[] b = a.Split(new char[]{ '*'},2);

Consloe.WriteLine("---------------------------------------------------------------------------------------------");
去除空白字符
Trim() 去除前后空格
 string a = "*123*"; //删除前后*号
 string b = a.Trim(new char[] { '*'});
 string a = "   123   "; //删除前后空格
 string b = a.Trim();

Console.WriteLine("----------------------------------------------------------------------------------------------");
替换字符
 string a = "Hello Word ! 替换的字符";
 string b = a.Replace("替换的字符","替换后的字符");
Console.WriteLine("----------------------------------------------------------------------------------------------");
可变字符串类
 StringBuilder a = new StringBuilder("(),(),(),2,4,6,7,8");
 Console.WriteLine(a);
 a.Remove(0,8);
 a.Insert(0,"(门前大桥下),(游过一群鸭),(快来快来数一数)");
 Console.WriteLine(a);

 Console.WriteLine("-----------------------------------------------");
 StringBuilder b = new StringBuilder("替换：我将被替换");
 Console.WriteLine(b);
 b.Replace("我将被替换","我已经被替换");
 Console.WriteLine(b);
 Console.WriteLine("------------------------------------------------");
 StringBuilder C = new StringBuilder("孙子兵法最后一记：");
 Console.WriteLine(C);
 C.AppendLine("走为上策!");
 Console.WriteLine(C);
 Console.WriteLine("--------------------------------------------------");
 StringBuilder d = new StringBuilder(":走为上策！");
 Console.WriteLine(d);
 d.Insert(0,"孙子兵法：");
 Console.WriteLine(d);

Console.WriteLine("--------------------------------------------------------------------------------");
随机数
 Random A = new Random();
 int B = A.Next();
 MessageBox.Show(B.ToString());
随机数
 Random A = new Random();  //实例化Random();
 string C=null;  //定义一个空的字符串变量
 for (int i = 0; i < 4; i++) // 循环4次
 {
     int B = A.Next(0, 10);  //随机数字
     C += B.ToString();  //相加数字，转换为字符串
 }

```

## 字符串@换行

```cpp
// 使用@
string a = @"asdf
            asdf
            asdf
            asdf
            asdf";
 // 不使用@
 string b = "saf" +
     "asdf" +
     "asdf";
```

## 转义字符

```csharp
转义字符

    \0  空格字符 ASCII代码 0
    \n  换行   ASCII代码 10
    \t  水平制表符       ASCII代码 9
    \b  退格ASCII代码 8
    \r  回车ASCII代码 13
    \f  换页ASCII代码 12
    \\  反斜杠         ASCII代码 92
    \‘  单引号         ASCII代码 39
    \“  双引号         ASCII代码 34

```

## Dictionary 字典

```csharp
Dictionary<string, string> dictionary = new Dictionary<string, string>()
{
    {"key1","value1" },
    {"key2","value2" },
    {"key3","value3" },
    {"key4","value4" },
};

foreach (var item in dictionary)
{
    Console.WriteLine(" 我是key= "+item.Key +" 我是value= "+ item.Value);
}
```

## 面向对象

```csharp
class Car  //声明class对象
{
    private string age;  //声明私密变量age
    public string Age   //声明公开Age属性（Age属性是用来改变age变量的）
    {
        get { return age; } //如果访问Age属性就返回age变量的值
        set  //如果设置Age属性就设置age属性的值 Age=1 其实是 age=1
        {
            if (value == "0")
            {
                age = "数据不合法！";
            }
            else
            {
                age = value;
            }
        }
    }
}

调用上面的例子
 Car a = new Car();
 a.Age = "数据合法";
 Console.WriteLine(a.Age);

Console.WriteLine("-------------------------------------------------------------------------------------------");
构造函数
        class Car
        {
 public string abc;

 public Car() { }     //声明构造方法
 public Car(string Age) //声明构造方法
 {
     abc = Age; //给abc赋值
     Console.WriteLine("构造方法："+Age); //输出Age
     Console.WriteLine(abc); //输出赋值后的abc

 }
        }
调用方法
 Car a = new Car("Car"); //既可以加参数，又可以不加参数
 Car a = new Car();  //也是可以的，因为上面声明了两次

Console.WriteLine("----------------------------------------------------------------------------------------"):
私有构造函数
class Car
{
    public string abc; //声明函数abc


        public static Car fun(string a , string b) //声明公共静态析构函数fun()，用来访问私有析构函数。私有析构函数无法在外部访问
    {

        return new Car(a , b); //实例化 私有析构函数
    }

    private Car(string a , string b) //私有析构函数
    {
        Console.WriteLine(a+b);
    }

}

调用方法
  Car a =  Car.fun("你是","猪？");  // 不需要new关键词，直接调用。

Console.WriteLine("--------------------------------------------------------------------------------------------------");
静态构造函数，static + 类名 ,静态构造函数只会调用一次
    class Car
    {


        static Car()
        {
            Console.WriteLine("-----------------------------------------");
            Console.WriteLine("我是静态构造函数");
            Console.WriteLine("-----------------------------------------");
        }


    }

调用方法
  Car a = new Car(); //需要new关键词

Console.WriteLine("----------------------------------------------------------------------------------------------------------");
析构函数（程序结束是运行）

 ~类名（）
 {

 }

Console.WriteLine("-------------------------------------------------------------------------------------------------------------");
```

## 方法的使用

```cpp
params定义多个参数
实例化：
 public int fun1(params int[] b)
{
    int i = 0;
    for (int mess=0;mess<b.Length; mess++)
    {
        i += b[mess];
    }

    return i;
}
调用方法：
 message Mess = new message(); //实例化类
 int a = Mess.fun1(1000,5,6,10,5,6,48,97,132,56,789,456);  //调用方法（params可以无数个参数）

Console.WriteLine("-----------------------------------------------------------------------------------------------------------------------------");
如果想更换函数外部的变量：可以使用 ref 修饰符
实例：

public void fun3(ref int a, ref int b)
{
    Console.WriteLine(a);
    Console.WriteLine(b);
    Console.WriteLine("当前是未更改的值！--------------------------------------------------------------");
    int c = a;
    a = b;
    b = c;
    Console.WriteLine("当前值已经更改！");
    Console.WriteLine(a);
    Console.WriteLine(b);
}

调用例子
 int a = 50;
 int b = 100;
 Mess.fun3(ref a,ref b);
 Console.WriteLine("-------------------------------------------------------");
 Console.WriteLine("a="+a);
 Console.WriteLine("b="+b);

Console.WriteLine("------------------------------------------------------------------------------------------------------------------------------------------");


```

## 枚举

```csharp
enum 来枚举（内容可以是字符串，也可以是整数！）
enum Enum
        {
 你是个弟弟,
 你是个傻逼,
 你是个丑弟弟,
 弟弟玩意=456
        }

调用方法
Console.WriteLine(Enum.你是个丑弟弟);  //枚举名称.枚举值

Console.WriteLine((int)Enum.弟弟玩意);  //要获取枚举的值，必须转换类型
```

## 静态成员 static

```cpp
static 方法名 数据类型()
{
    Console.WriteLine("我是静态成员！");
}

调用方法：

类名.方法名（）;

```

## 类继承

```cpp
class 爹
{
    public string a;

    public FUN_爹()
    {
        Console.WriteLine("调用儿子类赋值后的a="+a);
    }
}

class 儿子 : 爹   //用冒号继承 :  （php是extends）
{
    public void Fun()
    {
        this.a="调用父类的a变量，并赋值！";  //this.变量="";  （php是this->a=""）
    }
}

调用方法

儿子 a = new 儿子（）;
a.Fun();
a.FUN_爹();
```

## base(继承父类的构造函数)

```cpp
   当前类的构造函数():base("父类参数一","父类参数二")
    {
    }

Console.WriteLine("----------------------------------------------");
class SGYY
{
public string a, b, c;

public SGYY(string a ,string b)
{
    this.a = a;
    this.b = b;
}

}

class SGYY2 : SGYY   //继承父类
{
    public string q, w;
    public SGYY2() : base("父类中构造函数的参数一", "父类中构造函数的参数二")  //继承父类的构造函数
    {
        Console.WriteLine(a);
        Console.WriteLine(b);
    }
}
```

## 继承父类方法并重写

父类方法用 virtual

子类方法用 override

```csharp
 class Program
    {
        static void Main(string[] args)
        {
            Man man = new Man();    //声明类
            Lman Man = new Lman();  //声明类
            Sman Sman = new Sman();  //声明类
            Man[] M = {man,Man,Sman };  //父类型数组{类1，类2，类3}
            M[0].A = "我是父类A";    //给变量赋值
            M[1].A = "我是LMan类A";   //给变量赋值
            M[2].A = "我是Sman类A";   //给变量赋值
            M[0].Fun();  //实例化重写后的方法
            M[1].Fun();  //实例化重写后的方法
            M[2].Fun();  //实例化重写后的方法

        }
    }

    class Man   //父类
    {
        public string A;
        public virtual void Fun()  //父类中的方法使用Vietual关键词
        {
            Console.WriteLine("我是父类的方法，并且没有被重置！");
            Console.WriteLine("我是父类中的变量：A={0}", A);

        }
    }

    class Lman : Man
    {
        public override void Fun() //子类中的方法使用overide关键词重写父类中的方法
        {
            Console.WriteLine("---------------------------------------------------------------------");
            Console.WriteLine("我也是父类方法，但是已被重置！");
            Console.WriteLine("我是Man继承父类中的变量：A={0}", A);

        }
    }

    class Sman : Man
    {
        public override void Fun() //子类中的方法使用overide关键词重写父类中的方法
        {
            Console.WriteLine("---------------------------------------------------------------------");
            Console.WriteLine("我也是父类方法，但是已被重置！");
            Console.WriteLine("我是Man继承父类中的变量：A={0}", A);

        }
    }
```

## 抽象类的使用

父类使用 abstract

父类中的方法用: abstract

子类继承父类使用 ：

子类中的方法使用：override

```csharp
  class Program
    {
        static void Main(string[] args)
        {
            Cra C = new market();  //实例化使用父类的名称 ： 父类名 C= new 子类();
            Cra B = new market();  //实例化使用父类的名称 ： 父类名 B = new 子类();
            C.Funa();  //使用方法不做描述
            C.Func();
            B.Funa();
            B.Funb();

        }
    }

    public abstract class Cra  //抽象类也是使用abstract
    {
        public abstract void Funb();  //抽象方法使用abstract
        public abstract void Func();  //抽象方法使用abstract

        public void Funa()  //抽象类中的方法
        {
            Console.WriteLine("---------------------------------------------------------");
            Console.WriteLine("我是抽象类中的方法！");
        }
    }

    public class market:Cra   //market继承Cra
    {
        public override void Func()  //使用override继承抽象类
        {
            Console.WriteLine("抽象类1");
        }

        public override void Funb()  //使用override继承抽象类
        {
            Console.WriteLine("抽象类2");
        }

    }

    public class market2 : Cra  //market2继承Cra
    {
        public override void Func()  //使用override继承抽象类的方法
        {
            Console.WriteLine("抽象类1");
        }
        public override void Funb()   //使用override继承抽象类中的方法
        {
            Console.WriteLine("抽象类2");
        }

    }
```

## 接口的使用

## interface 接口名称{}

## 单个接口方法

```csharp
    interface JK   //intorface声明接口
    {
       string a   //声明属性也就是变量
        {
            get;
            set;
        }

        void Fun(); //声明一个方法

    }

    public class Car:JK  //继承JK接口
    {

        string A;   //声明一个属性也就是变量
        public string a  //给接口中的变量赋值 （如果是单个接口，接口名不相同要用public修饰符，如果是多个接口，相同的方法名，就不要public修饰符）
        {
            get
            {
                return A;
            }
            set
            {
                A = value;
            }
        }

       public void Fun()  //重写接口中的方法
        {
            Console.WriteLine("继承接口后的变量={0}",A);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            JK a = new Car();  //实例化接口： 接口名 A = new 继承类名()  = JK a = new Car();
            a.a = "变量";  //这些不用多说，都是基本方法
            a.Fun();
        }
    }
```

## 多个接口方法：interface

```csharp
    interface JK  //interface声明接口1
    {

       string a //声明a属性（也就是变量）
        {
            get;
            set;
        }

        void Fun();

    }

    interface JK2  //interface声明接口1
    {

        string a  //声明a属性（也就是变量）
        {
            get;
            set;
        }

        void Fun();

    }

    public class Car:JK,JK2  //继承接口用冒号： 如果要继承多个用逗号 ，
    {

        string A;  //声明一个属性，也就是变量

        string JK2.a  //如果存在多个接口并且方法相同，要用: 接口名.属性/方法   JK.a / JK.Fun()
        {
            get
            {
                return A;
            }
            set
            {
                A = value;
            }
        }
        string JK.a //如果存在多个接口并且方法相同，要用: 接口名.属性/方法   JK.a / JK.Fun()
        {
            get
            {
                return A;
            }
            set
            {
                A = value;
            }
        }
        void JK.Fun() //如果存在多个接口并且方法相同，要用: 接口名.属性/方法   JK.a / JK.Fun()
        {
            Console.WriteLine("------------------------------------------------------------------");
            Console.WriteLine("JK继承接口后的变量={0}",A);  //输出赋值后的变量
        }



        void JK2.Fun() //如果存在多个接口并且方法相同，要用: 接口名.属性/方法   JK2.a / JK2.Fun()
        {
            Console.WriteLine("------------------------------------------------------------------");
            Console.WriteLine("JK2继承接口后的变量={0}", A);  //输出赋值后的变量
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            JK jk1 = new Car();  //实例化： 接口名 A = new 类名();  JK jk1 = new Car();
            jk1.a = "我是接口1";
            jk1.Fun();
            JK2 jk2 = new Car();  //实例化： 接口名 A = new 类名();  JK2 jk2 = new Car();
            jk2.a = "我是接口2";
            jk2.Fun();
        }
    }
```

## Form 窗体

show(); 相当于易语言中的载入（窗口 1，假）；  //启动一个窗口时其他窗口可用

showDialog(); 相当于易语言中的载入（窗口 1，真）； //启动一个窗口时，其他窗口不可用

```csharp
显示和隐藏窗体
show();//显示
close();//关闭
Hide(); //隐藏

使用方法
Form2 F = new Form2();  //窗口名 变量名 = new 窗口名();
F.Show(); //显示
F.close(); //关闭
F.Hide(); //隐藏

Console.WriteLine("-------------------------------------------------------------");


```

## 父窗体

### 把 IsMdiContainer 设置位 true

## 子窗体

赋值后的窗体.MdiParent = this;

```csharp
        Form2 From = new Form2();
        private void button1_Click(object sender, EventArgs e)
        {

            From.Show(); //显示窗口2
            From.MdiParent = this; //定义子窗口 From.MdiParent = this;

        }
```

## 子窗口排列

```csharp
private void button1_Click(object sender, EventArgs e)
{
    Form2 From = new Form2(); //实例化窗口2
    Form3 From1 = new Form3(); //实例化窗口3
    Form4 From2 = new Form4(); //实例化窗口4
    From.Show();  //显示该窗口
    From1.Show();  //显示该窗口
    From2.Show();  //显示该窗口
    From.MdiParent = this; //定义子窗口 From.MdiParent = this;
    From2.MdiParent = this; //定义子窗口 From.MdiParent = this;
    From1.MdiParent = this; //定义子窗口 From.MdiParent = this;
    LayoutMdi(MdiLayout.ArrangeIcons); //定义子窗口显示方法：这是默认的
    LayoutMdi(MdiLayout.Cascade); //请自行尝试
    LayoutMdi(MdiLayout.TileVertical);//请自行尝试
    LayoutMdi(MdiLayout.TileHorizontal);//请自行尝试
}
```

## 关闭窗口

AppLication.Exit();

```csharp
 Application.Exit();
```

## listview 超级列表

插入行

```csharp
1：给列赋值
 ListViewItem item = new ListViewItem();  //实例化对象
 item.SubItems[1].Text = "Tommy";  //第一列
 item.SubItems.Add("2"); //第二列
 item.SubItems.Add("3"); //第三列
 listView1.Items.Add(item); //插入数据

2.种方法
 ListViewItem item = new ListViewItem("1"); // 创建一行，在这里把第一个值附上
 item.SubItems.Add("1");
 item.SubItems.Add("2");
 listView1.Items.Add(item); //插入数据

3.种方法
 ListViewItem item0 = new ListViewItem(new string[]{"1","2","3" }); //创建1行
 ListViewItem item1= new ListViewItem(new string[]{"1","2","3" });  //创建行
 listView1.Items.AddRange(new ListViewItem[] { item0, item1 });    //插入数据
4.种方法
  listView1.Items.Add("第一项"); //添加文件名
  listView1.Items[listView1.Items.Count - 1].SubItems.Add("第二项"); //listView1.Items.Count - 1
  listView1.Items[listView1.Items.Count - 1].SubItems.Add("第三项"); //listView1.Items.Count - 1
4.种方法（说明）//上面的就是例子
 listView1.Items.Add("第一列");         //第一列不要索引
 listView1.Items[0].SubItems.Add("第一列"); //第二列之后的要索引
 listView1.Items[0].SubItems.Add("第一列"); //获取总数-1 ， 英文从0开始计算

Console.WriteLIne("------------------------------------------------------------------------");
获取选中行的数据
        string name = this.listView1.FocusedItem.SubItems[0].Text;
      列表框的name      列号

Console.WriteLIne("------------------------------------------------------------------------");
删除
 listView1.Items.RemoveAt(int index); //删除指定的号码

Console.WriteLIne("------------------------------------------------------------------------");
删除所有
     listView1.Items.Clear();
Console.WriteLIne("------------------------------------------------------------------------");
向指定的组里面添加项
 ListViewItem Item = new ListViewItem("第"+textBox1.Text+"组，第一个"); //声明ListViewItem()
 Item.SubItems.Add("第" + textBox1.Text + "组，第二个");  //添加数据
 listView1.Items.Add(Item).Group = listView1.Groups[0];  //向第一组添加数据
 //用编辑框添加指定的组
 listView1.Items.Add(Item).Group = listView1.Groups[Convert.ToInt32(textBox2.Text)];//要先把数据类型转换一下

Console.WriteLIne("------------------------------------------------------------------------");
获取选中的号码


```

## TreeView 树形控件使用

```cpp
添加数据的方法
 TreeNode A = treeView1.Nodes.Add("节点0","添加父节点");  //顶级节点（相当于爷爷）
 TreeNode B = A.Nodes.Add("子节点");  //父节点（相当于爸爸）
 TreeNode C = B.Nodes.Add("子节点中的子节点"); //子节点（相当于儿子）
 //给顶级节点用TreeNodes赋值，再给父节点赋值，如此循环。
 A.Nodes.Add("顶级节点");  //用TreeNodes赋值后的A添加
 B.Nodes.Add("父节点");   //用TreeNodes赋值后的A添加
 C.Nodes.Add("子节点");  //用TreeNodes赋值后的A添加

Console.WriteLine("----------------------------------------------------------------------------------");
根据选中的来添加节点
 TreeNode A = treeView1.SelectedNode;  //实例化一个对象
 A.Nodes.Add("123");  //给选中的对象添加值
 MessageBox.Show("选中的：" + A.Text); //信息框显示添加的值

Console.WriteLine("-----------------------------------------------------------------------------------");
删除选中的节点
 TreeNode A = treeView1.SelectedNode; //实例化TreeNode对象
 treeView1.Nodes.Remove(A); //删除选中的对象


```

## 菜单快捷键

```csharp
&+快捷键  // 比如  &F
```

## MessageBox.Show("");信息框

```csharp
MessageBox.Show("消息内容","teitl",按钮,t图标);

实例：
     DialogResult a = MessageBox.Show("进度条满了！","提示",MessageBoxButtons.YesNo,MessageBoxIcon.Information);
     if (a == DialogResult.Yes)
     {
         MessageBox.Show("你点了确定！");
     }
```

## openFileDialog,打开对话框

```csharp
 openFileDialog1.FileName = "打开GTA5游戏目录"; //输入框提示
 openFileDialog1.Filter = "dll(*.dll)|*.DLL|exe(*.exe)|*.EXE"; //打开文件的类型
 openFileDialog1.Title = "请打开GTA5所在目录"; //titel 对话框标题
 openFileDialog1.InitialDirectory = "C:\\";  //打开的目录
 DialogResult a = openFileDialog1.ShowDialog(); //显示对话框
 if (a == DialogResult.OK)  //判断对话框返回的值
 {
     string B = openFileDialog1.FileName; //选中的目标路劲
     MessageBox.Show(B); //信息框显示
 }
```

## saveFileDialog,另存对话框

```csharp
 saveFileDialog1.Filter = "程序（exe）|*.exe"; //保存文件类型
 saveFileDialog1.FileName = "IMP安装器.exe"; //保存文件默认名称
 saveFileDialog1.Title = "请选择保存的目录"; //title标题
 saveFileDialog1.InitialDirectory = "C:\\"; //默认路径
 DialogResult A = saveFileDialog1.ShowDialog(); //返回值，成功是OK
 if (A == DialogResult.OK) //判断是否等于OK
 {
     string B = saveFileDialog1.FileName; //返回保存的路径
     MessageBox.Show("保存路径是："+B);  //信息框提示
 }
```

## FolderBrowserDialog , 选择目录对话框

```csharp
 folderBrowserDialog1.Description = "请选择GTA5目录";
 DialogResult A = folderBrowserDialog1.ShowDialog();
 if (A == DialogResult.OK)
 {
    string B = folderBrowserDialog1.SelectedPath;
     MessageBox.Show(B);
 }
```

## try{}catch(Exception ex){} 异常处理

```csharp
 object o2 = null; //定义一个空的对象
 try  //try语句
 {
     int i2 = (int)o2;   // 错误的语句
 }
 catch (Exception E)  //
 {
     MessageBox.Show(E.Message); //返回错误信息
     throw;
 }

```

异常处理常用的 catch（异常类）{}

```csharp
Exception //基类Exception

ArithmeticException //算数运算发生的异常

ArrayTypeMismatchException  //存储数组时，存储的数据跟实际数组类型不相同导致失败

DivideByZeroException  //尝试将整数除0时发生的异常

IndexOutOfRangeException //试图访问小于0或者超出数组最大数的时候的异常

InvalidCastException  //从父类继承的子类运行失败触发的异常

OutOfMemoryException //在需要引用对象的场合使用null就会触发此错误

OverflowException //再选中的上下文中所进行的算数运算符，类型转换时引发的错误

StackOverflowException //挂载的方法调用过多导致执行堆栈溢出引发的异常

TypeInitializationException //在静态构造函数中引发异常，并且没有捕捉到他的catch字句时引发

```

## try-catch-finally , finally 无论是否发生错误都会执行

```cpp
 int i;
 string A = "错误类型";
 try
 {
     i = Convert.ToInt32(A); //把字符串强制转换为整型，就会触发异常

 }
 catch (Exception E)
 {
     MessageBox.Show(E.ToString());  //异常信息

 }
 finally
 {
     MessageBox.Show("判断完毕");  //无论是否异常都执行
 }
```

##  thorw ， 主动抛出异常

```cpp
 int i= 10 ;
 int A = 0;
 try
 {
     if (A != i)
     {
         throw new ArithmeticException(); //使用throw new ArithmeticException();抛出运算错误的异常
     }

 }
 catch (ArithmeticException E)
 {
     MessageBox.Show(E.Message); //异常信息

 }

```

## File 类文件操作

```csharp
using System.IO;  //使用前引入
```

```csharp
    Copy     //复制文件
    Create   //创建文件
    Delete   //删除文件
    Exists   //判断文件是否存在
    Move     //移动文件
    Open     //打开指定文件
    CreateText          // 创建或者打开文件用以写入UTF-8的编码文本
    GetCreationTime     //返回指定的文件或者目录创建的日期和时间
    GetLastAccessTime   //返回上一次访问目录或者文件的时间
    GetLastWriteTime    //返回上一次写入指定文件的时间
    OpenRead //打开现有文件以进行读取
    OpenText //打开现有UTF-8文件以进行读取
    OpenWrite//打开现有文件以进行写入
    ReadAllLines        //打开一个文本文件，将文件的所有行都读入一个字符串数组，然后关闭该文件
    ReadAllText         //打开一个文件，将文件的所有内容读入一个字符串，然后关闭该文件
    Replace  //替换文件
    SetCreationTime     //设置创建文件的日期和时间
    SetLastAccessTime   //设置上次访问的日期和时间
    SetLastWriteTime    //设置上次写入的日期和时间
    WriteAllLines       //创建一个新文件，在其中写入指定的字符串，然后关闭该文件，如果文件已经存在则改写此文件。
    WriteAllText        //创建一个新文件，在其中写入内容，然后关闭该文件，如果文件已经存在则改写此文件。

```

## Fileinfo 文件操作类

```csharp
    CreationTime        //获取或者设置当前FileSysteminfo对象的创建时间
    Directory//获取父目录的实例
    DirectoryName       //获取目录完整路径的字符串
    Exists   //获取指定文件是否存在
    Extension//获取文件名扩展名部分的字符串
    FullName //获取目录或者文件的完整目录
    IsReadOnly          //获取或者设置当前文件是否为只读的值
    LastAccessTime      //获取或者设置上次访问当前文件或者目录的时间
    LastWriteTime       //获取或者设置上次写入当前文件或者目录的时间
    Lenght   //获取或者设置当前文件的大小
    Name     //获取文件
```

## 文件操作使用方法

```csharp
 判断文件是否存在File方法

 bool A =  File.Exists("C:\\IMP\\IMP.dll");
 if (A == true)
 {
     MessageBox.Show("文件存在");
 }
 else
 {
     MessageBox.Show("文件不存在！");
 }

Console.WriteLine("---------------------------------------------------------------------------------------");
判断文件是否存在FileInfo方法

 FileInfo A = new FileInfo("C:\\IMP\\IMP.DLL");
 bool B =  A.Exists;
 if (B == true)
 {
     MessageBox.Show("文件存在！");
 }
 else
 {
     MessageBox.Show("文件不存在！");
 }

Console.WriteLine("---------------------------------------------------------------------------------------");
创建文件夹第一种方法
 FileStream a = File.Create("C:\\IMP\\IMP.TXT");
 a.Close();  //释放资源
Console.Writeline("--------------------------------------------------------------------------------------");
复制文件
 try  //try语句抛出异常
 {
     File.Copy("c:\\imp\\dd.log", "c:\\impulse\\dd.log", true);  //复制文件，true为可以覆盖，false为不可以覆盖，默认为false
 }
 catch (Exception E) //异常
 {

     MessageBox.Show( E.Message);  //输出异常信息
 }

Console.WriteLine("---------------------------------------------------------------------------------------");

```

## 文件夹操作。使用 Directory

```cpp
 Directory.CreateDirectory("路径"); //创建文件夹
 Directory.Delete("删除的目录地址");//删除目录
 Directory.Exists("判目录是否存在");//确定指定路径是否引用磁盘上的现有目录
 Directory.GetCreationTime("获取目录的创建时间"); //获取目录的创建时间
 Directory.GetDirectories("返回指定目录中子目录的名称"); //返回指定目录中的子目录名称
 Directory.GetDirectoryRoot("返回指定路径的券信息，根信息或者同时返回");
 Directory.GetFiles("返回指定目录中的文件名称"); //返回指定目录中的文件名称
 Directory.GetFileSystemEntries("返回指定目录的所有文件和子目录的名称");
 Directory.GetLastAccessTime("返回指定目录上次访问时间");
 Directory.GetLastWriteTime("返回指定目录上次修改的时间");
 Directory.GetParent("检索指定路径的父目录，包括绝对路径和相对路劲");
 Directory.Move("移动前", "移动后"); //移动文件
 Directory.SetCreationTime("路径", DateTime.Now); //"为指定的目录设置创建日期和时间"
 Directory.SetCurrentDirectory("将运用程序的运行目录设置为指定的目录");
 Directory.SetLastAccessTime("设置上次访问目录的时间",DateTime.Now);
 Directory.SetLastWriteTime("设置上次写入目录的时间",DateTime.Now);
```

## IO 文件操作流

```csharp
FileStream(); // FileStream 变量 = new FileStream("路径",FileMode.枚举);

 FileStream A = new FileStream(null,FileMode.Open);
 A.Close(); //释放
 A.Write(); //字节快写入文件流
 A.Flush(); //清除数据的缓冲区，使得所有文件都写入文件中
 A.Dispose(); //释放由Stream使用的所有资源
 A.Position; //获取或者设置此流的位置
 A.Read(); //从流中读取字节快，并将该数据写入缓冲区
 A.Seek(); //将流当前的位置设置为指定值
 A.Length; //获取字节的长度
 A.BeginRead(); //开始异步读操作
 A.BeginWrite(); //开始异步写操作
 A.CanRead; //获取一个值，该值表示当前流是否支持被读取
 A.CanSeek; //获取一个值，该值表示当前流是否支持被查找
 A.CanTimeout; //获取一个值，该值表示当前流是否可以超时
 A.CanWrite; //获取一个值，该值表示当前流是否支持被写入
 A.CopyTo(); //从当前流中读取字节并写到另一字节中
 A.CopyToAsync(); //从当前流中异步读取字节并写道另一字节中

```

## 读写文件操作

```csharp
 StreamReader B = new StreamReader("C:\\IMP\\IMP.log"); //实例化StreamReader();
 string C = B.ReadToEnd();  //读入数据
 B.Close();  //释放内存

 StreamWriter A = new StreamWriter("C:\\IMP\\IMP.log"); //实例化StreamWriter();
 A.Write(C);  //写入刚刚读取的数据
 A.WriteLine(textBox1.Text); //再写入编辑框的数据
 A.Close();  //释放内存
```

## Graphice,绘制

```csharp
常用的 Graphice函数
DrawString(String, Font, Brush, PointF); //绘制字符串
DrawArc(); //绘制弧线
DrawLine(); //绘制直线
DrawEllipse(); //椭圆
DrawPie(); //扇形
DrawPolygon(); //多边形
DrawBezier(); //贝塞尔曲线
DrawRectangle(); //矩形
FillPie(); //实心扇形
FillEllipse(); //实心椭圆
FillPolygon(); //实心多边形
FillRectangle(); //实心矩形
```

## socket 网络协议

```csharp
//引入 using System.Net;
//引入 using System.Net.Sockets;

    Dns类 //提供简单的域名解析功能。
    TcpClient //客户端
    TcpListener //服务端
    Socket     //Berkeley 套接字接口
```

线程

winform 线程要控制窗体控件必须

\==========================

## CheckForIllegalCrossThreadCalls = false;

![image](//images/66702109.png)

```csharp
using System.Threading;

    Thread //类，创建和控制线程，设置其优先级并获取其状态。
Console.WriteLine("--------------------------------------------------------------------------------------");
        void msg()  //首先声明一个方法
        {
 MessageBox.Show("线程操作！");
        }

        private void button1_Click(object sender, EventArgs e)  //按钮的点击事件
        {
 Thread THREAD = new Thread( new ThreadStart(msg));  //使用Thread实例化线程
 THREAD.Start(); //开始线程


        }
Console.WriteLine("--------------------------------------------------------------------------------------");
```

## winform 或者 wpf 要控制图形界面必须使用使用 lnvoke 或者 Beginlnvoke 委托任务给主线程，lnvoke 是同步执行，Beginlnvoke 是异步执行

```csharp
using System.Threading;   //引用Threading;
using System.Windows.Threading; //引用Windows.Threading;

private void Button_Click(object sender, RoutedEventArgs e) //按钮
{
    Thread thread = new Thread( new ThreadStart(Fun));   //初始化线程
    thread.Start(); //启动线程
}

public void Fun() //方法
{

    Dispatcher.Invoke(new Action(XC));  //把进度条走动委托给主线程

}

public void XC()  //进度条走动方法
{

    for (int i = 0; i <=100; i++)
    {
        jdt.Value = i;
    }
}
```

## 线程

```csharp
using System.Threading;
using SYsten.Window.Threading;
--------------------------------------------------------
     Dispatcher.Invoke(new Action(JDT));//使用主线程执行此函数
------------------------------------------------------------
 Thread Thread_1 = new Thread(new ThreadStart(get)); //实例化线程
 Thread_1.Start();  //启动线程
------------------------------------------------------------------------------------
 Thread_1.Sleep(1000); //线程延时1秒
---------------------------------------------------------------------------------------
 Thread_1.Join();  //线程休眠
 Thread_1.join(1000); //停止一秒
----------------------------------------------------------------------------------------
public void LOCK()  //lock，互斥锁，只有执行完lock里面的操作才会执行其他线程
{
    lock (this) //开始锁住{}里面的操作
    {

        MessageBox.Show("先运行完Lock里面的代码才会执行其他线程的代码");
        MessageBox.Show("先运行完Lock里面的代码才会执行其他线程的代码");
        MessageBox.Show("先运行完Lock里面的代码才会执行其他线程的代码");
        MessageBox.Show("先运行完Lock里面的代码才会执行其他线程的代码");
        MessageBox.Show("先运行完Lock里面的代码才会执行其他线程的代码");

    }
}


public void MONITOR()//Monitor，互斥锁，只有执行完Monitor里面的操作才会执行其他线程
{
    Monitor.Enter(this); //开始锁

    MessageBox.Show("先运行完Monitor里面的操作才会执行其他线程的代码！");
    MessageBox.Show("先运行完Monitor里面的操作才会执行其他线程的代码！");
    MessageBox.Show("先运行完Monitor里面的操作才会执行其他线程的代码！");
    MessageBox.Show("先运行完Monitor里面的操作才会执行其他线程的代码！");
    MessageBox.Show("先运行完Monitor里面的操作才会执行其他线程的代码！");

    Monitor.Exit(this); //结束锁
            }

            public void MUTEX() //Mutex线程同步
            {
    Mutex MT = new Mutex(true); //创建Mutex

    MT.WaitOne(); //加锁

    //执行的造作
    MessageBox.Show("先执行加锁的操作，执行完成以后才执行其他线程的操作");
    MessageBox.Show("先执行加锁的操作，执行完成以后才执行其他线程的操作");
    MessageBox.Show("先执行加锁的操作，执行完成以后才执行其他线程的操作");
    MessageBox.Show("先执行加锁的操作，执行完成以后才执行其他线程的操作");

    MT.ReleaseMutex();//释放资源
}
----------------------------------------------------------------------------------------


```

线程操作图形界面必须把方法委托给主线程，否则会报错。

Dispatcher.Invoke(new ThreadStart(方法名));

\===
