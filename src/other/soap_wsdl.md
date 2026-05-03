# wsdl 和 soap 的区别

实际上，WSDL（Web Services Description Language）和SOAP（Simple Object Access Protocol）都是用于描述和定义 web 服务的协议，但它们有不同的作用和角色：

1. **WSDL（Web Services Description Language）**：
   - WSDL是一种 XML 格式的语言，用于描述 web 服务的接口、参数和消息格式等信息。
   - 它提供了一个服务端描述，定义了服务的位置、可用方法以及如何访问这些方法的详细信息。
   - WSDL通常由服务端提供，客户端可以使用它来了解如何与服务端进行通信。

2. **SOAP（Simple Object Access Protocol）**：
   - SOAP是一种基于 XML 的协议，用于在网络上交换结构化的信息。
   - 它定义了一种通信协议，允许在不同的操作系统和编程语言之间进行通信。
   - SOAP消息可以在多种传输协议上进行传输，如HTTP、SMTP等。
   - SOAP消息包括用于描述消息内容和调用方法的XML标记。

总的来说，WSDL描述了web服务的接口和操作，而SOAP定义了在web服务之间进行通信时所使用的消息格式和协议。虽然它们通常与服务端和客户端相关联，但它们更多地描述了服务之间的通信规则和接口。

## 使用案例

### 定义WSDL文档
**WSDL**（网络服务描述语言）是一种使用 XML 编写的文档，用于描述 Web 服务。它规定了服务的位置以及此服务提供的操作（或方法）.

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

### 定义SOAP协议
在 **WSDL** 中，`<input>` 元素定义了操作的输入消息。虽然 `<input>` 不直接传递值，但它指定了操作所需的消息结构和数据类型。

具体来说：
- `<input>` 元素指定了一个名为 `getTermRequest` 的输入消息。
- 这个消息包含一个名为 `term` 的部件，其数据类型为字符串（`xs:string`）。

实际上，当您使用 WSDL 定义的 Web 服务时，您需要构造一个符合 `getTermRequest` 消息结构的 SOAP 请求。在这个请求中，您将提供实际的值作为 `term` 部件的内容。

例如，如果您要查询某个术语的定义，您将构建一个类似以下的 SOAP 请求：

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/glossaryservice">
   <soapenv:Header/>
   <soapenv:Body>
      <web:GetTerm>
         <web:Term>XML</web:Term>
      </web:GetTerm>
   </soapenv:Body>
</soapenv:Envelope>
```

在这个示例中，`<web:Term>` 部件的值是 "XML"，这是您要查询的术语。

因此，虽然 `<input>` 元素本身不直接传递值，但它定义了操作所需的消息结构，您需要根据该结构构建实际的请求。

## 更复杂的案例
以下是一个简单的示例，包括一个用于计算两个数字之和的简单 web 服务的 WSDL 和 SOAP 定义：

**WSDL 文件（CalculatorService.wsdl）：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions name="CalculatorService"
    targetNamespace="http://example.com/calculator"
    xmlns="http://schemas.xmlsoap.org/wsdl/"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:tns="http://example.com/calculator"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema">

    <!-- 定义服务 -->
    <service name="CalculatorService">
        <!-- 定义端口 -->
        <port name="CalculatorPort" binding="tns:CalculatorBinding">
            <!-- 指定服务地址 -->
            <soap:address location="http://example.com/calculator"/>
        </port>
    </service>

    <!-- 定义输入参数类型 -->
    <types>
        <xsd:schema targetNamespace="http://example.com/calculator">
            <xsd:element name="AddRequest">
                <xsd:complexType>
                    <xsd:sequence>
                        <xsd:element name="num1" type="xsd:int"/>
                        <xsd:element name="num2" type="xsd:int"/>
                    </xsd:sequence>
                </xsd:complexType>
            </xsd:element>
            <xsd:element name="AddResponse">
                <xsd:complexType>
                    <xsd:sequence>
                        <xsd:element name="result" type="xsd:int"/>
                    </xsd:sequence>
                </xsd:complexType>
            </xsd:element>
        </xsd:schema>
    </types>

    <!-- 定义操作 -->
    <message name="AddRequestMessage">
        <part name="parameters" element="tns:AddRequest"/>
    </message>
    <message name="AddResponseMessage">
        <part name="parameters" element="tns:AddResponse"/>
    </message>

    <!-- 定义绑定 -->
    <binding name="CalculatorBinding" type="tns:CalculatorPortType">
        <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
        <operation name="Add">
            <soap:operation soapAction="http://example.com/calculator/Add"/>
            <input>
                <soap:body use="literal" parts="parameters"/>
            </input>
            <output>
                <soap:body use="literal"/>
            </output>
        </operation>
    </binding>

    <!-- 定义端口类型 -->
    <portType name="CalculatorPortType">
        <operation name="Add">
            <input message="tns:AddRequestMessage"/>
            <output message="tns:AddResponseMessage"/>
        </operation>
    </portType>
</definitions>
```

**SOAP 消息示例：**

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:cal="http://example.com/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <cal:AddRequest>
         <num1>10</num1>
         <num2>20</num2>
      </cal:AddRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

**注释说明：**

- **WSDL 文件注释**：
  - `definitions` 元素：定义了整个 WSDL 文档的根元素，包含了服务的名称、目标命名空间等信息。
  - `service` 元素：定义了服务，指定了服务的名称和端口。
  - `types` 元素：定义了数据类型，包括输入和输出参数的数据结构。
  - `message` 元素：定义了操作所使用的消息类型，包括请求消息和响应消息。
  - `binding` 元素：定义了操作和消息之间的绑定，指定了使用的协议和消息格式。
  - `portType` 元素：定义了端口类型，包含了服务的操作列表。
  
- **SOAP 消息注释**：
  - `<soapenv:Envelope>` 元素：SOAP 消息的根元素，包含了整个消息。
  - `<soapenv:Header>` 元素：可选的 SOAP 消息头部。
  - `<soapenv:Body>` 元素：包含了实际的请求或响应数据。
  - `<cal:AddRequest>` 元素：指定了调用的操作和参数。
  - `<num1>` 和 `<num2>` 元素：传递了要相加的两个数字。

这个示例演示了一个简单的 web 服务，使用 WSDL 来描述服务接口和操作，使用 SOAP 来定义通信协议和消息格式。