<!--
 * @作者: 14770137
 * @Date: 2022-10-13 14:34:23
-->
# 交叉类型
```js
// 交叉类型

interface bird{
    fly:string;
}
interface fish{
    swim:string;
}
// 交叉类型，
type cross = bird & fish;
let test:cross = {
    fly:"bird fly",
    swim:"fish swim"
}
console.log(test);
```