# xaml常用组件

## ContentPresenter
> 一般用于模板，可以继承父元素的属性，例如：centent，margin，padding等等
```cs
[ObservableProperty]
public object presenter;
```
```xml
<UserControl
    x:Class="EncheatStart.Template.TestControl"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:EncheatStart.Template"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d">
    <StackPanel Orientation="Vertical">
        <TextBlock Text="Run:"/>
        <ContentPresenter Content="{x:Bind Presenter}"/>
        <TextBlock Text="End;"/>
    </StackPanel>
</UserControl>

```
```xml
<xdc:TestControl>
    <xdc:TestControl.Presenter>
        <TextBlock Text="我是外部成员"/>
    </xdc:TestControl.Presenter>
</xdc:TestControl>
```
![Presenter](/image/img/win_presenter.png)

### 将内容替换到ContentPresenter
```xml
<ControlTemplate x:Key="TealTemplate">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="0.1*" />
            <RowDefinition Height="0.8*" />
            <RowDefinition Height="0.1*" />
        </Grid.RowDefinitions>
        <BoxView Color="Teal" />
        <Label Margin="20,0,0,0"
               Text="{TemplateBinding HeaderText}"
               TextColor="White"
               FontSize="24"
               VerticalOptions="Center" />
        <ContentPresenter Grid.Row="1" />
        <BoxView Grid.Row="2"
                 Color="Teal" />
        <Label x:Name="changeThemeLabel"
               Grid.Row="2"
               Margin="20,0,0,0"
               Text="Change Theme"
               TextColor="White"
               HorizontalOptions="Start"
               VerticalOptions="Center">
            <Label.GestureRecognizers>
                <TapGestureRecognizer Tapped="OnChangeThemeLabelTapped" />
            </Label.GestureRecognizers>
        </Label>
        <controls:HyperlinkLabel Grid.Row="2"
                                 Margin="0,0,20,0"
                                 Text="Help"
                                 TextColor="White"
                                 Url="https://learn.microsoft.com/dotnet/maui/"
                                 HorizontalOptions="End"
                                 VerticalOptions="Center" />
    </Grid>
</ControlTemplate>
```
> 使用定义的组件
```xml
<controls:HeaderFooterPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
                           xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                           xmlns:controls="clr-namespace:ControlTemplateDemos.Controls"                           
                           ControlTemplate="{StaticResource TealTemplate}"
                           HeaderText="MyApp"
                           ...>
    <StackLayout Margin="10">
        <Entry Placeholder="Enter username" />
        <Entry Placeholder="Enter password"
               IsPassword="True" />
        <Button Text="Login" />
    </StackLayout>
</controls:HeaderFooterPage>
```

## Frame
```CSharp
public void go(object send, pointerRouterEventArgs e){
    Nav.Navigate(new Page());
}
```
```xml
<Frame x:Name="Nav"></Frame>
```