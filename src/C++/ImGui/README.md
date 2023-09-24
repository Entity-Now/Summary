# ImGui 的API查询

## API
以下是您列出的 ImGui 函数以及它们的描述：

| 函数名称                  | 描述                                                        |
| ------------------------- | ----------------------------------------------------------- |
| `GetCursorScreenPos`      | 获取光标位置（窗口坐标系的左上角为原点）                  |
| `SetCursorScreenPos`      | 设置光标位置（窗口坐标系的左上角为原点）                  |
| `GetCursorPos`            | 获取光标位置（窗口内的局部坐标）                          |
| `GetCursorPosX`           | 获取光标的 X 坐标（窗口内的局部坐标）                     |
| `GetCursorPosY`           | 获取光标的 Y 坐标（窗口内的局部坐标）                     |
| `SetCursorPos`            | 设置光标位置（窗口内的局部坐标）                          |
| `SetCursorPosX`           | 设置光标的 X 坐标（窗口内的局部坐标）                     |
| `SetCursorPosY`           | 设置光标的 Y 坐标（窗口内的局部坐标）                     |
| `GetCursorStartPos`       | 获取本帧开始时的光标位置（窗口坐标系的左上角为原点）    |
| `GetContentRegionMax`     | 获取内容区域的最大坐标（窗口内的局部坐标）                |
| `GetContentRegionMaxAbs`  | 获取内容区域的最大坐标（窗口坐标系的左上角为原点）        |
| `GetWindowContentRegionMax` | 获取窗口内容区域的最大坐标（窗口内的局部坐标）          |
| `GetWindowContentRegionMin` | 获取窗口内容区域的最小坐标（窗口内的局部坐标）          |
| `GetContentRegionAvail`   | 获取内容区域中可用的空间大小（窗口内的局部坐标）         |
| `GetMainViewport`                       | 获取主视口（通常是主窗口的视口），它代表了 ImGui 窗口的主要显示区域。                                |
| `FindViewportByID`                      | 根据视口的唯一标识符查找视口。                                                                         |
| `FindViewportByPlatformHandle`          | 根据平台特定的句柄查找视口。                                                                           |
| `SetCurrentViewport`                    | 设置当前视口，通常用于在多视口系统中切换上下文到不同的视口。                                           |
| `SetWindowViewport`                     | 为窗口设置特定的视口。此函数可用于将窗口与特定视口关联，以控制窗口在哪个视口中渲染。            |
| `GetWindowAlwaysWantOwnViewport`        | 检查窗口是否总是希望拥有自己的视口，而不与其他窗口共享。                                                 |
| `UpdateTryMergeWindowIntoHostViewport`  | 尝试将窗口合并到主视口中，以实现不在主视口中的窗口的特殊行为。                                          |
| `TranslateWindowsInViewport`            | 将窗口在视口中的位置进行平移。                                                                         |
| `FindHoveredViewportFromPlatformWindowStack` | 从平台窗口堆栈中查找当前悬停的视口，通常用于处理多视口系统中的悬停操作。                           |
| `GetCombinedRootWindow`           | 获取指定窗口的合并根窗口。如果窗口没有被合并，则返回窗口本身。                                             |
| `IsWindowChildOf`                 | 检查一个窗口是否是另一个窗口的子窗口。                                                                      |
| `IsWindowWithinBeginStackOf`      | 检查窗口是否在给定窗口的 `Begin` 堆栈内。                                                                    |
| `IsWindowAbove`                   | 检查一个窗口是否位于另一个窗口的上方（Z 轴顺序）。                                                           |
| `IsWindowHovered`                 | 检查窗口是否处于鼠标悬停状态。                                                                             |
| `IsWindowFocused`                 | 检查窗口是否处于焦点状态。                                                                                 |
| `GetWindowDockID`                 | 获取窗口的当前停靠 ID，如果窗口未停靠，则返回 0。                                                         |
| `IsWindowDocked`                  | 检查窗口是否被停靠到某个区域（通常是主窗口中的一个区域）。                                               |
| `IsWindowNavFocusable`            | 检查窗口是否可以接受导航焦点（通常用于键盘导航）。                                                        |
| `GetWindowPos`                    | 获取窗口的位置（在屏幕坐标系中）。                                                                         |
| `GetWindowSize`                   | 获取窗口的大小。                                                                                              |
| `SetWindowCollapsed`               | 折叠或展开窗口的内容区域，以便隐藏或显示窗口的内容。                                                      |
| `SetWindowHitTestHole`            | 设置窗口的点击测试孔，允许用户通过点击窗口的特定区域来与下面的窗口或控件进行交互。                       |
| `SetWindowHiddenAndSkipItemsForCurrentFrame` | 在当前帧中隐藏窗口并跳过其所有子控件的渲染，通常用于隐藏不需要渲染的窗口。 |


