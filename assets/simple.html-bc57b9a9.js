import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a as s}from"./app-dd0e30de.js";const i={},l=s(`<h1 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h1><h2 id="配置cmakelists-txt文件" tabindex="-1"><a class="header-anchor" href="#配置cmakelists-txt文件" aria-hidden="true">#</a> 配置CMakeLists.txt文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmake_minimum_required<span class="token punctuation">(</span>VERSION <span class="token number">3.26</span>.0<span class="token punctuation">)</span>

set<span class="token punctuation">(</span>CMAKE_EXPORT_COMPILE_COMMANDS ON<span class="token punctuation">)</span>
<span class="token comment"># 设置包的存放路径，否则cmake找不到</span>
list<span class="token punctuation">(</span>APPEND CMAKE_PREFIX_PATH <span class="token string">&quot;<span class="token variable">\${CMAKE_CURRENT_SOURCE_DIR}</span>/build/generators&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 寻找目录和子目录下所有的cpp文件</span>
file<span class="token punctuation">(</span>GLOB_RECURSE ALL_SOURCE <span class="token string">&quot;*.cpp&quot;</span> <span class="token string">&quot;*.c&quot;</span><span class="token punctuation">)</span>
file<span class="token punctuation">(</span>GLOB_RECURSE ALL_HEAD <span class="token string">&quot;*.hpp&quot;</span> <span class="token string">&quot;*.h&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 查找fmt库</span>
find_package<span class="token punctuation">(</span>fmt REQUIRED CONFIG<span class="token punctuation">)</span>
find_package<span class="token punctuation">(</span>rmlui REQUIRED CONFIG<span class="token punctuation">)</span>
PROJECT<span class="token punctuation">(</span>MemoryWord CXX<span class="token punctuation">)</span>

add_executable<span class="token punctuation">(</span>MemoryWord <span class="token variable">\${ALL_SOURCE}</span> <span class="token variable">\${ALL_HEAD}</span><span class="token punctuation">)</span>
<span class="token comment"># 链接</span>
target_link_libraries<span class="token punctuation">(</span>MemoryWord fmt::fmt<span class="token punctuation">)</span>
target_link_libraries<span class="token punctuation">(</span>MemoryWord rmlui::rmlui<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="profile配置" tabindex="-1"><a class="header-anchor" href="#profile配置" aria-hidden="true">#</a> profile配置</h2><blockquote><p>这里无需手动配置，直接使用conan命令生成即可</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[settings]
arch=x86_64
build_type=Release
os=Windows
# 微软编译器
compiler=msvc
# msvc编译器的版本
compiler.version=193
# cpp的版本
compiler.cppstd=17
# static dynamic应该时库的类型
compiler.runtime=dynamic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conanfile-txt" tabindex="-1"><a class="header-anchor" href="#conanfile-txt" aria-hidden="true">#</a> conanfile.txt</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[requires]
xxx...

[generators]
CMakeToolchain
CMakeDeps

[layout]
cmake_layout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建与我的系统匹配的配置文件" tabindex="-1"><a class="header-anchor" href="#创建与我的系统匹配的配置文件" aria-hidden="true">#</a> 创建与我的系统匹配的配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conan profile detect --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取默认配置的路径" tabindex="-1"><a class="header-anchor" href="#获取默认配置的路径" aria-hidden="true">#</a> 获取默认配置的路径</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conan profile path default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// conan <span class="token function">install</span> <span class="token builtin class-name">.</span> --output-folder<span class="token operator">=</span>build <span class="token parameter variable">--build</span><span class="token operator">=</span>missing
conan <span class="token function">install</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conan <span class="token function">install</span> <span class="token builtin class-name">.</span>
conan <span class="token function">install</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">build_type</span><span class="token operator">=</span>Debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建项目" tabindex="-1"><a class="header-anchor" href="#构建项目" aria-hidden="true">#</a> 构建项目</h2><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmake <span class="token parameter variable">--preset</span> conan-debug
cmake <span class="token parameter variable">--build</span> <span class="token parameter variable">--preset</span> conan-debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="release" tabindex="-1"><a class="header-anchor" href="#release" aria-hidden="true">#</a> release</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建release版本配置</span>
cmake <span class="token parameter variable">--preset</span> conan-release
<span class="token comment"># 生成Release项目</span>
cmake <span class="token parameter variable">--build</span> <span class="token parameter variable">--preset</span> conan-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置预设" tabindex="-1"><a class="header-anchor" href="#配置预设" aria-hidden="true">#</a> 配置预设</h2><blockquote><p>需配置预设，否则vs编辑器无法打开源文件</p></blockquote><p>vs code编辑器可以按<code>ctrl+shift+p</code>输入<code>Cmake: Select Configure Preset</code> 然后选择已有的预设</p>`,24),t=[l];function d(c,r){return n(),e("div",null,t)}const u=a(i,[["render",d],["__file","simple.html.vue"]]);export{u as default};
