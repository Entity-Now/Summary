# razor 语法

## `@:` 显式行转换
显式行转换是一种在Razor代码块中使用@:符号来显示HTML文本的方法。它可以让你在C#代码中嵌入HTML内容，而不需要使用<text>标签或其他HTML标记。例如：

```CS
@for (var i = 0; i < people.Length; i++)
{
  var person = people[i];
  @:Name: @person.Name
}
```

这段代码会在每次循环时输出人的名字，而不会被视为C#代码。如果不使用@:符号，这段代码会在运行时出错，因为Razor无法识别Name:这个字符串。

## `@attribute`
@attribute指令是一种在Razor文件中添加自定义属性的方法。它可以用于给生成的页面或视图的类添加特性，例如[Authorize]或[Route]等。它也可以用于在Razor组件中提供基于常量的路由模板，例如[Route("/counter")]等。
@attribute指令的语法如下：

`@attribute [attributeName(parameter1, parameter2, ...)]`

其中attributeName是要添加的特性的名称，parameter1, parameter2, ...是可选的参数，可以是常量或类型。
例如，如果你想给一个Razor页面添加一个授权特性，你可以这样写：

`@attribute [Authorize(Roles = "Admin")]`

这样，只有拥有Admin角色的用户才能访问这个页面。
如果你想给一个Razor组件添加一个路由模板，你可以这样写：

`@attribute [Route("/counter")]`

这样，这个组件就可以通过/counter这个路径访问。


## `@functions` | '@code
@functions和@code都是razor语法中的指令，可以用来在页面或组件中添加C#成员（字段、属性和方法）。它们的语法如下：

```razor
@functions {
  // C# members
}

@code {
  // C# members
}
```

它们的区别主要有以下两点：
- @functions指令只能用在ASP.NET网页中，而@code指令可以用在ASP.NET网页和razor组件中。对于razor组件，@code是@functions的别名，建议优先使用@code。
- @functions指令只能出现一次，而@code指令可以出现多次。如果在一个页面或组件中使用多个@functions指令，会导致编译错误。
下面是一个使用@code指令的示例，它定义了一个名为Counter的razor组件，它有一个属性CurrentCount和一个方法IncrementCount：

```razor
@page "/counter"

<h1>Counter</h1>

<p>Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    int currentCount = 0;

    void IncrementCount()
    {
        currentCount++;
    }
}
```

## `@implements` 继承接口
“@implements”指令是一种在razor文件中实现接口的方法。接口是一种定义一组方法、属性和事件的契约，但不提供实现的类型。实现接口的类或结构必须提供接口中定义的所有成员的具体实现。这样可以实现多态性，即使用接口类型的变量来引用不同的实现类的对象，从而调用相同的接口成员。
“@implements”指令的语法如下：

`@implements [interfaceName]`

其中interfaceName是要实现的接口的名称。你可以在一个razor文件中使用多个“@implements”指令来实现多个接口，但是你不能使用“@implements”指令来继承类，因为C#不支持多重继承。如果你想继承类，你可以使用“@inherits”指令，但是你只能继承一个类。
你可以在“@functions”或“@code”指令中提供接口成员的实现，例如：

```
@implements IMyInterface

@code {
  public void MyMethod () {
    // Implementation logic
  }
}
```

这段代码实现了一个名为IMyInterface的接口，该接口定义了一个名为MyMethod的方法。

## ·@inherits·
`@inherits`指令是一种在razor文件中继承类的方法。类是一种定义数据和行为的模板，可以用来创建对象。继承类的类可以使用基类的成员，并且可以添加或重写自己的成员。这样可以实现代码的复用和扩展。
@inherits指令的语法如下：

`@inherits [className]`

其中className是要继承的类的名称。你可以在一个razor文件中使用一个`@inherits`指令来继承一个类，但是你不能使用多个`@inherits`指令来继承多个类，因为C#不支持多重继承。如果你想实现多个接口，你可以使用@implements指令，但是你只能实现一个类。
你可以在@functions或@code指令中使用基类的成员，或者添加或重写自己的成员，例如：

```
@inherits ViewBase

@this.Html.CheckBox ()

@code {
  protected override void OnInitialized () {
    base.header = "Setting header for the parent";
  }
}
```

这段代码继承了一个名为ViewBase的类，该类定义了一个属性Html和一个方法OnInitialized。这个代码使用了Html的CheckBox方法，并且重写了OnInitialized方法，给基类的header属性赋值。

## `@inject`
@inject指令是一种在Razor文件中使用依赖注入的方法。依赖注入是一种技术，它可以让你从一个中心位置获取服务，而不需要手动创建服务的实例。这样可以减少代码的耦合，提高代码的可维护性和可测试性。
@inject指令的语法如下：

`@inject [serviceType] [propertyName]`

其中serviceType是要注入的服务的类型，propertyName是要给服务起的属性名。你可以在一个Razor文件中使用多个@inject指令来注入多个服务。
例如，如果你想在一个Razor页面中注入一个名为WeatherService的服务，你可以这样写：