## 布局
| 函数 | 描述 |
| ---- | ---- |
| SameLine | 允许下一个控件水平排列 |
| Separator | 分割线 |
| Button | 按钮 | 
| Text | 文本 |

### BeginGroup & EndGroup
Dear ImGui 中的 `ImGui::BeginGroup` 和 `ImGui::EndGroup` 函数允许您创建一个分组，用于将多个控件组织在一起并对其进行布局控制。这个分组是一个逻辑概念，用于对一组控件进行分组和处理。

以下是 `BeginGroup` 和 `EndGroup` 的基本用法和作用：

1. **组织控件**：通过将一组控件置于 `BeginGroup` 和 `EndGroup` 之间，您可以将它们组织成一个逻辑组，这样它们可以在界面中一起显示或布局。

2. **布局控制**：您可以使用 `BeginGroup` 和 `EndGroup` 来控制组内控件的布局方式，例如水平排列、垂直排列或自定义布局。

3. **子窗口**：`BeginGroup` 和 `EndGroup` 还可用于创建一个内部窗口或子窗口，这些窗口可以具有不同的样式和滚动条。

以下是一个示例，演示了如何使用 `BeginGroup` 和 `EndGroup` 来组织和布局一组控件：

```cpp
if (ImGui::BeginGroup()) {
    ImGui::Text("这是一个组内的文本");
    ImGui::Button("按钮 1");
    ImGui::Button("按钮 2");
    ImGui::Button("按钮 3");
    ImGui::EndGroup();
}

// 在组外的其他控件...
```

在这个示例中，`BeginGroup` 和 `EndGroup` 之间的控件被组织在一起，可以独立控制它们的布局和样式。这对于创建复杂的布局或分组一组相关的控件非常有用。

请注意，虽然 `BeginGroup` 和 `EndGroup` 可以用于组织控件，但在 ImGui 中也有其他更灵活的方式来布局和组织控件，具体取决于您的项目需求。您可以根据需要选择最合适的方法。

### BeginChild 与 BeginChildFrame
`ImGui::BeginChild` 和 `ImGui::BeginChildFrame` 都用于创建一个子容器，但它们之间有一些区别：

1. **`ImGui::BeginChild`**：
   - 用途：`ImGui::BeginChild` 用于创建一个子容器，通常是用于将子元素放入一个矩形区域中，以便可以滚动查看，或者为它们创建边框。
   - 包含滚动条：如果子元素的内容超过了容器的可见区域，`ImGui::BeginChild` 会自动添加滚动条以便查看所有内容。
   - 示例用途：用于创建滚动区域或在主窗口中放置子元素的容器。

2. **`ImGui::BeginChildFrame`**：
   - 用途：`ImGui::BeginChildFrame` 用于创建一个子容器，通常用于将一组相关的 ImGui 控件放置在一个独立的子窗口中，而不需要滚动条。
   - 不包含滚动条：`ImGui::BeginChildFrame` 不会自动添加滚动条，所以子元素不能滚动。如果内容太多而无法适应子窗口，它会被裁剪。
   - 示例用途：用于在主窗口内创建独立的小窗口或面板，例如在工具栏中显示工具选项。

