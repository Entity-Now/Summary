import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as e}from"./app-a604e4a9.js";const o={},c=e(`<h1 id="游标-cursor" tabindex="-1"><a class="header-anchor" href="#游标-cursor" aria-hidden="true">#</a> 游标（cursor）</h1><p>游标（Cursor）：游标是一个数据库对象，用于检索数据行并对其进行操作。游标允许你从结果集中获取一行，并对这行进行处理。然后，你可以移动到下一行，并进行相同的处理。这种行为类似于编程语言中的循环结构。游标通常用于需要逐行处理数据的复杂逻辑。</p><h2 id="简单示例" tabindex="-1"><a class="header-anchor" href="#简单示例" aria-hidden="true">#</a> 简单示例</h2><p>当然，以下是一个 SQL Server 中使用游标的例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@ProductID</span> <span class="token keyword">INT</span><span class="token punctuation">;</span>
<span class="token keyword">DECLARE</span> <span class="token variable">@ProductName</span> NVARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 定义游标</span>
<span class="token keyword">DECLARE</span> product_cursor <span class="token keyword">CURSOR</span> <span class="token keyword">FOR</span> 
<span class="token keyword">SELECT</span> ProductID<span class="token punctuation">,</span> ProductName 
<span class="token keyword">FROM</span> Products<span class="token punctuation">;</span>

<span class="token comment">-- 打开游标</span>
<span class="token keyword">OPEN</span> product_cursor<span class="token punctuation">;</span>

<span class="token comment">-- 从游标中获取第一行数据</span>
<span class="token keyword">FETCH</span> <span class="token keyword">NEXT</span> <span class="token keyword">FROM</span> product_cursor 
<span class="token keyword">INTO</span> <span class="token variable">@ProductID</span><span class="token punctuation">,</span> <span class="token variable">@ProductName</span><span class="token punctuation">;</span>

<span class="token comment">-- 循环处理游标中的每一行数据</span>
<span class="token keyword">WHILE</span> @<span class="token variable">@FETCH_STATUS</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- 在这里，你可以对每一行数据进行处理</span>
    <span class="token keyword">PRINT</span> <span class="token string">&#39;Product ID: &#39;</span> <span class="token operator">+</span> CAST<span class="token punctuation">(</span><span class="token variable">@ProductID</span> <span class="token keyword">AS</span> NVARCHAR<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;, Product Name: &#39;</span> <span class="token operator">+</span> <span class="token variable">@ProductName</span><span class="token punctuation">;</span>

    <span class="token comment">-- 获取下一行数据</span>
    <span class="token keyword">FETCH</span> <span class="token keyword">NEXT</span> <span class="token keyword">FROM</span> product_cursor 
    <span class="token keyword">INTO</span> <span class="token variable">@ProductID</span><span class="token punctuation">,</span> <span class="token variable">@ProductName</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span>

<span class="token comment">-- 关闭游标</span>
<span class="token keyword">CLOSE</span> product_cursor<span class="token punctuation">;</span>

<span class="token comment">-- 释放游标资源</span>
<span class="token keyword">DEALLOCATE</span> product_cursor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们首先定义了一个游标 <code>product_cursor</code>，它会从 <code>Products</code> 表中选择所有的 <code>ProductID</code> 和 <code>ProductName</code>。然后，我们打开游标，并使用 <code>FETCH NEXT</code> 语句从游标中获取第一行数据。接着，我们进入一个循环，在循环中，我们使用 <code>PRINT</code> 语句打印每一行数据，然后使用 <code>FETCH NEXT</code> 语句获取下一行数据。当所有的数据都处理完毕后，我们关闭游标，并释放游标资源。</p><p>请注意，游标在 SQL Server 中的使用应尽可能少，因为它们通常比集合操作（如 <code>SELECT</code>、<code>INSERT</code>、<code>UPDATE</code>、<code>DELETE</code>）更慢。只有在必须逐行处理数据时，才应使用游标。</p>`,7),p=[c];function t(r,d){return n(),a("div",null,p)}const u=s(o,[["render",t],["__file","Cursor.html.vue"]]);export{u as default};