`@inject WeatherService Weather`

这样，你就可以在页面中使用Weather属性来访问WeatherService的方法和属性。
要使用@inject指令，你需要先在应用的服务容器中注册服务。你可以在Program文件中使用builder.Services来添加服务，例如：

`builder.Services.AddSingleton<WeatherService>();`

## `@namespace` 命名空间
@namespace指令是一种在Razor文件中定义命名空间的指令。命名空间是一种组织代码的方式，可以避免名称冲突。

## `@model`
`@model`指令是一种在Razor文件中指定模型类型的方法。模型是一种用于在视图和控制器之间传递数据的对象。模型类型可以是任何.NET类型，例如类、结构、枚举等。指定模型类型后，你可以在视图中使用Model属性来访问模型对象的成员。
@model指令的语法如下：

`@model [modelType]`

其中modelType是要指定的模型类型的名称。你可以在一个Razor文件中使用一个@model指令来指定一个模型类型，但是你不能使用多个@model指令来指定多个模型类型，因为一个视图只能有一个模型对象。
例如，如果你想在一个Razor页面中指定一个名为Student的模型类型，你可以这样写：

`@model Student`

这样，你就可以在页面中使用Model属性来访问Student对象的属性和方法，例如：

```
<p>Student Name: @Model.Name</p>
<p>Student Age: @Model.Age</p>
```

要使用@model指令，你需要先在控制器中传递模型对象给视图。你可以使用View方法的第二个参数来传递模型对象，例如：

```
public IActionResult Index()
{
    var student = new Student
    {
        Name = "Alice",
        Age = 18
    };
    return View(student);
}
```

## rendermode

@rendermode指令是一种在Razor文件中指定呈现模式的方法。呈现模式决定了组件使用的托管模型、呈现位置以及是否是交互式的。Blazor Web应用中有以下四种呈现模式：
- 静态服务器：组件在服务器端静态呈现，不支持交互，适用于纯展示性的内容，例如标题、导航栏等。
- 交互式服务器：组件在服务器端交互式呈现，支持交互，使用Blazor Server模型，适用于需要实时更新或访问服务器资源的内容，例如聊天、仪表盘等。
- 交互式WebAssembly：组件在客户端交互式呈现，支持交互，使用Blazor WebAssembly模型，适用于需要离线工作或访问本地资源的内容，例如游戏、编辑器等。
- 交互式自动：组件在第一次访问时使用交互式服务器模式，之后使用交互式WebAssembly模式，支持交互，结合了两种模型的优点，适用于需要快速加载和高性能的内容，例如电子商务、社交媒体等。
@rendermode指令的语法如下：

`@rendermode [renderMode]`

其中renderMode是要指定的呈现模式的名称，可以是StaticServer、InteractiveServer、InteractiveWebAssembly或InteractiveAuto。你可以在一个Razor文件中使用一个@rendermode指令来指定一个呈现模式，但是你不能使用多个@rendermode指令来指定多个呈现模式，因为一个组件只能有一个呈现模式。
例如，如果你想在一个Razor页面中指定一个交互式WebAssembly呈现模式，你可以这样写：

`@rendermode InteractiveWebAssembly`

这样，这个页面就会在客户端呈现，并且可以与用户交互。
要使用@rendermode指令，你需要先在应用的服务容器中注册服务。你可以在Program文件中使用builder.Services来添加服务，例如：

`builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();`

### `StaticServer、InteractiveServer、InteractiveWebAssembly或InteractiveAuto的区别`

这些都是Blazor Web应用中的呈现模式，它们决定了组件使用的托管模型、呈现位置以及是否是交互式的。下面是一个简单的对比表格：

| 呈现模式 | 托管模型 | 呈现位置 | 是否交互式 | 适用场景 |
| :---: | :---: | :---: | :---: | :---: |
| StaticServer | 无 | 服务器 | 否 | 纯展示性的内容，例如标题、导航栏等 |
| InteractiveServer | Blazor Server | 服务器 | 是 | 需要实时更新或访问服务器资源的内容，例如聊天、仪表盘等 |
| InteractiveWebAssembly | Blazor WebAssembly | 客户端 | 是 | 需要离线工作或访问本地资源的内容，例如游戏、编辑器等 |
| InteractiveAuto | Blazor Server + Blazor WebAssembly | 服务器，然后客户端 | 是 | 需要快速加载和高性能的内容，例如电子商务、社交媒体等 |

## preservewhitespace
Razor 中的 `@preserveshitespace` 指令是用来控制 Razor 引擎在编译 Razor 文件时是否保留空白字符的。空白字符包括空格、制表符、换行符等。默认情况下，Razor 引擎会删除 Razor 文件中的多余的空白字符，以减少生成的 HTML 文件的大小。但是，有时候我们可能需要保留空白字符，比如在显示代码或者预格式化文本的时候。这时候，我们可以使用 `@preserveshitespace` 指令来告诉 Razor 引擎不要删除空白字符。

