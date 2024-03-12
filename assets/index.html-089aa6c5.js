import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-d39e34ec.js";const i={},t=e(`<h1 id="premake5-包管理器" tabindex="-1"><a class="header-anchor" href="#premake5-包管理器" aria-hidden="true">#</a> premake5 包管理器</h1><h2 id="生成" tabindex="-1"><a class="header-anchor" href="#生成" aria-hidden="true">#</a> 生成</h2><blockquote><p><code>premake5 [平台]</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>premake5 vs2022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清理生成的文件" tabindex="-1"><a class="header-anchor" href="#清理生成的文件" aria-hidden="true">#</a> 清理生成的文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>premake5 clean <span class="token comment"># 清理默认源</span>
premake5 <span class="token assign-left variable">config</span><span class="token operator">=</span>release clean <span class="token comment"># 清理指定配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第一个项目" tabindex="-1"><a class="header-anchor" href="#第一个项目" aria-hidden="true">#</a> 第一个项目</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* hello.c */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="premake5-脚本" tabindex="-1"><a class="header-anchor" href="#premake5-脚本" aria-hidden="true">#</a> premake5 脚本</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- premake5.lua</span>
workspace <span class="token string">&quot;MemorizingWords&quot;</span>
    <span class="token function">configurations</span> <span class="token punctuation">{</span> <span class="token string">&quot;Debug&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Release&quot;</span> <span class="token punctuation">}</span>
    startproject <span class="token string">&quot;MemorizingWords&quot;</span>  <span class="token comment">-- 启动项目</span>
    architecture <span class="token string">&quot;x64&quot;</span> <span class="token comment">-- 系统架构</span>
    cppdialect <span class="token string">&quot;c++17&quot;</span> <span class="token comment">-- 方言</span>

project <span class="token string">&quot;MemorizingWords&quot;</span>
    kind <span class="token string">&quot;ConsoleApp&quot;</span>
    language <span class="token string">&quot;C++&quot;</span>
    <span class="token comment">-- 设置obj文件的输出目录</span>
    objdir <span class="token string">&quot;bin/%{cfg.platform}_%{cfg.buildcfg}&quot;</span>
    <span class="token comment">-- 设置编译文件的输出目录</span>
    targetdir <span class="token string">&quot;bin/%{cfg.buildcfg}&quot;</span>
    <span class="token comment">-- 设置源文件等</span>
    <span class="token function">files</span><span class="token punctuation">{</span>
        <span class="token string">&quot;src/**.h&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;src/**.cpp&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">--[[ ImGui ]]</span> <span class="token comment">--</span>
        <span class="token string">&quot;vendor/imgui/**.h&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;vendor/imgui/**.cpp&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">-- 包含头文件的路径</span>
    <span class="token function">includedirs</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;vendor&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token function">links</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;d3d12&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;d3dcompiler&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;dxgi&quot;</span>
    <span class="token punctuation">}</span>
    filter <span class="token string">&quot;configurations:Debug&quot;</span>
        <span class="token function">defines</span> <span class="token punctuation">{</span> <span class="token string">&quot;DEBUG&quot;</span> <span class="token punctuation">}</span>
        runtime <span class="token string">&quot;Debug&quot;</span> <span class="token comment">-- 运行环境</span>
        optimize <span class="token string">&quot;On&quot;</span> <span class="token comment">-- 指定项目配置时使用的优化级别</span>
        symbols <span class="token string">&quot;On&quot;</span> <span class="token comment">-- 构建时生成调试符号</span>

    filter <span class="token string">&quot;configurations:Release&quot;</span>
        <span class="token function">defines</span> <span class="token punctuation">{</span> <span class="token string">&quot;NDEBUG&quot;</span> <span class="token punctuation">}</span>
        runtime <span class="token string">&quot;Release&quot;</span>
        optimize <span class="token string">&quot;On&quot;</span>
        symbols <span class="token string">&quot;Off&quot;</span> <span class="token comment">-- 不生成调试符号</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,p){return s(),a("div",null,o)}const r=n(i,[["render",c],["__file","index.html.vue"]]);export{r as default};
