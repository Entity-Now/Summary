# soap 通讯协议

**SOAP**（简易对象访问协议）是一种基于 XML 的协议，用于在 Web 上进行消息传递。它允许应用程序在分布式环境中进行交互，并支持不同操作系统和编程语言之间的通信¹²³。

SOAP 协议包含以下几个关键的属性和元素：

1. **SOAP Envelope**（SOAP 信封）：
   - SOAP Envelope 是 SOAP 消息的根元素，它包含了整个 SOAP 消息的描述信息。
   - 它定义了消息的结构，包括 Header 和 Body 部分。
   - Envelope 元素必须是 SOAP 消息的第一个元素。

2. **SOAP Header**（SOAP 头部）：
   - SOAP Header 是可选的，用于传递与消息相关的其他信息，如安全认证信息、事务处理等。
   - 如果 Header 元素被提供，则它必须是 Envelope 元素的第一个子元素。
   - Header 元素的直接子元素必须是合格的命名空间。

3. **SOAP Body**（SOAP 主体）：
   - SOAP Body 包含了实际的消息内容。
   - 它定义了具体的操作和数据。

此外，SOAP 还定义了一些属性，用于控制消息的处理方式：

- **actor 属性**：
  - 通过沿着消息路径经过不同的端点，SOAP 消息可从某个发送者传播到某个接收者。
  - actor 属性可用于将 Header 元素寻址到一个特定的端点。

- **mustUnderstand 属性**：
  - 标识标题项对于要对其进行处理的接收者来说是强制的还是可选的。
  - 如果某个 Header 元素的子元素添加了 `mustUnderstand="1"`，则接收者必须认可此元素。

- **encodingStyle 属性**：
  - 用于定义在文档中使用的数据类型。
  - 可出现在任何 SOAP 元素中，会被应用到元素的内容及元素的所有子元素上。

请注意，实际的 SOAP 消息可能会根据具体的服务和操作而有所不同。SOAP 还支持其他功能，例如身份验证、错误处理等。

## soap协议的基本结构
```xml
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

<soap:Header>
...
</soap:Header>

<soap:Body>
...
  <soap:Fault>
  ...
  </soap:Fault>
</soap:Body>

</soap:Envelope>
```

## soap示例
当然，以下是一个稍微复杂一些的 **SOAP** 示例。这次我们将模拟一个用于查询股票价格的 SOAP 请求。

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/stockservice">
   <soapenv:Header/>
   <soapenv:Body>
      <web:GetStockPrice>
         <web:StockSymbol>MSFT</web:StockSymbol>
      </web:GetStockPrice>
   </soapenv:Body>
</soapenv:Envelope>
```

在这个示例中：
- 我们仍然使用了 SOAP 的 XML 结构。
- `<web:GetStockPrice>` 是一个自定义的操作，用于获取股票价格。
- `<web:StockSymbol>` 元素指定了要查询的股票代码（例如，这里是 Microsoft 的股票代码 "MSFT"）。

请注意，实际的 SOAP 消息将根据具体的服务和操作而有所不同。SOAP 还支持其他功能，例如身份验证、错误处理等。