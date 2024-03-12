import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-334129fb.js";const e={},p=t(`<h1 id="获取注释信息" tabindex="-1"><a class="header-anchor" href="#获取注释信息" aria-hidden="true">#</a> 获取注释信息</h1><h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h2><p>如果你想查询指定的方法并获取其注释信息，你可以使用方法的标识符（Identifier）来进行匹配。以下是一个示例代码，演示如何查询指定方法并获取其注释信息：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>CodeAnalysis</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>CodeAnalysis<span class="token punctuation">.</span>CSharp</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>CodeAnalysis<span class="token punctuation">.</span>CSharp<span class="token punctuation">.</span>Syntax</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">string</span></span> code <span class="token operator">=</span> <span class="token string">@&quot;
            using System;

            class MyClass
            {
                /// &lt;summary&gt;
                /// 测试方法1
                /// &lt;/summary&gt;
                private static void Method1()
                {

                }

                /// &lt;summary&gt;
                /// 测试方法2
                /// &lt;/summary&gt;
                private static void Method2()
                {

                }
            }
        &quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">SyntaxTree</span> syntaxTree <span class="token operator">=</span> CSharpSyntaxTree<span class="token punctuation">.</span><span class="token function">ParseText</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> root <span class="token operator">=</span> syntaxTree<span class="token punctuation">.</span><span class="token function">GetRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 查找所有的方法声明</span>
        <span class="token class-name"><span class="token keyword">var</span></span> methodDeclarations <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">DescendantNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">OfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MethodDeclarationSyntax<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> methodDeclaration <span class="token keyword">in</span> methodDeclarations<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>methodDeclaration<span class="token punctuation">.</span>Identifier<span class="token punctuation">.</span>ValueText <span class="token operator">==</span> <span class="token string">&quot;Method1&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 获取方法的注释信息</span>
                <span class="token class-name"><span class="token keyword">var</span></span> leadingTrivia <span class="token operator">=</span> methodDeclaration<span class="token punctuation">.</span><span class="token function">GetLeadingTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">var</span></span> commentTrivia <span class="token operator">=</span> leadingTrivia<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span><span class="token function">IsKind</span><span class="token punctuation">(</span>SyntaxKind<span class="token punctuation">.</span>SingleLineCommentTrivia<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>commentTrivia <span class="token operator">!=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">SyntaxTrivia</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token class-name"><span class="token keyword">string</span></span> commentText <span class="token operator">=</span> commentTrivia<span class="token punctuation">.</span><span class="token function">ToFullString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TrimStart</span><span class="token punctuation">(</span><span class="token char">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;方法名: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">methodDeclaration<span class="token punctuation">.</span>Identifier<span class="token punctuation">.</span>ValueText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;注释: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">commentText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们将源代码字符串 <code>code</code> 中定义的两个方法 <code>Method1</code> 和 <code>Method2</code> 进行了注释。然后我们使用 <code>methodDeclaration.Identifier.ValueText</code> 来获取每个方法声明的标识符，并与指定的方法名进行比较（在本例中是 &quot;Method1&quot;）。</p><p>如果标识符与指定方法名匹配，我们就提取方法的注释信息，并将其输出。</p><p>在本例中，只有 &quot;Method1&quot; 方法匹配，所以将输出以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法名: Method1
注释: 测试方法1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以根据需要修改代码，以便查询其他特定方法并获取其注释信息。</p>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","annotation.html.vue"]]);export{r as default};