总的来说，主要区别在于滚动条的自动添加和子元素是否可以滚动：
- `ImGui::BeginChild` 通常用于创建可以滚动查看的子容器。
- `ImGui::BeginChildFrame` 通常用于创建静态的子窗口，不需要滚动条，但可以用于在主窗口内创建独立的小面板。

您可以根据项目需求和布局来选择使用哪个函数。如果需要滚动查看子元素，`ImGui::BeginChild` 可能更适合，而如果需要在主窗口内创建独立的小面板，`ImGui::BeginChildFrame` 可能更适合。

### PushItemWidth 
在 Dear ImGui（ImGui）中，`ImGui::PushItemWidth` 函数的作用是设置当前控件的宽度。通常情况下，ImGui 会自动计算控件的最佳宽度，以适应其内容，但有时您可能希望显式设置控件的宽度。

`ImGui::PushItemWidth` 函数允许您将一个固定的宽度应用于接下来的控件。这在以下情况下非常有用：

1. **对齐控件**：如果您希望一组控件在水平方向上具有相同的宽度，可以使用 `ImGui::PushItemWidth` 来设置它们的宽度一致。

2. **固定宽度控件**：有时，您可能希望一个控件具有固定的宽度，而不受其内容的影响。使用 `PushItemWidth` 可以确保控件始终具有相同的宽度。

以下是一个示例，演示如何使用 `ImGui::PushItemWidth`：

```cpp
ImGui::PushItemWidth(200); // 设置接下来的控件的宽度为200像素

// 创建一个文本输入框，它的宽度将受到上面设置的限制
char buffer[256];
ImGui::InputText("输入框", buffer, sizeof(buffer));

ImGui::PopItemWidth(); // 恢复默认宽度计算方式
```

在这个示例中，`ImGui::PushItemWidth` 设置了接下来的控件的宽度为200像素，然后我们创建了一个文本输入框，它的宽度将受到这个限制。最后，使用 `ImGui::PopItemWidth` 恢复默认的宽度计算方式。

`ImGui::PushItemWidth` 可以帮助您更好地控制控件的布局和外观，特别是当您需要确保一组控件具有相同宽度或需要固定宽度的控件时。

### PushStyleColor
在 Dear ImGui 中，要给单个按钮设置样式，您可以使用 `ImGui::PushStyleColor` 和 `ImGui::PopStyleColor` 函数来为按钮的不同状态（正常、悬停、按下等）设置不同的颜色。您还可以使用 `ImGui::PushStyleVar` 和 `ImGui::PopStyleVar` 来修改按钮的样式属性，例如文本对齐、边框宽度等。

下面是一个示例代码，演示如何设置单个按钮的样式：

```cpp
// 在应用程序的主循环中：
ImGui::NewFrame();

// 开始窗口
if (ImGui::Begin("按钮样式示例")) {
    // 在按钮前设置颜色样式
    ImGui::PushStyleColor(ImGuiCol_Button, ImVec4(0.4f, 0.6f, 0.8f, 1.0f)); // 正常状态颜色
    ImGui::PushStyleColor(ImGuiCol_ButtonHovered, ImVec4(0.5f, 0.7f, 0.9f, 1.0f)); // 鼠标悬停状态颜色
    ImGui::PushStyleColor(ImGuiCol_ButtonActive, ImVec4(0.3f, 0.5f, 0.7f, 1.0f)); // 按下状态颜色
    
    // 创建按钮
    if (ImGui::Button("自定义样式按钮")) {
        // 处理按钮点击事件
    }
    
    // 恢复默认颜色样式
    ImGui::PopStyleColor(3); // 弹出之前压入的3个颜色
    
    // 添加其他窗口内容...
}

// 渲染 ImGui 界面
ImGui::Render();

// 处理 ImGui 渲染命令和用户输入...
```

