# html 资源加载

## preload/prefetch
###### preload/prefetch两者是以`<link rel="preload">` 和 `<link rel="prefetch">`作为引入方式，其主要作用和区别如下
1. preload：基本的用法是提前加载资源，告诉浏览器预先请求当前页需要的资源，从而提高这些资源的请求优先级，加载但是不运行，占用浏览器对同一个域名的并发数。
1. prefetch：基本用法是浏览器会在空闲的时候，下载资源并缓存起来。当有页面使用的时候，直接从缓存中读取。其实就是把决定是否和什么时间加载这个资源的决定权交给浏览器。