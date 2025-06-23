# wpf中样式触发器

## 各种Triggers的区别
在WPF中，`Style`的`Triggers`提供了一种基于特定条件来更改控件外观的机制。主要有三种类型的触发器：`PropertyTrigger`、`DataTrigger`和`EventTrigger`。每种触发器在不同的场景中有不同的用途。下面是它们的区别和用法：

### 1. PropertyTrigger
`PropertyTrigger`在某个属性的值满足特定条件时触发。例如，当按钮被按下时改变按钮的背景颜色：

```xml
<Style TargetType="Button">
    <Style.Triggers>
        <Trigger Property="IsPressed" Value="True">
            <Setter Property="Background" Value="Red"/>
        </Trigger>
    </Style.Triggers>
</Style>
```

在这个示例中，当`Button`的`IsPressed`属性为`True`时，背景颜色将变为红色。

### 2. DataTrigger
`DataTrigger`基于绑定的数据值来触发。例如，当绑定的数据值满足特定条件时改变控件的外观：

```xml
<Style TargetType="TextBlock">
    <Style.Triggers>
        <DataTrigger Binding="{Binding Path=IsImportant}" Value="True">
            <Setter Property="Foreground" Value="Red"/>
        </DataTrigger>
    </Style.Triggers>
</Style>
```

在这个示例中，当绑定的`IsImportant`属性为`True`时，`TextBlock`的前景色将变为红色。

### 3. EventTrigger
`EventTrigger`在特定事件发生时触发。例如，当鼠标进入按钮时触发动画：

```xml
<Button Content="Hover over me" Width="200" Height="50">
    <Button.Triggers>
        <EventTrigger RoutedEvent="MouseEnter">
            <BeginStoryboard>
                <Storyboard>
                    <ColorAnimation Storyboard.TargetProperty="(Button.Background).(SolidColorBrush.Color)"
                                    To="Yellow" Duration="0:0:0.5" />
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
        <EventTrigger RoutedEvent="MouseLeave">
            <BeginStoryboard>
                <Storyboard>
                    <ColorAnimation Storyboard.TargetProperty="(Button.Background).(SolidColorBrush.Color)"
                                    To="White" Duration="0:0:0.5" />
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
    </Button.Triggers>
</Button>
```

在这个示例中，当鼠标进入按钮时，背景颜色将动画变为黄色；当鼠标离开按钮时，背景颜色将动画变为白色。

### 总结
- `PropertyTrigger`：基于控件属性的值来触发。
- `DataTrigger`：基于绑定的数据值来触发。
- `EventTrigger`：基于特定事件来触发。

这些触发器为WPF的样式和行为提供了强大的条件控制能力。

## 什么修改button的背景颜色要这样书写：(Button.Background).(SolidColorBrush.Color)

在WPF中，属性路径（PropertyPath）用于指定要进行动画处理的属性。对于嵌套属性，需要使用括号来明确指定路径。下面解释为什么修改按钮的背景颜色需要这样书写：`(Button.Background).(SolidColorBrush.Color)`。

### 1. 属性层次结构
WPF中的控件属性有时是嵌套的。例如，`Button`的`Background`属性是一个`Brush`对象，而`Brush`可以进一步是`SolidColorBrush`，它有一个`Color`属性。要访问嵌套属性，需要明确路径。

### 2. 使用括号指定路径
括号用于明确指定路径中的每一级属性。例如：

- `Button.Background`：表示`Button`控件的`Background`属性。
- `(Button.Background).(SolidColorBrush.Color)`：表示`Button`控件的`Background`属性的`SolidColorBrush`对象的`Color`属性。

### 3. 示例
以下是一个完整的示例，展示如何通过动画修改按钮的背景颜色：

```xml
<Button Content="Hover over me" Width="200" Height="50">
    <Button.Triggers>
        <EventTrigger RoutedEvent="MouseEnter">
            <BeginStoryboard>
                <Storyboard>
                    <ColorAnimation Storyboard.TargetProperty="(Button.Background).(SolidColorBrush.Color)"
                                    To="Yellow" Duration="0:0:0.5" />
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
        <EventTrigger RoutedEvent="MouseLeave">
            <BeginStoryboard>
                <Storyboard>
                    <ColorAnimation Storyboard.TargetProperty="(Button.Background).(SolidColorBrush.Color)"
                                    To="White" Duration="0:0:0.5" />
                </Storyboard>
            </BeginStoryboard>
        </EventTrigger>
    </Button.Triggers>
</Button>
```

在这个示例中，`(Button.Background).(SolidColorBrush.Color)`路径明确指定了动画要作用的具体属性，即按钮背景颜色的`Color`属性。

### 总结
`(Button.Background).(SolidColorBrush.Color)` 表示 `Button` 控件的 `Background` 属性中 `SolidColorBrush` 对象的 `Color` 属性。

具体来说，WPF 中的控件属性有时是嵌套的。例如：

1. `Button` 控件有一个 `Background` 属性，这个属性类型是 `Brush`。
2. `Brush` 可以是多种类型之一，其中一种是 `SolidColorBrush`。
3. `SolidColorBrush` 有一个 `Color` 属性，表示具体的颜色值。

因此，`(Button.Background).(SolidColorBrush.Color)` 这条路径明确地指出了动画要作用的具体属性，即 `Button` 控件的 `Background` 属性中的 `SolidColorBrush` 对象的 `Color` 属性。这样可以确保动画能够准确地修改按钮背景颜色的具体颜色值。