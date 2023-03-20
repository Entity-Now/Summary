# win3 bind

## DataContext
```xml
<Page
    /* 引入viewmodel */
    xmlns:model="using:EncheatStart.ViewModel"
    mc:Ignorable="d">
    <Page.Resources>
        /* resources里面声明 */
        <model:SettingsModel x:Name="SettingModel"/>
    </Page.Resources>
    <Page.DataContext>
        /* 绑定到datacontext */
        <Binding Source="{StaticResource SettingModel}"/>
    </Page.DataContext>
</Page>

```
### 方式二
```CSharp
//DataContext = new SettingsModel();
```

### 方式三
```xml
<Page
    /* 引入viewmodel */
    xmlns:model="using:EncheatStart.ViewModel"
    mc:Ignorable="d">
    <Page.DataContext>
        <model:SettingsModel/>
    </Page.DataContext>
</Page>
```

## bind
WPF中还有以下几种常用的标记扩展²：
- StaticResource：通过替换已定义资源的值来为属性提供值。StaticResource 计算最终在 XAML 加载时进行，并且在运行时没有访问对象图的权限。
- DynamicResource：通过将值推迟为对资源的运行时引用来为属性提供值。动态资源引用强制在每次访问此类资源时都进行新查找，且在运行时有权访问对象图。
- Binding：使用在运行时应用于父对象的数据上下文来为属性提供数据绑定值。此标记扩展相对复杂，因为它会启用大量内联语法来指定数据绑定。
- TemplateBinding：使控件模板能够使用模板化属性的值，这些属性来自于将使用该模板的类的对象模型定义属性。
- x:Type：为命名类型提供 Type 对象。此功能最常在使用基础 CLR 类型和类型派生作为分组名字对象或标识符的延迟机制中使用。
- x:Static：从值-类型代码实体生成静态值，它们不直接是属性值的类型，但可以计算为该类型。这可用于将已存在的值指定为类型定义中的已知常量。
- x:Null：指定 null 作为 XAML 成员的值。
- x:Array：支持采用 XAML 语法创建常规数组。

### DataContext
| 属性 | 说明 |
| --- | ---- |
| x:Reference | `<Button BindingContext="{ x:Reference Name=xxx}">`用于绑定元素 |
| Binding | 用于绑定属性 `{Binding value}` |
| x:static | 绑定静态类`<Button Content="{ Binding source={x:static xxxpath},path=value}">` |
| x:bind | 跟binding差不多，但是性能更好，x:bind会绑定自己视图里面的属性，而binging会根据 |
| StaticResource | 绑定静态资源，自己定义的style或者StaticResource |
| ThemeResource | 可以绑定theme或者StaticResource引入的资源 |

### binding
```xml
/* 1.绑定属性+绑定源 */
<label Scale="{Binding Value, Source={x:Reference Name=xxxx}}" />
/* 绑定属性+绑定源 */
<label Scale="{Binding Source={x:Reference Name=xxx}, Path=attribute}" />
/* 绑定属性+绑定源+绑定模式 */
<label Scale="{Binding Value, Source={x:Reference Name=xxxx},Mode=绑定模式}" />

```




### Self
```xml
/* 绑定到自身 */
<BoxView HeightRequest="{Binding Source={RelativeSource Self}, Path=WidthRequest}" HorizontalOptions="Center" />

/* FindAncestorBindingContext绑定上级中类型为AncestorType的context */
<ContentPage ...
             BindingContext="{Binding Source={RelativeSource Self}, Path=DefaultViewModel}">
    <StackLayout>
        <ListView ItemsSource="{Binding Employees}">
            <ListView.ItemTemplate>
                <DataTemplate>
                    <ViewCell>
                        <StackLayout Orientation="Horizontal">
                            <Label Text="{Binding Fullname}"
                                   VerticalOptions="Center" />
                            <Button Text="Delete"
                                    Command="{Binding Source={RelativeSource AncestorType={x:Type local:PeopleViewModel}}, Path=DeleteEmployeeCommand}"
                                    CommandParameter="{Binding}"
                                    HorizontalOptions="End" />
                        </StackLayout>
                    </ViewCell>
                </DataTemplate>
            </ListView.ItemTemplate>
        </ListView>
    </StackLayout>
</ContentPage>
```

