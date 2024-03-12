# IntersectionObserver
> 被配置为监听一段给定比例的可见区域。一旦IntersectionObserver被创建，则无法更改其配置，所以一个给定的观察对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。


## callback
> callback是添加监听后，当监听目标发生滚动变化时触发的回调函数。接收一个entries，即intersectionObserverEntry的实例。描述了目标元素与root的交叉状态

| 属性 | 说明| 
| ---- | --- |
| boundingClientRect | 返回包含目标元素的边界信息 |
| intersectionRatio | 返回目标元素出现在可视区的比例 |
| isIntersecting | 返回一个布尔值，下列两种操作均会触发callback：1.如果目标元素出现在root可视区，返回true。2.如果从root可视区消失，返回false |
| rootBounds | 用来描述交叉区域观察者（intersection observer）中的根 |
| target | 目标元素：与根出现相交区域改变的元素 |
| time | 返回一个记录从IntersectionObserver的时间原点到交叉被触发的时间的时间戳 |

## options
> options 是一个对象，用来配置参数，也可以不填

| 属性 | 说明 |
| ---- | ---- |
| root | 如果未传入值或值为null，则默认使用顶级文档的视窗|
| rootMargin | |
| threshold | 一个包含阈值的列表，按升序排序，列表中的每个阈值都是监听对象的交叉区域的比率。当监听对象的任何阈值被超过时，都会触发callback。默认为0 |

## 方法

| 方法 | 说明 |
| --- | --- |
| observe（） | 开始监听一个目标元素 |
| unobserve() | 停止监听特定目标元素 | 
| takeRecords() | 返回所有观察目标的IntersectionObserverEntry对象数组 | 
| disconnect() | 使IntersectionObserver对象停止全部监听工作 | 