`@preserveshitespace` 指令可以放在 Razor 文件的任何位置，它会影响它所在的代码块或者整个文件的空白字符处理。我们可以使用 `true` 或者 `false` 参数来开启或关闭空白字符保留功能。例如：

```razor
@* 这个文件中的所有空白字符都会被保留 *@
@preserveshitespace true

<div>
    <p>这是一个段落。</p>
</div>

@* 这个代码块中的空白字符不会被保留 *@
@preserveshitespace false
<div>
    <p>这是另一个段落。</p>
</div>
```

生成的 HTML 文件如下：

```html
<div>
    <p>这是一个段落。</p>
</div>
<div><p>这是另一个段落。</p></div>
```

注意，`@preserveshitespace` 指令只影响 Razor 引擎在编译时的空白字符处理，它不会影响浏览器在渲染时的空白字符处理。如果我们想要在浏览器中保留空白字符的显示效果，我们还需要使用 CSS 的 `white-space` 属性来设置元素的空白字符处理方式。例如：

```razor
@* 这个文件中的所有空白字符都会被保留 *@
@preserveshitespace true

<style>
    pre {
        white-space: pre;
    }
</style>

<pre>
    public class Program
    {
        public static void Main()
        {
            Console.WriteLine("Hello, world!");
        }
    }
</pre>
```

这样，我们就可以在浏览器中看到代码的原始格式，而不是被压缩成一行。

## section
Razor 中的 @section 指令是用来在视图中定义一些可替换的内容区域的。这些内容区域可以在布局文件中通过 @RenderSection 方法来渲染。这样，我们可以在布局文件中预留一些位置，让不同的视图可以根据需要填充不同的内容，比如脚本、样式、侧边栏等。
@section 指令的语法如下：

`@section SectionName {
    // Razor 代码或 HTML 内容
}`

其中，SectionName 是一个字符串，表示内容区域的名称。我们可以在一个视图中定义多个不同名称的 @section，但是同一个名称的 @section 只能定义一次。@section 指令必须放在视图的顶层，不能嵌套在其他代码块中。
在布局文件中，我们可以使用 @RenderSection 方法来渲染视图中定义的 @section。@RenderSection 方法的语法如下：

`@RenderSection("SectionName", required: true|false)`

其中，SectionName 是一个字符串，表示要渲染的内容区域的名称。它必须和视图中定义的 @section 的名称一致。required 参数是一个布尔值，表示是否必须有视图提供该内容区域。如果为 true，则所有使用该布局文件的视图都必须定义该 @section，否则会抛出异常。如果为 false，则可以没有视图提供该内容区域，此时 @RenderSection 方法不会输出任何内容。
例如，假设我们有一个布局文件 _Layout.cshtml，它包含了一个 @RenderSection("Scripts", required: false)，用来渲染视图中可能提供的脚本内容：

```HTML
<!DOCTYPE html>
<html>
<head>
    // 省略其他内容
</head>
<body>
    // 省略其他内容
    @RenderSection("Scripts", required: false)
</body>
</html>
```

然后，我们有一个视图 Index.cshtml，它使用了这个布局文件，并且定义了一个 @section Scripts，用来提供一些脚本内容：

```CS
@{
    Layout = "_Layout.cshtml";
}

@section Scripts {
    <script>
        alert("Hello, world!");
    </script>
}
```

这样，当我们访问 Index.cshtml 时，它会渲染出如下的 HTML：

```HTML
<!DOCTYPE html>
<html>
<head>
    // 省略其他内容
</head>
<body>
    // 省略其他内容
    <script>
        alert("Hello, world!");
    </script>
</body>
</html>
```

我们可以看到，视图中定义的 @section Scripts 被渲染到了布局文件中 @RenderSection("Scripts", required: false) 的位置。
如果我们有另一个视图 About.cshtml，它也使用了这个布局文件，但是没有定义 @section Scripts，那么当我们访问 About.cshtml 时，它会渲染出如下的 HTML：

```HTML
<!DOCTYPE html>
<html>
<head>
    // 省略其他内容
</head>
<body>
    // 省略其他内容
</body>
</html>
```

我们可以看到，布局文件中 @RenderSection("Scripts", required: false) 的位置没有输出任何内容，因为视图没有提供该内容区域。
如果我们把布局文件中 @RenderSection("Scripts", required: false) 的 required 参数改为 true，那么当我们访问 About.cshtml 时，就会抛出一个异常，提示没有找到 Scripts 区域：

`InvalidOperationException: The following sections have been defined but have not been rendered by the page at '/Views/Shared/_Layout.cshtml': 'Scripts'. To ignore an unrendered section call IgnoreSection("sectionName").`

这就是 @section 指令和 @RenderSection 方法的基本用法。

## typeparam 组件泛型
```
@page '/'
@typeparam T

@code{
  [Parameter]
  public List<T> Items{get;set;}
}
```
> 使用组件
```
<MyComponent T="MyClass" Items="xxx" />
```

