import{_ as n,o as s,c as a,e as t}from"./app.a158ac49.js";const p={},o=t(`<h1 id="uniapp-微信端" tabindex="-1"><a class="header-anchor" href="#uniapp-微信端" aria-hidden="true">#</a> uniApp - 微信端</h1><div class="custom-container tip"><p>微信端的配置</p></div><h2 id="manifest-配置" tabindex="-1"><a class="header-anchor" href="#manifest-配置" aria-hidden="true">#</a> manifest 配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;mp-weixin&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 小程序特有相关 */</span>
    <span class="token property">&quot;appid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小程序id&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;setting&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;urlCheck&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;postcss&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minified&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;es6&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;usingComponents&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 懒加载插件</span>
    <span class="token property">&quot;lazyCodeLoading&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;requiredComponents&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;requiredBackgroundModes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;audio&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sitemapLocation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sitemap.json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json-扩张配置" tabindex="-1"><a class="header-anchor" href="#package-json-扩张配置" aria-hidden="true">#</a> package.json 扩张配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">/**
     * package.json其它原有配置 
     * 拷贝代码后请去掉注释！
     */</span>
    <span class="token property">&quot;uni-app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 扩展配置</span>
        <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;custom-platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//自定义编译平台配置，可通过cli方式调用</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;自定义扩展名称&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在HBuilderX中会显示在 运行/发行 菜单中</span>
                <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效</span>
                <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//环境变量</span>
                    <span class="token property">&quot;UNI_PLATFORM&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//基准平台</span>
                    <span class="token property">&quot;MY_TEST&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// ... 其他自定义环境变量</span>
                 <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;define&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//自定义条件编译</span>
                    <span class="token property">&quot;CUSTOM-CONST&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//自定义条件编译常量，建议为大写</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件编译" tabindex="-1"><a class="header-anchor" href="#条件编译" aria-hidden="true">#</a> 条件编译</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// #ifdef H5</span>
<span class="token constant">H5</span>平台通用代码（含微信服务号）
<span class="token comment">// #endif</span>
<span class="token comment">// #ifdef H5-WEIXIN</span>
微信服务号特有代码
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行及发布项目" tabindex="-1"><a class="header-anchor" href="#运行及发布项目" aria-hidden="true">#</a> 运行及发布项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev:custom mp-weixin
<span class="token function">npm</span> run build:custom mp-weixin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pages-json-页面配置" tabindex="-1"><a class="header-anchor" href="#pages-json-页面配置" aria-hidden="true">#</a> pages.json 页面配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// 这里注册所有页面</span>
	<span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/xxx/xxx&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxx..title&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//模式配置，仅开发期间生效</span>
		<span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//当前激活的模式（list 的索引项）</span>
		<span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
				<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;大表哥商店&quot;</span><span class="token punctuation">,</span> <span class="token comment">//模式名称</span>
				<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/RdrView/index&quot;</span> <span class="token comment">//启动页面，必选</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;R星游戏管家&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F05454&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F5F5F5&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;app-plus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F05454&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// tab配置</span>
	<span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#30475E&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F05454&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;borderStyle&quot;</span><span class="token operator">:</span><span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F5F5F5&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Home.png&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Select/Home.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rdr商店预览&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/RdrView/index&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Shop.png&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Select/Shop.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;订单&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/Transaction/index&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Transaction.png&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Select/Transaction.png&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/User/User&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/User.png&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./static/Select/User.png&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
