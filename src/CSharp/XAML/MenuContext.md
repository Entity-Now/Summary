# MenuContext的一些问题总结

## ContextMenu - item使用Command 与 CommandParameter

```xml
<UserControl x:Name="EmployControl">
    <UserControl.Resources>
        // 使用DiscreteObjectKeyFrame绑定根元素
        <DiscreteObjectKeyFrame 
            x:Key="ControlContext" 
            Value="{Binding ElementName=EmployControl}"/>
    </UserControl.Resources>
</UserControl>
```
```xml
<ListView ItemsSource="{Binding EmployList}" 
            SelectionMode="Extended"
            Grid.Row="3">
    <ListView.ItemContainerStyle>
        <Style TargetType="ListViewItem">
            <Setter Property="ContextMenu">
                <Setter.Value>
                    <ContextMenu>
                        // 这里使用StaticResource绑定静态资源
                        // 必须是Value.DataContext否则找不到属性
                        <MenuItem Header="复制" 
                                    Command="{Binding Value.DataContext.CommandRemove,Source={StaticResource ControlContext}}"
                                    CommandParameter="{Binding}"/>
                        <MenuItem Header="删除" 
                                    Command="{Binding Value.DataContext.CommandRemove,Source={StaticResource ControlContext}}"
                                    CommandParameter="{Binding}"/>
                    </ContextMenu>
                </Setter.Value>
            </Setter>
        </Style>
    </ListView.ItemContainerStyle>
</ListView>
```

```cs
public EmployViewModel()
{
    CommandRemove = new RelayCommand<EmployData>(Remove);
}

public ICommand CommandRemove { get; set; }
public void Remove(EmployData listViewItem)
{
    
    MessageBox.Show(listViewItem.Url);
    //EmployList.Remove();
}
```