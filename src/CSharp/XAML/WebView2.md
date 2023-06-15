# WebView2

## 常用API
WebView2是基于Chromium的Web视图控件，它提供了一系列API，可以通过这些API来操作WebView2控件，包括加载Web内容、处理Web事件、调用JavaScript代码、导航历史记录等。

以下是WebView2的一些常用API：

1. `EnsureCoreWebView2Async()`：异步方法，用于确保CoreWebView2对象已经初始化。在WebView2控件加载完毕后，必须调用这个方法才能获得CoreWebView2对象，并在其上执行操作。

2. `Navigate(string uri)`：导航到指定的URL或文件。

3. `NavigateToString(string htmlContent)`：导航到指定的HTML字符串。

4. `Reload()`：重新加载当前网页。

5. `GoBack()`：返回到上一个网页。

6. `GoForward()`：前进到下一个网页。

7. `ExecuteScriptAsync(string javaScript)`：异步执行指定的JavaScript代码。

8. `AddScriptToExecuteOnDocumentCreatedAsync(string javaScript)`：异步添加一个JavaScript代码片段，在网页加载完成后自动执行。

9. `AddScriptToExecuteOnDocumentCompletedAsync(string javaScript)`：异步添加一个JavaScript代码片段，在网页加载完成后自动执行。

10. `ContainsFullScreenElement`：获取WebView2控件中是否存在全屏元素。

11. `ZoomFactor`：获取或设置WebView2控件的缩放系数。

12. `CoreWebView2.Settings`：获取CoreWebView2对象的设置对象，用于设置WebView2控件的各种属性，例如开启或关闭JavaScript、Cookie等功能。

13. `CoreWebView2.WebMessageReceived`：事件，当WebView2控件接收到来自网页的消息时触发。

14. `CoreWebView2.WebResourceRequested`：事件，当WebView2控件向服务器请求资源时触发。

15. `CoreWebView2.WebResourceResponseReceived`：事件，当WebView2控件接收到来自服务器的响应时触发。

这些API只是WebView2的一部分，还有很多其他API可以用于实现不同的功能。如果您需要详细了解WebView2的API，请参考Microsoft官方文档。

## 获取页面的Cookies
要获取当前页面的cookies等请求头，可以使用WebView2中的CoreWebView2对象的相应API来实现。以下是一些常用的方法：

1. `CoreWebView2.CookieManager.GetCookies(string uri)`：异步获取指定URL的所有Cookie信息。

```csharp
string currentUrl = webView2.CoreWebView2.Source.ToString();
List<Cookie> cookies = new List<Cookie>();
var cookieList = await webView2.CoreWebView2.CookieManager.GetCookiesAsync(currentUrl);
foreach (var cookie in cookieList)
{
    cookies.Add(new Cookie(cookie.Name, cookie.Value, cookie.Path, cookie.Domain));
}
```

2. `CoreWebView2.AddWebResourceRequestedFilter(string uri, CoreWebView2WebResourceContext context)`：添加用于拦截请求的筛选器。

```csharp
webView2.CoreWebView2.AddWebResourceRequestedFilter("*", CoreWebView2WebResourceContext.All);
webView2.CoreWebView2.WebResourceRequested += (sender, e) =>
{
    // e.Request.Headers 包含了请求头信息，可以从中获取Cookie信息
    // e.Request.Headers["Cookie"]
};
```

3. `CoreWebView2.WebMessageReceived`：事件，当WebView2控件接收到来自网页的消息时触发。

```csharp
webView2.CoreWebView2.WebMessageReceived += (sender, args) =>
{
    // args.TryGetWebMessageAsString() 获取来自网页的消息
};
```

这些方法可以帮助您获取WebView2控件中的Cookie和请求头信息。如果您需要获取更多信息，可以查阅Microsoft官方文档。

## 注入C#函数
在使用WebView2时，可以通过C#代码将函数注入到网页中，使得网页可以调用这些函数，这样就可以在网页中调用本地的C#代码。

以下是一些示例代码，用于将C#函数注入到WebView2中：

1. 首先，定义一个用于注入到WebView2的C#类，该类必须标记为COM可见，并且包含将被注入到WebView2中的函数：

```csharp
[ComVisible(true)]
public class MyWebView2Object
{
    public void MyFunction(string param1, int param2)
    {
        // 这里是函数实现代码
    }
}
```

在这个例子中，`MyFunction`是一个带有两个参数的函数，可以在WebView2中调用。请注意，这个类必须标记为`ComVisible`，否则在WebView2中无法访问。

2. 在加载WebView2之前，将C#类实例注入到WebView2中：

```csharp
// 创建WebView2环境
var env = await WebView2Environment.CreateAsync(null);

// 创建WebView2控件
var webView = new WebView2();
webView.CreationProperties = new CoreWebView2CreationProperties
{
    BrowserExecutableFolder = env.BrowserExecutableFolder
};
await webView.EnsureCoreWebView2Async();

// 将C#类实例注入到WebView2中
webView.CoreWebView2.AddHostObjectToScript("MyObject", new MyWebView2Object());
```

在这个例子中，`AddHostObjectToScript`方法将`MyWebView2Object`类的实例注入到WebView2中，`MyObject`是一个用于在WebView2中访问这个实例的名称。这个名称可以在JavaScript中使用。

3. 在WebView2中使用注入的函数：

```javascript
// 在JavaScript中调用注入的函数
window.MyObject.MyFunction("param1", 123);
```

在这个例子中，`window.MyObject.MyFunction`调用了`MyFunction`函数，并传递了两个参数。这个函数将会在C#中被执行。

通过这种方式，可以将C#函数注入到WebView2中，使得网页可以调用本地的C#代码。请注意，为了确保安全性，需要对注入的函数进行适当的控制和验证，以防止任意代码执行或潜在的安全漏洞。