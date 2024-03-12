<!--
 * @作者: 14770137
 * @Date: 2022-10-12 15:28:22
-->
# 类型保护
## 谓语
```js
interface pet{
    layeggs();
}
class bird implements pet{
    layeggs(){
        console.log("type is fish");
    }
    fly(){
        console.log("bird");
    }
}
class fish implements pet{
    layeggs() {
        console.log("type is fish");
    }
    swim(){
        console.log("swim");
    }
}
// 联合类型，返回 bird && fish的其中一个
function GetSmallPet():bird|fish{
    // 实际的开发中，返回的类型是随机的
    return new bird();
}
// 类型谓词判断，大概意思判断值是否是联合类型的其一
function IsBird(val : any): val is bird {
    return (<bird>val).fly !== undefined;
}
// 获取随机类型
let f = GetSmallPet();
// 每当调用isBird时，typescript会将变量减缩为具体的类型，例如：bird fish
if(IsBird(f)){
    f.fly(); // ok
}else{
    f.swim(); // ok
}
```

## 不适用谓语需要重复很多代码
```js
// 为什么要用类型谓词，以下是不用谓词的例子
/** 使用类型强调 */
(<bird>GetSmallPet()).fly(); // ok
/** 类型强调 + if */
if((<bird>GetSmallPet()).fly === undefined){
    (<fish>GetSmallPet()).swim();
}else{
    (<bird>GetSmallPet()).fly();
}
/** 可见重复的代码非常多，且不易维护 */

function isString(val: any):val is string{
    return (<string>val) === undefined;
}
function isNumber(val:any):val is number{
    return (<number>val) === undefined;
}
function test(val : string | number){
    if(isString(val)){
        console.log('value is string');
    }
    if(isNumber(val)){
        console.log('value is number');
    }
}
test(123);
test('123');
```

# typeof 类型保护
```js
/// typeof predicate
function isNumber(val: any):val is number{
    return typeof val === 'number';
}
function isString(val: string):val is string{
    return typeof val === 'string';
}

function test(val:any){
    if(isNumber(val)){
        console.log('type is number');
    }  
    if(isString(val)){
        console.log('type is string');
    }
}

test(123); // output type is number
test('123'); // output type is string
```

# instance 保护
######  构造函数判断,使用instanceof 判断一个值的构造函数是否是指定的类型
```js
interface Padder{
    getPaddingString():void;
}
class SpaceRepeatingPadder implements Padder{
    getPaddingString(): void {
        console.log('SpaceRepeatingPadder');
    }
}
class PadderString implements Padder{
    getPaddingString(): void {
        console.log('padderString');
    }
}

function GetRandomPadder(){
    return Math.random() > 0.5 ?
    new SpaceRepeatingPadder() :
    new PadderString();
}

let padding = GetRandomPadder();
if(padding instanceof PadderString){
    console.log('padderString');
}
if(padding instanceof SpaceRepeatingPadder){
    console.log('type is spaceRepeatingPadder');
}
```