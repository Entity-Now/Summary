# wpf 图标问题

在WPF中使用Unicode格式的字体，可以通过以下步骤来实现：

1. **将TTF文件添加到项目中**：
   - 将你的TTF字体文件（例如`UnicodeFont.ttf`）添加到WPF项目中。右键点击项目，选择“添加” -> “现有项...”，然后选择你的TTF文件。
   - 将TTF文件的“生成操作”属性设置为“Resource”。

2. **在XAML中引用字体**：
   - 在XAML文件中，通过`FontFamily`属性引用你的TTF字体，并使用Unicode编码来显示特定字符。假设你的字体文件位于项目的根目录下，并且文件名为`UnicodeFont.ttf`，你可以这样引用：
     ```xml
     <Window x:Class="WpfApp.MainWindow"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             Title="MainWindow" Height="350" Width="525">
         <Grid>
             <TextBlock FontFamily="pack://application:,,,/UnicodeFont.ttf#Unicode Font"
                        FontSize="24">
                 &#x1F600; <!-- Unicode for 😀 -->
             </TextBlock>
         </Grid>
     </Window>
     ```

在`TextBlock`中，使用`&#x1F600;`来表示Unicode字符，其中`1F600`是字符的Unicode编码。

3. **使用Unicode字符**：
   - 你可以在`TextBlock`的`Text`属性中直接使用Unicode字符编码。例如：
     ```xml
     <TextBlock Text="Unicode Character: &#x1F600;"
                FontFamily="pack://application:,,,/UnicodeFont.ttf#Unicode Font"
                FontSize="24" />
     ```

通过以上步骤，你就可以在WPF项目中使用Unicode格式的字体，并通过Unicode编码显示特定字符。

## 符号
字符实体引用的正确格式应该是：

- 十进制格式：`&#十进制代码;`
- 十六进制格式：`&#x十六进制代码;`

你使用的是十六进制代码，所以应该在代码前加上`x`，正确的格式应该是`&#xf0d9;`。

例如，如果你想使用十六进制代码`f0d9`来表示一个字符，应该写成：
```xml
&#xf0d9;
```

确保在使用十六进制字符实体引用时，使用`&#x`前缀。