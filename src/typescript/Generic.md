<!--
 * @作者: 14770137
 * @Date: 2022-10-07 19:53:29
-->
# 泛型
```js
// 泛型
function loggingIdentity<T>(val : T){
    console.log(typeof val);
    if(typeof val == 'string'){
        console.log('type of val is string');
    }else{
        console.log('type of val is any');
    }
}
loggingIdentity("自动推导");

```
### 接口泛型
```js
// 接口泛型
interface GenericIdentityFn{
    // 泛型函数
    <T>(arg:T):T;
}
function identity<T>(val: T):T{
    return val;
}
let obj :GenericIdentityFn = identity;
console.log(obj<number>(1234));
```

### 泛型类 Generic
```js
// 泛型类
class GenericNumber<T>{
    zeroValue: T;
    add : (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 10;
myGenericNumber.add = function(x,y){
    return x*y;
}
```
### 泛型约束 
###### 有时候我们希望方法传入的对象包含某些属性，但是使用的人不知道 所以必须使用泛型约束
```js
/// 泛型约束，有时候需要限制传入值的类型，就必须使用泛型约束
interface ContainLength{
    // 限制必须有length这个属性
    length:number;
}
function loggingIdentity<T extends ContainLength>(val : T){
    // ...
    return val.length;
}
// ok
loggingIdentity({length:123});
// error
//loggingIdentity({length:"123"});
//loggingIdentity({other:"123"});

```
### 泛型键值约束
```js
/// 在泛型约束中使用类型参数
// 你可以声明一个类型参数，且它被另一个类型参数约束
// keyof 指的是把对象里的建【key】取出来
function Generic<T,K extends keyof T>(obj: T, key: K){
    // 大概意思就是 K 里面需要包含 T 的键（key）
    console.log(obj[key]);
}
let x = {a:123 , b:456};
Generic(x,"a"); // output ： 123

let s = [1,2,3,4,5]
Generic(s,0);   // output ：1

```