### RelativeSource
| 属性 | 说明 |
| --- | ---- |
| Self | 绑定到自身 |
| TemplateParent | 指示应用了存在绑定元素的模板的元素。 有关详细信息，请参阅绑定到模板化父级。 仅当相对绑定在控件模板中时，此模式才适用，并且与设置 TemplateBinding 类 |
| FindAncestor  | 绑定到上级元素 |
| FindAncestorBindingContext | 指示绑定元素可视化树中上级的 BindingContext。此模式应该用于绑定到由 AncestorType 属性表示的上级的 BindingContext |

你好，这是Bing。我可以帮你解释一下WPF中RelativeSource属性的含义和用法。😊

RelativeSource属性是一个标记扩展，它用来设置绑定的源对象为目标对象的相对位置。它有三个子属性：Mode、AncestorType和AncestorLevel。

Mode属性表示相对源的模式，有四种值¹：

- Self：表示将源对象设置为目标对象本身。
- TemplatedParent：表示将源对象设置为目标对象的模板化父级，即应用了控件模板的控件实例。
- PreviousData：表示将源对象设置为集合中当前项的前一项。
- FindAncestor：表示将源对象设置为目标对象的某个祖先元素。

AncestorType属性表示要查找的祖先元素的类型，它只在Mode为FindAncestor时有效。它需要使用x:Type标记扩展来引用类型名称。

AncestorLevel属性表示要查找第几级祖先元素，它也只在Mode为FindAncestor时有效。它是一个整数值，从1开始计数。

例如，`{Binding RelativeSource={RelativeSource AncestorType={x:Type Grid}, AncestorLevel=2}}`的意思是将目标属性绑定到第二级祖先元素中类型为Grid的元素本身。

### 使用RelativeSource TemplateParent
```xml
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             ...>
    <ContentPage.Resources>
      <ControlTemplate x:Key="CardViewControlTemplate">
          <Frame BindingContext="{Binding Source={RelativeSource TemplatedParent}}"
                 BackgroundColor="{Binding CardColor}"
                 BorderColor="{Binding BorderColor}"
                 CornerRadius="5"
                 HasShadow="True"
                 Padding="8"
                 HorizontalOptions="Center"
                 VerticalOptions="Center">
              <Grid>
                  <Grid.RowDefinitions>
                      <RowDefinition Height="75" />
                      <RowDefinition Height="4" />
                      <RowDefinition Height="Auto" />
                  </Grid.RowDefinitions>
                  <Grid.ColumnDefinitions>
                      <ColumnDefinition Width="75" />
                      <ColumnDefinition Width="200" />
                  </Grid.ColumnDefinitions>
                  <Frame IsClippedToBounds="True"
                         BorderColor="{Binding BorderColor}"
                         BackgroundColor="{Binding IconBackgroundColor}"
                         CornerRadius="38"
                         HeightRequest="60"
                         WidthRequest="60"
                         HorizontalOptions="Center"
                         VerticalOptions="Center">
                      <Image Source="{Binding IconImageSource}"
                             Margin="-20"
                             WidthRequest="100"
                             HeightRequest="100"
                             Aspect="AspectFill" />
                  </Frame>
                  <Label Grid.Column="1"
                         Text="{Binding CardTitle}"
                         FontAttributes="Bold"
                         FontSize="18"
                         VerticalTextAlignment="Center"
                         HorizontalTextAlignment="Start" />
                  <BoxView Grid.Row="1"
                           Grid.ColumnSpan="2"
                           BackgroundColor="{Binding BorderColor}"
                           HeightRequest="2"
                           HorizontalOptions="Fill" />
                  <Label Grid.Row="2"
                         Grid.ColumnSpan="2"
                         Text="{Binding CardDescription}"
                         VerticalTextAlignment="Start"
                         VerticalOptions="Fill"
                         HorizontalOptions="Fill" />
              </Grid>
          </Frame>
      </ControlTemplate>
    </ContentPage.Resources>
    ...
</ContentPage>
```
### 使用templateBinding传递参数
> 可以看到使用相对绑定继承父元素的centext比较方便

