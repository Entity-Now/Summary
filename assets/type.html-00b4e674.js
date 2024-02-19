import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e,a as t}from"./app-aa087bdf.js";const p={},o=t(`<h1 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>type Name <span class="token operator">=</span> string<span class="token punctuation">;</span>
type <span class="token function-variable function">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>string<span class="token punctuation">;</span>
type NameOrResolver <span class="token operator">=</span> NameResolver <span class="token operator">|</span> Name<span class="token punctuation">;</span>
<span class="token comment">// 类型别名</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span> <span class="token operator">:</span> NameOrResolver</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(l,i){return s(),a("div",null,[e(`
 * @作者: 14770137
 * @Date: 2022-10-13 14:24:46
`),o])}const d=n(p,[["render",c],["__file","type.html.vue"]]);export{d as default};
