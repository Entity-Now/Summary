import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,a}from"./app-d39e34ec.js";const l={},i=a(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h1><h2 id="select-into-和-insert-select-的区别" tabindex="-1"><a class="header-anchor" href="#select-into-和-insert-select-的区别" aria-hidden="true">#</a> select into 和 insert select 的区别</h2><p><code>SELECT INTO</code> 和 <code>INTO SELECT</code> 是 SQL 查询中的两种不同语法，它们在语法结构和使用场景上有一些区别。</p><ol><li><p><strong>SELECT INTO:</strong></p><ul><li>用于创建新表并将查询结果插入到新表中。</li><li>在使用 <code>SELECT INTO</code> 时，目标表不存在，系统会自动创建一个新表并将结果插入其中。</li><li>适用于创建临时表或将查询结果存储到新表中的情况。</li></ul><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">INTO</span> NewTable
<span class="token keyword">FROM</span> ExistingTable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>INTO SELECT:</strong></p><ul><li>用于将查询结果插入到现有表中。</li><li>在使用 <code>INTO SELECT</code> 时，目标表必须事先存在，查询结果将插入到这个现有表中。</li><li>适用于将查询结果添加到已存在的表中，而不是创建新表。</li></ul><p>示例：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> ExistingTable
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> AnotherTable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>使用场景：</p><ul><li>如果你需要创建一个新表并将查询结果插入其中，选择 <code>SELECT INTO</code>。</li><li>如果你已经有一个目标表，并希望将查询结果插入到它中，使用 <code>INTO SELECT</code>。</li></ul><p>选择合适的语法取决于你的需求和是否已有目标表存在。</p>`,7),c=[i];function o(t,d){return s(),n("div",null,c)}const u=e(l,[["render",o],["__file","select.html.vue"]]);export{u as default};