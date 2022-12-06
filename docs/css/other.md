# 常用css属性

## pointer-event
> 可以设置鼠标穿透，使下方的元素可以获取点击事件
```css
pointer-events: none;
```

## 设置多个背景
```css
/* 从右往左渲染的，所以在右边的图片层级更高 */
background: url(xxx.jpg) no-repeat 0% 0%/100% 100%,url(xxx.png) 是否重复 x y/宽度 高度;
```

## z-index 层级关系
> ::before伪元素
```css
.parent{
    /** 此处是为了新建层叠 */
    position:relative;
    z-index:0;
}
.div{
    /** xxx */
    position:relative;
}
.div::before{
    content:'';
    position:absolute;
    /** 直接设置z-index是无效的，设置值为-1则调出到父级层级 */
    z-index:-1;
}
```