import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-01dc2ab1.js";const p={},t=e(`<h1 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构" aria-hidden="true">#</a> 分支结构</h1><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 1. 简单的 if 语句</span>
x <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x is positive&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 2. if-else 语句</span>
y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3</span>
<span class="token keyword">if</span> y <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;y is non-negative&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;y is negative&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 3. if-elif-else 语句</span>
z <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> z <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;z is positive&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> z <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;z is zero&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;z is negative&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 4. 带布尔表达式的 if 语句</span>
a <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token keyword">and</span> b <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;a is less than b and b is positive&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 5. 嵌套的 if 语句</span>
score <span class="token operator">=</span> <span class="token number">85</span>
<span class="token keyword">if</span> score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Grade A&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Grade B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Fail&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-的另一种用法" tabindex="-1"><a class="header-anchor" href="#if-的另一种用法" aria-hidden="true">#</a> if 的另一种用法</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num1 <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
num2 <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>num1 <span class="token keyword">if</span> num1 <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token keyword">else</span> num2<span class="token punctuation">)</span> <span class="token comment"># 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-嵌套使用" tabindex="-1"><a class="header-anchor" href="#if-嵌套使用" aria-hidden="true">#</a> if 嵌套使用</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 示例：根据条件给变量赋值</span>
x <span class="token operator">=</span> <span class="token number">10</span>
y <span class="token operator">=</span> <span class="token number">20</span>
z <span class="token operator">=</span> <span class="token number">30</span>

<span class="token comment"># 使用条件表达式来给变量赋值</span>
result <span class="token operator">=</span> x <span class="token keyword">if</span> x <span class="token operator">&gt;</span> y <span class="token keyword">and</span> x <span class="token operator">&gt;</span> z <span class="token keyword">else</span> <span class="token punctuation">(</span>y <span class="token keyword">if</span> y <span class="token operator">&gt;</span> z <span class="token keyword">else</span> z<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出 30</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function i(l,c){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","branch.html.vue"]]);export{d as default};
