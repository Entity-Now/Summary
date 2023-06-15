# 获取注释信息

## start

如果你想查询指定的方法并获取其注释信息，你可以使用方法的标识符（Identifier）来进行匹配。以下是一个示例代码，演示如何查询指定方法并获取其注释信息：

```csharp
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;

class Program
{
    static void Main()
    {
        string code = @"
            using System;

            class MyClass
            {
                /// <summary>
                /// 测试方法1
                /// </summary>
                private static void Method1()
                {

                }

                /// <summary>
                /// 测试方法2
                /// </summary>
                private static void Method2()
                {

                }
            }
        ";

        SyntaxTree syntaxTree = CSharpSyntaxTree.ParseText(code);
        var root = syntaxTree.GetRoot();

        // 查找所有的方法声明
        var methodDeclarations = root.DescendantNodes().OfType<MethodDeclarationSyntax>();

        foreach (var methodDeclaration in methodDeclarations)
        {
            if (methodDeclaration.Identifier.ValueText == "Method1")
            {
                // 获取方法的注释信息
                var leadingTrivia = methodDeclaration.GetLeadingTrivia();
                var commentTrivia = leadingTrivia.FirstOrDefault(t => t.IsKind(SyntaxKind.SingleLineCommentTrivia));

                if (commentTrivia != default(SyntaxTrivia))
                {
                    string commentText = commentTrivia.ToFullString().TrimStart('/').Trim();
                    Console.WriteLine($"方法名: {methodDeclaration.Identifier.ValueText}");
                    Console.WriteLine($"注释: {commentText}");
                    Console.WriteLine();
                }
            }
        }
    }
}
```

在上述示例中，我们将源代码字符串 `code` 中定义的两个方法 `Method1` 和 `Method2` 进行了注释。然后我们使用 `methodDeclaration.Identifier.ValueText` 来获取每个方法声明的标识符，并与指定的方法名进行比较（在本例中是 "Method1"）。

如果标识符与指定方法名匹配，我们就提取方法的注释信息，并将其输出。

在本例中，只有 "Method1" 方法匹配，所以将输出以下内容：

```
方法名: Method1
注释: 测试方法1
```

你可以根据需要修改代码，以便查询其他特定方法并获取其注释信息。