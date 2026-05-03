# wsdl 协议

**WSDL**（网络服务描述语言）是一种使用 XML 编写的文档，用于描述 Web 服务。它规定了服务的位置以及此服务提供的操作（或方法）¹²³.

以下是 WSDL 文档的主要元素：

1. **端口（PortType）**：
   - 端口是 WSDL 中最重要的元素之一。
   - 它描述了一个 Web 服务，包括可执行的操作和相关的消息。
   - 可以将端口类比为传统编程语言中的函数库或模块。

2. **消息（Message）**：
   - 消息定义了操作的数据元素。
   - 每个消息由一个或多个部件组成，类似于传统编程语言中函数调用的参数。

3. **数据类型（Types）**：
   - 数据类型定义了 Web 服务使用的数据类型。
   - WSDL 使用 XML Schema 语法来定义数据类型，以实现最大程度的平台中立性。

4. **绑定（Binding）**：
   - 绑定为每个端口定义了消息格式和协议细节。

一个简化的 WSDL 示例如下：

```xml
<definitions>
   <types> <!-- 数据类型定义... --> </types>
   <message name="getTermRequest">
      <part name="term" type="xs:string"/>
   </message>
   <message name="getTermResponse">
      <part name="value" type="xs:string"/>
   </message>
   <portType name="glossaryTerms">
      <operation name="getTerm">
         <input message="getTermRequest"/>
         <output message="getTermResponse"/>
      </operation>
   </portType>
</definitions>
```

在这个示例中：
- `<portType>` 元素将 "glossaryTerms" 定义为端口名称，将 "getTerm" 定义为操作名称。
- 操作 "getTerm" 具有一个名为 "getTermRequest" 的输入消息和一个名为 "getTermResponse" 的输出消息。
- `<message>` 元素定义了每个消息的部件和相关联的数据类型。