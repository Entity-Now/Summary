<!--
 * @作者: 14770137
 * @Date: 2022-10-07 20:46:37
-->
# 构造函数签名，用于实现函数工厂
###### 

```js
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}
// 泛型会约束传入的类型
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
// 什么是函数工厂：实现一个函数 返回的则是一个对象，返回的对象是动态的
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
```
### 构造器签名
```js
// 字面量方式构造器签名
const myClass1: new (n:string, a:number) => Person = Student;
// 接口方式构造器签名
const myClass2: {new (n:string, a:number) : Person} = Teacher;
```