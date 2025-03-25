import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as o,d as n,e as s,b as p,a as l}from"./app-17a4fc19.js";const c={},r=n("h1",{id:"maui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maui","aria-hidden":"true"},"#"),s(" maui")],-1),d=n("h2",{id:"windows-title-bar-隐藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-title-bar-隐藏","aria-hidden":"true"},"#"),s(" windows title bar 隐藏")],-1),u={href:"http://xn--6kqwhu42f03ierdpt1c.net",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token preprocessor property">#<span class="token directive keyword">if</span> </span><span class="token return-type class-name">WINDOWS</span>
    builder<span class="token punctuation">.</span><span class="token function">ConfigureLifecycleEvents</span><span class="token punctuation">(</span>events <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        events<span class="token punctuation">.</span><span class="token function">AddWindows</span><span class="token punctuation">(</span>windows <span class="token operator">=&gt;</span>
            windows<span class="token punctuation">.</span><span class="token function">OnWindowCreated</span><span class="token punctuation">(</span>window <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> presenter <span class="token operator">=</span> window<span class="token punctuation">?.</span>AppWindow<span class="token punctuation">.</span>Presenter<span class="token punctuation">;</span>
                <span class="token keyword">switch</span> <span class="token punctuation">(</span>presenter<span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">case</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>Windowing<span class="token punctuation">.</span>OverlappedPresenter</span> overlappedPresenter<span class="token punctuation">:</span>
                        <span class="token comment">// 以下属性必须全部声明才能生效</span>
                        overlappedPresenter<span class="token punctuation">.</span>IsMaximizable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        overlappedPresenter<span class="token punctuation">.</span>IsResizable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        overlappedPresenter<span class="token punctuation">.</span>IsMinimizable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        overlappedPresenter<span class="token punctuation">.</span><span class="token function">SetBorderAndTitleBar</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">//overlappedPresenter.Maximize();</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token preprocessor property">#<span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#if WINDOWS
            builder.ConfigureLifecycleEvents(events =&gt;
            {
                events.AddWindows(windows =&gt;
                    windows.OnWindowCreated(window =&gt;
                    {
                        
                        window.SetTitleBar(new Microsoft.UI.Xaml.Controls.Grid());
                        window.ExtendsContentIntoTitleBar = true;
                        if (window?.AppWindow.Presenter is OverlappedPresenter pre)
                        {
                            pre.IsMaximizable = false;
                            pre.IsResizable = false;
                            pre.IsMinimizable = false;
                            pre.SetBorderAndTitleBar(false, false);
                        }
                    }));
            });
#endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置当前的条件语句为windows" tabindex="-1"><a class="header-anchor" href="#设置当前的条件语句为windows" aria-hidden="true">#</a> 设置当前的条件语句为WINDOWS</h2><blockquote><p>打开项目的解决方案<strong>xxx.csproj</strong>，然后在<strong>PropertyGroup</strong>元素中添加<strong>TargetFramework</strong>子元素，并设置值为<strong>windows</strong></p></blockquote>`,5);function k(m,b){const a=t("ExternalLinkIcon");return i(),o("div",null,[r,d,n("blockquote",null,[n("p",null,[s("在program中添加，"),n("a",u,[s("此代码适用于.net"),p(a)]),s(" 8.0")])]),v])}const h=e(c,[["render",k],["__file","maui.html.vue"]]);export{h as default};
