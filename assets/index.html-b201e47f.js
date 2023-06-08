import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-5a2bcf01.js";const t={},e=p(`<h1 id="c-基础教程" tabindex="-1"><a class="header-anchor" href="#c-基础教程" aria-hidden="true">#</a> c++基础教程</h1><h1 id="c-基础" tabindex="-1"><a class="header-anchor" href="#c-基础" aria-hidden="true">#</a> c++基础</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token class-name">namespase</span> A<span class="token punctuation">;</span>   <span class="token comment">//名称空间</span>
<span class="token preprocessor property">#include &lt;iostream&gt; </span><span class="token comment">//#include引用包含的意思 ， iostream标准库，输入输出的意思</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="八进制and十六进制" tabindex="-1"><a class="header-anchor" href="#八进制and十六进制" aria-hidden="true">#</a> 八进制and十六进制</h1><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code> <span class="token number">0</span>开头 <span class="token number">0</span><span class="token operator">-</span><span class="token number">8</span>是八进制
 ox开头 表示十六进制
 <span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>表示十进制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#<span class="token directive keyword">define</span> 常量名 内容;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>输出使用cout 输入使用cin

cout <span class="token operator">&lt;&lt;</span><span class="token string">&quot;Hello Word!&quot;</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">char</span></span> a<span class="token punctuation">;</span>  <span class="token comment">//变量</span>

cin <span class="token operator">&gt;&gt;</span>a<span class="token punctuation">;</span>  <span class="token comment">//接受输入</span>

<span class="token function">printf</span><span class="token punctuation">(</span>控制格式<span class="token punctuation">,</span>数值列表<span class="token punctuation">)</span><span class="token punctuation">;</span> 输出
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;123 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;你是不是猪！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出字符串</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span><span class="token number">1.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出小数点</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出整数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="格式字符" tabindex="-1"><a class="header-anchor" href="#格式字符" aria-hidden="true">#</a> 格式字符</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token operator">%</span>d      以十进制形式输出带符号整数
<span class="token operator">%</span>o      以八进制形式输出无符号整数
<span class="token operator">%</span>x      以十六进制形式输出无符号整数
<span class="token operator">%</span>u      以十进制输出无符号整数
<span class="token operator">%</span>c      输出单个字符
<span class="token operator">%</span>s      输出字符串
<span class="token operator">%</span>f      以小数形式输出单精度，双精度实数
<span class="token operator">%</span>e      以指数形式输出单精度，双精度实数
<span class="token operator">%</span>g      以<span class="token operator">%</span>f<span class="token operator">%</span>e中较短的输出宽度输出单精度。双精度实数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="流操作的控制具体函数" tabindex="-1"><a class="header-anchor" href="#流操作的控制具体函数" aria-hidden="true">#</a> 流操作的控制具体函数</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#include&lt;iomanip&gt; </span><span class="token comment">//引入类库</span>





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token operator">^</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>   <span class="token comment">//等于4</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token operator">~</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>  <span class="token comment">//等于-124</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">14</span><span class="token operator">|</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//等于14</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">14</span><span class="token operator">&amp;</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">//等于12</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="判断字符占用几个字节" tabindex="-1"><a class="header-anchor" href="#判断字符占用几个字节" aria-hidden="true">#</a> 判断字符占用几个字节</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token function">Sizeof</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；

    <span class="token class-name"><span class="token keyword">char</span></span> a <span class="token operator">=</span> <span class="token char">&#39;和&#39;</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">a</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token string">&quot;和&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="重命名数据类型" tabindex="-1"><a class="header-anchor" href="#重命名数据类型" aria-hidden="true">#</a> 重命名数据类型</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>typedef <span class="token class-name"><span class="token keyword">int</span></span> T<span class="token punctuation">;</span>
现在 <span class="token keyword">int</span> 可以用T来表示

