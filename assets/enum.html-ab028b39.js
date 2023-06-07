import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-6a431e2a.js";const t={},c=e(`<h1 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举 enum</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">enum</span> Direction<span class="token punctuation">{</span>
    up <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    left<span class="token punctuation">,</span>
    right
<span class="token punctuation">}</span>
<span class="token keyword">enum</span> FileAccess <span class="token punctuation">{</span>
    <span class="token comment">// constant members</span>
    None<span class="token punctuation">,</span>
    Read    <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Write   <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
    ReadWrite  <span class="token operator">=</span> Read <span class="token operator">|</span> Write<span class="token punctuation">,</span>
    <span class="token comment">// computed member</span>
    <span class="token constant">G</span> <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>FileAccess<span class="token punctuation">.</span>ReadWrite<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output : 6</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外部枚举-declare-enum" tabindex="-1"><a class="header-anchor" href="#外部枚举-declare-enum" aria-hidden="true">#</a> 外部枚举 declare enum</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 外部枚举，用来描述已经存在的枚举类型的形状</span>
declare <span class="token keyword">enum</span> Direction<span class="token punctuation">{</span>
    <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[c];function i(o,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","enum.html.vue"]]);export{d as default};
