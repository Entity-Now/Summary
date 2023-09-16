import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e,a as t}from"./app-4bfb80fa.js";const p={},o=t(`<h1 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 交叉类型</span>

<span class="token keyword">interface</span> <span class="token class-name">bird</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fly</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">fish</span><span class="token punctuation">{</span>
    <span class="token literal-property property">swim</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 交叉类型，</span>
type cross <span class="token operator">=</span> bird <span class="token operator">&amp;</span> fish<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span>cross <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fly</span><span class="token operator">:</span><span class="token string">&quot;bird fly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">swim</span><span class="token operator">:</span><span class="token string">&quot;fish swim&quot;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(i,l){return n(),a("div",null,[e(`
 * @作者: 14770137
 * @Date: 2022-10-13 14:34:23
`),o])}const d=s(p,[["render",c],["__file","crossType.html.vue"]]);export{d as default};
