# razor router

## 设置路由
```razor
@page "/router"

或者

@attribute [Microsoft.AspNetCore.Components.RouteAttribute("router")]
```

## 聚焦路由

`<FocusOnNavigate RouteData="@routeData" Selector="h1" />`

## 路由参数
`@page "/router/{text}"`
可选路由
`@page "/router/{text?}"`

## 路由约束
| 类型 | 约束 | 示例 | 是否可选 |
| ---- | ---- | ---- | ---- |
| bool  | `{active:bool}` | true，FALSE | 否
| datetime  | `{dob:datetime}`    | 2016-12-31，2016-12-31 7:32pm   | 是
| decimal   | `{price:decimal}`   | 49.99，-1,000.01    | 是
| double    | `{weight:double}`   | 1.234，-1,001.01e8  | 是
| float | `{weight:float}`    | 1.234，-1,001.01e8  | 是
| guid  | `{id:guid}` | CD2C1638-1638-72D5-1638-DEADBEEF1638    | 否
| int   | `{id:int}`  | 123456789，-123456789   | 是
| long  | `{ticks:long}`  | 123456789，-123456789   | 是

## catch-all 路由参数
```cs
@page "/catch-all/{*pageRoute}"

@code {
    [Parameter]
    public string? PageRoute { get; set; }
}
```
> 假设当前的路由为`/catch-all/test/all`那么`PageRoute`的值为： `test/all`

## 导航
```cs
@page "/navigate"
@using Microsoft.Extensions.Logging 
@implements IDisposable
@inject ILogger<Navigate> Logger
@inject NavigationManager Navigation

<h1>Navigate in component code example</h1>

<button class="btn btn-primary" @onclick="NavigateToCounterComponent">
    Navigate to the Counter component
</button>

@code {
    private void NavigateToCounterComponent()
    {
        Navigation.NavigateTo("counter");
    }

    protected override void OnInitialized()
    {
        Navigation.LocationChanged += HandleLocationChanged;
    }

    private void HandleLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        Logger.LogInformation("URL of new location: {Location}", e.Location);
    }

    public void Dispose()
    {
        Navigation.LocationChanged -= HandleLocationChanged;
    }
}
```