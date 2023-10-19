import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-4fc52280.js";const e={},o=t(`<h1 id="imgui-的api查询" tabindex="-1"><a class="header-anchor" href="#imgui-的api查询" aria-hidden="true">#</a> ImGui 的API查询</h1><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>以下是您列出的 ImGui 函数以及它们的描述：</p><table><thead><tr><th>函数名称</th><th>描述</th></tr></thead><tbody><tr><td><code>GetCursorScreenPos</code></td><td>获取光标位置（窗口坐标系的左上角为原点）</td></tr><tr><td><code>SetCursorScreenPos</code></td><td>设置光标位置（窗口坐标系的左上角为原点）</td></tr><tr><td><code>GetCursorPos</code></td><td>获取光标位置（窗口内的局部坐标）</td></tr><tr><td><code>GetCursorPosX</code></td><td>获取光标的 X 坐标（窗口内的局部坐标）</td></tr><tr><td><code>GetCursorPosY</code></td><td>获取光标的 Y 坐标（窗口内的局部坐标）</td></tr><tr><td><code>SetCursorPos</code></td><td>设置光标位置（窗口内的局部坐标）</td></tr><tr><td><code>SetCursorPosX</code></td><td>设置光标的 X 坐标（窗口内的局部坐标）</td></tr><tr><td><code>SetCursorPosY</code></td><td>设置光标的 Y 坐标（窗口内的局部坐标）</td></tr><tr><td><code>GetCursorStartPos</code></td><td>获取本帧开始时的光标位置（窗口坐标系的左上角为原点）</td></tr><tr><td><code>GetContentRegionMax</code></td><td>获取内容区域的最大坐标（窗口内的局部坐标）</td></tr><tr><td><code>GetContentRegionMaxAbs</code></td><td>获取内容区域的最大坐标（窗口坐标系的左上角为原点）</td></tr><tr><td><code>GetWindowContentRegionMax</code></td><td>获取窗口内容区域的最大坐标（窗口内的局部坐标）</td></tr><tr><td><code>GetWindowContentRegionMin</code></td><td>获取窗口内容区域的最小坐标（窗口内的局部坐标）</td></tr><tr><td><code>GetContentRegionAvail</code></td><td>获取内容区域中可用的空间大小（窗口内的局部坐标）</td></tr><tr><td><code>GetMainViewport</code></td><td>获取主视口（通常是主窗口的视口），它代表了 ImGui 窗口的主要显示区域。</td></tr><tr><td><code>FindViewportByID</code></td><td>根据视口的唯一标识符查找视口。</td></tr><tr><td><code>FindViewportByPlatformHandle</code></td><td>根据平台特定的句柄查找视口。</td></tr><tr><td><code>SetCurrentViewport</code></td><td>设置当前视口，通常用于在多视口系统中切换上下文到不同的视口。</td></tr><tr><td><code>SetWindowViewport</code></td><td>为窗口设置特定的视口。此函数可用于将窗口与特定视口关联，以控制窗口在哪个视口中渲染。</td></tr><tr><td><code>GetWindowAlwaysWantOwnViewport</code></td><td>检查窗口是否总是希望拥有自己的视口，而不与其他窗口共享。</td></tr><tr><td><code>UpdateTryMergeWindowIntoHostViewport</code></td><td>尝试将窗口合并到主视口中，以实现不在主视口中的窗口的特殊行为。</td></tr><tr><td><code>TranslateWindowsInViewport</code></td><td>将窗口在视口中的位置进行平移。</td></tr><tr><td><code>FindHoveredViewportFromPlatformWindowStack</code></td><td>从平台窗口堆栈中查找当前悬停的视口，通常用于处理多视口系统中的悬停操作。</td></tr><tr><td><code>GetCombinedRootWindow</code></td><td>获取指定窗口的合并根窗口。如果窗口没有被合并，则返回窗口本身。</td></tr><tr><td><code>IsWindowChildOf</code></td><td>检查一个窗口是否是另一个窗口的子窗口。</td></tr><tr><td><code>IsWindowWithinBeginStackOf</code></td><td>检查窗口是否在给定窗口的 <code>Begin</code> 堆栈内。</td></tr><tr><td><code>IsWindowAbove</code></td><td>检查一个窗口是否位于另一个窗口的上方（Z 轴顺序）。</td></tr><tr><td><code>IsWindowHovered</code></td><td>检查窗口是否处于鼠标悬停状态。</td></tr><tr><td><code>IsWindowFocused</code></td><td>检查窗口是否处于焦点状态。</td></tr><tr><td><code>GetWindowDockID</code></td><td>获取窗口的当前停靠 ID，如果窗口未停靠，则返回 0。</td></tr><tr><td><code>IsWindowDocked</code></td><td>检查窗口是否被停靠到某个区域（通常是主窗口中的一个区域）。</td></tr><tr><td><code>IsWindowNavFocusable</code></td><td>检查窗口是否可以接受导航焦点（通常用于键盘导航）。</td></tr><tr><td><code>GetWindowPos</code></td><td>获取窗口的位置（在屏幕坐标系中）。</td></tr><tr><td><code>GetWindowSize</code></td><td>获取窗口的大小。</td></tr><tr><td><code>SetWindowCollapsed</code></td><td>折叠或展开窗口的内容区域，以便隐藏或显示窗口的内容。</td></tr><tr><td><code>SetWindowHitTestHole</code></td><td>设置窗口的点击测试孔，允许用户通过点击窗口的特定区域来与下面的窗口或控件进行交互。</td></tr><tr><td><code>SetWindowHiddenAndSkipItemsForCurrentFrame</code></td><td>在当前帧中隐藏窗口并跳过其所有子控件的渲染，通常用于隐藏不需要渲染的窗口。</td></tr></tbody></table><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>SameLine</td><td>允许下一个控件水平排列</td></tr><tr><td>Separator</td><td>分割线</td></tr><tr><td>Button</td><td>按钮</td></tr><tr><td>Text</td><td>文本</td></tr></tbody></table><h3 id="begingroup-endgroup" tabindex="-1"><a class="header-anchor" href="#begingroup-endgroup" aria-hidden="true">#</a> BeginGroup &amp; EndGroup</h3><p>Dear ImGui 中的 <code>ImGui::BeginGroup</code> 和 <code>ImGui::EndGroup</code> 函数允许您创建一个分组，用于将多个控件组织在一起并对其进行布局控制。这个分组是一个逻辑概念，用于对一组控件进行分组和处理。</p><p>以下是 <code>BeginGroup</code> 和 <code>EndGroup</code> 的基本用法和作用：</p><ol><li><p><strong>组织控件</strong>：通过将一组控件置于 <code>BeginGroup</code> 和 <code>EndGroup</code> 之间，您可以将它们组织成一个逻辑组，这样它们可以在界面中一起显示或布局。</p></li><li><p><strong>布局控制</strong>：您可以使用 <code>BeginGroup</code> 和 <code>EndGroup</code> 来控制组内控件的布局方式，例如水平排列、垂直排列或自定义布局。</p></li><li><p><strong>子窗口</strong>：<code>BeginGroup</code> 和 <code>EndGroup</code> 还可用于创建一个内部窗口或子窗口，这些窗口可以具有不同的样式和滚动条。</p></li></ol><p>以下是一个示例，演示了如何使用 <code>BeginGroup</code> 和 <code>EndGroup</code> 来组织和布局一组控件：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">BeginGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;这是一个组内的文本&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&quot;按钮 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&quot;按钮 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&quot;按钮 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">EndGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在组外的其他控件...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>BeginGroup</code> 和 <code>EndGroup</code> 之间的控件被组织在一起，可以独立控制它们的布局和样式。这对于创建复杂的布局或分组一组相关的控件非常有用。</p><p>请注意，虽然 <code>BeginGroup</code> 和 <code>EndGroup</code> 可以用于组织控件，但在 ImGui 中也有其他更灵活的方式来布局和组织控件，具体取决于您的项目需求。您可以根据需要选择最合适的方法。</p><h3 id="beginchild-与-beginchildframe" tabindex="-1"><a class="header-anchor" href="#beginchild-与-beginchildframe" aria-hidden="true">#</a> BeginChild 与 BeginChildFrame</h3><p><code>ImGui::BeginChild</code> 和 <code>ImGui::BeginChildFrame</code> 都用于创建一个子容器，但它们之间有一些区别：</p><ol><li><p><strong><code>ImGui::BeginChild</code></strong>：</p><ul><li>用途：<code>ImGui::BeginChild</code> 用于创建一个子容器，通常是用于将子元素放入一个矩形区域中，以便可以滚动查看，或者为它们创建边框。</li><li>包含滚动条：如果子元素的内容超过了容器的可见区域，<code>ImGui::BeginChild</code> 会自动添加滚动条以便查看所有内容。</li><li>示例用途：用于创建滚动区域或在主窗口中放置子元素的容器。</li></ul></li><li><p><strong><code>ImGui::BeginChildFrame</code></strong>：</p><ul><li>用途：<code>ImGui::BeginChildFrame</code> 用于创建一个子容器，通常用于将一组相关的 ImGui 控件放置在一个独立的子窗口中，而不需要滚动条。</li><li>不包含滚动条：<code>ImGui::BeginChildFrame</code> 不会自动添加滚动条，所以子元素不能滚动。如果内容太多而无法适应子窗口，它会被裁剪。</li><li>示例用途：用于在主窗口内创建独立的小窗口或面板，例如在工具栏中显示工具选项。</li></ul></li></ol><p>总的来说，主要区别在于滚动条的自动添加和子元素是否可以滚动：</p><ul><li><code>ImGui::BeginChild</code> 通常用于创建可以滚动查看的子容器。</li><li><code>ImGui::BeginChildFrame</code> 通常用于创建静态的子窗口，不需要滚动条，但可以用于在主窗口内创建独立的小面板。</li></ul><p>您可以根据项目需求和布局来选择使用哪个函数。如果需要滚动查看子元素，<code>ImGui::BeginChild</code> 可能更适合，而如果需要在主窗口内创建独立的小面板，<code>ImGui::BeginChildFrame</code> 可能更适合。</p><h3 id="pushitemwidth" tabindex="-1"><a class="header-anchor" href="#pushitemwidth" aria-hidden="true">#</a> PushItemWidth</h3><p>在 Dear ImGui（ImGui）中，<code>ImGui::PushItemWidth</code> 函数的作用是设置当前控件的宽度。通常情况下，ImGui 会自动计算控件的最佳宽度，以适应其内容，但有时您可能希望显式设置控件的宽度。</p><p><code>ImGui::PushItemWidth</code> 函数允许您将一个固定的宽度应用于接下来的控件。这在以下情况下非常有用：</p><ol><li><p><strong>对齐控件</strong>：如果您希望一组控件在水平方向上具有相同的宽度，可以使用 <code>ImGui::PushItemWidth</code> 来设置它们的宽度一致。</p></li><li><p><strong>固定宽度控件</strong>：有时，您可能希望一个控件具有固定的宽度，而不受其内容的影响。使用 <code>PushItemWidth</code> 可以确保控件始终具有相同的宽度。</p></li></ol><p>以下是一个示例，演示如何使用 <code>ImGui::PushItemWidth</code>：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PushItemWidth</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置接下来的控件的宽度为200像素</span>

