# grid 布局

## start
```html
<div class="container">
    <div class="first"></div>
    <div></div>
    <div></div>
</div>
```
```css
.container{
    width: 100%;
    height: 100%;
    padding: 14px;
    box-sizing: border-box;
    display: grid;
    /* 定义每列的宽度 */
    /* 可用空间被分为四等分，第一个元素占用两个空间 */
    grid-template-columns: 2fr 1fr 1fr;
    /* 使用此属性，指定列的高度 */
    /* grid-template-rows: 50px 50px; */
    /* 使用此属性定义每列的高度 */
    grid-auto-rows: 50px;
    /* 定义每列的间距 */
    grid-column-gap: 20px;
    /* 定义每行的间距 */
    grid-row-gap: 20px;
}
.container > div{
    background: pink;
    /* height: 50px; */
}
```
![gird示例](/image/img/css_grid_0.png)

## repeat
```css
.container{
    grid-template-columns: repeat(数量, 宽度);
    // 示例
    grid-template-columns: repeat(2, 50px 1fr);
    // auto-fill自动填充，会有空余的轨道
    grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
    //auto-fit 无论grid元素多宽，子元素都是填充的
    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
    // 类似于注释
    grid-template-columns: repeat(2, [自定义] 50 [最后一个元素]1fr);
}
```

## 轨道大小 minmax()
```css
.container {
    /* 最小尺寸为100px，不能小于100px，大于100px则自适应 */
    grid-auto-rows: minmax(100px,auto);
}
```

## 网格线
> 跟wpf的gird使用方法类似

![css grid 网格线](/image/img/1_diagram_numbered_grid_lines.png)
```css
.first{
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
}
.last{
    grid-column-start: 1;
    grid-column-end: 4;
}
.lastButOne{
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
}
```
![css grid](/image/img/css_grid_1.png)

## display:contents
```html
<div class="container">
    <div class="Box1">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
```
```css
.container{
    width: 100%;
    height: 100%;
    padding: 14px;
    box-sizing: border-box;
    display: grid;
    /* 定义每列的宽度 */
    grid-template-columns: repeat(3, 1fr);
    /* 使用此属性定义每列的高度 */
    grid-auto-rows: 50px;
    /* 定义每列的间距 */
    grid-column-gap: 20px;
    /* 定义每行的间距 */
    grid-row-gap: 20px;
}
.container > div{
    background: pink;
}
.Box1{
    /* 设置穿透之后，父元素的盒子就会为空，所以以下代码是无效的 */
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    /* 子元素穿透，继承父元素的grid */
    display: contents;
}
.Box1 > div{
    /* 设置背景为蓝色 */
    background: blue;
}
```
![display:contents](/image/img/css_grid_2.png)

## gird-row 和 grid-column的简写
```html
<div class="container">
    <div class="first"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
</div>
```
```css
.container > .first{
    /* 这里的斜杆可以理解为 - 分隔的意思 */
    grid-row: 1 / 3;
    /* 占用1-4列的格子 */
    grid-column: 1 / 4;
}
.container > .two{
    grid-column: 1;
}
.container > .five{
    grid-column: 1 / 4;
}
```
![css grid row/column](/image/img/css_grid_3.png)

## grid-area属性
> 顺序如下
> - grid-row-start
> - grid-column-start
> - grid-row-end
> - grid-column-end

```css
// 上面的例子可以改为这样

.container > .first{
    grid-area: 1 / 1 / 3 / 4;
}
```

## 反方向计数
```css
.container > .first{
    grid-area: -1 / -1 / -3 / -4;
}
```

## gap 间距
```css
// !grid-row-gap
.first{
    row-gap: 10px;
    column-gap: 10px;
}
```
* gap顺序
- row-gap
- column-gap
```css
.first{
    gap: 10px 12px;
}
```

## span
```css
.container > .two{
    grid-column: 1 / span 3;
    // 效果是一样的
    grid-column: 1 / 4;
}
.container > .five{
    grid-column: 1 / 3;
}
```
![grid span](/image/img/css.png)

## area给区域命名
```css
.header{
    grid-area: hd;
}
.footer{
    grid-area: ft;
}
.content {
    grid-area: main;
}
.sidebar{
    grid-area: sd;
}
```
### 使用grid-template-areas布局
```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "ft ft ft ft   ft   ft   ft   ft   ft";
}
```
```html
<div class="wrapper">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
</div>
```
![grid area](/image/img/css_grid_4.png)

### 留出空白元素
> 使用“.”符号

```css
grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    ". . .   ft   ft   ft   ft   ft";
```
![grid area](/image/img/css_grid_5.png)

## 给网格线命名
```css
.container{
    // [名字是自定义的]
    grid-template-columns: [main-first] 1fr [two] 1fr;
    // 可以定义多个名字，引用时可以使用其中任意一个名字
    grid-template-rows: [mian-rows main-row] 1fr;
}
.div{
    grid-column-start: main-first;
    grid-column-end: two;
    /* 与下面的效果一致 */
    grid-column: main-first / two;
}
```

## 用repeat()定义相同名字的多线条
> 创建了12个等宽的网格，我们有多条名为main的线，使用的时候可以在后面跟上序号，比如 `main 5` 指的是名字为main的第5条线

```css
.container{
    grid-template-columns: repeat(12,[main] 1fr);
}
.item{
    grid-column: main / main 5;
}
```

## grid-auto-flow 自动布局算法
```css
grid-auto-flow: row; // 横向排序
grid-auto-flow: column; // 竖向排序
grid-auto-flow: dance; // 尽量占满剩余空间
```