<span class="token class-name">T</span> A <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="科学计数法" tabindex="-1"><a class="header-anchor" href="#科学计数法" aria-hidden="true">#</a> 科学计数法</h1><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>flot a <span class="token operator">=</span> <span class="token number">1.2345e2</span><span class="token punctuation">;</span>   <span class="token comment">//  = 123.45;</span>
flot a <span class="token operator">=</span> <span class="token number">1.2345e-2</span><span class="token punctuation">;</span>   <span class="token comment">//  = 00.12345;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="entern变量-允许其他文件调用" tabindex="-1"><a class="header-anchor" href="#entern变量-允许其他文件调用" aria-hidden="true">#</a> entern变量,允许其他文件调用</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">extern</span> <span class="token keyword">int</span> a <span class="token punctuation">;</span> <span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="字符串复制" tabindex="-1"><a class="header-anchor" href="#字符串复制" aria-hidden="true">#</a> 字符串复制</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">strcpy</span><span class="token punctuation">(</span><span class="token string">&quot;被复制变量&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;复制字符串&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> A <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>     <span class="token comment">//普通变量</span>
<span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">;</span>        <span class="token comment">//声明指针变量</span>

a <span class="token operator">=</span> <span class="token operator">&amp;</span>A<span class="token punctuation">;</span>         <span class="token comment">//赋值指针使用&amp;符号</span>
a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//强行转换赋值</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;输出指针地址&quot;</span>       <span class="token operator">&lt;&lt;</span>  a  <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;输出指针里面的内容&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>a <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>  <span class="token comment">//改变指针里面的值</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;指针数组---------------------------------------------------------------&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>P <span class="token operator">=</span> a<span class="token punctuation">;</span>             <span class="token comment">//数组不需要加&amp;符号</span>
<span class="token comment">//第一种方式</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> <span class="token operator">*</span>p<span class="token operator">++</span><span class="token punctuation">,</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>P <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//第二中方式</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p<span class="token operator">++</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;二维数组----------------------------------------------------------------------------------&quot;</span> <span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 二维数组</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token keyword">void</span> <span class="token function">P5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10.11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span> p <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//sizeof(a) = 48 除 sizeof(int) = 4</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;address: &quot;</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;  is  &quot;</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p<span class="token operator">++</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 指针字符串-连接字符串</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token keyword">void</span> <span class="token function">P6</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token operator">*</span> p1 <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token operator">*</span> p2 <span class="token operator">=</span> b<span class="token punctuation">;</span>
    <span class="token function">gets_s</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">gets_s</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>p1 <span class="token operator">!=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        p1<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">*</span>p2 <span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">*</span>p1<span class="token operator">++</span> <span class="token operator">=</span> <span class="token operator">*</span>p2<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">//最简单的方式</span>
      <span class="token comment">/*  *p1 = *p2;
        p1++;
        p2++;*/</span>
    <span class="token punctuation">}</span>
    <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>
    <span class="token function">puts</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">P7</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello word！&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token operator">*</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;指针访问，指针输出&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>p <span class="token operator">=</span> a<span class="token punctuation">;</span><span class="token operator">*</span>p<span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>p<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;数组访问，数组输出&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span><span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span><span class="token string">&quot;数组访问，指针输出&quot;</span><span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token operator">*</span><span class="token punctuation">(</span>a<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;指针和下标访问，指针表示&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>p<span class="token operator">=</span>a<span class="token punctuation">;</span><span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;指针和下标访问，下标表示&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>p<span class="token operator">=</span>a<span class="token punctuation">;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针数组" tabindex="-1"><a class="header-anchor" href="#指针数组" aria-hidden="true">#</a> 指针数组</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">array1</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">array2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//一维指针数组使用</span>
    <span class="token comment">//char* a[5] = { (char*)&quot;a&quot;,(char *)&quot;b&quot; ,(char*)&quot;c&quot;,(char*)&quot;d&quot;};</span>
    <span class="token comment">//int n = 4;</span>
    <span class="token comment">//array1(a, n);</span>

    <span class="token comment">//二维数组使用</span>
    <span class="token function">array2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 一维指针数组</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;a&quot;&gt;指针数组&lt;/param&gt;</span>
