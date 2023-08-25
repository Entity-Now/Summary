import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-d69bb520.js";const e={},l=t(`<h1 id="重写web滚动条" tabindex="-1"><a class="header-anchor" href="#重写web滚动条" aria-hidden="true">#</a> 重写web滚动条</h1><h2 id="google浏览器" tabindex="-1"><a class="header-anchor" href="#google浏览器" aria-hidden="true">#</a> google浏览器</h2><blockquote><p>webkit</p></blockquote><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>::-webkit-scrollbar</td><td>滚动条整体部分，设置宽度</td></tr><tr><td>::-webkit-scrollbar-button</td><td>滚动条两边的按钮</td></tr><tr><td>::-webkit-scrollbar-track</td><td>外层轨道</td></tr><tr><td>::-webkit-scrollbar-track-piece</td><td>内层滚动槽</td></tr><tr><td>::-webkit-scrollbar-thumb</td><td>边角</td></tr><tr><td>::-webkit-scrollbar-corner</td><td>当同时有垂直滚动条和水平滚动条时交汇的部分。通常是浏览器窗口的右下角。</td></tr><tr><td>::-webkit-resizer</td><td>出现在某些元素底角的可拖动调整大小的滑块</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token comment">/*chrome--------------------------------------------start*/</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* Track */</span>
  <span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* Handle */</span>
  <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>201<span class="token punctuation">,</span> 201<span class="token punctuation">,</span> 202<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* Handle on hover */</span>
  <span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>162<span class="token punctuation">,</span> 162<span class="token punctuation">,</span> 163<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token selector">.el-menu::-webkit-scrollbar,
  .el-table__body-wrapper::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.el-menu:hover::-webkit-scrollbar,
  .el-table__body-wrapper:hover::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*chrome--------------------------------------------end*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ie浏览器" tabindex="-1"><a class="header-anchor" href="#ie浏览器" aria-hidden="true">#</a> ie浏览器</h2><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>scrollbar-arrow-color</td><td>三角箭头的颜色</td></tr><tr><td>scrollbar-face-color</td><td>滚动条滑块按钮的颜色</td></tr><tr><td>scrollbar-highlight-color</td><td>滚动条整体颜色</td></tr><tr><td>scrollbar-shadow-color</td><td>滚动条阴影颜色</td></tr><tr><td>scrollbar-track-color</td><td>滚动条轨道颜色</td></tr><tr><td>scrollbar-3dlight-color</td><td>滚动条3d亮色阴影外边框的外观颜色——左边和上边的阴影色</td></tr><tr><td>scrollbar-darkshadow-color</td><td>滚动条3d暗色阴影的外观颜色--右边和下边的阴影色</td></tr><tr><td>scrollbar-base-color</td><td>滚动条基准的颜色</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>  <span class="token comment">/*IE--------------------------------------------start*/</span>
  <span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token comment">/*三角箭头的颜色*/</span>
    <span class="token property">scrollbar-arrow-color</span><span class="token punctuation">:</span> #c0c4cc<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条滑块按钮的颜色*/</span>
    <span class="token property">scrollbar-face-color</span><span class="token punctuation">:</span> #A2A2A3<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条整体颜色*/</span>
    <span class="token property">scrollbar-highlight-color</span><span class="token punctuation">:</span> #A2A2A3<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条阴影*/</span>
    <span class="token property">scrollbar-shadow-color</span><span class="token punctuation">:</span> #A2A2A3<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条轨道颜色*/</span>
    <span class="token property">scrollbar-track-color</span><span class="token punctuation">:</span> #f4f4f5<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条3d亮色阴影边框的外观颜色——左边和上边的阴影色*/</span>
    <span class="token property">scrollbar-3dlight-color</span><span class="token punctuation">:</span>#A2A2A3<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条3d暗色阴影边框的外观颜色——右边和下边的阴影色*/</span>
    <span class="token property">scrollbar-darkshadow-color</span><span class="token punctuation">:</span> #A2A2A3<span class="token punctuation">;</span>
    <span class="token comment">/*滚动条基准颜色*/</span>
    <span class="token property">scrollbar-base-color</span><span class="token punctuation">:</span> #f4f4f5<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
  <span class="token selector">.el-table__body-wrapper,.el-menu</span><span class="token punctuation">{</span>
    <span class="token comment">/*IE下隐藏*/</span>
    <span class="token property">-ms-overflow-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
  
  <span class="token selector">.el-table__body-wrapper:hover,.el-menu:hover</span><span class="token punctuation">{</span> 
    <span class="token comment">/*IE下显示*/</span>
    <span class="token property">-ms-overflow-style</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
  <span class="token comment">/*IE--------------------------------------------end*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[l];function o(p,i){return s(),a("div",null,c)}const u=n(e,[["render",o],["__file","scroll.html.vue"]]);export{u as default};
