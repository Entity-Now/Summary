# Linq语句
## 
![image](/images/365052281.png)



## Linq查询表达式以from开头select或group结尾
```csharp
from :  指定查询操作的数据源和范围变量
join :  连接多个用于查询操作的数据源  , 输出相同的值
into :  提供一个临时标识符，join子句，group子句，或select子句均可以通过该标识符引用查询操作的中间结果
let  :  引入用来临时保存查询表达式中的字表达式结果的范围变量
where:  指定筛选元素的逻辑条件
orderby:    对查询结果进行顺序操作，包括升序和降序
select:指定查询结果的类型和表现形式
```
## 代码
```csharp
using System;
using System.Linq;

namespace Linq
{
    class Program
    {
        static bool Bl(int a) 
        {
            return a % 2 == 0 ? true : false;
        }

        static void Main(string[] args)
        {
            int[] Array = { 1, 2, 4, 5, 6, 7, 8 };

            var La = from a in Array
                     select a;

            var La2 = from a in Array
                      where a < 2
                      select a;

            foreach (var a in La)
                Console.WriteLine("La = " + a);

            foreach (var a in La2)
                Console.WriteLine("La2 = " + a);

            Console.WriteLine("L2第一个元素 = " + La2.First());

            //两个数组相加，
            int[] A1 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            int[] A2 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin = from a1 in A1
                      from a2 in A2
                      select a1 + a2;

            foreach (var item in Lin)
            {
                Console.Write(item + "  ");
            }

            //给结果值添加名称：i=1 ， name = 1
            int[] A3 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin2 = from a1 in A3
                       select new
                       {
                           i = a1,
                           name = a1.ToString()
                       };
            foreach (var L in Lin2)
            {
                Console.WriteLine("Lin2 = " + L);
            }

            //对每个值乘10
            int[] A4 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin3 = from a in A4
                       select a * 10;
            Console.WriteLine("Lin3 = " + Lin3.First());

            //where判断语句
            int[] A5 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin4 = from a in A5
                       where a > 7
                       select a;

            //判断是偶数还是奇数,偶数显示奇数不显示
            int[] A6 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin5 = from a in A6
                       where Bl(a)
                       select a;
            foreach (var i in Lin5)
            {
                Console.WriteLine("判断语句包含函数 =   " + i);

            }

            //let语句， n = a % 2 （=偶数） ，where n == 0 （=偶数）  
            int[] A7 = { 1, 2, 3, 4, 5, 6, 7, 8 };
            var Lin6 = from a in A7
                       let n = a % 2
                       where n == 0
                       select a;
            foreach (var item in Lin6)
            {
                Console.WriteLine(" let语句 =   " + item);
            }

            //降序或升序
            var Lin7 = from a in A7
                       orderby a descending //ascending
                       select a;
            foreach (var item in Lin7)
            {
                Console.WriteLine(" 升序或降序 =    " + item);
            }

            //group  by  分组语句
            var Lin8 = from a in A7
                       group a by a % 2;

            foreach (var i in Lin8)
            {
                foreach (var j in i)
                {
                    Console.WriteLine("group分组语句 =   " + j);

                }
            }

            //group and into

            var Lin9 = from a in A7
                       group a by a % 2 into Aa
                       from InTo in Aa
                       select InTo;

            foreach (var i in Lin9)
            {
                Console.WriteLine("group and into =   " + i);
            }

            // join语句,连接两个数组，判断Array1和Array2相同的值

            int[] Array1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int[] Array2 = { 1, 78, 3, 4, 5, 84, 7, 8, 98 };

            var Query = from a in Array1
                        join b in Array2 on a equals b
                        select a;

            foreach (var i in Query)
            {
                Console.WriteLine("Join =   "+i);
            }


        }
    }
}

```
![image](/images/418964828.png)

