<!--
 * @作者: 14770137
 * @Date: 2022-10-13 14:24:46
-->
# 类型别名
```js
type Name = string;
type NameResolver = ()=>string;
type NameOrResolver = NameResolver | Name;
// 类型别名
function test(val : NameOrResolver){
    if(typeof val === 'string'){
        return val;
    }else{
        return val();
    }
}
```