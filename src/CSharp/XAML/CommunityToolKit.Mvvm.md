# CommunityToolkit.Mvvm

## install
> 使用nuget安装`CommunityToolKit.Mvvm`

## MVVM
> 此特性是必须标注的

```CSharp
[INotifyPropertyChanged]
public class MvvmModel{

}
```

## observerProperty
```CSharp
> 属性

[ObserverProperty]
private string _name;
```

## RelayCommand
> 命令

```CSharp
[RelayCommand]
private void GetUser(){
    /// ...
}
```

## ObservableObject 类
```CSharp
public class User: ObservableObject{
    private string name;
    public string Name{
        get => name;
        set => SetProperty(ref name, value);
    }
}
```
### setProperty()
```CSharp
public class test
{
    public string name { get; set; }
}
public class SettingsModel : ObservableObject
{
    public test Ts { get; set; }
    public SettingsModel(test _Ts)
    {
        Ts = _Ts;
    }

    public string Name
    {
        get => Ts.name;
        set
        {
            SetProperty(Ts.name, value, Ts, (source, newData) =>
            {/** 当旧值不等于新值，就会调用此回调，可以做保存到数据库的操作 */
                // 可以在此处
                source.name = "不准你更改";
            });
        }
    }
}

// 调用方法修改
private void test_Click(object sender, RoutedEventArgs e)
{
    var t = DataContext as SettingsModel;
    t.Name = "我要更改";
}

// = 不准你更改
```

### 异步数据
```CSharp
public class User : ObservableObject{
    private TaskNotifier<int>? requestTask;

    public Task<int>? RequestTask{
        get => requestTask;
        set => SetPropertyAndNotifyOnCompletion(ref requestTask, value);
    }

    public void setValue(){
        RequestTask = /.. 异步方法 ../;
    }
}
```
