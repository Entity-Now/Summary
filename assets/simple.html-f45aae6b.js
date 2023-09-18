import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a as s}from"./app-716fac87.js";const i="/images/Conan.png",l={},t=s(`<h1 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h1><h2 id="配置cmakelists-txt文件" tabindex="-1"><a class="header-anchor" href="#配置cmakelists-txt文件" aria-hidden="true">#</a> 配置CMakeLists.txt文件</h2><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.26.0</span><span class="token punctuation">)</span>

<span class="token function">PROJECT</span><span class="token punctuation">(</span>ConanTest<span class="token punctuation">)</span>
<span class="token comment"># 寻找ZLIB库</span>
<span class="token keyword">find_package</span><span class="token punctuation">(</span>ZLIB REQUIRED<span class="token punctuation">)</span>

<span class="token keyword">add_executable</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_NAME</span><span class="token punctuation">}</span> src/main.cpp<span class="token punctuation">)</span>

<span class="token comment"># 链接ZLIB库，这里的变量（ZLIB_LIBRARIES）在ZBIBconfig.cmake里面</span>
<span class="token comment"># 变量PROJECT_NAME是项目名称</span>
<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span><span class="token punctuation">\${</span><span class="token variable">PROJECT_NAME</span><span class="token punctuation">}</span> <span class="token punctuation">\${</span>ZLIB_LIBRARIES<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="profile配置" tabindex="-1"><a class="header-anchor" href="#profile配置" aria-hidden="true">#</a> profile配置</h2><blockquote><p>这里无需手动配置，直接使用conan命令生成即可</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[settings]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cmake --preset conan-releasecmake --build --preset conan-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>下面的代码好像过时了</p></div><h2 id="构建-1" tabindex="-1"><a class="header-anchor" href="#构建-1" aria-hidden="true">#</a> 构建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># </span>
came path <span class="token parameter variable">-G</span> <span class="token string">&quot;vs的版本&quot;</span>  <span class="token parameter variable">-DCMAKE_TOOLCHAIN_FILE</span><span class="token operator">=</span>你自己的build路径<span class="token punctuation">\\</span>conan_toolchain.cmake <span class="token parameter variable">-DCMAKE_POLICY_DEFAULT_CMP0091</span><span class="token operator">=</span>NEW

cmake <span class="token punctuation">..</span> <span class="token parameter variable">-G</span> <span class="token string">&quot;Visual Studio 17 2022&quot;</span> <span class="token parameter variable">-DCMAKE_TOOLCHAIN_FILE</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>Languages<span class="token punctuation">\\</span>conan<span class="token punctuation">\\</span>build<span class="token punctuation">\\</span>conan_toolchain.cmake <span class="token parameter variable">-DCMAKE_POLICY_DEFAULT_CMP0091</span><span class="token operator">=</span>NEW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="conan" tabindex="0" loading="lazy"><figcaption>conan</figcaption></figure><h2 id="生成" tabindex="-1"><a class="header-anchor" href="#生成" aria-hidden="true">#</a> 生成</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 此命令在build目录里面执行</span>
cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--config</span> Release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置预设" tabindex="-1"><a class="header-anchor" href="#配置预设" aria-hidden="true">#</a> 配置预设</h2><blockquote><p>需配置预设，否则vs编辑器无法打开源文件</p></blockquote><p>vs code编辑器可以按<code>ctrl+shift+p</code>输入<code>Cmake: Select Configure Preset</code> 然后选择已有的预设</p>`,25),c=[t];function d(r,o){return n(),e("div",null,c)}const v=a(l,[["render",d],["__file","simple.html.vue"]]);export{v as default};