## 深入\_SelectMany();  存在多个from语句时使用
```csharp
        //常规方法-------------------------------------
var Linq2 = from a in _Name
from b in _Birth
where a.height < b.Min_Height
orderby a.Id
select "姓名： " +a.Name+ " 年龄： "+a.Age + " 体重： "+a.Weight + " 身高： "+a.height + " 最低身高： "+b.Min_Height + " 最低体重 "+b.Max_Height + "\n";

Console.WriteLine("不符合条件的有：");
foreach (var item in Linq2)
{
    Console.WriteLine(item);
}

//SelectMany()  --------使用方式------------------------------
var Linq2_J = _Name.SelectMany(B => _Birth, (N, B) => new { n = N, b = B })
    .Where(N => N.n.height < N.b.Min_Height)
    .OrderBy(N => N.n.Id)
    .Select(N=> "姓名： " + N.n.Name + " 年龄： " + N.n.Age + " 体重： " + N.n.Weight + " 身高： " + N.n.height + " 最低身高： " + N.b.Min_Height + " 最低体重 " + N.b.Max_Height + "\n");

Console.WriteLine("不符合条件的有：");
foreach (var item in Linq2_J)
{
    Console.WriteLine(item);
}
```
![image](/images/434345015.png)

```csharp
//方法1-----------------------------------
var i = 1;
var Linq3 = from a in _Name
            from b in _Birth
            where a.Kungfu == b.Kungfu
            orderby a.ko * b.ko descending, a.Age, a.Name
            select "Id: " + a.Id + " 姓名： " + a.Name + " 所练功夫： " + a.Kungfu + " 排位： " + (i++);
Console.WriteLine("全武林武力值排行榜：");
foreach (var item in Linq3)
{
    Console.WriteLine(item);
}
//方法2----------------------------------------------------------
i = 1;
var Linq3_J = _Name.SelectMany(B => _Birth, (N, B) => new { n = N, b = B })
    .Where(C => C.n.Kungfu == C.b.Kungfu)
    .OrderByDescending(C => C.n.ko * C.b.ko)
    .ThenBy(C => C.n.Name)
    .Select(C=>"ID= "+ C.n.Id+" 姓名： "+C.n.Name+" 所练功夫： "+C.n.Kungfu+"武力值：" + (C.n.ko * C.b.ko) + " 排位: "+(i++));

Console.WriteLine("全武林武力值排行榜：");
foreach (var item in Linq3_J)
{
    Console.WriteLine(item);
}
```
![image](/images/440129828.png)

SelectMany()

## Join语句
```csharp
int J = 1;
var Linq4 = from a in _Birth
            where a.ko > 60
            orderby a.ko descending
            select new {id = a.Id,kungfu = a.Kungfu,ko=a.ko,top = (J++) };
int Ji = 1;
var Linq4_J = _Name.Where(b => b.ko > 6)
                    .OrderByDescending(b => b.ko)
                    .Select(b=>new {id=b.Id,name = b.Name,ko = b.ko ,kungfu = b.Kungfu ,top = (Ji++) });
//连接两个对象进行比较胜负
int Jii = 1;
var Linq5 = from a in Linq4
            join b in Linq4_J on a.kungfu equals b.kungfu
            orderby a.ko * b.ko descending
                select new { id = b.id, name = b.name, ko = (a.ko * b.ko)
            ,kungfu = a.kungfu,Birth = a.top, name_top = b.top, top = Jii++};
//方法二：使用拓展方法
int Jiii = 1;
var Linq5_J = Linq4.Join(Linq4_J, a => a.kungfu, b => b.kungfu, (A, B) =>
new { id = B.id, name = B.name, ko = (B.ko * A.ko), kungfu = A.kungfu, 
        Birth = A.top, name_top = B.top, top = (Jiii++) })
.OrderByDescending(m=>m.ko);
```
![image](/images/501597734.png)

