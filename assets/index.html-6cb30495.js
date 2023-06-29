import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-75adbfbc.js";const p="/images/118508968.png",e="/images/11592968.png",c="/images/118702343.png",o="/images/200386031.png",i="/images/201972656.png",l="/images/203772406.png",u="/images/369732265.png",r="/images/898040531.png",d="/images/45073828.png",k="/images/50609531.png",v="/images/653828328.png",m={},b=t(`<h1 id="kotlin基础" tabindex="-1"><a class="header-anchor" href="#kotlin基础" aria-hidden="true">#</a> Kotlin基础</h1><p>intellid IDE查看函数注释</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>按一下 shift <span class="token operator">+</span> q 显示提示框

连按两下 shift <span class="token operator">+</span>q 显示新的窗口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Itellij IDE显示kotlin字节码，连续按两次shift</p><figure><img src="`+p+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>包名</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>package cn<span class="token punctuation">.</span>rxdidi

<span class="token comment">// 导入包</span>
import cd<span class="token punctuation">.</span>rxdidi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常量</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">const</span> <span class="token class-name">val</span> a <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">:</span>

<span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;编译时常量只能在函数外申明&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    <span class="token class-name"><span class="token keyword">var</span></span> a<span class="token punctuation">;</span>  <span class="token comment">// 可以重复赋值</span>
    <span class="token class-name">val</span> b<span class="token punctuation">;</span>  <span class="token comment">// 只能赋值一次，相当于常量</span>

    <span class="token class-name"><span class="token keyword">var</span></span> a <span class="token punctuation">:</span><span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// int类型的变量</span>

    <span class="token comment">// 多行文本，.trimIndent（）除去空格字符</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>&quot;
                adf
                asdf
                asdf
                asdf
                asdf
        <span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">.</span><span class="token function">trimIndent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 

    <span class="token comment">//    val str = &quot;字符串模板&quot;;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;类似C#的语法，$str&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>数组</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name">fun</span> <span class="token function">Aarr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 创建一个一维数组</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>i<span class="token operator">-&gt;</span>i<span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">}</span>
    <span class="token comment">// 循环输出数组，it = item</span>
    arr<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token comment">// 创建一维数组数组</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arr2 <span class="token operator">=</span> arrayOf<span class="token return-type class-name"><span class="token punctuation">(</span>1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3<span class="token punctuation">,</span>4<span class="token punctuation">,</span>5<span class="token punctuation">)</span></span>

    arr2<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token comment">// 一维数组</span>
    <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一维数组,字符串&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name"><span class="token keyword">var</span></span> ArrStr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
    ArrStr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
    ArrStr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    ArrStr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span>
    ArrStr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">;</span>
    ArrStr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> ArrStr<span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token comment">// 创建数组</span>

    <span class="token class-name"><span class="token keyword">var</span></span> arr3 <span class="token operator">=</span> <span class="token function">IntArray</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span>
    arr3<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;arr3-1 =  &quot;</span><span class="token operator">+</span>arr3<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    arr3<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token comment">// 访问数组</span>

    <span class="token class-name">val</span> arr3_3 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用get访问数组: &quot;</span> <span class="token operator">+</span> arr3_3<span class="token punctuation">)</span>

    <span class="token comment">// 设置数组</span>
    arr3<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">)</span>
    <span class="token class-name">val</span> arr3_2 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用set访问数组: &quot;</span> <span class="token operator">+</span>arr3_2<span class="token punctuation">)</span>

    <span class="token class-name">val</span> str <span class="token operator">=</span> <span class="token string">&quot;字符串模板&quot;</span><span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;类似C#的语法，$str&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 多维数组</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;多维数组&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">val</span> arrList <span class="token operator">=</span> <span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Array<span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token class-name">val</span> arrList2 <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
    arrList2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;一&quot;</span><span class="token punctuation">;</span>
    arrList2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">;</span>
    arrList2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;一一&quot;</span><span class="token punctuation">;</span>
    arrList2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;一二&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">,</span>item<span class="token punctuation">)</span> <span class="token keyword">in</span> arrList2<span class="token punctuation">.</span><span class="token function">withIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token keyword">in</span> item<span class="token punctuation">.</span>indices<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span>arrList2<span class="token punctuation">[</span><span class="token keyword">value</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">j</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 多维数组</span>
    <span class="token class-name">val</span> arrArr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    arrArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">;</span>
    arrArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">;</span>
    arrArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">;</span>
    arrArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> arrArr<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span> itms <span class="token keyword">in</span> item<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


            <span class="token function">println</span><span class="token punctuation">(</span>arrArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">j</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3维数组</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arrArrArr <span class="token operator">=</span> <span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Array<span class="token punctuation">&lt;</span>Array<span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Array<span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token comment">// 3维数组</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arrArr2 <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token generic-method"><span class="token function">Array</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ForWhenWhlieIf</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token return-type class-name">fun</span> <span class="token function">ForWhenWhileIf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 等同于 0 &lt;= i &amp;&amp; i &lt;= 3</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> <span class="token number">0</span><span class="token range operator">..</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token comment">// for循环数组, 相当于C#的foreach</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arr <span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

    <span class="token comment">// 区间表达downTo , 相当于: 10 = 3 结束本次递送;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;区间表达downTo&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> <span class="token number">10</span> downTo <span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

    <span class="token comment">// 区间表达 step, 每循环一次跳过4次，如果step = 1说明不跳过循环， = 0 则崩溃</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;区间表达 step, 每循环一次跳过4次&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> <span class="token number">1</span><span class="token range operator">..</span><span class="token number">10</span> step <span class="token number">4</span><span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

    <span class="token comment">// 这条语句=</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;区间表达式，反向递送 downTo 说明: i = 6 , i == 3 break&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反向循环，循环6次，第三次结束，每循环一次跳过2此&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> <span class="token number">6</span> downTo <span class="token number">3</span> step <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// for 使用(item,value) 等同于c#的foreach</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;for 使用(item,value) 等同于c#的foreach&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name"><span class="token keyword">var</span></span> arr2 <span class="token operator">=</span> <span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">,</span>item<span class="token punctuation">)</span> <span class="token keyword">in</span> arr2<span class="token punctuation">.</span><span class="token function">withIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// for使用循环，item值为循环次数</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;for使用循环，item值为循环次数&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> arr2<span class="token punctuation">.</span>indices<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// if语句用法</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;if语句作为表达式&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">val</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token class-name">val</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> ifLarge <span class="token operator">=</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span>b<span class="token punctuation">)</span>b <span class="token keyword">else</span> a<span class="token punctuation">;</span>

    <span class="token function">println</span><span class="token punctuation">(</span>ifLarge<span class="token punctuation">)</span>

    <span class="token comment">// 正常的if语句</span>
    <span class="token class-name"><span class="token keyword">var</span></span> max<span class="token punctuation">:</span>Int<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        max <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        max <span class="token operator">=</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// when语句, 等同于其他语言的switch，但是when的用处更多</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;when语句&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name"><span class="token keyword">var</span></span> whenVal <span class="token operator">=</span> <span class="token string">&quot;ok&quot;</span>
    <span class="token keyword">when</span><span class="token punctuation">(</span>whenVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token string">&quot;ok&quot;</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;whenVal = ok&quot;</span><span class="token punctuation">)</span>
        <span class="token string">&quot;no&quot;</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;whenVal = no&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;whenVal = null&quot;</span><span class="token punctuation">)</span> <span class="token comment">// else为默认值</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// when, 相当于其他语言的</span>
    <span class="token comment">/*
    *  case 1:
    *  case 2;
    *
    * break;
    * */</span>
    <span class="token class-name"><span class="token keyword">var</span></span> whenVal2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">when</span><span class="token punctuation">(</span>whenVal2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;whenVal2 = 1 or 2&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;whenVal2 = null&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// when 检测一个值 is 或 !is 一个特定的值</span>
    <span class="token comment">// 下面这个表示：如果字符串以prefix开头返回true否则false</span>

    <span class="token return-type class-name">fun</span> <span class="token function">hasprefix</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">x</span><span class="token punctuation">:</span>Any<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">when</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">is</span> <span class="token class-name">String</span> <span class="token operator">-&gt;</span> x<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;prefix&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 如果字符串包含prefix开头则返回true</span>
        <span class="token keyword">is</span> <span class="token class-name">Int</span> <span class="token operator">-&gt;</span> <span class="token boolean">true</span>      <span class="token comment">// 如果是int类型返回true</span>
        <span class="token keyword">else</span> <span class="token operator">-&gt;</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token class-name"><span class="token keyword">var</span></span> istrue <span class="token operator">=</span> <span class="token function">hasprefix</span><span class="token punctuation">(</span><span class="token string">&quot;prefix is true&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>istrue<span class="token punctuation">)</span>
    <span class="token class-name"><span class="token keyword">var</span></span> istrue2 <span class="token operator">=</span> <span class="token function">hasprefix</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>istrue<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range表达式，表示 几到几之间， 0 .. 10 or 1..3  = 0到10之间 或 1到3之间</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>val a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>a in <span class="token number">0</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;他在0到3之间&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">!</span>in <span class="token number">0.</span><span class="token number">.3</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;他不在0到3之间&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// downTo</span>

<span class="token keyword">for</span><span class="token punctuation">(</span>item in <span class="token number">10</span> down <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; 反向递送 = 10 9 8 7 .. 1 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// step</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>item in <span class="token number">10</span> step <span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;每循环一次跳过两次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// until</span>

<span class="token keyword">for</span><span class="token punctuation">(</span>item in <span class="token number">1</span> until <span class="token number">10</span><span class="token punctuation">)</span> <span class="token function">prinln</span><span class="token punctuation">(</span><span class="token string">&quot;i in [1, 10), 10被排除&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>when表达式，满足某个条件后执行相应代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>val a <span class="token operator">=</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>

<span class="token function">when</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;ok&quot;</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = ok&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token operator">-&gt;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a 等于啥我也不知道啊&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StringTemplate 字符串模板</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    val a <span class="token operator">=</span> <span class="token string">&quot;我是变量a&quot;</span><span class="token punctuation">;</span>
    val b <span class="token operator">=</span> <span class="token string">&quot;我是变量b&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> <span class="token class-name">S</span> <span class="token operator">=</span> <span class="token string">&quot;字符串模板可以使用变量和表达式: 变量a =$a 变量b = $b &quot;</span><span class="token punctuation">;</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;同时StringTemplate还可以使用表达式&quot;</span><span class="token punctuation">)</span>

    val isTrue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    val <span class="token constant">S2</span> <span class="token operator">=</span> <span class="token string">&quot;判断一个值是否为true ： \${if(isTrue) &quot;</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token string">&quot; else &quot;</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">S2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数</p><figure><img src="`+o+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// age 默认值 = 18</span>
<span class="token comment">// FunctionParpam返回值为空，Unit = C#语言的void</span>
<span class="token keyword">private</span> fun <span class="token class-name">FunctionParpam</span><span class="token punctuation">(</span>age <span class="token operator">:</span><span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> name <span class="token operator">:</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Unit</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TODO抛出异常，终止代码运行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> fun <span class="token class-name">FunctionParpam</span><span class="token punctuation">(</span>age <span class="token operator">:</span><span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> name <span class="token operator">:</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Unit</span><span class="token punctuation">{</span>

    <span class="token comment">// 使用ToDo函数可以抛出异常，终止代码运行</span>
    <span class="token comment">// ToDo(&quot;错误原因&quot;)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反引号申明 特殊字符方法</p><p>· 这个符号在tab键上面</p><figure><img src="`+i+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>fun \`我是反引号方法\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反引号申明特殊字符方法&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反引号申明特殊字符方法&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名函数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>fun \`匿名函数\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 匿名函数使用方法就是C#的lambad</span>

    <span class="token keyword">var</span> <span class="token class-name">Anonymous</span> <span class="token operator">=</span> <span class="token string">&quot;用匿名函数判断此字符串重复的字符串数量&quot;</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">{</span>string <span class="token operator">-&gt;</span> string <span class="token operator">==</span> <span class="token char">&#39;字&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Anonymous</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="匿名函数隐式返回" tabindex="-1"><a class="header-anchor" href="#匿名函数隐式返回" aria-hidden="true">#</a> 匿名函数隐式返回</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>fun \`匿名函数隐式返回\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// 匿名函数声明方法一</span>
    val <span class="token class-name">BlessingFunction1</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;隐式返回默认返回最后一行,无需return&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 匿名函数隐式返回2</span>
    val <span class="token class-name">BlessingFunction2</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span>

    <span class="token class-name">BlessingFunction2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;隐式返回默认返回最后一行，无需return&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名函数只有一个参数时-可以用it代替" tabindex="-1"><a class="header-anchor" href="#匿名函数只有一个参数时-可以用it代替" aria-hidden="true">#</a> 匿名函数只有一个参数时，可以用it代替</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>fun \`匿名函数只有一个参数时\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token class-name">AnonymousIt</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token class-name">Str</span><span class="token operator">:</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token class-name">String</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        it<span class="token operator">-&gt;</span>
        <span class="token string">&quot;匿名函数只有一个参数时，可以用it代替:{$it}&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">AnonymousIt</span><span class="token punctuation">(</span><span class="token string">&quot;我是匿名函数的参数，当匿名函数只有一个参数时可以用it代替&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数类型推断-大大减少代码量" tabindex="-1"><a class="header-anchor" href="#匿名函数类型推断-大大减少代码量" aria-hidden="true">#</a> 匿名函数类型推断，大大减少代码量</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    <span class="token class-name"><span class="token keyword">var</span></span> BlessingFunction <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;当匿名函数没有参数时，简略写法可以这么写&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name"><span class="token keyword">var</span></span> blessingFunction2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        Str<span class="token punctuation">:</span>String<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">:</span>Int<span class="token operator">-&gt;</span>
        <span class="token string">&quot;当匿名函数有参数时，简略写法：参数一 = $Str, 参数二 = $int&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数就是lambda" tabindex="-1"><a class="header-anchor" href="#匿名函数就是lambda" aria-hidden="true">#</a> 匿名函数就是Lambda#</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>kotlin的Lambda

  <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> String <span class="token punctuation">{</span>
    Param<span class="token punctuation">:</span>String <span class="token operator">-&gt;</span>
    <span class="token string">&quot;我是kotlin的lambda函数，参数一调用:$Param&quot;</span>
<span class="token punctuation">}</span>

C#的Lambda

Func<span class="token operator">&lt;</span>参数 Param<span class="token punctuation">,</span> <span class="token keyword">string</span> 返回值<span class="token operator">&gt;=</span> a <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;Lambda参数一的值为: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="当函数参数是lambda时" tabindex="-1"><a class="header-anchor" href="#当函数参数是lambda时" aria-hidden="true">#</a> 当函数参数是lambda时</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fun \`当Lambda被当作参数时\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> Lambda<span class="token punctuation">:</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> String <span class="token operator">=</span> <span class="token punctuation">{</span>
        it <span class="token operator">-&gt;</span>
        it      <span class="token comment">// 返回it ， it = 默认参数</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 调用函数，函数内含有Lambda</span>
    <span class="token comment">// 使用此方法调用，感觉非常麻烦</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用常规方法调用函数&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">val</span> a <span class="token operator">=</span> <span class="token function">FunLambda</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span>Lambda<span class="token punctuation">)</span>

    <span class="token comment">// 调用函数，函数内含有Lambda</span>
    <span class="token comment">// 括号里面写函数的参数，大括号里面就是Lambda</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用简略方法调用函数&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">val</span> b<span class="token operator">=</span>  <span class="token function">FunLambda</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        it      <span class="token comment">// 返回it ， it = 默认参数</span>
    <span class="token punctuation">}</span>





<span class="token punctuation">}</span>

<span class="token return-type class-name">fun</span> <span class="token function">FunLambda</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">age</span> <span class="token punctuation">:</span> Int<span class="token punctuation">,</span> <span class="token named-parameter punctuation">Name</span><span class="token punctuation">:</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token operator">-&gt;</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄 = $age , 姓名 = \${Name(&quot;</span>匿名函数当参数<span class="token string">&quot;)}&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="内联函数-inline" tabindex="-1"><a class="header-anchor" href="#内联函数-inline" aria-hidden="true">#</a> 内联函数 inline</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 自己认为：</span>
<span class="token comment">// 内联函数：重复、多次使用同一个函数可以使用内联函数来减少损耗</span>

inline <span class="token return-type class-name">fun</span> <span class="token function">InlineFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当一个函数被多次调用时，可以使用inline来减少服务器压力&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数处理可以用lambda作为参数之外还可以使用函数做为参数-使用-函数名即可" tabindex="-1"><a class="header-anchor" href="#函数处理可以用lambda作为参数之外还可以使用函数做为参数-使用-函数名即可" aria-hidden="true">#</a> 函数处理可以用lambda作为参数之外还可以使用函数做为参数，使用 :: + 函数名即可</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fun \`函数除了可以调用Lambda以外还可以直接调用函数\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// 函数除了可以用lambda作参数之外，还可以用函数做参数，使用 :: + 函数名</span>

    <span class="token function">FunLambda</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token punctuation">::</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token return-type class-name">fun</span> <span class="token function">Name</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">Str</span><span class="token punctuation">:</span>String<span class="token punctuation">)</span><span class="token punctuation">:</span>String<span class="token punctuation">{</span>
    <span class="token keyword">return</span> Str<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token return-type class-name">fun</span> <span class="token function">FunLambda</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">age</span> <span class="token punctuation">:</span> Int<span class="token punctuation">,</span> <span class="token named-parameter punctuation">Name</span><span class="token punctuation">:</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token operator">-&gt;</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄 = $age , 姓名 = \${Name(&quot;</span>匿名函数当参数<span class="token string">&quot;)}&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当返回类型为lambda时" tabindex="-1"><a class="header-anchor" href="#当返回类型为lambda时" aria-hidden="true">#</a> 当返回类型为Lambda时</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 声明</span>

fun \`返回类型是Lambda时\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token operator">-&gt;</span>String <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;返回类型为 Lambda时，参数一的值为： $it&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>

    <span class="token class-name">val</span> WriteLambda <span class="token operator">=</span> 返回类型是Lambda时<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">WriteLambda</span><span class="token punctuation">(</span><span class="token string">&quot;我是参数一的值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可空类型-var-str-string" tabindex="-1"><a class="header-anchor" href="#可空类型-var-str-string" aria-hidden="true">#</a> 可空类型，var str:String? = &quot;&quot;;</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;可空类型&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安全调用操作符" tabindex="-1"><a class="header-anchor" href="#安全调用操作符" aria-hidden="true">#</a> 安全调用操作符</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;可空类型&quot;</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//可空类型必须使用?,否则会报错</span>
    str<span class="token punctuation">?.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可空类型使用let函数" tabindex="-1"><a class="header-anchor" href="#可空类型使用let函数" aria-hidden="true">#</a> 可空类型使用let函数</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 可空字符串使用 let函数</span>
<span class="token return-type class-name">fun</span> <span class="token function">nullLet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;本字符串可以为空&quot;</span>
    str <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token comment">// 使用let函数</span>
    str <span class="token operator">=</span> str<span class="token punctuation">?.</span><span class="token keyword">let</span><span class="token punctuation">{</span>
        it<span class="token punctuation">:</span>String<span class="token operator">-&gt;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token string">&quot;大于5&quot;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token string">&quot;小于5&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非空运算符" tabindex="-1"><a class="header-anchor" href="#非空运算符" aria-hidden="true">#</a> 非空运算符，!!.</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 非空运算符，如果为空发出异常</span>
<span class="token return-type class-name">fun</span> <span class="token function">noNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;非空运算符，如果为空发出异常&quot;</span><span class="token punctuation">;</span>


    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并操作符-相当于c-的三元表达式" tabindex="-1"><a class="header-anchor" href="#合并操作符-相当于c-的三元表达式" aria-hidden="true">#</a> 合并操作符，相当于C#的三元表达式 ? :</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 空合并操作符 ?:</span>
fun \`空合并操作符\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;空合并操作符&quot;</span><span class="token punctuation">;</span>

    str <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// 不为空为左，为空为右</span>

    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">?.</span><span class="token keyword">let</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span><span class="token function">capitalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">?</span><span class="token punctuation">:</span> <span class="token string">&quot;str is null&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义异常-继承exception" tabindex="-1"><a class="header-anchor" href="#自定义异常-继承exception" aria-hidden="true">#</a> 自定义异常，继承exception</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 自定义异常</span>
fun \`自定义异常\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 触发异常</span>
        <span class="token keyword">throw</span> <span class="token function">customException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如str不为空则str +1</span>
        str<span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token string">&quot;+1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">:</span>Exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

<span class="token comment">// 自定义异常，继承Exception</span>
<span class="token keyword">class</span> <span class="token class-name">customException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;为空&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="检测参数是否为空-如果为空发出自定义异常" tabindex="-1"><a class="header-anchor" href="#检测参数是否为空-如果为空发出自定义异常" aria-hidden="true">#</a> 检测参数是否为空，如果为空发出自定义异常</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 检测参数不为空，如果为空返回自定义异常</span>
fun \`检测参数不为空\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token function">checkNotNull</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;参数为空&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="解构语法-把list赋值给变量" tabindex="-1"><a class="header-anchor" href="#解构语法-把list赋值给变量" aria-hidden="true">#</a> 解构语法，把list赋值给变量</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 解构语法</span>
fun \`解构语法\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> <span class="token string">&quot;a,b,c&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> strList <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token char">&#39;,&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 常规调用方式</span>
    <span class="token comment">//println(strList[0])</span>

    <span class="token comment">// 解构语法, 把list赋值给变量</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>str1<span class="token punctuation">,</span>str2<span class="token punctuation">,</span>str3<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token return-type class-name">strList</span>

    <span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace-字符串替换-regex-正则表达式" tabindex="-1"><a class="header-anchor" href="#replace-字符串替换-regex-正则表达式" aria-hidden="true">#</a> replace（字符串替换） + regex（正则表达式）</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// replace</span>
<span class="token return-type class-name">fun</span> <span class="token function">replaceA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> <span class="token string">&quot;a b c d e f g&quot;</span><span class="token punctuation">;</span>


    <span class="token class-name"><span class="token keyword">var</span></span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regex <span class="token operator">=</span> <span class="token function">Regex</span><span class="token punctuation">(</span><span class="token string">&quot;[^abg]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">when</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token string">&quot;c&quot;</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;1&quot;</span>
            <span class="token string">&quot;d&quot;</span><span class="token operator">-&gt;</span><span class="token string">&quot;2&quot;</span>
            <span class="token string">&quot;e&quot;</span><span class="token operator">-&gt;</span><span class="token string">&quot;3&quot;</span>
            <span class="token keyword">else</span> <span class="token operator">-&gt;</span> it<span class="token punctuation">.</span><span class="token keyword">value</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="and" tabindex="-1"><a class="header-anchor" href="#and" aria-hidden="true">#</a> == and ===</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// == and ===</span>
fun \`<span class="token operator">==</span><span class="token keyword">and</span><span class="token operator">==</span><span class="token operator">=</span>\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str1 <span class="token operator">=</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 将字符串首字母改为大写</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str2 <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">.</span><span class="token function">capitalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// = true</span>
    <span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str2<span class="token punctuation">)</span>

    <span class="token comment">// = false</span>
    <span class="token function">println</span><span class="token punctuation">(</span>str2 <span class="token operator">==</span><span class="token operator">=</span> str1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串遍历" tabindex="-1"><a class="header-anchor" href="#字符串遍历" aria-hidden="true">#</a> 字符串遍历</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token string">&quot;字符串遍历&quot;</span><span class="token punctuation">.</span>forEach<span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字转换" tabindex="-1"><a class="header-anchor" href="#数字转换" aria-hidden="true">#</a> 数字转换</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 数字转换</span>
fun \`数字转换\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果转换失败则为空</span>
    <span class="token class-name"><span class="token keyword">var</span></span> a <span class="token punctuation">:</span>Int<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token string">&quot;9.9&quot;</span><span class="token punctuation">.</span><span class="token function">toIntOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// = 9 ，但四舍五入之后为10</span>
    <span class="token class-name"><span class="token keyword">var</span></span> b <span class="token operator">=</span> <span class="token number">9.9</span><span class="token punctuation">.</span><span class="token function">roundToInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 格式化字符串</span>

    <span class="token class-name"><span class="token keyword">var</span></span> c <span class="token operator">=</span> <span class="token string">&quot;%.2f&quot;</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3.14125</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply函数-在apply里面调用类的方法时无需使用变量名" tabindex="-1"><a class="header-anchor" href="#apply函数-在apply里面调用类的方法时无需使用变量名" aria-hidden="true">#</a> apply函数，在apply里面调用类的方法时无需使用变量名</h3><figure><img src="`+d+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="let-and-apply" tabindex="-1"><a class="header-anchor" href="#let-and-apply" aria-hidden="true">#</a> let and apply</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// let 与 apply对比</span>
<span class="token comment">// let 传入前者结果为参数且返回结果为最后一行</span>
<span class="token comment">// apply 不传入参数，执行结果赋值给变量</span>
<span class="token return-type class-name">fun</span> <span class="token function">letAndApply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// let 使用</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">let</span><span class="token punctuation">{</span>
        it <span class="token operator">*</span> it
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

    <span class="token comment">// let + :? 代替if else</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatGreeting</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatGreeting</span><span class="token punctuation">(</span><span class="token string">&quot;Ddcheat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// apply前后对比</span>

    <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\kotlin.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>apply<span class="token punctuation">{</span>
        <span class="token function">setReadable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token function">setWritable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token function">setExecutable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token class-name"><span class="token keyword">var</span></span> createFile <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\kotlin2.txt&quot;</span><span class="token punctuation">)</span>
    createFile<span class="token punctuation">.</span><span class="token function">setExecutable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    createFile<span class="token punctuation">.</span><span class="token function">setReadable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    createFile<span class="token punctuation">.</span><span class="token function">setWritable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用let + :? 代替 if else</span>
<span class="token return-type class-name">fun</span> <span class="token function">formatGreeting</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">name</span><span class="token punctuation">:</span>String<span class="token punctuation">?</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> String<span class="token punctuation">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">?.</span><span class="token keyword">let</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;welcome $it&quot;</span>
    <span class="token punctuation">}</span> <span class="token punctuation">?</span><span class="token punctuation">:</span> <span class="token string">&quot;what\`s your name&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run函数" tabindex="-1"><a class="header-anchor" href="#run函数" aria-hidden="true">#</a> run函数</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// run 函数 run 和 apply相比 run接收上一个对象，返回结果为最后一行</span>
<span class="token return-type class-name">fun</span> <span class="token function">runandApply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> file <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\29663\\\\Desktop\\\\服务器.txt&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// run和apply, apply是配置函数， run 是返回函数</span>
    <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> file<span class="token punctuation">.</span>run<span class="token punctuation">{</span>
        <span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token comment">// run 还可以使用 引用函数</span>
    <span class="token comment">// 可以使用多个run</span>

    <span class="token class-name"><span class="token keyword">var</span></span> resultLength <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">::</span>textISlength<span class="token punctuation">)</span>
        <span class="token punctuation">?.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">::</span>textLengthGreaterThan<span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>resultLength<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token return-type class-name">fun</span> <span class="token function">textISlength</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">text</span><span class="token punctuation">:</span>String<span class="token punctuation">?</span><span class="token punctuation">)</span> <span class="token operator">=</span> text<span class="token punctuation">?.</span>length
<span class="token return-type class-name">fun</span> <span class="token function">textLengthGreaterThan</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">length</span><span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">:</span> String<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">if</span><span class="token punctuation">(</span>length <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token string">&quot;string Greater Than 5&quot;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token string">&quot;String less Than 5&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-and-run" tabindex="-1"><a class="header-anchor" href="#with-and-run" aria-hidden="true">#</a> with and run</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// with 跟 run 相似， 但 with 需要传入参数</span>
<span class="token return-type class-name">fun</span> <span class="token function">withAndrun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token string">&quot;判断字符串长度&quot;</span><span class="token punctuation">.</span>run<span class="token punctuation">{</span>
        length
    <span class="token punctuation">}</span>

    <span class="token class-name"><span class="token keyword">var</span></span> b <span class="token operator">=</span> <span class="token function">with</span><span class="token punctuation">(</span><span class="token string">&quot;判断字符串长度&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        length
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="also" tabindex="-1"><a class="header-anchor" href="#also" aria-hidden="true">#</a> also</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// also 跟 let 函数相似， also 接收对象，返回接受的对象， let 接收对象，返回lambda</span>
<span class="token return-type class-name">fun</span> <span class="token function">alsoAndlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> file <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\29663\\\\Desktop\\\\服务器.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件名 = &quot;</span> <span class="token operator">+</span> it<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="takeif" tabindex="-1"><a class="header-anchor" href="#takeif" aria-hidden="true">#</a> takeif</h3><figure><img src="`+k+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// takeif</span>
<span class="token return-type class-name">fun</span> <span class="token function">takeif</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> text <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\29663\\\\Desktop\\\\服务器.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>takeIf <span class="token punctuation">{</span>
        it<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> it<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">?.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="takeunless-是takeif的辅助函数-takeif为真时返回对象-而takeunless为假时返回对象" tabindex="-1"><a class="header-anchor" href="#takeunless-是takeif的辅助函数-takeif为真时返回对象-而takeunless为假时返回对象" aria-hidden="true">#</a> takeUnless ,  是takeif的辅助函数，takeif为真时返回对象，而takeunless为假时返回对象</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// takeUnless 当判定条件为假时返回对像，为真时返回null</span>
<span class="token return-type class-name">fun</span> <span class="token function">takeunless</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果 isHidden为假则执行后面的函数，如果为真则返回null</span>
    <span class="token class-name"><span class="token keyword">var</span></span> text<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> <span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\29663\\\\Desktop\\\\服务器.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>takeUnless<span class="token punctuation">{</span>
        it<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">?.</span><span class="token keyword">let</span><span class="token punctuation">{</span>
        <span class="token string">&quot;这个文件不存在&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list集合" tabindex="-1"><a class="header-anchor" href="#list集合" aria-hidden="true">#</a> list集合</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// list</span>
<span class="token return-type class-name">fun</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> strlist <span class="token punctuation">:</span>List<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 访问指定索引，如果不存在则为自定义值，Unknown</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strlist<span class="token punctuation">.</span><span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;Unknown&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 访问指定索引值，如果为空，则 = Unknown</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strlist<span class="token punctuation">.</span><span class="token function">getOrNull</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">?</span><span class="token punctuation">:</span> <span class="token string">&quot;Unknown&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutablelist" tabindex="-1"><a class="header-anchor" href="#mutablelist" aria-hidden="true">#</a> mutableLIst</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// mutableList 可变集合， list为不可变集合</span>
<span class="token return-type class-name">fun</span> <span class="token function">mutablelist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> mutablelist <span class="token operator">=</span> <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 添加</span>
    mutablelist<span class="token punctuation">.</span><span class="token keyword">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
    mutablelist<span class="token punctuation">.</span><span class="token keyword">add</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 删除</span>
    mutablelist<span class="token punctuation">.</span><span class="token keyword">remove</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>mutablelist<span class="token punctuation">)</span>

    <span class="token comment">// mutablelist 为可变集合， listof为不可变集合</span>
    <span class="token comment">// 可变集合 不可变集合可以互转</span>
    <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMutableList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutator" tabindex="-1"><a class="header-anchor" href="#mutator" aria-hidden="true">#</a> mutator</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// mutator</span>
<span class="token return-type class-name">fun</span> <span class="token function">mutator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 需要使用val 使用var会报错</span>
    <span class="token class-name">val</span> mutablelist <span class="token operator">=</span> <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 添加元素</span>
    mutablelist <span class="token operator">+=</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 删除元素</span>
    mutablelist <span class="token operator">-=</span> <span class="token string">&quot;a&quot;</span>

    <span class="token comment">// lambda删除元素</span>
    mutablelist<span class="token punctuation">.</span>removeIf<span class="token punctuation">{</span>
        it<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>mutablelist<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历列表" tabindex="-1"><a class="header-anchor" href="#遍历列表" aria-hidden="true">#</a> 遍历列表</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// foreach list</span>
<span class="token return-type class-name">fun</span> <span class="token function">foreachList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">val</span> mutablelist <span class="token operator">=</span> <span class="token function">mutableListOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 第一种方式</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>s <span class="token keyword">in</span> mutablelist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 第二种方式</span>
    mutablelist<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 第三种方式</span>
    mutablelist<span class="token punctuation">.</span>forEachIndexed<span class="token punctuation">{</span>
        index<span class="token punctuation">,</span>item<span class="token operator">-&gt;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;$index , $item&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构语法忽略赋值" tabindex="-1"><a class="header-anchor" href="#解构语法忽略赋值" aria-hidden="true">#</a> 解构语法忽略赋值</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fun \`解构语法忽略赋值\`<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 使用下划线忽略对b的赋值    </span>
    val <span class="token punctuation">(</span>a<span class="token punctuation">,</span>_<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token return-type class-name">list</span>

    <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setlist-不可变set集合" tabindex="-1"><a class="header-anchor" href="#setlist-不可变set集合" aria-hidden="true">#</a> SetList 不可变Set集合</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// setList 和list 的区别在， setList不可以有重复元素而 list可以有重复元素</span>
<span class="token return-type class-name">fun</span> <span class="token function">setlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">val</span> setlist <span class="token operator">=</span> <span class="token function">setOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>setlist<span class="token punctuation">.</span><span class="token function">elementAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutablesetlist-可变set集合" tabindex="-1"><a class="header-anchor" href="#mutablesetlist-可变set集合" aria-hidden="true">#</a> MutableSetList  可变Set集合</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 可变的Setlist</span>
<span class="token return-type class-name">fun</span> <span class="token function">mutableSetList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">val</span> mutableSetlist <span class="token operator">=</span> <span class="token function">mutableSetOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 添加或删除元素</span>
    mutableSetlist<span class="token punctuation">.</span><span class="token keyword">add</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
    mutableSetlist<span class="token punctuation">.</span>removeIf<span class="token punctuation">{</span>it<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

    <span class="token comment">// 添加或删除元素</span>
    mutableSetlist <span class="token operator">+=</span> <span class="token string">&quot;e&quot;</span>
    mutableSetlist <span class="token operator">-=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>

    <span class="token function">println</span><span class="token punctuation">(</span>mutableSetlist<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合转换-快捷函数" tabindex="-1"><a class="header-anchor" href="#集合转换-快捷函数" aria-hidden="true">#</a> 集合转换， 快捷函数</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 集合转换 和 快捷函数</span>
<span class="token return-type class-name">fun</span> <span class="token function">listTOset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// 去重复元素，但很麻烦</span>
    <span class="token class-name">val</span> list1 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">toSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 去重复元素函数 distinct</span>
    <span class="token class-name">val</span> list2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maplist" tabindex="-1"><a class="header-anchor" href="#maplist" aria-hidden="true">#</a> mapList</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// mapList key value模式</span>
<span class="token return-type class-name">fun</span> <span class="token function">mapList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 第一种创建方式</span>
    <span class="token class-name">val</span> maplist1 <span class="token operator">=</span> <span class="token function">mapOf</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span> to <span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;b&quot;</span> to <span class="token number">20</span> <span class="token punctuation">,</span><span class="token string">&quot;c&quot;</span> to <span class="token number">30</span><span class="token punctuation">)</span>

    <span class="token comment">// 第二种创建方式</span>
    <span class="token class-name">val</span> maplist2 <span class="token operator">=</span> <span class="token function">mapOf</span><span class="token punctuation">(</span><span class="token function">Pair</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">Pair</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">Pair</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 索引取值</span>
    <span class="token function">println</span><span class="token punctuation">(</span>maplist1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 取值</span>
    <span class="token function">println</span><span class="token punctuation">(</span>maplist2<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>maplist2<span class="token punctuation">.</span><span class="token function">getOrElse</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;unknown&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 递送</span>
    maplist1<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span> key<span class="token punctuation">,</span> <span class="token keyword">value</span> <span class="token operator">-&gt;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;$key, $value&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 递送二</span>
    maplist2<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\${it.key}, \${it.value}&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 递送三</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>entry <span class="token keyword">in</span> maplist2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\${entry.key}, \${entry.value}&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="field-类属性自定义get-set时使用" tabindex="-1"><a class="header-anchor" href="#field-类属性自定义get-set时使用" aria-hidden="true">#</a> field ， 类属性自定义get / set时使用</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">FirstClass</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> <span class="token string">&quot;capitalize&quot;</span>
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">capitalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        field <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 构造函数</span>
<span class="token keyword">class</span> <span class="token return-type class-name">ConstructorClass</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">name</span><span class="token punctuation">:</span>String <span class="token punctuation">,</span> <span class="token named-parameter punctuation">age</span><span class="token punctuation">:</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 构造函数，无需constructor</span>

<span class="token keyword">class</span> <span class="token class-name">ConstructorClassTwo</span> <span class="token punctuation">(</span><span class="token named-parameter punctuation">name</span><span class="token punctuation">:</span>String<span class="token punctuation">,</span> <span class="token named-parameter punctuation">age</span><span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 使用Init初始化代码</span>
<span class="token keyword">class</span> <span class="token class-name">InitClass</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>

    init <span class="token punctuation">{</span>
        <span class="token comment">// 使用also输入此字符串</span>
        <span class="token string">&quot;name = \${name}&quot;</span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 继承类 , 使用open关键字，其变量或方法可以被继承同样使用open</span>
open <span class="token keyword">class</span> <span class="token class-name">parentClass</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">_name</span><span class="token punctuation">:</span>String<span class="token punctuation">,</span> <span class="token named-parameter punctuation">_age</span><span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 子类不能重写父类的 var ，比如把var 覆盖为 val</span>
    open <span class="token class-name"><span class="token keyword">var</span></span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    open <span class="token class-name"><span class="token keyword">var</span></span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    init <span class="token punctuation">{</span>
        name <span class="token operator">=</span> _name<span class="token punctuation">;</span>
        age <span class="token operator">=</span> _age
    <span class="token punctuation">}</span>

    open <span class="token return-type class-name">fun</span> <span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>String<span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;年龄 = \${age} ， 姓名= \${name}&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类， 使用override</span>

<span class="token keyword">class</span> <span class="token class-name">sunClass</span><span class="token punctuation">(</span><span class="token keyword">override</span> <span class="token class-name"><span class="token keyword">var</span></span> age<span class="token punctuation">:</span>Int<span class="token punctuation">,</span><span class="token keyword">override</span> <span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">parentClass</span><span class="token punctuation">(</span>_age <span class="token operator">=</span> age<span class="token punctuation">,</span>_name <span class="token operator">=</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 继承后,使用super()初始化父类</span>
    <span class="token comment">//constructor():super();</span>

    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;override返回 年龄 = \${age} ， 姓名= \${name}&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果要调用父类的属性或方法可以使用super</span>
    <span class="token return-type class-name">fun</span> <span class="token function">writeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 调用父类方法</span>
        super<span class="token punctuation">.</span><span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
        <span class="token comment">// 如果继承多个类或interface 可以这么调用</span>
        super<span class="token operator">&lt;</span>parentClass<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
        <span class="token comment">// 调用父类属性</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;父类中age = \${super.age}&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractClass</span><span class="token punctuation">:</span><span class="token type-list"><span class="token class-name">parentClass</span></span><span class="token punctuation">{</span>
    <span class="token comment">// 给父类属性赋值</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">age</span><span class="token punctuation">:</span> Int<span class="token punctuation">,</span><span class="token named-parameter punctuation">name</span><span class="token punctuation">:</span> String<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> super<span class="token punctuation">.</span><span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用上面的类" tabindex="-1"><a class="header-anchor" href="#调用上面的类" aria-hidden="true">#</a> 调用上面的类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    <span class="token function">sunClass</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&quot;鲁梦瑶&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">writeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">writeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类属性-给类属性赋值-使用field" tabindex="-1"><a class="header-anchor" href="#类属性-给类属性赋值-使用field" aria-hidden="true">#</a> 类属性，给类属性赋值，使用field</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 面向对象，给属性赋值</span>
<span class="token keyword">class</span> <span class="token class-name">AttributeClass</span><span class="token punctuation">{</span>
    <span class="token comment">// 自定义属性访问器</span>
    <span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        field <span class="token operator">=</span> <span class="token keyword">value</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> field

    <span class="token comment">// 属性访问</span>
    <span class="token class-name"><span class="token keyword">var</span></span> age<span class="token punctuation">:</span>Int <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        field <span class="token operator">=</span> <span class="token keyword">value</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> field
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可见性修饰符" tabindex="-1"><a class="header-anchor" href="#可见性修饰符" aria-hidden="true">#</a> 可见性修饰符</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 仅内部可用</span>
<span class="token keyword">private</span> <span class="token keyword">class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 子类可用</span>
<span class="token keyword">protected</span> <span class="token keyword">class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 相同module可用</span>
<span class="token keyword">internal</span> <span class="token keyword">class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟初始化-lateinit" tabindex="-1"><a class="header-anchor" href="#延迟初始化-lateinit" aria-hidden="true">#</a> 延迟初始化，lateinit</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 延迟初始化</span>
<span class="token keyword">class</span> <span class="token class-name">lateinitClass</span><span class="token punctuation">{</span>

    lateinit <span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String<span class="token punctuation">;</span>

    <span class="token comment">// 初始化name值，只有在初始化后才能使用name</span>
    <span class="token return-type class-name">fun</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> <span class="token string">&quot;延迟初始化变量，必须初始化后才能使用&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name">fun</span> <span class="token function">battle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 使用isInitialized判断name是否被初始化</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">::</span>name<span class="token punctuation">.</span>isInitialized<span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="惰性加载" tabindex="-1"><a class="header-anchor" href="#惰性加载" aria-hidden="true">#</a> 惰性加载</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 延迟加载，惰性初始化</span>
<span class="token comment">// 只有在调用该变量时才会初始化</span>
<span class="token comment">// </span>

<span class="token keyword">class</span> <span class="token class-name">byLazy</span><span class="token punctuation">{</span>
    val lazyConfig <span class="token keyword">by</span> lazy<span class="token punctuation">{</span>
        <span class="token function">loadConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name">fun</span> <span class="token function">loadConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>String<span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;惰性加载&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="is-和-as" tabindex="-1"><a class="header-anchor" href="#is-和-as" aria-hidden="true">#</a> is 和 as</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 使用 is 判断 是否某个类型</span>

<span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

a <span class="token keyword">is</span> <span class="token class-name">String</span>

<span class="token comment">// 使用as 强制转换</span>

open <span class="token keyword">class</span> <span class="token class-name">a</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">b</span> <span class="token punctuation">:</span><span class="token type-list"><span class="token class-name">a</span><span class="token record-arguments"><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">val</span> b <span class="token operator">=</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 把子类转为父类，</span>
b <span class="token keyword">as</span> <span class="token class-name">a</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不安全的转换" tabindex="-1"><a class="header-anchor" href="#不安全的转换" aria-hidden="true">#</a> 不安全的转换</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 无法转换</span>
<span class="token class-name"><span class="token keyword">var</span></span> a <span class="token punctuation">:</span>String <span class="token operator">=</span> b <span class="token keyword">as</span> <span class="token class-name">String</span><span class="token punctuation">;</span>

<span class="token comment">// null 不能转换为 string</span>
<span class="token class-name"><span class="token keyword">var</span></span> a<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> b <span class="token keyword">as</span> <span class="token class-name">String<span class="token punctuation">?</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安全转换" tabindex="-1"><a class="header-anchor" href="#安全转换" aria-hidden="true">#</a> 安全转换</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> a<span class="token punctuation">:</span>String<span class="token punctuation">?</span> <span class="token operator">=</span> b <span class="token keyword">as</span><span class="token punctuation">?</span> String
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="与c-的-as-不同" tabindex="-1"><a class="header-anchor" href="#与c-的-as-不同" aria-hidden="true">#</a> 与C#的 as 不同</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// kotlin 的as 无需再次赋值，比如</span>

<span class="token punctuation">(</span>b <span class="token keyword">as</span> <span class="token class-name">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 之后调用b即可</span>

<span class="token comment">// c#如下, 需要使用新的对象赋值</span>

<span class="token class-name"><span class="token keyword">var</span></span> x <span class="token operator">=</span> <span class="token punctuation">(</span>b <span class="token keyword">as</span> <span class="token class-name">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any是所有 类的超类</p><p>相当于C#的object</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Any</span>
<span class="token return-type class-name">fun</span> <span class="token function">anyclass</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">name</span><span class="token punctuation">:</span>Any<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>name <span class="token keyword">is</span> <span class="token class-name">String</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名对象-objcet" tabindex="-1"><a class="header-anchor" href="#匿名对象-objcet" aria-hidden="true">#</a> 匿名对象，objcet</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>open <span class="token keyword">class</span> <span class="token class-name">objectTest</span> <span class="token punctuation">{</span>
    open <span class="token return-type class-name">fun</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是原生对象&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 匿名对象继承 objectTest</span>
    <span class="token class-name"><span class="token keyword">var</span></span> overrideObject <span class="token operator">=</span> <span class="token keyword">object</span><span class="token punctuation">:</span><span class="token function">objectTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是一个对象，继承 objectTest类&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    overrideObject<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明一个对象" tabindex="-1"><a class="header-anchor" href="#声明一个对象" aria-hidden="true">#</a> 声明一个对象</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    <span class="token class-name"><span class="token keyword">var</span></span> objectCreated <span class="token operator">=</span> <span class="token keyword">object</span><span class="token punctuation">{</span>
        <span class="token class-name">val</span> name <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">val</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">println</span><span class="token punctuation">(</span>objectCreated<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="companion半生对象-像是其他语言的static" tabindex="-1"><a class="header-anchor" href="#companion半生对象-像是其他语言的static" aria-hidden="true">#</a> companion半生对象，像是其他语言的static</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">companionClass</span><span class="token punctuation">{</span>
    <span class="token return-type class-name">companion</span> <span class="token keyword">object</span><span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> config <span class="token operator">=</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">;</span>

        <span class="token return-type class-name">fun</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">_config</span><span class="token punctuation">:</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>
            config <span class="token operator">=</span> _config
        <span class="token punctuation">}</span>

        fun <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name"></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
    companionClass<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&quot;config已经加载&quot;</span><span class="token punctuation">)</span>
    companionClass<span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name"></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-class-数据类" tabindex="-1"><a class="header-anchor" href="#data-class-数据类" aria-hidden="true">#</a> data class 数据类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 数据类必须有最少一个参数</span>
<span class="token comment">// 数据类，仅提供数据，比如获取的json，xml等需要赋值的类</span>
data <span class="token keyword">class</span> <span class="token class-name">dataClass</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> x<span class="token punctuation">:</span>Int<span class="token punctuation">,</span><span class="token class-name"><span class="token keyword">var</span></span> y<span class="token punctuation">:</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;dataClass(x=$x, y=$y)&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制-data-class" tabindex="-1"><a class="header-anchor" href="#复制-data-class" aria-hidden="true">#</a> 复制 data class</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>    <span class="token class-name">val</span> data <span class="token operator">=</span><span class="token function">dataClass</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span>
    <span class="token class-name"><span class="token keyword">var</span></span> dataClassCopy <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>dataClassCopy<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="operator-运算符重载-类本身不支持" tabindex="-1"><a class="header-anchor" href="#operator-运算符重载-类本身不支持" aria-hidden="true">#</a> operator - 运算符重载，类本身不支持 + += - -=</h3><h3 id="但是可以重载运算符" tabindex="-1"><a class="header-anchor" href="#但是可以重载运算符" aria-hidden="true">#</a> 但是可以重载运算符</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">operatorClass</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> max<span class="token punctuation">:</span>Int<span class="token punctuation">,</span><span class="token class-name"><span class="token keyword">var</span></span> min <span class="token punctuation">:</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 重写 plus 方法</span>
    <span class="token keyword">operator</span> <span class="token return-type class-name">fun</span> <span class="token function">plus</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">other</span><span class="token punctuation">:</span>operatorClass<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">operatorClass</span><span class="token punctuation">(</span>max <span class="token operator">+</span> other<span class="token punctuation">.</span>max<span class="token punctuation">,</span>min <span class="token operator">+</span> other<span class="token punctuation">.</span>min<span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;operatorClass(max=$max, min=$min)&quot;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token punctuation">(</span><span class="token function">operatorClass</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">operatorClass</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="enum-枚举" tabindex="-1"><a class="header-anchor" href="#enum-枚举" aria-hidden="true">#</a> enum 枚举</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">enum</span> <span class="token class-name"><span class="token keyword">class</span></span> enumClass<span class="token punctuation">{</span>
    东<span class="token punctuation">,</span>
    南<span class="token punctuation">,</span>
    西<span class="token punctuation">,</span>
    北
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化枚举" tabindex="-1"><a class="header-anchor" href="#初始化枚举" aria-hidden="true">#</a> 初始化枚举</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">enum</span> <span class="token class-name"><span class="token keyword">class</span></span> <span class="token function">enumClass</span><span class="token punctuation">(</span><span class="token class-name">val</span> <span class="token keyword">value</span> <span class="token punctuation">:</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    东<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    南<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    西<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    北<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
enumClass<span class="token punctuation">.</span>南<span class="token punctuation">.</span>also <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举方法" tabindex="-1"><a class="header-anchor" href="#枚举方法" aria-hidden="true">#</a> 枚举方法</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">enum</span> <span class="token class-name"><span class="token keyword">class</span></span> <span class="token function">enumClass</span><span class="token punctuation">(</span><span class="token class-name">val</span> <span class="token keyword">value</span> <span class="token punctuation">:</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    东<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    南<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    西<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    北<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">fun</span> <span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">value</span> <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>

    enumClass<span class="token punctuation">.</span>南<span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sealed-密封类-某种意义上来说是enum的拓展" tabindex="-1"><a class="header-anchor" href="#sealed-密封类-某种意义上来说是enum的拓展" aria-hidden="true">#</a> sealed - 密封类，某种意义上来说是enum的拓展</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">sealedClass</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">object</span></span> error<span class="token punctuation">:</span><span class="token function">sealedClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span>  <span class="token class-name">success</span><span class="token punctuation">(</span><span class="token class-name">val</span> notify<span class="token punctuation">:</span>String<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">sealedClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// 使用 sealed</span>
<span class="token keyword">class</span> <span class="token class-name">sealedUse</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span><span class="token punctuation">:</span>sealedClass<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// when语句判断value的类型，然后做出相应动作</span>
        <span class="token class-name">val</span> status <span class="token operator">=</span> <span class="token keyword">when</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 如果 = erro </span>
            <span class="token keyword">is</span> <span class="token class-name">sealedClass<span class="token punctuation">.</span>error</span> <span class="token operator">-&gt;</span><span class="token string">&quot;失败&quot;</span>
            <span class="token comment">// 如果 = success </span>
            <span class="token keyword">is</span> <span class="token class-name">sealedClass<span class="token punctuation">.</span>success</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">value</span> <span class="token keyword">as</span> <span class="token class-name">sealedClass<span class="token punctuation">.</span>success</span><span class="token punctuation">)</span><span class="token punctuation">.</span>notify
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 泛型</span>
<span class="token keyword">class</span> <span class="token generic-method"><span class="token function">fanClass</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> age<span class="token punctuation">:</span>T<span class="token punctuation">)</span><span class="token punctuation">{</span>

    init<span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 再次声明一个泛型</span>
    <span class="token comment">// 泛型函数</span>
    <span class="token return-type class-name">fun <span class="token punctuation">&lt;</span>R<span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">value</span> <span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>R<span class="token punctuation">)</span> <span class="token punctuation">:</span> R<span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">createFan</span><span class="token punctuation">{</span>

    <span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">val</span> fan<span class="token punctuation">:</span>fanClass<span class="token operator">&lt;</span>Int<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">fanClass</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>

        <span class="token comment">// 他的返回值是一个泛型lambda，而lambda如果是最后一个参数可以用括号代替()</span>
        <span class="token class-name">val</span> fanRtrun <span class="token operator">=</span> fan<span class="token punctuation">.</span>create<span class="token punctuation">{</span>
         fan<span class="token punctuation">.</span>age <span class="token operator">*</span> <span class="token number">361</span>   
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多参数vararg-c-里面的param" tabindex="-1"><a class="header-anchor" href="#多参数vararg-c-里面的param" aria-hidden="true">#</a> 多参数vararg,  C#里面的param</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 多个参数</span>
<span class="token keyword">class</span> <span class="token generic-method"><span class="token function">paramListClass</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>vararg <span class="token class-name"><span class="token keyword">var</span></span> listName<span class="token punctuation">:</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 用泛型给array赋值时必须加 out</span>

    <span class="token class-name">val</span> listParam <span class="token punctuation">:</span>Array<span class="token operator">&lt;</span><span class="token keyword">out</span> T<span class="token operator">&gt;</span> <span class="token operator">=</span> listName<span class="token punctuation">;</span>

    <span class="token comment">//</span>

    <span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">index</span><span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">:</span>T<span class="token punctuation">{</span>
        <span class="token keyword">return</span> listParam<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
    <span class="token function">paramListClass</span><span class="token punctuation">(</span><span class="token number">435</span><span class="token punctuation">,</span><span class="token number">345</span><span class="token punctuation">,</span><span class="token number">346</span><span class="token punctuation">,</span><span class="token number">236</span><span class="token punctuation">,</span><span class="token number">46</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span>run<span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span> item <span class="token keyword">in</span> <span class="token number">0</span> <span class="token range operator">..</span> <span class="token number">5</span><span class="token punctuation">)</span>
            <span class="token function">mian</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协变-out-逆变in" tabindex="-1"><a class="header-anchor" href="#协变-out-逆变in" aria-hidden="true">#</a> 协变 out， 逆变in</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>公式：

协变：IFoo<span class="token operator">&lt;</span>父类<span class="token operator">&gt;</span> <span class="token operator">=</span> IFoo<span class="token operator">&lt;</span>子类<span class="token operator">&gt;</span>；

逆变：IBar<span class="token operator">&lt;</span>子类<span class="token operator">&gt;</span> <span class="token operator">=</span> IBar<span class="token operator">&lt;</span>父类<span class="token operator">&gt;</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="协变-逆变在array中使用" tabindex="-1"><a class="header-anchor" href="#协变-逆变在array中使用" aria-hidden="true">#</a> 协变 逆变在array中使用</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 协变和逆变</span>
<span class="token keyword">class</span> <span class="token class-name">UseArray<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token comment">// 插入使用 in ， 访问使用 out</span>
    <span class="token comment">// 父继承子类使用out，子类继承父类使用in</span>
    <span class="token class-name">val</span> list<span class="token punctuation">:</span>Array<span class="token operator">&lt;</span><span class="token keyword">in</span> T<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


    <span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token keyword">set</span><span class="token punctuation">:</span>T<span class="token punctuation">)</span><span class="token punctuation">{</span>
        list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">set</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 调用;</span>
<span class="token generic-method"><span class="token function">UseArray</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>String<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
    it<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;String2&quot;</span><span class="token punctuation">;</span>
    it<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;String3&quot;</span><span class="token punctuation">;</span>
    it<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;String4&quot;</span><span class="token punctuation">;</span>
    it<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;String5&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
    it<span class="token punctuation">.</span><span class="token function">mian</span><span class="token punctuation">(</span><span class="token string">&quot;第一个String&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断-泛型类型-reified-使用reified必须使用-inline" tabindex="-1"><a class="header-anchor" href="#判断-泛型类型-reified-使用reified必须使用-inline" aria-hidden="true">#</a> 判断 泛型类型 reified ， 使用reified必须使用 inline</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">reifiedClass<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token comment">// reified 必须是 内联函数(inline)</span>
    inline <span class="token return-type class-name">fun <span class="token punctuation">&lt;</span>reified T<span class="token punctuation">&gt;</span></span> <span class="token function">createOrRandow</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">create</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span>T<span class="token punctuation">)</span><span class="token punctuation">:</span>T<span class="token punctuation">{</span>
        <span class="token class-name">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span>
            <span class="token function">dog</span><span class="token punctuation">(</span><span class="token string">&quot;dock&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">man</span><span class="token punctuation">(</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token comment">// @shuffled 洗牌</span>
        <span class="token class-name">val</span> random <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">shuffled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">?.</span><span class="token function">firstOrNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 判断是否 指定类型，如果是则为true，否则使用自定义lambda</span>
        <span class="token keyword">return</span> <span class="token keyword">if</span><span class="token punctuation">(</span>random <span class="token keyword">is</span> <span class="token class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            random<span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

open <span class="token keyword">class</span> <span class="token class-name">Hub</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">dog</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">var</span></span> age<span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">Hub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;dog(name=&#39;$name&#39;, age=$age)&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">man</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> name<span class="token punctuation">:</span>String<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">var</span></span> status<span class="token punctuation">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">Hub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;man(name=&#39;$name&#39;, status=$status)&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用上面的类</span>
<span class="token keyword">class</span> <span class="token class-name">useReified</span><span class="token punctuation">{</span>

    <span class="token comment">//</span>
    <span class="token return-type class-name">fun</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token generic-method"><span class="token function">reifiedClass</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Hub<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>createOrRandow <span class="token punctuation">{</span>
            <span class="token function">man</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span>run<span class="token punctuation">{</span>
            <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数式接口-fun-interface" tabindex="-1"><a class="header-anchor" href="#函数式接口-fun-interface" aria-hidden="true">#</a> 函数式接口 fun interface</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">funInterface</span><span class="token punctuation">{</span>

    <span class="token comment">/*
    * 函数式 接口
    * */</span>
    fun <span class="token keyword">interface</span> <span class="token class-name">isCode</span><span class="token punctuation">{</span>
        <span class="token return-type class-name">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>String<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token return-type class-name">fun</span> <span class="token function">mianLambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 使用lambda调用函数式接口</span>
        <span class="token class-name">val</span> createCode <span class="token operator">=</span> isCode<span class="token punctuation">{</span>
            <span class="token string">&quot;函数式接口，使用lambda调用&quot;</span>
        <span class="token punctuation">}</span>

        createCode<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token comment">// object 调用</span>
    <span class="token return-type class-name">fun</span> <span class="token function">mianVal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">val</span> createCode <span class="token operator">=</span> <span class="token keyword">object</span><span class="token punctuation">:</span>isCode<span class="token punctuation">{</span>

            <span class="token keyword">override</span> <span class="token return-type class-name">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>String<span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">&quot;函数式接口，object调用&quot;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        createCode<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">::</span>println<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展函数" tabindex="-1"><a class="header-anchor" href="#拓展函数" aria-hidden="true">#</a> 拓展函数</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">expandFun</span> <span class="token punctuation">{</span>

    <span class="token comment">// companion,伴生对象，等同于其他语言的static</span>
    <span class="token return-type class-name">companion</span> <span class="token keyword">object</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 拓展函数</span>
<span class="token return-type class-name">fun</span> expandFun<span class="token punctuation">.</span><span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;拓展函数&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 给companion添加拓展函数</span>
<span class="token return-type class-name">fun</span> expandFun<span class="token punctuation">.</span>Companion<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;给 companion添加拓展函数&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 泛型拓展</span>
<span class="token comment">// 拓展后所有类型都具有 ExpandFun</span>
<span class="token return-type class-name">fun <span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> T<span class="token punctuation">.</span><span class="token function">ExpandFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;泛型拓展函数&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可空拓展函数</span>
<span class="token comment">// 这里的 可空类型是会执行的</span>
<span class="token comment">/*
* 这里不会执行
* val a :String = null;
* a?.IsNullToNotify();
* */</span>
fun String<span class="token punctuation">?.</span><span class="token function">IsNullToNotify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token punctuation">?</span><span class="token punctuation">:</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inner-内部类" tabindex="-1"><a class="header-anchor" href="#inner-内部类" aria-hidden="true">#</a> inner 内部类</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 内部类</span>
<span class="token keyword">class</span> <span class="token class-name">innerClass</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> studio <span class="token operator">=</span> <span class="token string">&quot;visual studio &quot;</span><span class="token punctuation">;</span>
    inner <span class="token keyword">class</span> <span class="token class-name">innerSun</span><span class="token punctuation">{</span>
        <span class="token return-type class-name">fun</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// inner(内部类)，可用调用上级的属性、方法</span>
            <span class="token function">println</span><span class="token punctuation">(</span>studio<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="委托类-使用-by关键字" tabindex="-1"><a class="header-anchor" href="#委托类-使用-by关键字" aria-hidden="true">#</a> 委托类 使用 by关键字</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">BaseInterface</span><span class="token punctuation">{</span>
    fun <span class="token class-name">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">String</span><span class="token punctuation">;</span>
    fun <span class="token class-name">ToInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Int</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个类，用于实现BaseInterface</span>
<span class="token keyword">class</span> useBaseInterface<span class="token operator">:</span><span class="token class-name">BaseInterface</span><span class="token punctuation">{</span>
    override fun <span class="token class-name">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ToString Method&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    override fun <span class="token class-name">ToInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 委托， 把 BaseInterface 赋值给变量 B</span>
<span class="token keyword">class</span> <span class="token function">delegate</span><span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token class-name">B</span><span class="token operator">:</span><span class="token class-name">BaseInterface</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">BaseInterface</span> by <span class="token class-name">B</span> <span class="token punctuation">{</span>
 <span class="token punctuation">}</span>

<span class="token comment">// 调用， 先声明一个已经实现BaseInterface的类</span>
    val baseTo <span class="token operator">=</span> <span class="token function">useBaseInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用该类作为参数，即可调用BaseTo实现的方法</span>
    <span class="token function">delegate</span><span class="token punctuation">(</span>baseTo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span>
    <span class="token function">delegate</span><span class="token punctuation">(</span>baseTo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒加载-lazy配合-委托使用" tabindex="-1"><a class="header-anchor" href="#懒加载-lazy配合-委托使用" aria-hidden="true">#</a> 懒加载，lazy配合 委托使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 几种懒加载实现</span>
<span class="token comment">// 委托实现懒加载</span>
<span class="token keyword">class</span> delegateAndLazy <span class="token punctuation">{</span>
    val load by lazy<span class="token punctuation">{</span>
        <span class="token string">&quot;字符串类型&quot;</span>
    <span class="token punctuation">}</span>

    val loadTwo <span class="token operator">:</span><span class="token class-name">String</span> by lazy<span class="token punctuation">{</span>
        <span class="token string">&quot;字符串类型&quot;</span>
    <span class="token punctuation">}</span>

    val loadThree <span class="token operator">=</span> lazy<span class="token punctuation">{</span>
        <span class="token string">&quot;字符串类型&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
    <span class="token function">delegateAndLazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>
        it<span class="token punctuation">.</span>load<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        it<span class="token punctuation">.</span>loadTwo<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span>
        it<span class="token punctuation">.</span>loadThree<span class="token punctuation">.</span>run<span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="委托-映射类-通过字符串键属性名称" tabindex="-1"><a class="header-anchor" href="#委托-映射类-通过字符串键属性名称" aria-hidden="true">#</a> 委托， 映射类，通过字符串键属性名称</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 映射类</span>
<span class="token keyword">class</span> <span class="token function">myMap</span><span class="token punctuation">(</span>val map<span class="token operator">:</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Any</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 通过字符串键 属性名称</span>
    val name<span class="token operator">:</span><span class="token class-name">String</span> by map
    val age<span class="token operator">:</span><span class="token class-name">Int</span> by map

<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token function">myMap</span><span class="token punctuation">(</span><span class="token function">mapOf</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span> <span class="token keyword">to</span> <span class="token string">&quot; 当前字符串赋值给name，name的值&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span> <span class="token keyword">to</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>let<span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,180),g=[b];function f(h,y){return s(),a("div",null,g)}const x=n(m,[["render",f],["__file","index.html.vue"]]);export{x as default};
