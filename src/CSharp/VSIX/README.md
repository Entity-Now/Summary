# Visual studio 2022插件

## 语言服务拓展
以下是一些常见的扩展内容类型的 API，并附带简单的说明：

| 内容类型        | API                  | 说明                                                     |
|----------------|----------------------|----------------------------------------------------------|
| 文本编辑器    | `IVsEditorFactory`     | 创建自定义的文本编辑器                                   |
|               | `IVsTextBuffer`        | 访问和操作文本缓冲区                                     |
|               | `IVsTextView`          | 与用户交互的文本视图                                     |
| 语言服务      | `IVsLanguageInfo`      | 定义语言服务的行为，如语法高亮、智能感知等                 |
|               | `IVsLanguageDebugInfo` | 与调试器交互的语言服务接口                               |
| 项目和解决方案 | `IVsHierarchy`         | 管理项目和项目项                                         |
|               | `IVsSolution`          | 管理解决方案和项目级别的操作                             |
| 输出窗口      | `IVsOutputWindow`      | 在 Visual Studio 的输出窗口中显示消息和日志               |
| 菜单和命令    | `OleMenuCommand`       | 定义菜单和命令                                           |
|               | `IVsUIHierarchy`       | 定义自定义工具窗口的行为                                 |
|               | `IVsToolWindowPane`    | 定义自定义工具窗口的内容和行为                           |
| 调试器        | `IVsDebugger`          | 执行与调试器相关的操作，如启动调试会话和设置断点等         |
|               | `IVsDebuggableProjectCfg` | 定义可调试项目的配置和行为                             |
|               | `IVsDebugName`         | 提供调试器显示的项目或文件的名称                         |
|               | `IVsDebuggableProjectCfg2` | 扩展 `IVsDebuggableProjectCfg`，提供更多调试配置选项    |
|               | `IVsDebugTargetSelectionService` | 定义调试目标的选择和设置                             |
| 版本控制      | `IVsSccProvider`       | 实现版本控制提供程序，集成第三方版本控制系统到 Visual Studio |
|               | `IVsSccEnlistmentPathTranslation` | 提供本地和服务器路径之间的转换                     |
|               | `IVsSccManager2`       | 提供与源代码控制管理器交互的高级功能                     |

这些 API 代表了常见的扩展内容类型，可以根据你的具体需求选择适合的 API 进行开发。它们提供了各种功能，包括创建自定义编辑器、管理项目和解决方案、与调试器和版本控制系统交互等。要了解更多关于每个 API 的详细信息和用法，你可以参考 Visual Studio 的官方文档和开发者资源。

## 导出属性
以下是一些常见的导出属性，以及它们的简单说明：

| 导出属性                 | 说明                                                     |
|------------------------|----------------------------------------------------------|
| `[Export]`             | 将类、接口或成员导出为可由其他部件（插件）使用的组件        |
| `[ExportMetadata]`     | 为导出的组件添加元数据，提供更多关于组件的信息              |
| `[ExportMany]`         | 导出多个实例，用于表示一个组件具有多个实现                 |
| `[ExportMetadataValue]`| 获取导出组件的特定元数据的值                               |
| `[Import]`             | 指定依赖关系，将依赖的组件注入到当前组件中                 |
| `[ImportMany]`         | 导入多个实例，用于表示一个组件具有多个依赖项               |
| `[ImportingConstructor]`| 标记用于进行构造函数注入的构造函数                         |
| `[ImportMany]`         | 标记用于进行属性注入的属性                                 |
| `[PartCreationPolicy]` | 控制组件的创建策略，如共享实例或每次请求创建新实例         |
| `[PartMetadata]`       | 为组件添加元数据，提供更多关于组件的信息                   |
| `[InheritedExport]`    | 将基类的导出特性应用于派生类，使其自动成为导出组件         |
| `[ExportProvider]`     | 为导出组件提供自定义的导出提供程序，用于解决依赖关系       |
| `[ExportAttribute]`    | 自定义的导出特性，用于创建自定义的导出属性                  |

这些导出属性用于在插件开发中定义组件的导出、导入和依赖关系。通过使用这些属性，可以将组件导出为可由其他组件使用的部件，并实现依赖注入和组件之间的交互。每个属性都有不同的用途和功能，你可以根据具体的需求选择适合的导出属性来设计和实现插件的导出和导入行为。

请注意，这只是一些常见的导出属性，还有其他更高级的属性和用法可以根据具体情况使用。在实际开发中，你可以参考相关文档和资源来了解更多关于每个属性的详细信息和用法。

## BaseDefinitionAttribute
在 Visual Studio 中，"BaseDefinitionAttribute" 属性可以应用于不同的内置类型。以下是一些常见的内置类型及其相应的说明：

| 内置类型       | 说明                                                    |
|---------------|---------------------------------------------------------|
| `"code"`      | 用于表示通用的代码文件类型                                 |
| `"text"`      | 表示纯文本文件类型                                        |
| `"html"`      | 用于表示 HTML 文件类型                                   |
| `"xml"`       | 用于表示 XML 文件类型                                    |
| `"javascript"`| 用于表示 JavaScript 文件类型                             |
| `"css"`       | 用于表示 CSS 文件类型                                    |
| `"csharp"`    | 用于表示 C# 文件类型                                     |
| `"vb"`        | 用于表示 Visual Basic 文件类型                            |
| `"cpp"`       | 用于表示 C++ 文件类型                                    |
| `"xaml"`      | 用于表示 XAML (Extensible Application Markup Language) 文件类型 |
| `"sql"`       | 用于表示 SQL 文件类型                                    |

上述列举的是一些常见的内置类型，用于表示不同的文件类型或语言。通过将 "BaseDefinitionAttribute" 应用于自定义的内容类型并指定适当的内置类型，可以确保派生内容类型继承了基类型的行为和功能。