## 对武林功夫进行排序,此方法是透过count计数排序,判断该武功有多少人使用，从而做到分组
```csharp
//Linq
var Linq6 = from a in _Birth
            join b in _Name on a.Kungfu equals b.Kungfu into Groups
            orderby Groups.Count() descending
            select new {Id = a.Id , Kungfu = a.Kungfu , ko = a.ko ,count = Groups.Count() };
Console.WriteLine("功夫使用人数分组：");
foreach (var item in Linq6)
{
    Console.WriteLine("ID: "+item.Id+" 功夫： "+item.Kungfu+" 武力值： "+item.ko +" 此武功使用人数： "+item.count );
}

//拓展方法
var Linq6_J = _Birth.GroupJoin(_Name, A => A.Kungfu, B => B.Kungfu, (A, B) => new { A.Id, A.Kungfu, A.ko, count = B.Count() })
    .OrderByDescending(C=>C.count);
Console.WriteLine("功夫使用人数分组：");
foreach (var item in Linq6_J)
{
    Console.WriteLine("ID： "+item.Id+" 功夫： "+item.Kungfu+" 武力值： "+item.ko+" 此功夫使用人数： "+item.count );
}
```
![image](/images/505990750.png)

GroupJoin()

## 对武林武功进行排序，此方法是透过id安id大小排序做到分组
```csharp
//Linq语句
var Linq7 = from a in _Birth
join b in _Name on a.Kungfu equals b.Kungfu
orderby a.Id
select new { Id = a.Id, name = b.Name, Kungfu = a.Kungfu, ko = (a.ko * b.ko) };

Console.WriteLine("joinorGroup分组");
foreach (var item in Linq7)
{
    Console.WriteLine("Id= " + item.Id + " 姓名： " + item.name + " 所练功夫： " + item.Kungfu + " 武力值： " + item.ko);
}
//拓展方法
var Linq7_J = _Birth.GroupJoin(_Name, A => A.Kungfu, B => B.Kungfu, (A, B) => new { Id = A.Id, count = B.Count(), Kungfu = A.Kungfu })
                    .OrderBy(m=>m.Id);

Console.WriteLine("joinorGroup分组");
foreach (var item in Linq7_J)
{
    Console.WriteLine("Id= " + item.Id  + " 所练功夫： " + item.Kungfu+" 使用人数： "+item.count);
}
```
## Group分组武功，linq与Groupby();
```csharp
//linq语句
            var Linq8 = from a in _Name
            group a by a.Kungfu into b
            orderby b.Key
            select new {kungfu = b.Key,count = b.Count() };

Console.WriteLine("分组个各武功使用数");
foreach (var item in Linq8)
{
    Console.WriteLine("功夫名： "+item.kungfu+" 使用人数： "+item.count);
}
//拓展方法
var Lin8_J = _Name.GroupBy(a=>a.Kungfu,(A,B)=>new {kungfu =A,count = B.Count() })
                    .OrderBy(m=>m.kungfu);
Console.WriteLine("分组个各武功使用数");
foreach (var item in Lin8_J)
{
    Console.WriteLine("功夫名： " + item.kungfu + " 使用人数： " + item.count);
}
```
![image](/images/511421937.png)

## 判断对象里面是否包含指定内容 变量.Any();
```csharp
bool lbwb = Lin8_J.Any(v=>v.kungfu == "凌波微步");      //判断对象是否包含用凌波微步的人
Console.WriteLine("是否含有使用凌波微步的人："+lbwb);    //返回布尔值         
```
### 判断是否所有对象都一致： 变量.All();

```csharp
bool xlsbz = Lin8_J.All(v=>v.kungfu == "降龙十八掌");
Console.WriteLine("所有人都使用降龙十八掌："+xlsbz);
```
### 判断对象里面是否包含某个对象

```csharp
var QiaoFeng = _Name[5]; 
bool IsQiaoFeng = _Name.Contains(QiaoFeng);             //判断某对象是否存在
Console.WriteLine("江湖中是否存在乔峰这个人："+IsQiaoFeng);
```
### 算出对象总数和页码

```csharp

```
### 分页

