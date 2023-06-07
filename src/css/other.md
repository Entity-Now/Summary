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

## filter
```css
img{
    filter: blur(10px);
}
```
| 属性 | 说明 |
| ---- | ---- |
| none | 默认值 |
| blur | 设置高斯模糊 |
| brightness(%) | 给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。 |
| opacity(%) | 透明程度 |
| grayscale(%) | 将图像转为灰度图像 |
| other | see msdn |

## object-fit
> 设置图片的对齐方式
```css
img{
    object-fit:cover;
}
```

## scroll-snap
> 滚动捕捉，可以做出整页滚动的效果
```css
.css{
    // 滚动捕捉类型 y x block inline both
    // 捕捉某个点 mandatory proximity
    scroll-snap-type:y mandatory;
}
.css .select{
    // 滚动对齐 start end center
    scroll-snap-align: start;
    // 可以设置滚动后的间距
    scroll-padding: 40px;
}
```

## 透视perspective
> 近大远小，
```css
.css{
    perspective: 800px;
}
```

## transform-style
> 将过度呈现为3d效果
```css
.css{
    transform-style: preserver-3d;
}
```

## backface-visibility属性
> 属性定义当元素背面向屏幕时是否可见，如果在旋转元素不希望看到其背面时，该属性很有用。
```css
backface-visibility: visible|hidden;
```

## attr()函数
```html
<div data-attr='attr函数获取此值'></div>
```
```css
.div::after{
    content: attr(data-attr);
}
```

## clamp(min, val , max)
> 接收三个参数，最小值、首选值、最大值。
>
> 使用首选值作比较，首选值小于或大于另外两个值，则使用超过的值
>
> val < min = min
>
> val > max = max

## accent-color
可以更改input控件的颜色

## text-select
文本不能选中