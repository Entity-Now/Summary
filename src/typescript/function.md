<!--
 * @作者: 14770137
 * @Date: 2022-10-07 17:02:34
-->
# 函数
##### 这里的 => 不是箭头函数的意思，而是函数的返回类型 
```js
let myAdd: (x:number, y:number) => number =
    function(x: number, y: number): number { return x + y; };
```

#### 可选参数
```js
function test(name?: string){
    console.log(name || "hello world");
}
```

#### 剩余参数
```js
function BuildName(firstName: string, ...restOfName:string []):string []{
    return [firstName,...restOfName];
}
console.log(BuildName("1","2","3"));
```

#### 使用箭头函数规避this作用域的问题
```js
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        // 此处如果不使用箭头函数，则suits的作用域会绑定到window上面
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```