import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as o,d as s,e as n,b as l,a}from"./app-7f909fec.js";const i={},u=a(`<h1 id="assembly反射" tabindex="-1"><a class="header-anchor" href="#assembly反射" aria-hidden="true">#</a> Assembly反射</h1><h2 id="使用assembly-loadfrom加载程序集" tabindex="-1"><a class="header-anchor" href="#使用assembly-loadfrom加载程序集" aria-hidden="true">#</a> 使用Assembly.LoadFrom加载程序集</h2><p>LoadFrom()方法可以从指定文件中加载程序集</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">TestDll</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDll</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> DefaultValue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;我是默认值&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 加载程序集</span>
<span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">LoadFrom</span><span class="token punctuation">(</span><span class="token string">&quot;DLL的路径&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取对象类型，命名空间+类名</span>
<span class="token class-name">Type</span> class_type <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;TestDll.TestDll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建对象实例</span>
<span class="token class-name"><span class="token keyword">var</span></span> T <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>class_type<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出对象属性</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">dynamic</span><span class="token punctuation">)</span>T<span class="token punctuation">)</span><span class="token punctuation">.</span>DefaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用assembly-load加载程序集" tabindex="-1"><a class="header-anchor" href="#使用assembly-load加载程序集" aria-hidden="true">#</a> 使用Assembly.Load加载程序集</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用appdomain-currentdomain-getassemblies-创建当前程序集的对象" tabindex="-1"><a class="header-anchor" href="#使用appdomain-currentdomain-getassemblies-创建当前程序集的对象" aria-hidden="true">#</a> 使用AppDomain.CurrentDomain.GetAssemblies()创建当前程序集的对象</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span><span class="token function">GetAssemblies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取已加载到此应用程序域的执行上下文中的程序集。</span>
    <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>I<span class="token operator">=&gt;</span>I<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;reflection&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 获取name=reflection的程序集</span>
    <span class="token punctuation">.</span>DefinedTypes
    <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>I<span class="token operator">=&gt;</span>I<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;TestReflection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取name = TestReflection的对象</span>

<span class="token class-name"><span class="token keyword">var</span></span> t <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">dynamic</span><span class="token punctuation">)</span>t<span class="token punctuation">)</span><span class="token punctuation">.</span>Default<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="assembly-definedtypes-与-assembly-gettypes-的区别" tabindex="-1"><a class="header-anchor" href="#assembly-definedtypes-与-assembly-gettypes-的区别" aria-hidden="true">#</a> Assembly.DefinedTypes 与 Assembly.GetTypes()的区别</h2><blockquote><p>DefinedTypes返回一个TypeInfo对象的集合，而GetTypes返回一个Type对象的数组。</p></blockquote><blockquote><p>TypeInfo对象包含了类型的元数据和操作，而Type对象只包含了类型的元数据。</p></blockquote><blockquote><p>TypeInfo对象可以访问到嵌套类型的信息，而Type对象不能。</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取当前程序集</span>
<span class="token class-name"><span class="token keyword">var</span></span> assembly <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">GetExecutingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用DefinedTypes获取类型信息</span>
<span class="token class-name"><span class="token keyword">var</span></span> typeInfos <span class="token operator">=</span> assembly<span class="token punctuation">.</span>DefinedTypes<span class="token punctuation">;</span>
<span class="token comment">// 使用GetTypes获取类型信息</span>
<span class="token class-name"><span class="token keyword">var</span></span> types <span class="token operator">=</span> assembly<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 打印两者的长度</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>typeInfos<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>types<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用type直接创建对象" tabindex="-1"><a class="header-anchor" href="#使用type直接创建对象" aria-hidden="true">#</a> 使用Type直接创建对象</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 直接获取类型，参数=（命名空间+类名,程序集的名称）</span>
<span class="token class-name"><span class="token keyword">var</span></span> t <span class="token operator">=</span> Type<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">&quot;reflection.Model.TestReflection,reflection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> obj <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">dynamic</span><span class="token punctuation">)</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>Default<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="makegenericmethod动态创建泛型方法" tabindex="-1"><a class="header-anchor" href="#makegenericmethod动态创建泛型方法" aria-hidden="true">#</a> MakeGenericMethod动态创建泛型方法</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestMakeGenericMethod</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">Input</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">T</span> <span class="token keyword">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 先创建一个类的实例，后面会把创建的泛型方法注入到此实例</span>
<span class="token class-name"><span class="token keyword">var</span></span> entity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestMakeGenericMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> Make <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TestMakeGenericMethod</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetMethod</span><span class="token punctuation">(</span><span class="token string">&quot;Input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建泛型方法并，其中参数是泛型的类型</span>
Make<span class="token punctuation">.</span><span class="token function">MakeGenericMethod</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 将方法传入到刚才创建的实例里面，第一个参数是实例，第二个是参数</span>
    <span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span>entity<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span><span class="token string">&quot;动态创建泛型方法&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>output: 动态创建泛型方法</p></blockquote><h2 id="使用activator创建对象" tabindex="-1"><a class="header-anchor" href="#使用activator创建对象" aria-hidden="true">#</a> 使用Activator创建对象</h2><p>使用类型名称创建一个字符串对象</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// mscorlib是程序集的名字</span>
<span class="token comment">// System.string是类名</span>
<span class="token class-name"><span class="token keyword">var</span></span> obj1 <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span><span class="token string">&quot;mscorlib&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;System.String&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 如果调用的对象有参数可以这样</span>
<span class="token class-name"><span class="token keyword">var</span></span> r <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TestReflection</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;我是参数&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> r <span class="token operator">=</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">TestReflection</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// </span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TestReflection</span>
<span class="token comment">// 使用dynamic反射获取属性</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">dynamic</span><span class="token punctuation">)</span>r<span class="token punctuation">)</span><span class="token punctuation">.</span>Default<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 反射获取属性</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetProperty</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetValue</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用assembly-getreferencedassemblies-方法" tabindex="-1"><a class="header-anchor" href="#使用assembly-getreferencedassemblies-方法" aria-hidden="true">#</a> 使用Assembly.GetReferencedAssemblies()方法</h2><p>这个方法可以返回一个程序集引用了的所有程序集，不论是否已加载，都会返回。这个方法返回的是AssemblyName类的对象，而不是Assembly类的对象。这样可以避免不必要的程序集加载，提高性能。</p><p>这个方法只能获取直接引用了该程序集的程序集，不能获取间接引用了该程序集的程序集3。例如，如果A程序集引用了B程序集，B程序集引用了C程序集，那么使用A.GetReferencedAssemblies()方法只能获取到B，不能获取到C。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取当前正在执行的代码所在的程序集</span>
<span class="token class-name"><span class="token keyword">var</span></span> assembly <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">GetExecutingAssembly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取该程序集引用了的所有程序集</span>
<span class="token class-name"><span class="token keyword">var</span></span> referencedAssemblies <span class="token operator">=</span> assembly<span class="token punctuation">.</span><span class="token function">GetReferencedAssemblies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 遍历所有引用的程序集</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> referencedAssembly <span class="token keyword">in</span> referencedAssemblies<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 通过名称加载引用的程序集</span>
    <span class="token class-name"><span class="token keyword">var</span></span> loadedAssembly <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>referencedAssembly<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取该程序集中定义的所有类型</span>
    <span class="token class-name"><span class="token keyword">var</span></span> types <span class="token operator">=</span> loadedAssembly<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 筛选出枚举类型</span>
    <span class="token class-name"><span class="token keyword">var</span></span> enums <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>IsEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历枚举类型</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> enumType <span class="token keyword">in</span> enums<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 打印枚举类型名称和值</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>enumType<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token keyword">in</span> Enum<span class="token punctuation">.</span><span class="token function">GetValues</span><span class="token punctuation">(</span>enumType<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appdomain-currentdomain-getassemblies" tabindex="-1"><a class="header-anchor" href="#appdomain-currentdomain-getassemblies" aria-hidden="true">#</a> AppDomain.CurrentDomain.GetAssemblies()</h2><p>这个方法可以获取当前程序域中的所有程序集。程序域是一个应用程序执行的隔离环境，可以在其中加载和卸载程序集。您可以使用AppDomain类来管理程序域。</p><p>这个方法返回的是Assembly类的对象，而不是AssemblyName类的对象。这样可以方便地访问程序集中定义的类型和资源。</p>`,32),k={href:"http://xn--siqr4s59m7s4b.NET",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 获取当前应用程序域</span>
<span class="token class-name"><span class="token keyword">var</span></span> domain <span class="token operator">=</span> AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">;</span>
<span class="token comment">// 获取该应用程序域中加载过的所有程序集</span>
<span class="token class-name"><span class="token keyword">var</span></span> assemblies <span class="token operator">=</span> domain<span class="token punctuation">.</span><span class="token function">GetAssemblies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 遍历所有加载过的程序集</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> assembly <span class="token keyword">in</span> assemblies<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 获取该程序集中定义的所有类型</span>
    <span class="token class-name"><span class="token keyword">var</span></span> types <span class="token operator">=</span> assembly<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 筛选出枚举类型</span>
    <span class="token class-name"><span class="token keyword">var</span></span> enums <span class="token operator">=</span> types<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>IsEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历枚举类型</span>
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> enumType <span class="token keyword">in</span> enums<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 打印枚举类型名称和值</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>enumType<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token keyword">in</span> Enum<span class="token punctuation">.</span><span class="token function">GetValues</span><span class="token punctuation">(</span>enumType<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="各种方法的区别" tabindex="-1"><a class="header-anchor" href="#各种方法的区别" aria-hidden="true">#</a> 各种方法的区别</h2><p><code>AppDomain.CurrentDomain.GetAssemblies()</code> 方法返回当前应用程序域加载的所有程序集，包括主程序集和所有已加载的引用程序集。与 <code>Assembly.GetReferencedAssemblies()</code> 方法不同的是，它返回的是已经加载到应用程序域中的程序集，而不仅仅是引用的程序集。此外，它还包括动态加载的程序集和本地缓存的程序集。</p><p>相比之下，<code>Assembly.GetReferencedAssemblies()</code> 和 <code>Assembly.GetExecutingAssembly()</code> 方法只返回程序集的元数据信息，并不包括已加载的程序集实例。这意味着，它们只能用于获取程序集的元数据信息，而不能用于获取已加载的程序集实例。</p><p>因此，<code>AppDomain.CurrentDomain.GetAssemblies()</code> 方法通常用于获取应用程序域加载的所有程序集，以便在运行时对它们进行操作。而 <code>Assembly.GetReferencedAssemblies()</code> 和 <code>Assembly.GetExecutingAssembly()</code> 方法通常用于获取程序集的元数据信息，例如程序集名称、版本号、公共密钥等。</p>`,5);function d(m,v){const e=p("ExternalLinkIcon");return c(),o("div",null,[u,s("p",null,[n("这个方法只能获取已经使用过的程序集，未使用的程序集不会包含在内。"),s("a",k,[n("这是因为.NET"),l(e)]),n(" CLR使用了即时编译技术，只有当引用的程序集被需要时才会加载到内存中。")]),r])}const h=t(i,[["render",d],["__file","Assembly.html.vue"]]);export{h as default};