# 部分视图

在ASP.NET Core中，"分布视图"通常指的是将视图分布到不同的位置或文件夹结构中，以便更好地组织和管理项目中的视图文件。这有助于维护和可读性。

## 在cshtml中调用部分视图
首先在`Views/Partial`目录下创建一个名为`_test_view.cshtml`的部分视图文件。然后，在需要调用该部分视图的视图中，使用`Html.RenderPartialAsync`或者`Html.PartialAsync`指令来引入该部分视图。

```html
<p>以波形符斜杠 (~/) 或斜杠 (/) 开头的路径指代应用程序根目录</p>
<partial name="~/Views/Partial/_test_view.cshtml"/>
<partial name="/Views/Partial/_test_view.cshtml"/>

<p>使用相对路径的分部视图</p>
<partial name="../Partial/_test_view.cshtml" />

<p>异步HTML帮助程序</p>
@await Html.PartialAsync("~/Views/Partial/_test_view.cshtml")
<p>RenderPartialAsync用于直接将其内容嵌入到视图中，而partial通常在控制器中呈现，并返回PartialViewResult</p>
@{
    await Html.RenderPartialAsync("~/Views/Partial/_test_view.cshtml");
}

<p>使用action返回的PartialViewResult渲染</p>
```