<span class="token comment">/// &lt;param name=&quot;b&quot;&gt;计数变量&lt;/param&gt;</span>
<span class="token keyword">void</span> <span class="token function">array1</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>p <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> p <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 二维数组</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token keyword">void</span> <span class="token function">array2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>e<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>f<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>c<span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>e<span class="token punctuation">;</span>
    p<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>f<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token operator">*</span><span class="token operator">*</span> q <span class="token operator">=</span> p<span class="token punctuation">;</span>        <span class="token comment">//申明而二维数组</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>q<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inline内联函数" tabindex="-1"><a class="header-anchor" href="#inline内联函数" aria-hidden="true">#</a> inline内联函数</h2><blockquote><p>函数调用是有时间和空间开销的。程序在执行一个函数之前需要做一些准备工作，要将实参、局部变量、返回地址以及若干寄存器都压入栈中，然后才能执行函数体中的代码；函数体中的代码执行完毕后还要清理现场，将之前压入栈中的数据都出栈，才能接着执行函数调用位置以后的代码。</p></blockquote><blockquote><p>为了消除函数调用的时空开销，C++ 提供一种提高效率的方法，即在编译时将函数调用处用函数体替换，类似于C语言中的宏展开。这种在函数调用处直接嵌入函数体的函数称为内联函数（Inline Function），又称内嵌函数或者内置函数。</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token comment">//声明内联函数</span>
<span class="token keyword">void</span> <span class="token function">swap1</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//也可以添加inline，但编译器会忽略</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> m<span class="token punctuation">,</span> n<span class="token punctuation">;</span>
    cin<span class="token operator">&gt;&gt;</span>m<span class="token operator">&gt;&gt;</span>n<span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>m<span class="token operator">&lt;&lt;</span><span class="token string">&quot;, &quot;</span><span class="token operator">&lt;&lt;</span>n<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token function">swap1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>m<span class="token operator">&lt;&lt;</span><span class="token string">&quot;, &quot;</span><span class="token operator">&lt;&lt;</span>n<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//定义内联函数</span>
<span class="token keyword">inline</span> <span class="token keyword">void</span> <span class="token function">swap1</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    temp <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用内联函数的缺点也是非常明显的，编译后的程序会存在多份相同的函数拷贝，如果被声明为内联函数的函数体非常大，那么编译后的程序体积也将会变得很大，所以再次强调，一般只将那些短小的、频繁调用的函数声明为内联函数。</p></blockquote><h2 id="指针和函数" tabindex="-1"><a class="header-anchor" href="#指针和函数" aria-hidden="true">#</a> 指针和函数</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">str</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> input<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfun<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//申明指针函数</span>
    pfun <span class="token operator">=</span> call<span class="token punctuation">;</span>            <span class="token comment">//给指针函数赋值</span>
    input <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfun<span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//运用指针函数</span>
    cout <span class="token operator">&lt;&lt;</span> input <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 函数指针</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;name&quot;&gt;user&lt;/param&gt;</span>
<span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">str</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span><span class="token operator">*</span> str1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token string">&quot;尊敬的会员：&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token operator">*</span> str2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token string">&quot;,欢迎登录;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token operator">*</span> newstr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//malloc申请空间</span>
    <span class="token keyword">char</span><span class="token operator">*</span> r <span class="token operator">=</span> newstr<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>str1<span class="token punctuation">)</span>
        <span class="token operator">*</span>r<span class="token operator">++</span> <span class="token operator">=</span> <span class="token operator">*</span>str1<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>name<span class="token punctuation">)</span>
        <span class="token operator">*</span>r<span class="token operator">++</span> <span class="token operator">=</span> <span class="token operator">*</span>name<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">*</span>str2<span class="token punctuation">)</span>
        <span class="token operator">*</span>r<span class="token operator">++</span> <span class="token operator">=</span> <span class="token operator">*</span>str2<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>r<span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newstr<span class="token punctuation">;</span>

    <span class="token comment">//使用方式</span>
    <span class="token comment">//char name[100] = { &#39;\\0&#39; };</span>

    <span class="token comment">//gets_s(name);</span>
    <span class="token comment">//char* s = str(name);</span>
    <span class="token comment">//cout &lt;&lt; s &lt;&lt; endl;</span>
    <span class="token comment">//free(s);  //释放malloc申请的空间</span>
    <span class="token comment">//s = 0;        //赋值为空</span>
