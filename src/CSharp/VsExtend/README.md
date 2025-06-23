# Syntax Tree语法树

## 常用API
下面是一些常用的 `SyntaxTree` 类的方法和属性，以及它们的简单描述：

| 方法/属性                          | 描述                                                  |
| ---------------------------------- | ----------------------------------------------------- |
| `Encoding`                         | 获取语法树对应的源代码文本的编码                       |
| `FilePath`                         | 获取语法树对应的源代码文件路径                         |
| `Options`                          | 获取语法树的解析选项                                  |
| `Length`                           | 获取语法树对应的源代码文本的长度                       |
| `Options`                          | 获取语法树的解析选项                                  |
| `GetCompilationUnitRoot()`         | 获取语法树的根节点，表示整个编译单元的语法结构         |
| `GetDiagnostics()`                 | 获取语法树的诊断信息，如语法错误、警告等               |
| `GetLineSpan(TextSpan)`            | 获取指定文本范围的行范围                                |
| `GetLocation(TextSpan)`            | 获取指定文本范围的位置信息                              |
| `GetMappedLineSpan(TextSpan)`      | 获取指定文本范围的映射行范围                            |
| `GetRoot(CancellationToken)`        | 异步获取语法树的根节点                                  |
| `GetText(CancellationToken)`        | 异步获取语法树对应的源代码文本                           |
| `HasCompilationUnitRoot`           | 获取一个值，指示语法树是否具有编译单元根节点             |
| `HasReferenceDirectives`           | 获取一个值，指示语法树是否具有引用指令                   |
| `TryGetCompilationUnitRoot(out CompilationUnitSyntax)` | 尝试获取语法树的编译单元根节点 |
| `TryGetRoot(out SyntaxNode)`       | 尝试获取语法树的根节点                                  |
| `WithFilePath(String)`             | 使用指定的文件路径创建新的语法树                         |
| `WithFilePath(String, Encoding)`   | 使用指定的文件路径和编码创建新的语法树                   |
| `WithRootAndOptions(SyntaxNode, ParseOptions)` | 使用指定的根节点和解析选项创建新的语法树     |
| `ToString()`                       | 获取语法树的字符串表示                                  |

这些方法和属性提供了对 `SyntaxTree` 对象的各种操作和信息访问的功能。你可以使用它们来获取语法树的根节点、诊断信息、源代码文本、文件路径等，还可以修改语法树的相关信息以及创建新的语法树。

这些方法和属性提供了对 `SyntaxTree` 对象的基本操作和信息访问。例如，`GetCompilationUnitRoot()` 方法可以用于获取整个编译单元的语法结构，`GetDiagnostics()` 方法可以用于获取语法树中的诊断信息，`GetText()` 方法可以获取语法树对应的源代码文本等。

根据你的具体需求，你可以使用这些方法和属性来操作和获取与语法树相关的信息，并进行进一步的分析、处理或转换。

### SyntaxTree.GetRoot
`SyntaxTree.GetRoot()` 方法返回语法树的根节点，表示整个编译单元的语法结构。下面是 `GetRoot()` 方法返回的 `SyntaxNode` 对象的一些常用方法和属性以及它们的简单描述：

| 方法/属性                            | 描述                                                |
| ------------------------------------ | --------------------------------------------------- |
| `ChildNodes()`                       | 获取根节点的所有直接子节点                           |
| `DescendantNodes()`                  | 获取根节点的所有子孙节点                             |
| `ChildTokens()`                      | 获取根节点及其所有直接子节点的所有标记                 |
| `DescendantTokens()`                 | 获取根节点及其所有子孙节点的所有标记                   |
| `FindNode(TextSpan)`                 | 查找包含指定文本范围的节点                           |
| `FindToken(Int32)`                   | 查找位于指定位置的标记                               |
| `GetAnnotatedNodes(SyntaxAnnotation)` | 获取所有带有指定语法注释的节点                       |
| `GetAnnotatedTokens(SyntaxAnnotation)` | 获取所有带有指定语法注释的标记                         |
| `NormalizeWhitespace()`              | 对语法树进行空白字符标准化处理                         |
| `ReplaceNode(SyntaxNode, SyntaxNode)` | 用新节点替换指定节点                                 |
| `ReplaceToken(SyntaxToken, SyntaxToken)` | 用新标记替换指定标记                                 |
| `ToFullString()`                     | 获取根节点及其所有子节点的字符串表示                   |
| `ToString()`                         | 获取根节点的字符串表示                               |

这些方法和属性可以用于遍历语法树的节点和标记，查找特定位置或范围的节点或标记，替换节点或标记，以及获取语法树的字符串表示等。

你可以根据需要使用这些方法和属性来操作语法树的节点和标记，进行分析、修改或转换。

### DescendantTokens

循环遍历 `MethodDeclarationSyntax` 后，你将得到以下方法和属性。这些方法和属性是 `MethodDeclarationSyntax` 类的成员，用于访问和操作方法声明节点的相关信息。

**方法：**

- `AddAttributeLists(...)`: 向方法声明添加一个或多个属性列表。
- `AddBodyStatements(...)`: 向方法声明的方法体添加一个或多个语句。
- `AddModifiers(...)`: 向方法声明添加一个或多个修饰符。
- `RemoveNode(...)`: 从方法声明中移除指定的语法节点。
- `ReplaceNode(...)`: 用新的语法节点替换方法声明中的指定节点。
- `WithAttributeLists(...)`: 使用指定的属性列表替换方法声明中的属性列表。
- `WithIdentifier(...)`: 使用指定的标识符替换方法声明中的标识符。
- `WithModifiers(...)`: 使用指定的修饰符列表替换方法声明中的修饰符。
- `WithParameterList(...)`: 使用指定的参数列表替换方法声明中的参数列表。
- `WithReturnType(...)`: 使用指定的返回类型替换方法声明中的返回类型。
- `WithSemicolonToken(...)`: 使用指定的分号标记替换方法声明中的分号标记。
- `WithBody(...)`: 使用指定的方法体替换方法声明中的方法体。
- `GetLeadingTrivia()`: 获取方法声明的前导 trivia。
    ::: tip
    `GetLeadingTrivia()` 方法用于获取方法声明节点的前导 trivia，即位于方法声明之前的注释、空格、换行等非语法关键部分。前导 trivia 对于识别和获取注释信息非常有用。
    请注意，`GetLeadingTrivia()` 方法返回的是 `SyntaxTriviaList` 对象，而不是直接返回注释文本。你可以通过进一步处理 `SyntaxTriviaList` 对象来获取注释文本。
    :::


**属性：**

- `AttributeLists`: 获取方法声明的属性列表。
- `Body`: 获取或设置方法声明的方法体。
- `Identifier`: 获取方法声明的标识符。
- `Modifiers`: 获取方法声明的修饰符列表。
- `ParameterList`: 获取方法声明的参数列表。
- `ReturnType`: 获取方法声明的返回类型。
- `SemicolonToken`: 获取或设置方法声明的分号标记。

这些方法和属性可以让你对 `MethodDeclarationSyntax` 对象进行修改、访问和查询。你可以根据具体的需求使用这些成员来操作方法声明的各个部分，例如添加修饰符、获取参数列表、替换方法体等。