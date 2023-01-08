import{_ as n,o as s,c as a,f as e,e as i}from"./app.a158ac49.js";const t={},l=i(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>// 变量声明
$<span class="token property">border-color</span><span class="token punctuation">:</span>#aaa<span class="token punctuation">;</span>
<span class="token selector">// $border-color === $border_color 

// 嵌套选择器
.container ul</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #aaa<span class="token punctuation">;</span>
    
    <span class="token selector">li</span><span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">li&gt;a</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">// li&gt;a 可以这样写
    &gt;a</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">// 嵌套中的父级选择器
    &amp;:after</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">// 不使用嵌套的父级选择器
.container ul:after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">// 子代选择器
li &gt;</span> <span class="token punctuation">{</span>
    <span class="token selector">a</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">// 嵌套属性
li</span><span class="token punctuation">{</span>
    <span class="token selector">border: 1px solid #aaa</span> <span class="token punctuation">{</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(p,o){return s(),a("div",null,[e(`
 * @作者: 14770137
 * @Date: 2022-10-22 04:38:16
`),l])}const d=n(t,[["render",c],["__file","scss.html.vue"]]);export{d as default};
