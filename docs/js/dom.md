# js操作dom

## document.querySelector();
> 匹配第一个div
```js
var el = document.querySelector(".myclass");
```
> 属性匹配, `<input name='login'/>`
```js
var el = document.querySelector("input[name='login']");
```

## document.querySelectorAll();
> 返回匹配的元素列表，返回的对象是NodeList
```js
var els = document.querySelectorAll('div');
```
> 返回文档中所有的div列表，其中class包含`note`或`alert`
```js
var matches = document.querySelectorAll("div.note, div.alert");
```
> 返回匹配项
```js
var highlighted = document.querySelectorAll(".highlighted");

highlighted.forEach(e=>{
    // xxxx
});
```

## document.getElementById();
> 使用id获取

## document.getElementByClassName();
> 使用类名获取

## document.getElementByTagName();
> 通过标签名获取
```js
var el = document.getElementByTagName('div');
```

## document.getElementByName();
> 通过name属性获取，只有包含name属性的元素才能使用
```js
<div id="box">
    <input type="text" name="user" />
</div>
<script>
    let userInput= document.getElementsByName("user");
</script>
```