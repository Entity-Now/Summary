import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-17a4fc19.js";const o={},t=e(`<h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入整个模块</span>
<span class="token keyword">import</span> math

<span class="token comment"># 导入特定内容</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> sqrt

<span class="token comment"># 导入模块并且起别名</span>
<span class="token keyword">import</span> math <span class="token keyword">as</span> m

<span class="token comment"># 导入模块中的所有内容</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2><blockquote><p>使用<code>__all__</code>变量定义导出内容，不定义则默认导出所有内容</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># my_module.py</span>
__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;bar&quot;</span>

<span class="token keyword">def</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;baz&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块的路径搜索" tabindex="-1"><a class="header-anchor" href="#模块的路径搜索" aria-hidden="true">#</a> 模块的路径搜索</h2><p>当你导入一个模块时，Python 会按照以下顺序查找模块：</p><ol><li><p>当前目录：Python 首先会在当前脚本所在的目录中查找模块。</p></li><li><p>环境变量 PYTHONPATH：如果当前目录中没有找到，Python 会查找 PYTHONPATH 中指定的路径。</p></li><li><p>标准库路径：如果仍然没有找到，Python 会查找标准库路径。</p></li><li><p>第三方库路径：最后，Python 会查找已安装的第三方库路径。</p></li><li><p>你可以通过 sys.path 查看 Python 的模块搜索路径：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">print</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="相对导入和绝对导入" tabindex="-1"><a class="header-anchor" href="#相对导入和绝对导入" aria-hidden="true">#</a> 相对导入和绝对导入</h3><ol><li><p>相对导入</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">from</span> <span class="token punctuation">.</span>module1 <span class="token keyword">import</span> function1  <span class="token comment"># 从当前包的 module1 导入</span>
    <span class="token keyword">from</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>subpackage<span class="token punctuation">.</span>module2 <span class="token keyword">import</span> function2  <span class="token comment"># 从上级包的 subpackage 导入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>绝对导入</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">from</span> my_package<span class="token punctuation">.</span>module1 <span class="token keyword">import</span> function1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,11),i=[t];function p(l,c){return s(),a("div",null,i)}const u=n(o,[["render",p],["__file","module.html.vue"]]);export{u as default};
