# maui

## windows title bar 隐藏
> 在program中添加，此代码适用于.net 8.0
```csharp
#if WINDOWS
    builder.ConfigureLifecycleEvents(events =>
    {
        events.AddWindows(windows =>
            windows.OnWindowCreated(window =>
            {
                var presenter = window?.AppWindow.Presenter;
                switch (presenter)
                {
                    case Microsoft.UI.Windowing.OverlappedPresenter overlappedPresenter:
                        // 以下属性必须全部声明才能生效
                        overlappedPresenter.IsMaximizable = false;
                        overlappedPresenter.IsResizable = false;
                        overlappedPresenter.IsMinimizable = false;
                        overlappedPresenter.SetBorderAndTitleBar(false, false);
                        //overlappedPresenter.Maximize();
                        break;
                }
            }));
    });
#endif
```

或者这样

```
#if WINDOWS
            builder.ConfigureLifecycleEvents(events =>
            {
                events.AddWindows(windows =>
                    windows.OnWindowCreated(window =>
                    {
                        
                        window.SetTitleBar(new Microsoft.UI.Xaml.Controls.Grid());
                        window.ExtendsContentIntoTitleBar = true;
                        if (window?.AppWindow.Presenter is OverlappedPresenter pre)
                        {
                            pre.IsMaximizable = false;
                            pre.IsResizable = false;
                            pre.IsMinimizable = false;
                            pre.SetBorderAndTitleBar(false, false);
                        }
                    }));
            });
#endif
```

## 设置当前的条件语句为WINDOWS
> 打开项目的解决方案**xxx.csproj**，然后在**PropertyGroup**元素中添加**TargetFramework**子元素，并设置值为**windows**