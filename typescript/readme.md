<!--
 * @作者: 14770137
 * @Date: 2022-10-06 16:19:54
-->
# typescript
```ts
    // start 
    // 安装ts
    npm install -g typescript
    // 编译
    tsc 文件.ts
```
### 类型 type
```js 
    function test(val:string){
    return val;
    }
    let a = "auto type";
    var b : string = "string type";
    let c : any = "any type";

    // 数组
    let arr1:string[] = ["1","2","3"];
    let arr2:Array<Number> =  [1,2,3];

    // 元组 Tuple , 可以指定不同的类型
    let tuple : [string,number] = ["123",123];

    // 枚举 enum
    enum Color{
        red,
        pink,
        black = 5,
        green,
        yellow = 89,
        blue
    }

    let color : Color = Color.red;

    // 空值
    function result_void():void{
        // 返回值为空
        return;
    }

    // 类型推断
    let someValue : any = "this is a string";
    let strLength : number = (<string>someValue).length;
    // or
    let strLength2 : number = (someValue as string).length;

    // 使用 let 代替 var （var的作用域很复杂 所以尽量使用let）

    // const 常量 ，赋值以后不能再被改变
    // 任何不更改值的变量都应该使用const
```

### 解构数组
```js
// 解构
let [a , b] = [1,2];
// 参数当解构
function tuple([first , last]:[number , string]){
    console.log(first , last); // 123 123
    return [first , last];
}
// 只取想要的数据，忽略
let [data1] = [1,2,3,4,5];
// 留空则忽略不想要的数据
let [,data2] = [1,2,3,4,5];
// 使用展开语法
let [...data3] = [1,2,3,4]

console.log(a,b);
console.log(tuple([123,"123"]));    // [ 123, '123' ]
console.log(data1); // 1
console.log(data3); // [ 1, 2, 3, 4 ]
```

### 解构对象
```js
// 解构对象
let obj = {
    a : 'a',
    b : 'b',
    c : 123
};

let {a,b,c} = obj;

console.log(a,b,c);
// 解构yi需要用括号括起来
({a,b} = {a:'aaa',b:"bbb"})

console.log(a,b); // aaa bbb

let o = {
    aa: "foo",
    b: 12,
    c: "bar"
};
// 使用展开语法收纳多余的属性
let { aa, ...passthrough } = o;
console.log(aa,passthrough); // output foo { b: 12, c: 'bar' }

// 给属性不同的名字, 展开语法不能有别名
// 这里冒号后面的不是类型而是别名
let {aa : test,...pass} = o;
console.log(test,pass); // output foo { b: 12, c: 'bar' }
```
### 别名
```js
// byName = 别名
let {a : byName} = {a : '123'};
```

### 解构与默认值
```js
// 默认值
let {a , b = 1000} = {a : '123'};

// 函数声明
type C = {a:string,b? : number};
function func({a , b} : C):void{
    // ....
}
// 指定默认值
function funcTwo({a , b} = {a:'',b:0}){
    // ....
}
funcTwo(); // ok,default to {a:'',b:0};


console.log(a,b);
```
