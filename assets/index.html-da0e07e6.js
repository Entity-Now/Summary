import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-c4947a11.js";const t={},i=e(`<h1 id="premake5-包管理器" tabindex="-1"><a class="header-anchor" href="#premake5-包管理器" aria-hidden="true">#</a> premake5 包管理器</h1><h2 id="生成" tabindex="-1"><a class="header-anchor" href="#生成" aria-hidden="true">#</a> 生成</h2><blockquote><p><code>premake5 [平台]</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>premake5 vs2022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清理生成的文件" tabindex="-1"><a class="header-anchor" href="#清理生成的文件" aria-hidden="true">#</a> 清理生成的文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>premake5 clean <span class="token comment"># 清理默认源</span>
premake5 <span class="token assign-left variable">config</span><span class="token operator">=</span>release clean <span class="token comment"># 清理指定配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第一个项目" tabindex="-1"><a class="header-anchor" href="#第一个项目" aria-hidden="true">#</a> 第一个项目</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* hello.c */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="premake5-脚本" tabindex="-1"><a class="header-anchor" href="#premake5-脚本" aria-hidden="true">#</a> premake5 脚本</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- premake5.lua</span>
workspace <span class="token string">&quot;HelloWorld&quot;</span> <span class="token comment">-- 解决方案名称</span>
   <span class="token function">configurations</span> <span class="token punctuation">{</span> <span class="token string">&quot;Debug&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Release&quot;</span> <span class="token punctuation">}</span> <span class="token comment">-- 定义配置</span>

project <span class="token string">&quot;HelloWorld&quot;</span> <span class="token comment">-- 项目名</span>
   kind <span class="token string">&quot;ConsoleApp&quot;</span> <span class="token comment">-- 类型</span>
   language <span class="token string">&quot;C&quot;</span>      <span class="token comment">-- c语言</span>
   targetdir <span class="token string">&quot;bin/%{cfg.buildcfg}&quot;</span>

   <span class="token function">files</span> <span class="token punctuation">{</span> <span class="token string">&quot;**.h&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**.c&quot;</span> <span class="token punctuation">}</span> <span class="token comment">-- 包含的文件</span>

   filter <span class="token string">&quot;configurations:Debug&quot;</span> <span class="token comment">-- 配置</span>
      <span class="token function">defines</span> <span class="token punctuation">{</span> <span class="token string">&quot;DEBUG&quot;</span> <span class="token punctuation">}</span>   <span class="token comment">-- 定义</span>
      symbols <span class="token string">&quot;On&quot;</span>  <span class="token comment">-- </span>

   filter <span class="token string">&quot;configurations:Release&quot;</span>
      <span class="token function">defines</span> <span class="token punctuation">{</span> <span class="token string">&quot;NDEBUG&quot;</span> <span class="token punctuation">}</span>
      optimize <span class="token string">&quot;On&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[i];function c(l,p){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
