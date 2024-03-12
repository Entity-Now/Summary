<!--
 * @作者: 14770137
 * @Date: 2022-10-09 17:20:32
-->
# 联合类型
```js
// 联合类型
function test(type: string | number): string | number{
    if(typeof type == 'string'){
        return 'type of value is string';
    }else{
        return 123;
    }
}
console.log(test(123)); // output : 123
console.log(test('123')); // output : type of value is string 
```

# 类型断言
```js


```