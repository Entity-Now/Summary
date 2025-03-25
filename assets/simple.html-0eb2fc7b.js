import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-17a4fc19.js";const e={},o=t(`<h1 id="创建数据库并简单使用" tabindex="-1"><a class="header-anchor" href="#创建数据库并简单使用" aria-hidden="true">#</a> 创建数据库并简单使用</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> tortoise <span class="token keyword">import</span> Tortoise<span class="token punctuation">,</span> run_async
<span class="token keyword">from</span> models <span class="token keyword">import</span> Author<span class="token punctuation">,</span> Book  <span class="token comment"># 假设你已经定义了Author和Book模型</span>

<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_instances</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 初始化数据库连接</span>
    <span class="token keyword">await</span> Tortoise<span class="token punctuation">.</span>init<span class="token punctuation">(</span>
        db_url<span class="token operator">=</span><span class="token string">&#39;sqlite://db.sqlite3&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># 这里使用 SQLite 数据库</span>
        modules<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;models&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">await</span> Tortoise<span class="token punctuation">.</span>generate_schemas<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 创建并保存作者</span>
    author <span class="token operator">=</span> <span class="token keyword">await</span> Author<span class="token punctuation">.</span>create<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;J.K. Rowling&#39;</span><span class="token punctuation">,</span> birth_date<span class="token operator">=</span><span class="token string">&#39;1965-07-31&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 创建并保存书籍，关联作者</span>
    <span class="token keyword">await</span> Book<span class="token punctuation">.</span>create<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&#39;Harry Potter and the Philosopher\\&#39;s Stone&#39;</span><span class="token punctuation">,</span>
                      published_date<span class="token operator">=</span><span class="token string">&#39;1997-06-26&#39;</span><span class="token punctuation">,</span>
                      author<span class="token operator">=</span>author<span class="token punctuation">)</span>

    <span class="token comment"># 查询并打印数据</span>
    book <span class="token operator">=</span> <span class="token keyword">await</span> Book<span class="token punctuation">.</span>get<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">&#39;Harry Potter and the Philosopher\\&#39;s Stone&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Book title: </span><span class="token interpolation"><span class="token punctuation">{</span>book<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token string">, Author: </span><span class="token interpolation"><span class="token punctuation">{</span>book<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token comment"># 关闭数据库连接</span>
    <span class="token keyword">await</span> Tortoise<span class="token punctuation">.</span>close_connections<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 运行异步任务</span>
run_async<span class="token punctuation">(</span>create_instances<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例展示了如何在 Tortoise ORM 中创建实例并保存到数据库，涉及到作者和书籍的创建及其关联。</p>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const k=n(e,[["render",c],["__file","simple.html.vue"]]);export{k as default};