<span class="token comment">// 创建一个文本输入框，它的宽度将受到上面设置的限制</span>
<span class="token keyword">char</span> buffer<span class="token punctuation">[</span><span class="token number">256</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">InputText</span><span class="token punctuation">(</span><span class="token string">&quot;输入框&quot;</span><span class="token punctuation">,</span> buffer<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PopItemWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 恢复默认宽度计算方式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>ImGui::PushItemWidth</code> 设置了接下来的控件的宽度为200像素，然后我们创建了一个文本输入框，它的宽度将受到这个限制。最后，使用 <code>ImGui::PopItemWidth</code> 恢复默认的宽度计算方式。</p><p><code>ImGui::PushItemWidth</code> 可以帮助您更好地控制控件的布局和外观，特别是当您需要确保一组控件具有相同宽度或需要固定宽度的控件时。</p><h3 id="pushstylecolor" tabindex="-1"><a class="header-anchor" href="#pushstylecolor" aria-hidden="true">#</a> PushStyleColor</h3><p>在 Dear ImGui 中，要给单个按钮设置样式，您可以使用 <code>ImGui::PushStyleColor</code> 和 <code>ImGui::PopStyleColor</code> 函数来为按钮的不同状态（正常、悬停、按下等）设置不同的颜色。您还可以使用 <code>ImGui::PushStyleVar</code> 和 <code>ImGui::PopStyleVar</code> 来修改按钮的样式属性，例如文本对齐、边框宽度等。</p><p>下面是一个示例代码，演示如何设置单个按钮的样式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 在应用程序的主循环中：</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">NewFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始窗口</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token string">&quot;按钮样式示例&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在按钮前设置颜色样式</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PushStyleColor</span><span class="token punctuation">(</span>ImGuiCol_Button<span class="token punctuation">,</span> <span class="token function">ImVec4</span><span class="token punctuation">(</span><span class="token number">0.4f</span><span class="token punctuation">,</span> <span class="token number">0.6f</span><span class="token punctuation">,</span> <span class="token number">0.8f</span><span class="token punctuation">,</span> <span class="token number">1.0f</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正常状态颜色</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PushStyleColor</span><span class="token punctuation">(</span>ImGuiCol_ButtonHovered<span class="token punctuation">,</span> <span class="token function">ImVec4</span><span class="token punctuation">(</span><span class="token number">0.5f</span><span class="token punctuation">,</span> <span class="token number">0.7f</span><span class="token punctuation">,</span> <span class="token number">0.9f</span><span class="token punctuation">,</span> <span class="token number">1.0f</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鼠标悬停状态颜色</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PushStyleColor</span><span class="token punctuation">(</span>ImGuiCol_ButtonActive<span class="token punctuation">,</span> <span class="token function">ImVec4</span><span class="token punctuation">(</span><span class="token number">0.3f</span><span class="token punctuation">,</span> <span class="token number">0.5f</span><span class="token punctuation">,</span> <span class="token number">0.7f</span><span class="token punctuation">,</span> <span class="token number">1.0f</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按下状态颜色</span>
    
    <span class="token comment">// 创建按钮</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Button</span><span class="token punctuation">(</span><span class="token string">&quot;自定义样式按钮&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理按钮点击事件</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 恢复默认颜色样式</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">PopStyleColor</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出之前压入的3个颜色</span>
    
    <span class="token comment">// 添加其他窗口内容...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 渲染 ImGui 界面</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 ImGui 渲染命令和用户输入...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们首先使用 <code>ImGui::PushStyleColor</code> 分别为按钮的正常状态、悬停状态和按下状态设置了不同的颜色样式。然后，我们创建了一个按钮，该按钮将应用上述颜色样式。最后，我们使用 <code>ImGui::PopStyleColor</code> 恢复默认颜色样式。</p><p>除了颜色之外，您还可以使用 <code>PushStyleVar</code> 和 <code>PopStyleVar</code> 来修改按钮的其他样式属性，例如文本对齐、边框宽度等。这使您能够为特定按钮或控件自定义样式。</p><h3 id="imgui-indent" tabindex="-1"><a class="header-anchor" href="#imgui-indent" aria-hidden="true">#</a> ImGui::Indent</h3><p>在 Dear ImGui 中，<code>ImGui::Indent</code> 函数的作用是用于增加当前控件的缩进。它可以用来创建层次结构或嵌套的控件，并使内部控件相对于外部控件缩进一定的像素或空间，以增加可读性和布局的清晰度。</p><p>使用 <code>ImGui::Indent</code> 函数，您可以在控件的绘制之前指定要缩进的像素数量。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 在应用程序的主循环中：</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">NewFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始窗口</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token string">&quot;缩进示例&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;外部文本&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Indent</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缩进内部控件 20 像素</span>

    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&quot;内部文本&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Unindent</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 恢复默认的缩进</span>
<span class="token punctuation">}</span>

