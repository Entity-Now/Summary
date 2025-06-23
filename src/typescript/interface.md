<!--
 * @作者: 14770137
 * @Date: 2022-10-07 17:01:25
-->

# interface 接口
```js
interface LabelledValue{
    label : string;
    value : string;
}

function func(val : LabelledValue){
    console.log(val);
}
// 只要传入的对象满足 属性相同且类型一样就可以
let obj = {
    label : "123",
    value : "456",
    other : "null"
};

func(obj);

/// 可以选的参数
interface Tabelled{
    value : string;
    /// 可选参数
    label?: string;
}

// 只读属性
interface Point{
    // readonly 被赋值后就不能被改变了
    readonly value : string;
    readonly label : string;
}
var a : Point = {
    value : "123",
    label : "456"
};
//a.value = "1324"; // error

// readonlyArray<> 只读数组，数组被赋值后不可被改变
let ass : ReadonlyArray<number> = [1,2,3,4,5];
// 不可将一个只读数组赋值给普通的数组，但是可以类型断言重写
// let ass2 : number[] = ass; // error
let ass2 : number[] = ass as number[]; // ok
```

#### const & readonly  如果把它当做属性则使用readonly 如果是变量则使用const

### 额外属性 propName
```js
/// 额外的属性检查，比如
interface SquareConfig {
    width?  : string;
    height? : string;
}

function func(config : SquareConfig2){
    console.log(config);
}

// func({height : "1px",color : "red"}); error : SquareConfig不包含color
// 使用类型断言,前提是接口必须是可空类型
func({height : '1px',color : 'red'} as SquareConfig);

// ## 如果一个接口可能具有其他特殊用途的额外属性，那么可以这样定义
interface SquareConfig2{
    width? : string;
    height?: string;
    [propName : string]:any;
}
// propName 自定义额外属性
func({height:'123px' , color : "red"});
```

### 函数接口
```js
// 函数类型接口
interface FuncInterface{
    (value : string):void;
}
/// 函数接口
let func : FuncInterface = function(val){ // function (val : string) 可以忽略
    // .... 
    console.log(val);
}
func("hello world");
```

### 可索引类型
```js
/// 可索引的类型
interface StringArray{
    [index : number]: string;
    length : number;
    // name   : string; error
}
// 相当于用number去索引StringArray时会得到string类型的返回值
let data : StringArray = ["1","2"];
console.log(data[0]);
console.log(data.length);
```

#### 类
```js
/// 类类型
/// 实现接口
interface ClockInterface{
    currentTime : Date;
    setTime(d: Date);
}
class Clock implements ClockInterface{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number , m: number){
        console.log(h,m);
    }
}
```

### new interface 构造函数约束
```js
/// 类类型
/// 实现接口
interface ClockConstructor{
    // new 构造器签名 ps: 构造函数声明
    new (hour: number, minute: number): ClockInterface;    
}
interface ClockInterface{
    tick():void;
}

// 接口处理器
function CreateClock(ctor: ClockConstructor, hour: number, minute: number){
    return new ctor(hour,minute);
}

// 闹钟一
class clock implements ClockInterface{
    tick() {
        console.log("打上句号。");
    }
    constructor(hour: number, minute: number){
        console.log(`闹钟一：${hour}:${minute}`);
    }
}
// 闹钟二
class clock2 implements ClockInterface{
    tick() {
        console.log("打上句号。");
    }
    constructor(hour: number, minute: number){
        console.log(`闹钟二：${hour}:${minute}`);
    }
}
// ts 可以传入interface并实例化
let digital = CreateClock(clock,2,20);
let analog = CreateClock(clock2,10,30);

```

### 接口继承
```js
interface Shape{
    color : string;
}
interface Square extends Shape{
    sideLength: number;
}
// 使用尖括号<interface>{}初始化
let square = <Square>{};
square.color = "pink";
square.sideLength = 170;

console.log(square);
```

### 混合类型
```js
// 混合类型
interface Counter{
    /// 相当于构造函数
    (start: string):void;
    // 方法
    reset():void;
    // 属性
    interval: number;
}

function getCounter():Counter{
    let counter = <Counter>function(start){
        console.log(start);
    };
    counter.reset = function(){
        console.log(`in value is : ${this.interval}`);
    }
    counter.interval = 101;
    return counter;
}

let c = getCounter();
c("初始值....");
c.reset();
```