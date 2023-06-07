import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,a}from"./app-c5491669.js";const n={},r=a(`<h1 id="预处理器" tabindex="-1"><a class="header-anchor" href="#预处理器" aria-hidden="true">#</a> #预处理器</h1><table><thead><tr><th>预处理器</th><th>说明</th></tr></thead><tbody><tr><td>#define</td><td>定义一个预处理器宏</td></tr><tr><td>#undef</td><td>取消宏定义</td></tr><tr><td></td><td></td></tr><tr><td>#if</td><td>预处理器中的条件命令</td></tr><tr><td>#ifdef</td><td>判断某个宏是否被定义</td></tr><tr><td>#ifndef</td><td>判断某个宏是否未被绑定</td></tr><tr><td>#elif</td><td>若#if, #ifdef, #ifndef或前面的#elif条件不满足, 则执行#elif之后的语句, 相当于C语法中的else-if</td></tr><tr><td>#else</td><td>与#if, #ifdef, #ifndef对应, 若这些条件不满足, 则执行#else之后的语句, 相当于C语法中的else</td></tr><tr><td>#endif</td><td>#if, #ifdef, #ifndef这些条件命令的结束标志.</td></tr><tr><td></td><td></td></tr><tr><td>#include</td><td>包含文件命令</td></tr><tr><td>#include_next</td><td>与#include相似, 但它有着特殊的用途</td></tr><tr><td></td><td></td></tr><tr><td>##</td><td>用于将它前后的两个 token 组合在一起转换成以这两个 token 为内容的字符串常量</td></tr><tr><td>#</td><td>它把其后的串变成用双引号包围的串</td></tr><tr><td>#line</td><td>标记该语句所在的行号</td></tr><tr><td>#pragma</td><td>说明编辑器信息</td></tr><tr><td>#warning</td><td>显示编辑器警告</td></tr><tr><td>#error</td><td>显示编辑器错误信息</td></tr></tbody></table><h2 id="预处理的文法" tabindex="-1"><a class="header-anchor" href="#预处理的文法" aria-hidden="true">#</a> 预处理的文法</h2><blockquote><p>#command name(...) tokens(...)</p></blockquote><ul><li>command 预处理命令的名称</li><li>name表示宏名称</li><li>tokens() 宏体，将替换宏名称的语句，语句中可以使用<code>\\</code>来换行。</li></ul><h2 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> #define</h2><h3 id="define字符串宏" tabindex="-1"><a class="header-anchor" href="#define字符串宏" aria-hidden="true">#</a> #define字符串宏</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">Max</span> <span class="token expression"><span class="token number">100</span><span class="token punctuation">;</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">S</span> <span class="token string">&quot;字符串宏，编译后将替换为此内容&quot;</span><span class="token expression"><span class="token punctuation">;</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数宏" tabindex="-1"><a class="header-anchor" href="#函数宏" aria-hidden="true">#</a> 函数宏</h3><p>带参数的宏也被称为函数宏，</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),s=[r];function i(c,l){return e(),d("div",null,s)}const f=t(n,[["render",i],["__file","define.html.vue"]]);export{f as default};
