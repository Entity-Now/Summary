import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as e}from"./app-9b4d0341.js";const t={},l=e(`<h1 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式" aria-hidden="true">#</a> lambda 表达式</h1><blockquote><p>python的lambda表达式和c#的有所不同</p></blockquote><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
l = lambda x: x + 1
# lambda 是一个关键词，用于定义lambda，其后空格后的是参数，冒号后的是返回值

print(l(5)) # 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与c-的对比" tabindex="-1"><a class="header-anchor" href="#与c-的对比" aria-hidden="true">#</a> 与c#的对比</h3><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>(x)=&gt; x + 1

lambda x: x + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在函数中使用" tabindex="-1"><a class="header-anchor" href="#在函数中使用" aria-hidden="true">#</a> 在函数中使用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>

l_2 <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># lambda function</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>l_2<span class="token punctuation">)</span> <span class="token comment"># [9, 7, 5, 3, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[l];function c(d,o){return n(),s("div",null,i)}const u=a(t,[["render",c],["__file","lambda.html.vue"]]);export{u as default};
