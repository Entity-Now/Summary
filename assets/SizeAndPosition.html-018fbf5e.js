import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as d,a as o}from"./app-d39e34ec.js";const c={},i=o('<h1 id="尺寸和位置" tabindex="-1"><a class="header-anchor" href="#尺寸和位置" aria-hidden="true">#</a> 尺寸和位置</h1><p>当涉及 JavaScript 中的元素尺寸、位置和偏移时，以下是一些常用的 API 和属性：</p><table><thead><tr><th>属性/方法</th><th>描述</th></tr></thead><tbody><tr><td><code>element.clientWidth</code></td><td>元素内容区域的宽度，不包括边框和滚动条。</td></tr><tr><td><code>element.clientHeight</code></td><td>元素内容区域的高度，不包括边框和滚动条。</td></tr><tr><td><code>element.offsetWidth</code></td><td>元素的宽度，包括内边距和边框，不包括滚动条。</td></tr><tr><td><code>element.offsetHeight</code></td><td>元素的高度，包括内边距和边框，不包括滚动条。</td></tr><tr><td><code>element.getBoundingClientRect()</code></td><td>返回元素的大小、位置等信息。</td></tr><tr><td><code>window.getComputedStyle(element)</code></td><td>返回元素的计算样式，包括所有样式信息。</td></tr><tr><td><code>element.style.width</code></td><td>获取或设置元素的宽度样式。</td></tr><tr><td><code>element.style.height</code></td><td>获取或设置元素的高度样式。</td></tr><tr><td><code>element.scrollWidth</code></td><td>元素内容的宽度，包括溢出的部分。</td></tr><tr><td><code>element.scrollHeight</code></td><td>元素内容的高度，包括溢出的部分。</td></tr><tr><td><code>element.scrollTop</code></td><td>元素垂直滚动条的滚动距离。</td></tr><tr><td><code>element.scrollLeft</code></td><td>元素水平滚动条的滚动距离。</td></tr><tr><td><code>window.scrollX</code></td><td>文档在水平方向上的滚动距离。</td></tr><tr><td><code>window.scrollY</code></td><td>文档在垂直方向上的滚动距离。</td></tr><tr><td><code>element.offsetTop</code></td><td>元素相对于其最近的已定位父元素的垂直偏移。</td></tr><tr><td><code>element.offsetLeft</code></td><td>元素相对于其最近的已定位父元素的水平偏移。</td></tr><tr><td><code>element.offsetParent</code></td><td>返回最近的已定位（positioned）祖先元素。</td></tr></tbody></table><p>这些 API 和属性可用于获取和操作元素的尺寸、位置和偏移。</p><h2 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect" aria-hidden="true">#</a> getBoundingClientRect()</h2><p><code>getBoundingClientRect</code> 返回一个包含元素大小、位置等信息的 DOMRect 对象，包括以下属性：</p><ol><li><code>top</code>: 元素上边距离视口上边的距离。</li><li><code>right</code>: 元素右边距离视口左边的距离。</li><li><code>bottom</code>: 元素下边距离视口上边的距离。</li><li><code>left</code>: 元素左边距离视口左边的距离。</li><li><code>width</code>: 元素的宽度。</li><li><code>height</code>: 元素的高度。</li></ol><p>这些属性提供了相对于视口的位置和大小信息，可以用于定位元素或执行其他与元素位置相关的计算。</p><h2 id="addeventlistener-的回调函数中的参数e" tabindex="-1"><a class="header-anchor" href="#addeventlistener-的回调函数中的参数e" aria-hidden="true">#</a> addEventListener() 的回调函数中的参数<code>e</code></h2><p><code>addEventListener</code> 的回调函数中的参数 <code>e</code> 是一个事件对象，它包含与触发事件相关的信息。在这个对象中，一些常见的属性包括：</p><ol><li><code>e.target</code>: 触发事件的 DOM 元素。</li><li><code>e.type</code>: 事件类型，例如 &#39;click&#39; 或 &#39;mousemove&#39;。</li><li><code>e.clientX</code> 和 <code>e.clientY</code>: 鼠标事件中，鼠标指针相对于浏览器窗口的 X 和 Y 坐标。</li><li><code>e.pageX</code> 和 <code>e.pageY</code>: 鼠标事件中，鼠标指针相对于文档页面的 X 和 Y 坐标。</li><li><code>e.keyCode</code>: 键盘事件中，按下的键的键码。</li><li><code>e.preventDefault()</code>: 取消事件的默认动作。</li><li><code>e.stopPropagation()</code>: 阻止事件冒泡。</li></ol><p>这只是事件对象可能包含的一些属性，实际上，不同类型的事件对象可能具有不同的属性。你可以根据具体的需求来使用这些属性。</p>',12),l=[i];function r(n,a){return t(),d("div",null,l)}const p=e(c,[["render",r],["__file","SizeAndPosition.html.vue"]]);export{p as default};