<span class="token punctuation">}</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 指针函数</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;a&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;param name=&quot;b&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
<span class="token keyword">int</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用-符号" tabindex="-1"><a class="header-anchor" href="#引用-符号" aria-hidden="true">#</a> 引用 (&amp;符号)</h2><ul><li>什么是引用，引用能干什么 <ul><li>一个变量引用另一个变量，其地址是一样的（所以在c#里面才会有深克隆和浅克隆对象）</li><li>假设有变量A和变量&amp;B，将A的地址引用给B，当我们更改B的值A的值也会更改。因为他们公用一个地址。</li><li>注意，引用在定义时需要添加&amp;，在使用时不能添加&amp;，使用时添加&amp;表示取地址</li></ul></li><li>一个函数的参数使用引用跟不用引用的区别是什么 <ul><li>如果不用引用，形参是一个新的地址。当我们在函数内部改变参数的值，函数外部的值并不会跟随改变。但是，如果我们使用引用，则可以在函数内部修改其变量的值。</li></ul></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">yy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">ys</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">&amp;</span> <span class="token function">fh</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> J<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fh</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        

    cout <span class="token operator">&lt;&lt;</span> J <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">fh</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>       <span class="token comment">//引用函数可以赋值：fh(4,5) =  100;</span>
    cout <span class="token operator">&lt;&lt;</span> J <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// &amp;引用变量</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token keyword">void</span> <span class="token function">yy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">&amp;</span> Aa <span class="token operator">=</span> a<span class="token punctuation">;</span>           <span class="token comment">//引用变量a</span>
    cout <span class="token operator">&lt;&lt;</span> Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>                 <span class="token comment">//a改变Aa也跟着改变</span>
    cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    Aa <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>                <span class="token comment">//Aa改变a也跟着改变</span>
    cout <span class="token operator">&lt;&lt;</span> Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 更换外部变量内容</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;a&quot;&gt;a= 5 &lt;/param&gt;</span>
<span class="token comment">/// &lt;param name=&quot;b&quot;&gt;b= 6 &lt;/param&gt;</span>
<span class="token keyword">void</span> <span class="token function">ys</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">//使用方法</span>
    <span class="token comment">//int a = 5;</span>
    <span class="token comment">//int b = 6;</span>
    <span class="token comment">//cout &lt;&lt; &quot;更换前a=  &quot; &lt;&lt; a &lt;&lt; &quot;  更换前b=  &quot; &lt;&lt; b &lt;&lt; endl;</span>
    <span class="token comment">//ys(a, b);</span>
    <span class="token comment">//cout &lt;&lt; &quot;更换后a=  &quot; &lt;&lt; a &lt;&lt; &quot;  更换后b=  &quot; &lt;&lt; b &lt;&lt; endl;</span>
    <span class="token keyword">int</span> tmp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">/// &lt;summary&gt;</span>
<span class="token comment">/// 函数返回值是引用类型，提前声明全局变量</span>
<span class="token comment">/// &lt;/summary&gt;</span>
<span class="token comment">/// &lt;param name=&quot;a&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;param name=&quot;b&quot;&gt;&lt;/param&gt;</span>
<span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
<span class="token keyword">int</span> <span class="token operator">&amp;</span> <span class="token function">fh</span><span class="token punctuation">(</span> <span class="token keyword">int</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> J <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="结构体-struct" tabindex="-1"><a class="header-anchor" href="#结构体-struct" aria-hidden="true">#</a> 结构体 （struct）</h1><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">struct_a</span>  <span class="token comment">//结构体 struct</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> Aa<span class="token punctuation">;</span>
    <span class="token keyword">int</span> Ab<span class="token punctuation">;</span>
    <span class="token keyword">int</span> Ac<span class="token punctuation">;</span>
<span class="token punctuation">}</span>A<span class="token punctuation">,</span><span class="token operator">*</span>B<span class="token punctuation">;</span> <span class="token comment">//可以在后面直接添加变量（可以添加多个）</span>

<span class="token keyword">struct</span> <span class="token class-name">struct_b</span>        <span class="token comment">//结构体嵌套</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    struct_a c<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;结构体-----------------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>Aa <span class="token operator">=</span> <span class="token number">43</span><span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>Ab <span class="token operator">=</span> <span class="token number">63</span><span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>Ac <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> A<span class="token punctuation">.</span>Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> A<span class="token punctuation">.</span>Ab <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> A<span class="token punctuation">.</span>Ac <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;指针结构体---------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    B <span class="token operator">=</span> <span class="token operator">&amp;</span>A<span class="token punctuation">;</span>                 <span class="token comment">//数组结构体：使用-&gt;访问</span>
    cout <span class="token operator">&lt;&lt;</span> B<span class="token operator">-&gt;</span>Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> B<span class="token operator">-&gt;</span>Ab <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> B<span class="token operator">-&gt;</span>Ac <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token operator">*</span>B<span class="token punctuation">)</span><span class="token punctuation">.</span>Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>    <span class="token comment">//还可以这样</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;结构体嵌套-----------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    struct_b Sb <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//使用方括号初始化</span>
    cout <span class="token operator">&lt;&lt;</span> Sb<span class="token punctuation">.</span>a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> Sb<span class="token punctuation">.</span>b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>Sb<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span>Aa <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>      <span class="token comment">//使用括号</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>Sb<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span>Ab <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>Sb<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span>Ac <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> Sb<span class="token punctuation">.</span>c<span class="token punctuation">.</span>Ac <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>        <span class="token comment">//不要括号也可以</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;结构体大小-----------------------&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Sb<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>