<span class="token comment">// 渲染 ImGui 界面</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 ImGui 渲染命令和用户输入...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用 <code>ImGui::Indent</code> 函数在 &quot;内部文本&quot; 控件之前指定了 20 像素的缩进。这使得 &quot;内部文本&quot; 控件相对于 &quot;外部文本&quot; 控件缩进了一定的距离。</p><p><code>ImGui::Unindent</code> 函数可以用来恢复默认的缩进级别，以确保后续的控件不受缩进影响。</p><p><code>ImGui::Indent</code> 和 <code>ImGui::Unindent</code> 通常用于创建嵌套布局，使您能够更好地组织和呈现控件，特别是在创建复杂的用户界面时非常有用。</p><h3 id="imgui-aligntexttoframepadding" tabindex="-1"><a class="header-anchor" href="#imgui-aligntexttoframepadding" aria-hidden="true">#</a> ImGui::AlignTextToFramePadding</h3><p><code>ImGui::AlignTextToFramePadding</code> 是 Dear ImGui 中的一个函数，它的作用是将文本的对齐方式调整为与控件的内边距（frame padding）对齐，以改善文本在控件中的布局。这个函数通常用于按钮、复选框、单选框等控件，以确保文本在控件中的位置看起来更合适。</p><p>控件的内边距（frame padding）是控件周围的一些空白区域，通常用于分隔控件的内容和控件的边界。默认情况下，文本在控件中居中对齐，但在某些情况下，您可能希望文本与控件的内边距对齐，以获得更好的视觉效果。</p><p>以下是一个示例，演示了如何使用 <code>ImGui::AlignTextToFramePadding</code> 来调整文本的对齐方式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 在应用程序的主循环中：</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">NewFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始窗口</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token string">&quot;文本对齐示例&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个带有标签的复选框</span>
    <span class="token keyword">bool</span> checkBoxValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token string">&quot;复选框标签&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>checkBoxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 调整文本对齐方式</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">AlignTextToFramePadding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建一个带有标签的复选框，此时文本左对齐于内边距</span>
    <span class="token keyword">bool</span> alignedCheckBoxValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token string">&quot;复选框标签 (对齐)&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>alignedCheckBoxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 渲染 ImGui 界面</span>
<span class="token class-name">ImGui</span><span class="token double-colon punctuation">::</span><span class="token function">Render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理 ImGui 渲染命令和用户输入...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们首先创建了一个标准的复选框控件，文本在控件中默认居中对齐。然后，我们使用 <code>ImGui::AlignTextToFramePadding</code> 函数，然后再创建了一个复选框控件，此时文本左对齐于控件的内边距，看起来更好。</p><p>这个函数特别适用于改善控件的外观和布局，以确保文本在控件内的位置符合您的设计需求。</p>`,48),c=[o];function p(i,d){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","index.html.vue"]]);export{r as default};