在这个示例中，我们首先使用 `ImGui::PushStyleColor` 分别为按钮的正常状态、悬停状态和按下状态设置了不同的颜色样式。然后，我们创建了一个按钮，该按钮将应用上述颜色样式。最后，我们使用 `ImGui::PopStyleColor` 恢复默认颜色样式。

除了颜色之外，您还可以使用 `PushStyleVar` 和 `PopStyleVar` 来修改按钮的其他样式属性，例如文本对齐、边框宽度等。这使您能够为特定按钮或控件自定义样式。

### ImGui::Indent 
在 Dear ImGui 中，`ImGui::Indent` 函数的作用是用于增加当前控件的缩进。它可以用来创建层次结构或嵌套的控件，并使内部控件相对于外部控件缩进一定的像素或空间，以增加可读性和布局的清晰度。

使用 `ImGui::Indent` 函数，您可以在控件的绘制之前指定要缩进的像素数量。例如：

```cpp
// 在应用程序的主循环中：
ImGui::NewFrame();

// 开始窗口
if (ImGui::Begin("缩进示例")) {
    ImGui::Text("外部文本");

    ImGui::Indent(20); // 缩进内部控件 20 像素

    ImGui::Text("内部文本");
    
    ImGui::Unindent(20); // 恢复默认的缩进
}

// 渲染 ImGui 界面
ImGui::Render();

// 处理 ImGui 渲染命令和用户输入...
```

在这个示例中，我们使用 `ImGui::Indent` 函数在 "内部文本" 控件之前指定了 20 像素的缩进。这使得 "内部文本" 控件相对于 "外部文本" 控件缩进了一定的距离。

`ImGui::Unindent` 函数可以用来恢复默认的缩进级别，以确保后续的控件不受缩进影响。

`ImGui::Indent` 和 `ImGui::Unindent` 通常用于创建嵌套布局，使您能够更好地组织和呈现控件，特别是在创建复杂的用户界面时非常有用。

### ImGui::AlignTextToFramePadding
`ImGui::AlignTextToFramePadding` 是 Dear ImGui 中的一个函数，它的作用是将文本的对齐方式调整为与控件的内边距（frame padding）对齐，以改善文本在控件中的布局。这个函数通常用于按钮、复选框、单选框等控件，以确保文本在控件中的位置看起来更合适。

控件的内边距（frame padding）是控件周围的一些空白区域，通常用于分隔控件的内容和控件的边界。默认情况下，文本在控件中居中对齐，但在某些情况下，您可能希望文本与控件的内边距对齐，以获得更好的视觉效果。

以下是一个示例，演示了如何使用 `ImGui::AlignTextToFramePadding` 来调整文本的对齐方式：

```cpp
// 在应用程序的主循环中：
ImGui::NewFrame();

// 开始窗口
if (ImGui::Begin("文本对齐示例")) {
    // 创建一个带有标签的复选框
    bool checkBoxValue = true;
    ImGui::Checkbox("复选框标签", &checkBoxValue);

    // 调整文本对齐方式
    ImGui::AlignTextToFramePadding();

    // 创建一个带有标签的复选框，此时文本左对齐于内边距
    bool alignedCheckBoxValue = true;
    ImGui::Checkbox("复选框标签 (对齐)", &alignedCheckBoxValue);
}

// 渲染 ImGui 界面
ImGui::Render();

// 处理 ImGui 渲染命令和用户输入...
```

在上述示例中，我们首先创建了一个标准的复选框控件，文本在控件中默认居中对齐。然后，我们使用 `ImGui::AlignTextToFramePadding` 函数，然后再创建了一个复选框控件，此时文本左对齐于控件的内边距，看起来更好。

这个函数特别适用于改善控件的外观和布局，以确保文本在控件内的位置符合您的设计需求。