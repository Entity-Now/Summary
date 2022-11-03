# Kotlin基础
intellid IDE查看函数注释

```csharp
按一下 shift + q 显示提示框

连按两下 shift +q 显示新的窗口
```
使用Itellij IDE显示kotlin字节码，连续按两次shift

![image](//images/118508968.png)





包名

```csharp
package cn.rxdidi

// 导入包
import cd.rxdidi
```
常量

```csharp
const val a = "123":

fun mian()
{
    println("编译时常量只能在函数外申明")
}
```
变量

```csharp
    var a;  // 可以重复赋值
    val b;  // 只能赋值一次，相当于常量

    var a :int = 1; // int类型的变量

    // 多行文本，.trimIndent（）除去空格字符
    var str = """
                adf
                asdf
                asdf
                asdf
                asdf
        """.trimIndent()
    println(str) 

    //    val str = "字符串模板";
    println("类似C#的语法，$str")
```
![image](//images/11592968.png)

数组

```csharp
fun Aarr(){
    // 创建一个一维数组
    var arr = Array(5){i->i*5}
    // 循环输出数组，it = item
    arr.forEach { println(it) }

    // 创建一维数组数组
    var arr2 = arrayOf(1,2,3,4,5)

    arr2.forEach { println(it) }

    // 一维数组
    arrayOf("1","2","3")
    println("一维数组,字符串")
    var ArrStr = Array(5){""}
    ArrStr[0] = "0";
    ArrStr[1] = "1";
    ArrStr[2] = "2";
    ArrStr[3] = "3";
    ArrStr[4] = "4";
    for (i in ArrStr) println(i)
    // 创建数组

    var arr3 = IntArray(5){6}
    arr3[1] = 34;
    println("arr3-1 =  "+arr3[1])
    arr3.forEach { println(it) }

    // 访问数组

    val arr3_3 = arr3.get(1)
    println("使用get访问数组: " + arr3_3)

    // 设置数组
    arr3.set(2,53)
    val arr3_2 = arr3.get(2)
    println("使用set访问数组: " +arr3_2)

    val str = "字符串模板";
    println("类似C#的语法，$str")

    // 多维数组
    println("多维数组")
    val arrList = Array<Array<String>>(2){Array<String>(2){""} }
    val arrList2 = Array(2){Array(2){""} }
    arrList2[0][0] = "一";
    arrList2[0][1] = "二";
    arrList2[1][0] = "一一";
    arrList2[1][1] = "一二";
    for ((value,item) in arrList2.withIndex())
    {

        for (j in item.indices){
            println(arrList2[value][j])
        }
    }


    // 多维数组
    val arrArr = Array(2){Array<String>(2,{""}) }
    arrArr[0][0] = "10";
    arrArr[0][1] = "20";
    arrArr[1][0] = "30";
    arrArr[1][1] = "40";

    var i = 0;
    var j = 0;
    for (item in arrArr){
        for ( itms in item[i]){


            println(arrArr[i][j])

            j++;
        }
        i++;
        j=0;
    }

    // 3维数组
    var arrArrArr = Array<Array<Array<String>>>(3){Array<Array<String>>(3){Array<String>(3){""} }}

    // 3维数组
    var arrArr2 = Array(3){Array(3){Array<String>(3,{""})} }

}
```
ForWhenWhlieIf

```csharp
fun ForWhenWhileIf(){
    // 等同于 0 <= i && i <= 3
    for (item in 0..3) println(item)
    // for循环数组, 相当于C#的foreach
    var arr = arrayOf(1,2,3,4,5,6);
    for (item in arr) println(item)

    // 区间表达downTo , 相当于: 10 = 3 结束本次递送;
    println("区间表达downTo")
    for (item in 10 downTo 3) println(item)

    // 区间表达 step, 每循环一次跳过4次，如果step = 1说明不跳过循环， = 0 则崩溃
    println("区间表达 step, 每循环一次跳过4次")
    for (item in 1..10 step 4) println(item)

    // 这条语句=
    println("区间表达式，反向递送 downTo 说明: i = 6 , i == 3 break")
    println("反向循环，循环6次，第三次结束，每循环一次跳过2此")
    for (i in 6 downTo 3 step 2) {
        println(i)
    }

    // for 使用(item,value) 等同于c#的foreach
    println("for 使用(item,value) 等同于c#的foreach")
    var arr2 = arrayOf(50,40,30,20,10)
    for((value,item) in arr2.withIndex())
    {
        println(value)
        println(item)
    }

    // for使用循环，item值为循环次数
    println("for使用循环，item值为循环次数")
    for (item in arr2.indices)
    {
        println(arr2[item])
    }

    // if语句用法
    println("if语句作为表达式")
    val a = 1;
    val b = 2;
    var ifLarge = if(a>b)b else a;

    println(ifLarge)

    // 正常的if语句
    var max:Int;
    if(a > b)
    {
        max = a;
    }else{
        max = b;
    }

    // when语句, 等同于其他语言的switch，但是when的用处更多
    println("when语句")
    var whenVal = "ok"
    when(whenVal){
        "ok" -> println("whenVal = ok")
        "no" -> println("whenVal = no")
        else -> println("whenVal = null") // else为默认值
    }

    // when, 相当于其他语言的
    /*
    *  case 1:
    *  case 2;
    *
    * break;
    * */
    var whenVal2 = 0;
    when(whenVal2){
        1,2 -> println("whenVal2 = 1 or 2")
        else ->{
            println("whenVal2 = null")
        }
    }

    // when 检测一个值 is 或 !is 一个特定的值
    // 下面这个表示：如果字符串以prefix开头返回true否则false

    fun hasprefix(x:Any) = when(x){
        is String -> x.startsWith("prefix") // 如果字符串包含prefix开头则返回true
        is Int -> true      // 如果是int类型返回true
        else -> false
    }

    var istrue = hasprefix("prefix is true")
    println(istrue)
    var istrue2 = hasprefix(2)
    println(istrue)
}
```
range表达式，表示 几到几之间， 0 .. 10 or 1..3  = 0到10之间 或 1到3之间

```java
val a = 3;

if(a in 0 .. 3)
{
    println("他在0到3之间")
}

if(a !in 0..3)
{
        println("他不在0到3之间")
}

// downTo

for(item in 10 down 1) println(" 反向递送 = 10 9 8 7 .. 1 ");

// step
for (item in 10 step 2) println("每循环一次跳过两次");

// until

for(item in 1 until 10) prinln("i in [1, 10), 10被排除")

```
![image](/images/118702343.png)

when表达式，满足某个条件后执行相应代码

```java
val a = "ok";

when(a)
{
    "ok" -> println("a = ok")
        else -> println("a 等于啥我也不知道啊")
}
```
StringTemplate 字符串模板

```java
    val a = "我是变量a";
    val b = "我是变量b";
    var S = "字符串模板可以使用变量和表达式: 变量a =$a 变量b = $b ";

    println(S)

    println("同时StringTemplate还可以使用表达式")

    val isTrue = false;
    val S2 = "判断一个值是否为true ： ${if(isTrue) " = true" else " = false"}";
    println(S2)
```
函数

![image](/images/200386031.png)

```java
// age 默认值 = 18
// FunctionParpam返回值为空，Unit = C#语言的void
private fun FunctionParpam(age :Int = 18, name :String):Unit{

}
```
TODO抛出异常，终止代码运行

```java
private fun FunctionParpam(age :Int = 18, name :String):Unit{

    // 使用ToDo函数可以抛出异常，终止代码运行
    // ToDo("错误原因")
}
```
反引号申明 特殊字符方法

· 这个符号在tab键上面

![image](/images/201972656.png)

```java
fun `我是反引号方法`(){
    println("反引号申明特殊字符方法")
    println("反引号申明特殊字符方法")
}
```
匿名函数

```java
fun `匿名函数`(){
    // 匿名函数使用方法就是C#的lambad

    var Anonymous = "用匿名函数判断此字符串重复的字符串数量".count({string -> string == '字'})

    println(Anonymous)

}
```
![image](/images/203772406.png)

#### 匿名函数隐式返回
```java
fun `匿名函数隐式返回`(){

    // 匿名函数声明方法一
    val BlessingFunction1:()-> String = {
        "隐式返回默认返回最后一行,无需return"
    }

    // 匿名函数隐式返回2
    val BlessingFunction2:() -> String

    BlessingFunction2 = {
        "隐式返回默认返回最后一行，无需return"
    }
}

```
## 匿名函数只有一个参数时，可以用it代替
```java
fun `匿名函数只有一个参数时`(){
    var AnonymousIt:(Str:String)->String = {
        it->
        "匿名函数只有一个参数时，可以用it代替:{$it}"
    }

    println(AnonymousIt("我是匿名函数的参数，当匿名函数只有一个参数时可以用it代替"))
}
```
### 匿名函数类型推断，大大减少代码量
```csharp
    var BlessingFunction = {
        "当匿名函数没有参数时，简略写法可以这么写"
    }

    var blessingFunction2 = {
        Str:String,int:Int->
        "当匿名函数有参数时，简略写法：参数一 = $Str, 参数二 = $int"
    }
```
### 匿名函数就是Lambda#
```csharp
kotlin的Lambda

  ()-> String {
    Param:String ->
    "我是kotlin的lambda函数，参数一调用:$Param"
}

C#的Lambda

Func<参数 Param, string 返回值>= a => $"Lambda参数一的值为: {a}";

```
### 当函数参数是lambda时
```csharp
fun `当Lambda被当作参数时`(){

    var Lambda:(String) -> String = {
        it ->
        it      // 返回it ， it = 默认参数
    }

    // 调用函数，函数内含有Lambda
    // 使用此方法调用，感觉非常麻烦

    println("使用常规方法调用函数")
    val a = FunLambda(18,Lambda)

    // 调用函数，函数内含有Lambda
    // 括号里面写函数的参数，大括号里面就是Lambda

    println("使用简略方法调用函数")
    val b=  FunLambda(18){
        it      // 返回it ， it = 默认参数
    }





}

fun FunLambda(age : Int, Name:(String)->String){
    println("年龄 = $age , 姓名 = ${Name("匿名函数当参数")}")
}
```
![image](/images/369732265.png)

## 内联函数 inline
```csharp
// 自己认为：
// 内联函数：重复、多次使用同一个函数可以使用内联函数来减少损耗

inline fun InlineFun()
{
    println("当一个函数被多次调用时，可以使用inline来减少服务器压力")
}
```
#### 函数处理可以用lambda作为参数之外还可以使用函数做为参数，使用 :: + 函数名即可
```csharp
fun `函数除了可以调用Lambda以外还可以直接调用函数`(){

    // 函数除了可以用lambda作参数之外，还可以用函数做参数，使用 :: + 函数名

    FunLambda(18,::Name)
}

fun Name(Str:String):String{
    return Str;
}

fun FunLambda(age : Int, Name:(String)->String){
    println("年龄 = $age , 姓名 = ${Name("匿名函数当参数")}")
}
```
## 当返回类型为Lambda时
```csharp
// 声明

fun `返回类型是Lambda时`():(String)->String {
    return {
        "返回类型为 Lambda时，参数一的值为： $it"
    }
}

// 调用

    val WriteLambda = 返回类型是Lambda时()
    println(WriteLambda("我是参数一的值"))
```
### 可空类型，var str:String? = "";
```csharp
var str:String? = "可空类型";
```
### 安全调用操作符
```csharp
var str:String? = "可空类型";
str = null;

    //可空类型必须使用?,否则会报错
    str?.trim();
```
### 可空类型使用let函数
```csharp
// 可空字符串使用 let函数
fun nullLet(){

    var str:String? = "本字符串可以为空"
    str = null

    // 使用let函数
    str = str?.let{
        it:String->

        if(it.length > 5){
            "大于5"
        }else{
            "小于5"
        }
    }

    println(str)
}
```
### 非空运算符，!!.
```csharp
// 非空运算符，如果为空发出异常
fun noNull(){
    var str:String? = "非空运算符，如果为空发出异常";


    println(str!!.length);
}
```
### 合并操作符，相当于C#的三元表达式 ? :
```csharp
// 空合并操作符 ?:
fun `空合并操作符`(){

    var str:String? = "空合并操作符";

    str = null
    // 不为空为左，为空为右

    println(str?.let { it.capitalize() } ?: "str is null")
}
```
### 自定义异常，继承exception
```csharp
// 自定义异常
fun `自定义异常`(){

    var str:String? = null;

    try {
        // 触发异常
        throw customException();
        // 如str不为空则str +1
        str!!.plus("+1");

    }catch (e:Exception){
        println(e)
    }


}

// 自定义异常，继承Exception
class customException() : Exception("为空")
```
### 
### 检测参数是否为空，如果为空发出自定义异常
```csharp
// 检测参数不为空，如果为空返回自定义异常
fun `检测参数不为空`(){
    var str:String? = null;

    checkNotNull(str,{"参数为空"})

}
```
![image](/images/898040531.png)

### 解构语法，把list赋值给变量
```csharp
// 解构语法
fun `解构语法`(){

    var str = "a,b,c";
    var strList = str.split(',')

    // 常规调用方式
    //println(strList[0])

    // 解构语法, 把list赋值给变量
    var (str1,str2,str3) = strList

    println(str1)
}
```
### replace（字符串替换） + regex（正则表达式）
```csharp
// replace
fun replaceA(){
    var str = "a b c d e f g";


    var str2 = str.replace(regex = Regex("[^abg]")){
        when(it.value){
            "c" -> "1"
            "d"->"2"
            "e"->"3"
            else -> it.value
        }
    }

    println(str)

    println(str2)
}
```
### \== and ===
```csharp
// == and ===
fun `==and===`(){
    var str1 = "String";
    // 将字符串首字母改为大写
    var str2 = "string".capitalize();

    // = true
    println(str1 == str2)

    // = false
    println(str2 === str1)
}
```
### 字符串遍历
```csharp
"字符串遍历".forEach{
    println(it);
}
```
### 数字转换
```csharp
// 数字转换
fun `数字转换`(){
    // 如果转换失败则为空
    var a :Int? = "9.9".toIntOrNull()

    // = 9 ，但四舍五入之后为10
    var b = 9.9.roundToInt();

    // 格式化字符串

    var c = "%.2f".format(3.14125);

    println(a)

    println(b)

    println(c)
}
```
### apply函数，在apply里面调用类的方法时无需使用变量名
![image](/images/45073828.png)

### let and apply
```csharp
// let 与 apply对比
// let 传入前者结果为参数且返回结果为最后一行
// apply 不传入参数，执行结果赋值给变量
fun letAndApply(){
    // let 使用
    var str = listOf(1,2,3).last().let{
        it * it
    }
    println(str)

    // let + :? 代替if else
    println(formatGreeting(null));
    println(formatGreeting("Ddcheat"));

    // apply前后对比

    File("C:\\kotlin.txt").apply{
        setReadable(true)
        setWritable(true)
        setExecutable(false)
    }

    var createFile = File("C:\\kotlin2.txt")
    createFile.setExecutable(false)
    createFile.setReadable(true)
    createFile.setWritable(true)
}

// 使用let + :? 代替 if else
fun formatGreeting(name:String?) : String? {
    return name?.let {
        "welcome $it"
    } ?: "what`s your name"
}
```
### run函数
```csharp
// run 函数 run 和 apply相比 run接收上一个对象，返回结果为最后一行
fun runandApply(){

    var file = File("C:\\Users\\29663\\Desktop\\服务器.txt")

    // run和apply, apply是配置函数， run 是返回函数
    var result = file.run{
        readText()
    }

    println(result)

    // run 还可以使用 引用函数
    // 可以使用多个run

    var resultLength = result.run(::textISlength)
        ?.run(::textLengthGreaterThan)

    println(resultLength)

}

fun textISlength(text:String?) = text?.length
fun textLengthGreaterThan(length:Int): String{
    return if(length > 5){
        "string Greater Than 5"
    }else{
        "String less Than 5"
    }
}
```
### with and run
```csharp
// with 跟 run 相似， 但 with 需要传入参数
fun withAndrun(){
    var a = "判断字符串长度".run{
        length
    }

    var b = with("判断字符串长度"){
        length
    }

    println(a)
    println(b)


}
```
### also
```csharp
// also 跟 let 函数相似， also 接收对象，返回接受的对象， let 接收对象，返回lambda
fun alsoAndlet(){
    var file = File("C:\\Users\\29663\\Desktop\\服务器.txt").also{
        println("文件名 = " + it.name)
    }.also{
        println(it.readText())
    }

}
```
### takeif
![image](/images/50609531.png)

```csharp
// takeif
fun takeif(){
    var text = File("C:\\Users\\29663\\Desktop\\服务器.txt").takeIf {
        it.canRead() && it.exists()
    }?.readText()

    println(text)
}
```
### takeUnless ,  是takeif的辅助函数，takeif为真时返回对象，而takeunless为假时返回对象
```csharp
// takeUnless 当判定条件为假时返回对像，为真时返回null
fun takeunless(){
    // 如果 isHidden为假则执行后面的函数，如果为真则返回null
    var text:String? = File("C:\\Users\\29663\\Desktop\\服务器.txt").takeUnless{
        it.exists()
    }?.let{
        "这个文件不存在"
    }

    println(text)
}
```
### list集合
```csharp
// list
fun list(){
    var strlist :List<String> = listOf("a","b","c")

    // 访问指定索引，如果不存在则为自定义值，Unknown
    println(strlist.getOrElse(3){"Unknown"})

    // 访问指定索引值，如果为空，则 = Unknown
    println(strlist.getOrNull(4) ?: "Unknown")
}
```
### mutableLIst
```csharp
// mutableList 可变集合， list为不可变集合
fun mutablelist(){
    var mutablelist = mutableListOf("a","b","c")
    // 添加
    mutablelist.add(3,"d")
    mutablelist.add("e")
    // 删除
    mutablelist.remove("e")

    println(mutablelist)

    // mutablelist 为可变集合， listof为不可变集合
    // 可变集合 不可变集合可以互转
    mutableListOf("a","b","c").toList()
    listOf("a","b","c").toMutableList()

}
```
### mutator
```csharp
// mutator
fun mutator(){
    // 需要使用val 使用var会报错
    val mutablelist = mutableListOf("a","b","c")
    // 添加元素
    mutablelist += "d";
    // 删除元素
    mutablelist -= "a"

    // lambda删除元素
    mutablelist.removeIf{
        it.contains("b")
    }

    println(mutablelist)
}

```
### 遍历列表
```csharp
// foreach list
fun foreachList(){
    val mutablelist = mutableListOf("a","b","c")

    // 第一种方式
    for (s in mutablelist) {
        println(s)
    }

    // 第二种方式
    mutablelist.forEach {
        println(it)
    }

    // 第三种方式
    mutablelist.forEachIndexed{
        index,item->
        println("$index , $item")
    }

}
```
### 解构语法忽略赋值
```csharp
fun `解构语法忽略赋值`(){
    val list = listOf("a","b","c")

    // 使用下划线忽略对b的赋值    
    val (a,_,b) = list

    println(a)
    println(b)
}
```
### SetList 不可变Set集合
```csharp
// setList 和list 的区别在， setList不可以有重复元素而 list可以有重复元素
fun setlist(){
    val setlist = setOf("a","b","c")
    println(setlist.elementAt(1))
}
```
### MutableSetList  可变Set集合
```csharp
// 可变的Setlist
fun mutableSetList(){
    val mutableSetlist = mutableSetOf("a","b","c")

    // 添加或删除元素
    mutableSetlist.add("d")
    mutableSetlist.removeIf{it.contains("a")}

    // 添加或删除元素
    mutableSetlist += "e"
    mutableSetlist -= "b";

    println(mutableSetlist)
}
```
### 集合转换， 快捷函数
```csharp
// 集合转换 和 快捷函数
fun listTOset(){
    val list = listOf("a","a","b")

    // 去重复元素，但很麻烦
    val list1 = list.toSet().toList()

    // 去重复元素函数 distinct
    val list2 = list.distinct();

    println(list)
    println(list1)
    println(list2)

}
```
### mapList
```csharp
// mapList key value模式
fun mapList(){
    // 第一种创建方式
    val maplist1 = mapOf("a" to 10,"b" to 20 ,"c" to 30)

    // 第二种创建方式
    val maplist2 = mapOf(Pair("a",10),Pair("b",20),Pair("c",30))

    // 索引取值
    println(maplist1[0])

    // 取值
    println(maplist2.getValue("a"))
    println(maplist2.getOrElse("d"){"unknown"})

    // 递送
    maplist1.forEach { key, value ->
        println("$key, $value")
    }
    // 递送二
    maplist2.forEach {
        println("${it.key}, ${it.value}")
    }
    // 递送三
    for (entry in maplist2) {
        println("${entry.key}, ${entry.value}")
    }

}
```
### field ， 类属性自定义get / set时使用
```csharp
class FirstClass {
    var str = "capitalize"
    get() = field.capitalize()
    set(value) {
        field = value.trim()
    }

}
```
### 面向对象
```csharp
// 构造函数
class ConstructorClass constructor(name:String , age:Int) {

}

// 构造函数，无需constructor

class ConstructorClassTwo (name:String, age:Int){

}

// 使用Init初始化代码
class InitClass(var name:String){

    init {
        // 使用also输入此字符串
        "name = ${name}".also(::println)
    }

}

// 继承类 , 使用open关键字，其变量或方法可以被继承同样使用open
open class parentClass(_name:String, _age:Int){
    // 子类不能重写父类的 var ，比如把var 覆盖为 val
    open var name = "";
    open var age = 0;

    init {
        name = _name;
        age = _age
    }

    open fun writeLine() :String{
        return "年龄 = ${age} ， 姓名= ${name}"
    }
}

// 子类， 使用override

class sunClass(override var age:Int,override var name:String) : parentClass(_age = age,_name = name){
    // 继承后,使用super()初始化父类
    //constructor():super();

    override fun writeLine():String {
        return "override返回 年龄 = ${age} ， 姓名= ${name}"
    }

    // 如果要调用父类的属性或方法可以使用super
    fun writeline(){
        // 调用父类方法
        super.writeLine().also(::println)
        // 如果继承多个类或interface 可以这么调用
        super<parentClass>.writeLine().also(::println)
        // 调用父类属性
        println("父类中age = ${super.age}")
    }
}

// 抽象类
abstract class AbstractClass:parentClass{
    // 给父类属性赋值
    constructor(age: Int,name: String):super(name, age);

    override fun writeLine(): String {
        return super.writeLine()
    }
}
```
### 调用上面的类
```csharp
    sunClass(18,"鲁梦瑶").also{
        println(it.writeline())
    }.also{
        println(it.writeLine())
    }
```
### 类属性，给类属性赋值，使用field
```csharp
// 面向对象，给属性赋值
class AttributeClass{
    // 自定义属性访问器
    var name:String = ""
    set(value){
        field = value
    }
    get() = field

    // 属性访问
    var age:Int = 0
    set(value) {
        field = value
    }
    get() = field
}
```
### 可见性修饰符
```csharp
public class{}

// 仅内部可用
private class{}

// 子类可用
protected class{}

// 相同module可用
internal class{}

```
### 延迟初始化，lateinit
```csharp
// 延迟初始化
class lateinitClass{

    lateinit var name:String;

    // 初始化name值，只有在初始化后才能使用name
    fun ready(){
        name = "延迟初始化变量，必须初始化后才能使用";
    }

    fun battle(){
        // 使用isInitialized判断name是否被初始化
        if(::name.isInitialized)
        println(name)
    }
}
```
### 惰性加载
```csharp
// 延迟加载，惰性初始化
// 只有在调用该变量时才会初始化
// 

class byLazy{
    val lazyConfig by lazy{
        loadConfig()
    }

    fun loadConfig():String{
        return "惰性加载";
    }
}
```
### is 和 as
```csharp
// 使用 is 判断 是否某个类型

var a = "";

a is String

// 使用as 强制转换

open class a{}

class b :a(){}

val b = b();

// 把子类转为父类，
b as a;
```
### 不安全的转换
```csharp
// 无法转换
var a :String = b as String;

// null 不能转换为 string
var a:String? = b as String?
```
### 安全转换
```csharp
var a:String? = b as? String
```
### 与C#的 as 不同
```csharp
// kotlin 的as 无需再次赋值，比如

(b as a); // 之后调用b即可

// c#如下, 需要使用新的对象赋值

var x = (b as a);
```
Any是所有 类的超类

相当于C#的object

```csharp
// Any
fun anyclass(name:Any){
    println(name is String)
}
```
### 匿名对象，objcet
```csharp
open class objectTest {
    open fun load(){
        println("我是原生对象")
    }
}

fun mian(){
    // 匿名对象继承 objectTest
    var overrideObject = object:objectTest(){
        override fun load(){
            println("我是一个对象，继承 objectTest类")
        }
    }

    overrideObject.load()

}
```
### 声明一个对象
```csharp
    var objectCreated = object{
        val name = "jack";
        val age = 18;
    }

    println(objectCreated.name)
```
### companion半生对象，像是其他语言的static
```csharp
class companionClass{
    companion object{
        var config = "null";

        fun load(_config:String){
            config = _config
        }

        fun default(){
            println(config)
        }
    }
}

// 调用
    companionClass.load("config已经加载")
    companionClass.default();
```
### data class 数据类
```csharp
// 数据类必须有最少一个参数
// 数据类，仅提供数据，比如获取的json，xml等需要赋值的类
data class dataClass(var x:Int,var y:Int) {

    override fun toString(): String {
        return "dataClass(x=$x, y=$y)"
    }
}
```
### 复制 data class
```csharp
    val data =dataClass(30,12)
    var dataClassCopy = data.copy()

    println(dataClassCopy)
```
### operator - 运算符重载，类本身不支持 + += - -=
### 但是可以重载运算符
```csharp
class operatorClass(var max:Int,var min :Int) {

    // 重写 plus 方法
    operator fun plus(other:operatorClass) = operatorClass(max + other.max,min + other.min)

    override fun toString(): String {
        return "operatorClass(max=$max, min=$min)"
    }


}

// 调用
(operatorClass(1,6) + operatorClass(23,64)).also{ println(it.toString())}
```
![image](/images/653828328.png)

### enum 枚举
```csharp
enum class enumClass{
    东,
    南,
    西,
    北
}

```
### 初始化枚举
```csharp
enum class enumClass(val value :Int) {
    东(1),
    南(2),
    西(3),
    北(4)
}

// 调用
enumClass.南.also { println(it.value) }
```
### 枚举方法
```csharp
enum class enumClass(val value :Int) {
    东(1),
    南(2),
    西(3),
    北(4);

    fun plus() = value +1;
}

// 调用

    enumClass.南.plus().also(::println)
```
### sealed - 密封类，某种意义上来说是enum的拓展
```csharp
sealed class sealedClass {
    object error:sealedClass();
    class  success(val notify:String):sealedClass();

}

// 使用 sealed
class sealedUse(var value:sealedClass){
    fun mian(){
        // when语句判断value的类型，然后做出相应动作
        val status = when(value){
            // 如果 = erro 
            is sealedClass.error ->"失败"
            // 如果 = success 
            is sealedClass.success -> (value as sealedClass.success).notify
        }

        println(status)
    }
}
```
### 泛型
```csharp
// 泛型
class fanClass<T> (var age:T){

    init{
        println(age)
    }

    // 再次声明一个泛型
    // 泛型函数
    fun <R> create(value :()->R) : R{
        return value();
    } 
}

class createFan{

    fun mian(){
        val fan:fanClass<Int> = fanClass(18)

        // 他的返回值是一个泛型lambda，而lambda如果是最后一个参数可以用括号代替()
        val fanRtrun = fan.create{
         fan.age * 361   
        }

    }

}

```
### 多参数vararg,  C#里面的param
```csharp
// 多个参数
class paramListClass<T>(vararg var listName:T) {

    // 用泛型给array赋值时必须加 out

    val listParam :Array<out T> = listName;

    //

    fun mian(index:Int):T{
        return listParam[index];
    }

}

// 调用
    paramListClass(435,345,346,236,46,6).run{
        for( item in 0 .. 5)
            mian(item).also(::println)
    }
```
### 协变 out， 逆变in
```csharp
公式：

协变：IFoo<父类> = IFoo<子类>；

逆变：IBar<子类> = IBar<父类>；
```
### 协变 逆变在array中使用
```csharp
// 协变和逆变
class UseArray<T>{
    // 插入使用 in ， 访问使用 out
    // 父继承子类使用out，子类继承父类使用in
    val list:Array<in T> = Array(5){};


    fun mian(set:T){
        list[0] = set;
        println(list[0])
    }

}

// 调用;
UseArray<String>().also{
    it.list[1] = "String2";
    it.list[2] = "String3";
    it.list[3] = "String4";
    it.list[4] = "String5";
}.also{
    it.mian("第一个String")
}
```
### 判断 泛型类型 reified ， 使用reified必须使用 inline
```csharp
class reifiedClass<T> {

    // reified 必须是 内联函数(inline)
    inline fun <reified T> createOrRandow(create:()->T):T{
        val list = listOf(
            dog("dock",1),
            man("jack",0)
        )
        // @shuffled 洗牌
        val random = list.shuffled()?.firstOrNull();

        // 判断是否 指定类型，如果是则为true，否则使用自定义lambda
        return if(random is T){

            random;

        }else{
            create();
        }
    }
}

open class Hub{

}

class dog(var name:String, var age:Int):Hub(){
    override fun toString(): String {
        return "dog(name='$name', age=$age)"
    }
}

class man(var name:String, var status:Int):Hub(){
    override fun toString(): String {
        return "man(name='$name', status=$status)"
    }
}

// 调用上面的类
class useReified{

    //
    fun mian(){
        reifiedClass<Hub>().createOrRandow {
            man("Tom",3)
        }.run{
            toString().run(::println)
        }
    }
}
```
### 函数式接口 fun interface
```csharp
class funInterface{

    /*
    * 函数式 接口
    * */
    fun interface isCode{
        fun invoke():String;
    }

    fun mianLambda(){

        // 使用lambda调用函数式接口
        val createCode = isCode{
            "函数式接口，使用lambda调用"
        }

        createCode.invoke().run(::println)

    }

    // object 调用
    fun mianVal(){

        val createCode = object:isCode{

            override fun invoke():String{
                return "函数式接口，object调用"
            }

        };

        createCode.invoke().run(::println)
    }

}

```
### 拓展函数
```csharp
class expandFun {

    // companion,伴生对象，等同于其他语言的static
    companion object{

    }
}

// 拓展函数
fun expandFun.mian(){
    println("拓展函数")
}

// 给companion添加拓展函数
fun expandFun.Companion.load(){
    println("给 companion添加拓展函数")
}

// 泛型拓展
// 拓展后所有类型都具有 ExpandFun
fun <T> T.ExpandFun(){
    println("泛型拓展函数")
}

// 可空拓展函数
// 这里的 可空类型是会执行的
/*
* 这里不会执行
* val a :String = null;
* a?.IsNullToNotify();
* */
fun String?.IsNullToNotify() = this ?: "null";
```
### inner 内部类
```csharp
// 内部类
class innerClass {
    var studio = "visual studio ";
    inner class innerSun{
        fun load(){
            // inner(内部类)，可用调用上级的属性、方法
            println(studio)
        }
    }
}
```
### 委托类 使用 by关键字
```java
// 定义一个接口
interface BaseInterface{
    fun ToString():String;
    fun ToInt():Int;
}

// 定义一个类，用于实现BaseInterface
class useBaseInterface:BaseInterface{
    override fun ToString(): String {
        return "ToString Method";
    }

    override fun ToInt() = 666;
}

// 委托， 把 BaseInterface 赋值给变量 B
class delegate(var B:BaseInterface):BaseInterface by B {
 }

// 调用， 先声明一个已经实现BaseInterface的类
    val baseTo = useBaseInterface();
// 使用该类作为参数，即可调用BaseTo实现的方法
    delegate(baseTo).ToString().run(::println)
    delegate(baseTo).ToInt().run(::println)
```
### 懒加载，lazy配合 委托使用
```java
// 几种懒加载实现
// 委托实现懒加载
class delegateAndLazy {
    val load by lazy{
        "字符串类型"
    }

    val loadTwo :String by lazy{
        "字符串类型"
    }

    val loadThree = lazy{
        "字符串类型"
    }
}

// 调用
    delegateAndLazy().also{
        it.load.run(::println);
        it.loadTwo.run(::println)
        it.loadThree.run{
            println(value)
        }
    }
```
### 委托， 映射类，通过字符串键属性名称
```java
// 映射类
class myMap(val map:Map<String,Any?>){
    // 通过字符串键 属性名称
    val name:String by map
    val age:Int by map

}

// 调用
myMap(mapOf("name" to " 当前字符串赋值给name，name的值","age" to 1)).let{
    println(it.age)
    println(it.name)
}
```