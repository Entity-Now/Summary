#  WinUi3
```csharp
ms-appx:///路径

// 如果要应用icon,后面跟着#号+字体名字
ms-appx:///路径/iconFont.ttf#iconFont

// appdata 区分大小写
// 本地文件夹
ms-appdata:///local/
// 临时文件夹
ms-appdata:///temp/
// 漫游文件夹
ms-appdata:///roaming/

```

## wpf 
```csharp
pack://application:,,,/项目名;component/路径
```

## 使用iconfont
```csharp
// unicode 的 iconFont
&#xe61c; 是这样的，赋值给变量需要这样 string Logo = "\xe61c"
```

## 调用application.current.resource["key"]
```csharp
 var color = Application.Current.Resources["Background"];
 color as SolidColorBrush
```

## IValueConverter bind 类型转换
```csharp
public class StringConverter:IValueConverter{
    object IValueConverter.Convert(object value, Type targetType, object parameter, string language)
    {
        return value;
    }

    object IValueConverter.ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}

// xml 
<Grid.Resources>
    // 必须先引用才能使用
    <local:DateFormatter x:Key="FormatConverter" />
</Grid.Resources>
<TextBlock Text="{Binding Path=ReleaseDate, Mode=OneWay,
                            // converter 源
                            Converter={StaticResource FormatConverter}, 
                            // 还能设置参数
                            ConverterParameter=\{0:d\}}" />
```

## DispatcherQueue 列队

## template
```csharp
    <UserControl.Resources>
        <ControlTemplate x:Key="Plugins" TargetType="RadioButton">
            <Grid>
            // 主要是这段代码，复制宿主的元素
                <ContentPresenter x:Name="ContentPresenter"
                                    ContentTemplate="{TemplateBinding ContentTemplate}"
                                    Content="{TemplateBinding Content}"
                                    
                                    Margin="{TemplateBinding Padding}"
                                    HorizontalAlignment="{TemplateBinding HorizontalContentAlignment}"
                                    VerticalAlignment="{TemplateBinding VerticalContentAlignment}"/>

                <Border Opacity="0" x:Name="HoverView" PointerPressed="HoverView_PointerPressed"  PointerEntered="Border_PointerEntered" PointerExited="Border_PointerExited" Width="223" Height="auto" Background="{StaticResource CustomAcrylicInAppLuminosity}" CornerRadius="3" Padding="14">
                    <TextBlock Text="hover" Foreground="{StaticResource MyTextColor}" FontSize="28" FontWeight="Bold" VerticalAlignment="Center" HorizontalAlignment="Center"/>
                </Border>
            </Grid>
        </ControlTemplate>
    </UserControl.Resources>
    
    // 模板

    <!--<RadioButton Template="{StaticResource Plugins}" PointerMoved="RadioButton_PointerMoved" Margin="0" Padding="0">
    <Border Background="{StaticResource CustomAcrylicInAppBrush}" CornerRadius="3">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="223"/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="140"/>
                <RowDefinition Height="*"/>
                <RowDefinition Height="*"/>
                <RowDefinition Height="*"/>
                <RowDefinition Height="*"/>
            </Grid.RowDefinitions>
            <Image Source="/Assets/GTA_0.jpg" Stretch="Fill"/>
            <TextBlock Text="我是个插件" FontWeight="Bold" Foreground="{StaticResource MyTextColorDivider}" Grid.Row="1" HorizontalAlignment="Center" VerticalAlignment="Top" Margin="0 5"/>
            <TextBlock Text="下载数" Grid.Row="2"/>
            <TextBlock Text="作者" Grid.Row="3"/>
            <TextBlock Text="时间" Grid.Row="4"/>
        </Grid>
    </Border>
</RadioButton>-->
```

## 页面缓存数据
```csharp
    // page 里面加上  NavigationCacheMode="Enabled"
```