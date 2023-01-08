<!--
 * @作者: 14770137
 * @Date: 2022-10-16 23:25:25
-->
# flex布局

## flex
> 是flex-grow , flex-shrink, flex-basis的简写，默认为0 1 auto。后两个属性可选

## flex-grow
> 使用flex-grow，默认为0，即存在剩余空间也不放大
```css
.Container{
    display: flex;
    flex-direction: column;
}
.BodyView{
    flex-grow: 1;
}
.headView,.footView{
    flex-grow:0;
}
/* 可以使中间的元素占满多余的空间 */
```
## flex-flow
> 是flex-direction属性和flex-warp属性的结合，默认值为row nowrap。

## shrink 
> 定义元素的缩小比例，默认为1，即如果空间不足，该项目将缩小
```css
.Container{
    flex-shrink:1;
}
```

## basis 
> 该属性定义了再分配多余空间前，项目占据的主轴空间
```css
.item{
    flex-basis: <length> | auto; /** default auto */
}
```

## order
> 定义项目的排列顺序，数值越小，排列越靠前，默认为0

## align-content
> 定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用。

| 值 | 解释 |
| --- | --- |
| flex-start | 向上对齐 |
| center | 居中对齐 |
| stretch | 轴线占满整个交叉轴 |
| space-between | 两端对齐，轴线之间平均分布 |
| space-around | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。|
| flex-end | 与交叉点终点对齐 |

## align-self
> 允许自己跟其他元素不一样的对齐方式，可以覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

## flex 子元素不能撑满父元素的问题
### 第一种
```css
<!-- 在父类上面使用baseline -->
.father{
    align-self:baseline;
}
```
### 第二种
```css
/* 父类设置 */
.body{
    display:flex;
    justify-content:center;
}
```