<!--
 * @作者: 14770137
 * @Date: 2022-09-26 21:58:46
-->
#### && 与 & 的区别
```js
普通与(&)跟短路与(&&)
普通与：所有判断条件都要判断
短路与：前面的判断返回false则终止
// ps
22 && 24 = 24;
2 && 2 && 3 
// || 只要有一个为真就返回为真的值
22 || 24 = 22;
2 || 2 || 3 = 2;
```

#### & | !
```js

```

## 取余%
是指整数除法中被除数未被除尽部分，且余数的取值范围为0到除数之间（不包括除数）的整数。
例如27除以6，商数为4，余数为3。
一个数除以另一个数，要是比另一个数**小**的话，商为0，余数就是它**自己**.。
例如:1除以2，商数为0，余数为1。2除以3，商数为0，余数为2。
![mod](/js/img/Mod_2.png)
## 取余例子
```js
    // 99 mod 21就是计算99除以21的余数。99除以21，商4。4和21 相乘得 84。99-84=15
    console.log(99 % 21); // 15
    console.log(99 / 21); // 4.7
    console.log(99 - (4 * 21)); // 15
    // 
    console.log(27 / 6);          // 4.6
    console.log(27 % 6);         // 3
    // x % y = c = y - (x * int(x / y))
    console.log(27 - (6 * Number.parseInt(27 / 6))); // 3
```

## object 
##### 定义对象属性
```js
    // 定义一个对象
    const obj = {
        a:"123",
        b:"456"
    };
    
    Object.defineProperty(obj,'c',{
        value:'789',
        writable:true // writable 为true时才能用赋值运算符改变value的值
    });
    obj.c = 9999;
    console.log(obj.c); // 9999
```

### class 
```js
    // ES5面向对象class
    var Obj2 = function(test){
        this.test = test;
        this.MyName = "Obj2";
    }
    // 方法
    Obj2.prototype.GetName = function(){
        return this.MyName;
    }
    console.log(new Obj2("123").test);
    console.log(new Obj2("123").MyName);
    console.log(new Obj2("123").GetName());

    // es6 实现方法
    class Obj3{
        constructor(test){
            this.test = test;
            this.MyName = 'Obj3';
        }
        GetName(){
            return this.MyName;
        }
    }
    // input
    console.log(new Obj3("456").test);
    console.log(new Obj3("456").MyName);
    console.log(new Obj3("456").GetName());
```

## map weakMap
```js
    // map,键值可为对象
    let test = new Map();
    // insert
    test.set('name',"test1");
    //get
    console.log(test.get('name'));
    console.log(test.has('name'));
    for(let [key,value] of test){
        console.log(key,value);
    }
    // clear
    test.clear();
    // length
    console.log(test.size);
    
    // weakMap 当键没有引用时就会被GC回收
    var obj = {name : "obj"};
    var test2 =  new WeakMap();
    test2.set(obj,'123');
    console.log(test2.get(obj));
    console.log(test2);
```