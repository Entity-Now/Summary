<!--
 * @作者: 14770137
 * @Date: 2022-10-13 15:57:43
-->
# 索引类型
```js
function pluck<T,K extends keyof T>(o: T , names:K[]) : T[K][]{
    return names.map(n => o[n]);
}

interface Person{
    name:string;
    age:number;
}

let person : Person = {
    name:'Jarid',
    age:36
}

let strings: string[] = pluck(person,['name']);
console.log(strings);
```

# 映射类型
```js

```