```xml
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             ...>
    <ContentPage.Resources>
        <ControlTemplate x:Key="CardViewControlTemplate">
            <Frame BackgroundColor="{TemplateBinding CardColor}"
                   BorderColor="{TemplateBinding BorderColor}"
                   CornerRadius="5"
                   HasShadow="True"
                   Padding="8"
                   HorizontalOptions="Center"
                   VerticalOptions="Center">
                <Grid>
                    <Grid.RowDefinitions>
                        <RowDefinition Height="75" />
                        <RowDefinition Height="4" />
                        <RowDefinition Height="Auto" />
                    </Grid.RowDefinitions>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition Width="75" />
                        <ColumnDefinition Width="200" />
                    </Grid.ColumnDefinitions>
                    <Frame IsClippedToBounds="True"
                           BorderColor="{TemplateBinding BorderColor}"
                           BackgroundColor="{TemplateBinding IconBackgroundColor}"
                           CornerRadius="38"
                           HeightRequest="60"
                           WidthRequest="60"
                           HorizontalOptions="Center"
                           VerticalOptions="Center">
                        <Image Source="{TemplateBinding IconImageSource}"
                               Margin="-20"
                               WidthRequest="100"
                               HeightRequest="100"
                               Aspect="AspectFill" />
                    </Frame>
                    <Label Grid.Column="1"
                           Text="{TemplateBinding CardTitle}"
                           FontAttributes="Bold"
                           FontSize="18"
                           VerticalTextAlignment="Center"
                           HorizontalTextAlignment="Start" />
                    <BoxView Grid.Row="1"
                             Grid.ColumnSpan="2"
                             BackgroundColor="{TemplateBinding BorderColor}"
                             HeightRequest="2"
                             HorizontalOptions="Fill" />
                    <Label Grid.Row="2"
                           Grid.ColumnSpan="2"
                           Text="{TemplateBinding CardDescription}"
                           VerticalTextAlignment="Start"
                           VerticalOptions="Fill"
                           HorizontalOptions="Fill" />
                </Grid>
            </Frame>
        </ControlTemplate>
    </ContentPage.Resources>
    ...
</ContentPage>
```


### StaticResource
```xml
<Page.Resources>
        <x:String x:Key="greeting">Hello world</x:String>
</Page.Resources>

<TextBlock Text="{StaticResource greeting}"/>
```

## 绑定模式
- Default
- TwoWay — 数据在源和目标之间双向移动
- OneWay — 数据从源流向目标
- OneWayToSource — 数据从目标流向源
- OneTime — 数据从源转到目标，但仅当更改时BindingContext

```xml
<label Scale="{Binding Value, Mode=绑定模式}" />
```

## Convert绑定参数转换器
```cs
public class FloatToIntConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        return (int)Math.Round((float)value * GetParameter(parameter));
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        return (int)value / GetParameter(parameter);
    }

    double GetParameter(object parameter)
    {
        if (parameter is float)
            return (float)parameter;
        else if (parameter is int)
            return (int)parameter;
        else if (parameter is string)
            return float.Parse((string)parameter);

        return 1;
    }
}
```

```xml
/* 需要先引入 */
<Page.Resource>
    <x:doubleToInt x:Key="doubleToInt"/>
</Page.Resource>
/* 使用StaticResource引用，然后使用ConvertParameter传递参数 */
<Label Text="{Binding Red,
                      Converter={StaticResource doubleToInt},
                      ConverterParameter=255/>
```

## 定义回退值
```xml
<Label Text="{Binding Population, FallbackValue='Population size unknown'}"
       ... />
```

## 定义NULL替换值
```xml
<ListView ItemsSource="{Binding Monkeys}"
          ...>
    <ListView.ItemTemplate>
        <DataTemplate>
            <ViewCell>
                <Grid>
                    ...
                    <Image Source="{Binding ImageUrl, TargetNullValue='https://upload.wikimedia.org/wikipedia/commons/2/20/Point_d_interrogation.jpg'}"
                           ... />
                    ...
                    <Label Text="{Binding Location, TargetNullValue='Location unknown'}"
                           ... />
                </Grid>
            </ViewCell>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>
```