<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体和函数" tabindex="-1"><a class="header-anchor" href="#结构体和函数" aria-hidden="true">#</a> 结构体和函数</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">struct</span> <span class="token class-name">Show</span>         <span class="token comment">//声明结构体</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span></span> age<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> weight<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span> S<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message2</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span> <span class="token operator">*</span> S<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message3</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span> <span class="token operator">&amp;</span> S<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//使用结构体函数</span>
    <span class="token class-name">Show</span> S <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token number">170</span><span class="token punctuation">,</span><span class="token number">110</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">Message</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//使用结构体指针</span>
    <span class="token class-name">Show</span> S2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token number">170</span><span class="token punctuation">,</span><span class="token number">110</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">Message2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>S2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//使用引用,</span>
    <span class="token class-name">Show</span> S4 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token number">170</span><span class="token punctuation">,</span><span class="token number">110</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">Message3</span><span class="token punctuation">(</span>S4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;测试引用在外部是否被改变&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S4<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S4<span class="token punctuation">.</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S4<span class="token punctuation">.</span>weight <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span> S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;函数结构体----------变量&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>weight <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message2</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span> <span class="token operator">*</span> S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;函数结构体----------指针&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token operator">-&gt;</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token operator">-&gt;</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token operator">-&gt;</span>weight <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Message3</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">Show</span><span class="token operator">&amp;</span> S<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;函数结构体----------引用&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>weight <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    S <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体和数组" tabindex="-1"><a class="header-anchor" href="#结构体和数组" aria-hidden="true">#</a> 结构体和数组</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">struct</span> <span class="token class-name">Show</span> 
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span></span> age<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> weight<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Show S<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">1111</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">1111</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//cout &lt;&lt; S[0].age &lt;&lt; endl;</span>
    <span class="token comment">//cout &lt;&lt; S[1].age &lt;&lt; endl;</span>
    <span class="token comment">//cout &lt;&lt; S[2].age &lt;&lt; endl;</span>
    <span class="token comment">//cout &lt;&lt; S[3].age &lt;&lt; endl;</span>
    <span class="token comment">//cout &lt;&lt; S[4].age &lt;&lt; endl;</span>

    Show<span class="token operator">*</span> S2<span class="token punctuation">;</span>
    S2 <span class="token operator">=</span> S<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span>S2<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> S2<span class="token operator">-&gt;</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> S2<span class="token operator">-&gt;</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> S2<span class="token operator">-&gt;</span>weight <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="共用体" tabindex="-1"><a class="header-anchor" href="#共用体" aria-hidden="true">#</a> 共用体</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token function">union</span><span class="token punctuation">(</span>共用体<span class="token punctuation">)</span><span class="token punctuation">,</span>跟结构体相似，但是同时只能存在一个值

union Show          <span class="token comment">//声明共用体</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">int</span></span> age<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> witght<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;共用体同时只能存在一个值，字节占用最大那个&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token class-name">Show</span> S<span class="token punctuation">;</span>
    S<span class="token punctuation">.</span>age<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    S<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    S<span class="token punctuation">.</span>witght <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>                       <span class="token comment">//共用体仅存在最后一次赋的值，每次只能存在一个值</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>age <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>              <span class="token comment">//  = 3</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>witght <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>           <span class="token comment">//  = 3</span>
    cout <span class="token operator">&lt;&lt;</span> S<span class="token punctuation">.</span>height <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>           <span class="token comment">//  = 3</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">enum</span> <span class="token class-name">Show</span>
<span class="token punctuation">{</span>
    age<span class="token punctuation">,</span>
    weight<span class="token punctuation">,</span>
    height
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Show</span> S <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">enum</span> <span class="token class-name">Show</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> S <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>S <span class="token operator">==</span> <span class="token punctuation">(</span>Show<span class="token punctuation">)</span>weight<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;枚举值是：weight&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>S <span class="token operator">==</span> <span class="token punctuation">(</span>Show<span class="token punctuation">)</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;枚举值是：age&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>S <span class="token operator">==</span> <span class="token punctuation">(</span>Show<span class="token punctuation">)</span>height<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;枚举值是：height&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class类-创建头文件" tabindex="-1"><a class="header-anchor" href="#class类-创建头文件" aria-hidden="true">#</a> class类：创建头文件</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//创建一个头文件cs.h</span>
<span class="token keyword">class</span> <span class="token class-name">Cs</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token punctuation">:</span>         <span class="token comment">//公开类型</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">set_age</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> age <span class="token punctuation">,</span><span class="token class-name"><span class="token keyword">int</span></span> weight <span class="token punctuation">,</span><span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span><span class="token punctuation">:</span>        <span class="token comment">//私有类型</span>
    <span class="token class-name"><span class="token keyword">int</span></span> age<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> weight<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> height<span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token punctuation">:</span>      <span class="token comment">//保护类型</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class类-类文件" tabindex="-1"><a class="header-anchor" href="#class类-类文件" aria-hidden="true">#</a> class类：类文件</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#include </span><span class="token string">&quot;Cs.h&quot;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> <span class="token namespace">std</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Cs</span> C<span class="token punctuation">;</span>                       <span class="token comment">//使用Cs声明一个变量</span>
    C<span class="token punctuation">.</span><span class="token function">set_age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//使用C.set_age();调用函数</span>
    <span class="token class-name"><span class="token keyword">int</span></span> a <span class="token operator">=</span> C<span class="token punctuation">.</span><span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">void</span></span> Cs<span class="token punctuation">::</span><span class="token function">set_age</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> age <span class="token punctuation">)</span>      <span class="token comment">//初始化Cs类里面的set_age();函数</span>
<span class="token punctuation">{</span>
    Cs<span class="token punctuation">::</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">int</span></span> Cs<span class="token punctuation">::</span><span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment">//初始化Cs类里面的get_age();函数</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class和指针" tabindex="-1"><a class="header-anchor" href="#class和指针" aria-hidden="true">#</a> class和指针</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#include </span><span class="token string">&quot;Cs.h&quot;</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> <span class="token namespace">std</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Cs</span> C<span class="token punctuation">;</span>                               <span class="token comment">//声明普通类</span>
    Cs <span class="token operator">*</span>P <span class="token operator">=</span> <span class="token operator">&amp;</span>C<span class="token punctuation">;</span>                         <span class="token comment">//声明指针类  ， &amp;符号取C的地址</span>
    C<span class="token punctuation">.</span><span class="token function">set_age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">//使用普通类</span>
    cout <span class="token operator">&lt;&lt;</span> P<span class="token operator">-&gt;</span><span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>       <span class="token comment">//指针调用函数使用-&gt;</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">void</span></span> Cs<span class="token punctuation">::</span><span class="token function">set_age</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> age <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Cs<span class="token punctuation">::</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">int</span></span> Cs<span class="token punctuation">::</span><span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数和析构函数and变量初始化" tabindex="-1"><a class="header-anchor" href="#构造函数和析构函数and变量初始化" aria-hidden="true">#</a> 构造函数和析构函数and变量初始化</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Cs</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Cs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//构造函数</span>
    <span class="token operator">~</span><span class="token function">Cs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//析构函数</span>
    <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">int</span> weight<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

std<span class="token double-colon punctuation">::</span>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;函数定义--------------------------------------------------------------------&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

<span class="token class-name">Cs</span><span class="token double-colon punctuation">::</span><span class="token function">Cs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">weight</span><span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">170</span><span class="token punctuation">)</span>            <span class="token comment">//函数后面跟着：加变量（）即可给变量赋值</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;构造函数初始化&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token class-name">Cs</span><span class="token double-colon punctuation">::</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> age <span class="token operator">+</span> weight <span class="token operator">+</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Cs</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Cs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                           <span class="token comment">//析构函数</span>
<span class="token punctuation">{</span>
    age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    weight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
