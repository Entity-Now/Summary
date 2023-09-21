import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-c4947a11.js";const c={},t=e(`<h1 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> node-sass

<span class="token function">npm</span> <span class="token function">install</span> sass --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><p>在SCSS（可层叠样式表）中，你可以使用各种选择器来选择HTML文档中的元素。下面是一些常见的SCSS选择器：</p><ol><li>元素选择器：使用HTML元素名称来选择元素。例如，<code>div</code>选择器将选择所有<code>&lt;div&gt;</code>元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>类选择器：使用类名选择元素。类名以<code>.</code>开头。例如，<code>.container</code>选择器将选择具有<code>class=&quot;container&quot;</code>属性的元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>ID选择器：使用ID选择元素。ID以<code>#</code>开头。例如，<code>#header</code>选择器将选择具有<code>id=&quot;header&quot;</code>属性的元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#header </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>后代选择器：选择元素的后代元素。使用空格来表示嵌套关系。例如，<code>ul li</code>选择器将选择所有<code>&lt;ul&gt;</code>元素内的<code>&lt;li&gt;</code>元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul li </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>子元素选择器：选择元素的直接子元素。使用<code>&gt;</code>来表示直接子元素关系。例如，<code>.container &gt; p</code>选择器将选择<code>.container</code>元素下的直接子级<code>&lt;p&gt;</code>元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container &gt; p </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>属性选择器：选择具有特定属性的元素。例如，<code>[type=&quot;text&quot;]</code>选择器将选择所有<code>type</code>属性值为<code>&quot;text&quot;</code>的元素。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">[type=&quot;text&quot;] </span><span class="token punctuation">{</span>
  <span class="token comment">/* 样式规则 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这只是一些SCSS选择器的示例，你还可以使用组合选择器、伪类选择器等更多选择器来满足你的需求。选择器在SCSS中用于选择并应用样式规则到指定的HTML元素。</p><h2 id="嵌套规则" tabindex="-1"><a class="header-anchor" href="#嵌套规则" aria-hidden="true">#</a> 嵌套规则</h2><ol><li>嵌套规则：可以嵌套选择器，使代码更具可读性和结构化。嵌套规则允许你将选择器和相关的样式规则放在同一个块中。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token comment">/* h1元素的样式规则 */</span>
  <span class="token punctuation">}</span>

  <span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token comment">/* p元素的样式规则 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>父选择器引用：使用<code>&amp;</code>符号来引用父选择器。这在为选择器添加修饰符或伪类时非常有用。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token comment">/* 鼠标悬停时按钮的样式规则 */</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>.disabled </span><span class="token punctuation">{</span>
    <span class="token comment">/* 禁用状态下按钮的样式规则 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>变量：使用<code>$</code>符号定义和使用变量。变量可以存储颜色、长度、字体等值，并在样式规则中重复使用。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #42A5F5<span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>混合器（Mixins）：混合器类似于函数，它们允许你将一组样式规则重用到多个选择器中。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">,</span> <span class="token variable">$blur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$x</span> <span class="token variable">$y</span> <span class="token variable">$blur</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.card </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>2px<span class="token punctuation">,</span> 2px<span class="token punctuation">,</span> 4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>继承：使用<code>@extend</code>关键字可以从一个选择器继承样式规则，以减少代码重复和维护。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #42A5F5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.submit-button </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .button<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些是一些SCSS中更高级和常用的语法和特性。SCSS提供了更多功能，如条件语句、循环、操作符等，使样式表更具灵活性和可扩展性。</p><h2 id="骚操作" tabindex="-1"><a class="header-anchor" href="#骚操作" aria-hidden="true">#</a> 骚操作</h2><p>当然！SCSS提供了许多强大的功能，以下是一些更骚操作的示例：</p><ol><li>循环：使用<code>@for</code>、<code>@each</code>或<code>@while</code>循环语句来生成重复的样式规则或处理列表数据。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token comment">/* 样式规则 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in red, green, blue </span><span class="token punctuation">{</span>
  <span class="token selector">.bg-<span class="token variable">#{$color}</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$breakpoints</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">small</span><span class="token punctuation">:</span> 480px<span class="token punctuation">,</span> <span class="token property">medium</span><span class="token punctuation">:</span> 768px<span class="token punctuation">,</span> <span class="token property">large</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span>, <span class="token variable">$size</span> in <span class="token variable">$breakpoints</span> </span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.container-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
      <span class="token comment">/* 响应式样式规则 */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>条件语句：使用<code>@if</code>、<code>@else if</code>和<code>@else</code>语句来根据条件执行不同的样式规则。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">text-styles</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$size</span> == small </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$size</span> == medium </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$size</span> == large </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运算符：使用算术运算符（<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>）和逻辑运算符（<code>and</code>、<code>or</code>、<code>not</code>）来操作值。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100% <span class="token operator">/</span> 3<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>插值：使用<code>#{$variable}</code>语法在字符串中插入变量的值。</li></ol><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$property</span></span><span class="token punctuation">:</span> margin<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$direction</span></span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>

<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$property}</span>-<span class="token variable">#{$direction}</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些示例只是展示了SCSS提供的一小部分强大功能。SCSS的灵活性使其成为编写可维护、可扩展和高效的样式表的理想选择。你可以根据自己的需求和创意进行更多创造性的操作和组合。</p><h2 id="字符串连接" tabindex="-1"><a class="header-anchor" href="#字符串连接" aria-hidden="true">#</a> 字符串连接</h2><p>当使用<code>&amp;</code>与字符串连接时，可以生成选择器的变体。下面是一个完整的例子，演示了如何使用<code>&amp;</code>与字符串连接生成选择器的不同变体：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.tab </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-header </span><span class="token punctuation">{</span>
    <span class="token comment">/* .tab-header的样式规则 */</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>-content </span><span class="token punctuation">{</span>
    <span class="token comment">/* .tab-content的样式规则 */</span>

    <span class="token selector"><span class="token parent important">&amp;</span>-title </span><span class="token punctuation">{</span>
      <span class="token comment">/* .tab-content-title的样式规则 */</span>
    <span class="token punctuation">}</span>

    <span class="token selector"><span class="token parent important">&amp;</span>-body </span><span class="token punctuation">{</span>
      <span class="token comment">/* .tab-content-body的样式规则 */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>.active </span><span class="token punctuation">{</span>
    <span class="token comment">/* 具有.active类的.tab元素的样式规则 */</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token comment">/* 鼠标悬停在.tab元素上的样式规则 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，使用<code>&amp;</code>与字符串连接生成了不同的选择器变体：</p><ul><li><code>.tab-header</code>：<code>.tab</code>选择器与字符串<code>&quot;-header&quot;</code>连接生成的选择器。</li><li><code>.tab-content</code>：<code>.tab</code>选择器与字符串<code>&quot;-content&quot;</code>连接生成的选择器。</li><li><code>.tab-content-title</code>：<code>.tab-content</code>选择器与字符串<code>&quot;-title&quot;</code>连接生成的选择器。</li><li><code>.tab-content-body</code>：<code>.tab-content</code>选择器与字符串<code>&quot;-body&quot;</code>连接生成的选择器。</li><li><code>.active</code>：具有<code>.active</code>类的<code>.tab</code>元素的选择器。</li><li><code>:hover</code>：鼠标悬停在<code>.tab</code>元素上的选择器。</li></ul><p>这个例子展示了如何使用<code>&amp;</code>与字符串连接在SCSS中生成不同的选择器变体，以便更灵活地应用样式规则。</p>`,47),p=[t];function i(l,o){return s(),a("div",null,p)}const r=n(c,[["render",i],["__file","scss.html.vue"]]);export{r as default};
