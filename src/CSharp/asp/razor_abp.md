# razor和abp的使用

## razor目录结构

- wwwroot
  - css
  - js
  - images
- Views
  - Main
    - index.cshtml
  - Shared
    - _Layout.cshtml
    - Components
    - Nav
      - Default.cshtml
      - NavViewComponent.cs
  - _ViewImports.cshtml

### _ViewImports.cshtml

  ```html
    <!DOCTYPE html>
    <html lang="zh-cn">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="fontawesome/css/brands.min.css" />
        <link rel="stylesheet" href="fontawesome/css/solid.min.css" />
    </head>
    <body>
        @await Component.InvokeAsync("Nav");
        @RenderBody()
        <script src="js/tailwindcss_3_4_3.js"></script>
    </body>
    </html>

  ```

### index.cshtml

```html
    @page 
    @{
        Layout = "_Layout";
    }

    <h1>razor 页面暂未更新.</h1>
```

### Nav 组件

```html
<div class="NavContainer ">
    hello nav

</div>
```

```cs
using Microsoft.AspNetCore.Mvc;

namespace MoqSystem.Api.Host.Views.Shared.Components.Nav;

[ViewComponent]
public class NavViewComponent : ViewComponent
{
    public async Task<IViewComponentResult> InvokeAsync()
    {
        return View();
    }
}

```

## abp 控制器
需要添加AllowAnonymous和ApiExplorerSettings特性，否则无法使用。

```cs
using Volo.Abp.Application.Services;
using Volo.Abp.AspNetCore.Mvc;

namespace MoqSystem.Application.Main.MainControllers
{
    /// <summary>
    /// 接口服务
    /// </summary>
    [AllowAnonymous]
    //[Route("/")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class MainController() : AbpController
    {
        /// <summary>
        /// 测试接口
        /// </summary>
        /// <returns>测试数据</returns>
        public string getTest() => "测试数据";

        [HttpGet]
        public IActionResult Index()
        {

            return View();
        }
    }
}

```
