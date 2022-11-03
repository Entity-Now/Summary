<!--
 * @作者: 14770137
 * @Date: 2022-10-12 16:42:15
-->
# 可为空类型
```js
function test(val : string | null){
    console.log(val);
    return val || "value is null";
}
// 可选参数，或者可选类型 这里的？指的是这个参数可选
/** 如果此参数留空 值为undefined而不是null */
function test2(val?:string){
    console.log(val);
    return val || "value is null";
}

// console.log(test(undefined)); error
console.log(test(null)); // OK
console.log(test2()); // OK , value is undefined
```

# ! 操作符
```js

// 非空断言符 ！ 可空断言符？
// 如果确定值不等于空，可以使用非空断言符去除null undefined
function test(val : string | null){
    function postfix(){
        // 这时候就会报错，所以就要用！
        // return val.length; error
        return val!.length;
    }
    val = val || '值为空';
    return postfix();
}

console.log(test(null)); // output 3
console.log(test('1234')); // output 4

```