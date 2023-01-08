<!--
 * @作者: 14770137
 * @Date: 2022-10-07 16:22:51
-->
# class
```js
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
##### super（arg） 使用父类的构造函数
##### super.property 父类的属性

##### public privacy protected 也能使用
##### privacy 只能内部使用
##### protected 子类也能使用

##### readonly 表示属性是只读的，赋值之后不可再被改变
##### static 存在于类本身上面，而不是类的实例上面

## 存取器
```js
class test{
    _fullName : string;
    get fullName(){
        return this._fullName;
    }
    set fullName(val){
        this._fullName = val;
    }
}
```
## 抽象类
```js
// 抽象类它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节
abstract class Animal{
    // abstract 抽象成员必须在派生类中实现
    abstract makeSound():void;
    move():void{
        console.log("基类的方法...");
    }
}

class AccountingDepartment extends Animal{
    makeSound(): void {
        console.log("实现抽象类的方法");
    }
}

let a : AccountingDepartment = new AccountingDepartment();
a.makeSound();
```

## class当接口
```js
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```