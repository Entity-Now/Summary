import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a}from"./app-8c4720e2.js";const l={},d=a(`<h1 id="值标记" tabindex="-1"><a class="header-anchor" href="#值标记" aria-hidden="true">#</a> 值标记</h1><ul><li><code>%{}</code> 是 Premake5 中的字符串替换语法的标志。</li><li><code>cfg</code> 是一个预定义的 Lua 表，用于存储当前配置的信息。</li></ul><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{wks.name}
%{prj.location}
%{cfg.targetdir}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="已知令牌" tabindex="-1"><a class="header-anchor" href="#已知令牌" aria-hidden="true">#</a> 已知令牌</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wks.name
wks.location -- (location where the workspace/solution is written, not the premake-wks.lua file)

prj.name
prj.location -- (location where the project is written, not the premake-prj.lua file)
prj.language
prj.group

cfg.longname
cfg.shortname
cfg.kind
cfg.architecture
cfg.platform
cfg.system
cfg.buildcfg
cfg.buildtarget -- (see [target], below)
cfg.linktarget -- (see [target], below)
cfg.objdir

file.path
file.abspath
file.relpath
file.directory
file.reldirectory
file.name
file.basename -- (file part without extension)
file.extension -- (including &#39;.&#39;; eg &quot;.cpp&quot;)

-- These values are available on build and link targets
-- Replace [target] with one of &quot;cfg.buildtarget&quot; or &quot;cfg.linktarget&quot;
--   Eg: %{cfg.buildtarget.abspath}
[target].abspath
[target].relpath
[target].directory
[target].name
[target].basename -- (file part without extension)
[target].extension -- (including &#39;.&#39;; eg &quot;.cpp&quot;)
[target].bundlename
[target].bundlepath
[target].prefix
[target].suffix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),s=[d];function r(t,c){return i(),n("div",null,s)}const o=e(l,[["render",r],["__file","valueToken.html.vue"]]);export{o as default};