```csharp
double Page = 10;                                   //每页数量
int name_count = _Name.Count();                     //对象总数
double count = Math.Ceiling(name_count / Page);     //计算总共有多少页
Console.WriteLine("当前对象总页数："+count+" 当前对象总数："+ name_count);

var Linq9 = (from a in _Name
                join b in _Birth on a.Kungfu equals b.Kungfu
                orderby a.ko * b.ko descending
                select new { name = a.Name, Kungfu = b.Kungfu, ko = a.ko * b.ko })
                .Skip(0 * (int)Page)     // 0 *Page = 第一页，以此类推
                .Take((int)Page);        // 返回指定数量（Page）元素
```
### 对比两个值返回值相同的集合

```csharp
//如果功夫为 降龙十八掌 和武力值为 10 就能返回
var Linq10 =(from a in _Name where a.Kungfu == "降龙十八掌" select a)
            .Intersect(from b in _Name where b.ko == 10 select b);  //Intersect:返回比较值相同的集合

            Console.WriteLine("\n比较两个值返回值相同的集合：");
            foreach (var item in Linq10)
            {
                Console.WriteLine(" 姓名 "+item.Name+" 功夫 "+item.Kungfu +" 等级 "+item.ko);
            }
```
### 累加：Aggregate

```csharp
int[] array = { 1,2,3,4,5,6};
int arr1 = array.Aggregate((a,b)=>a+b);                     //Aggregate累加 最后结果=21
int arr2 = array.Aggregate(0,(a,b)=>a+b , r=>r*2);         //Aggregate累加 最后结果=42
int arr3 = array.Aggregate(9,(a,b)=>a+b);                 //Aggregate累加 最后结果=30
Console.WriteLine(arr1 +" "+ arr2 + " " + arr3);
```
![image](/images/518616125.png)



linq模糊查询

```csharp:no-line-numbers
1.判断是否为空或者null

string.IsNullOrEmpty(des.PlateNum)————————>sql server的PlateNum is null的判断

from des in db.ModelsVehicleRecognition where (!string.IsNullOrEmpty(des.PlateNum)) select new { plateMun = des.PlateNum }

等同于

SELECT PlateNum FROM VehicleRecognition WHERE PlateNum IS NOT NULL

2.普通包含模糊查询

1）以某字符串开头的模糊查询

des.PlateNum.StartsWith("皖A8") ————————>sql server 的   like '皖A8%'

from des in db.ModelsVehicleRecognition where (des.PlateNum.StartsWith("皖A8")) select new { plateMun = des.PlateNum }

等同于

SELECT PlateNum FROM VehicleRecognition WHERE PlateNum  like '皖A8%'

2）以某字符串结尾的模糊查询

des.PlateNum.EndsWith("68T") ————————>sql server 的   like '%68T'

from des in db.ModelsVehicleRecognition where (des.PlateNum.EndsWith("68T")) select new { plateMun = des.PlateNum }

等同于

SELECT PlateNum FROM VehicleRecognition WHERE PlateNum  like '%68T'

3）包含某字符串的模糊查询

des.PlateNum.Contains("A3") ————————>sql server 的   like '%A3%'

from des in db.ModelsVehicleRecognition where (des.PlateNum.Contains("A3")) select new { plateMun = des.PlateNum }

等同于

SELECT PlateNum FROM VehicleRecognition WHERE PlateNum  like '%A3%'

3.精确到字符串对应位数字符的模糊查询（*重点）

SqlFunctions.PatIndex("_a__3%", des.PlateNum) > 0————————>sql server 的   like '_a__3%'

from des in db.ModelsVehicleRecognition where (SqlFunctions.PatIndex("_a__3%", des.PlateNum) > 0) select new { plateMun = des.PlateNum }

等同于

SELECT PlateNum FROM VehicleRecognition WHERE PlateNum  like '_a__3%'

说明：'_a__3%' 中的下划线“_”表示一个字符，'_a__3%' 这个字符串查询意思就是第二个字符是a,第五个字符是3的字符串

       因为a和3之间有两个下划线“_”所以查询出的结果也要满足a和3之间有两个字符才行，

       也就是说两个精确字符之间隔了几个字符，在查询的时候就要写几个下划线“_”。
```