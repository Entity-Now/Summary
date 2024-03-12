# 尺寸和位置

当涉及 JavaScript 中的元素尺寸、位置和偏移时，以下是一些常用的 API 和属性：

| 属性/方法            | 描述                                       |
|-----------------------|--------------------------------------------|
| `element.clientWidth` | 元素内容区域的宽度，不包括边框和滚动条。    |
| `element.clientHeight`| 元素内容区域的高度，不包括边框和滚动条。    |
| `element.offsetWidth` | 元素的宽度，包括内边距和边框，不包括滚动条。|
| `element.offsetHeight`| 元素的高度，包括内边距和边框，不包括滚动条。|
| `element.getBoundingClientRect()` | 返回元素的大小、位置等信息。            |
| `window.getComputedStyle(element)` | 返回元素的计算样式，包括所有样式信息。  |
| `element.style.width`  | 获取或设置元素的宽度样式。                |
| `element.style.height` | 获取或设置元素的高度样式。                |
| `element.scrollWidth`  | 元素内容的宽度，包括溢出的部分。        |
| `element.scrollHeight` | 元素内容的高度，包括溢出的部分。        |
| `element.scrollTop`   | 元素垂直滚动条的滚动距离。              |
| `element.scrollLeft`  | 元素水平滚动条的滚动距离。              |
| `window.scrollX`      | 文档在水平方向上的滚动距离。            |
| `window.scrollY`      | 文档在垂直方向上的滚动距离。            |
| `element.offsetTop`   | 元素相对于其最近的已定位父元素的垂直偏移。|
| `element.offsetLeft`  | 元素相对于其最近的已定位父元素的水平偏移。|
| `element.offsetParent`| 返回最近的已定位（positioned）祖先元素。|

这些 API 和属性可用于获取和操作元素的尺寸、位置和偏移。

## getBoundingClientRect()
`getBoundingClientRect` 返回一个包含元素大小、位置等信息的 DOMRect 对象，包括以下属性：

1. `top`: 元素上边距离视口上边的距离。
2. `right`: 元素右边距离视口左边的距离。
3. `bottom`: 元素下边距离视口上边的距离。
4. `left`: 元素左边距离视口左边的距离。
5. `width`: 元素的宽度。
6. `height`: 元素的高度。

这些属性提供了相对于视口的位置和大小信息，可以用于定位元素或执行其他与元素位置相关的计算。

## addEventListener() 的回调函数中的参数`e`

`addEventListener` 的回调函数中的参数 `e` 是一个事件对象，它包含与触发事件相关的信息。在这个对象中，一些常见的属性包括：

1. `e.target`: 触发事件的 DOM 元素。
2. `e.type`: 事件类型，例如 'click' 或 'mousemove'。
3. `e.clientX` 和 `e.clientY`: 鼠标事件中，鼠标指针相对于浏览器窗口的 X 和 Y 坐标。
4. `e.pageX` 和 `e.pageY`: 鼠标事件中，鼠标指针相对于文档页面的 X 和 Y 坐标。
5. `e.keyCode`: 键盘事件中，按下的键的键码。
6. `e.preventDefault()`: 取消事件的默认动作。
7. `e.stopPropagation()`: 阻止事件冒泡。

这只是事件对象可能包含的一些属性，实际上，不同类型的事件对象可能具有不同的属性。你可以根据具体的需求来使用这些属性。