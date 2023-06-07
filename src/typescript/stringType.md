<!--
 * @作者: 14770137
 * @Date: 2022-10-13 14:38:25
-->
# 字符串字面量类型
```js
type name = "myName" | "isName";
function test(val : name){
    console.log(val);
}

test("myName");
// test("test"); // error 只有选择type name 里面的值作为参数
```