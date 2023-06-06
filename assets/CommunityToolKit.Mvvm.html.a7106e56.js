import{_ as e,o as i,c as n,e as a}from"./app.8d6eb341.js";const s={},d=a(`<h1 id="communitytoolkit-mvvm" tabindex="-1"><a class="header-anchor" href="#communitytoolkit-mvvm" aria-hidden="true">#</a> CommunityToolkit.Mvvm</h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><blockquote><p>使用nuget安装<code>CommunityToolKit.Mvvm</code></p></blockquote><h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h2><blockquote><p>此特性是必须标注的</p></blockquote><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>[INotifyPropertyChanged]
public class MvvmModel{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="observerproperty" tabindex="-1"><a class="header-anchor" href="#observerproperty" aria-hidden="true">#</a> observerProperty</h2><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>&gt; 属性

[ObserverProperty]
private string _name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="relaycommand" tabindex="-1"><a class="header-anchor" href="#relaycommand" aria-hidden="true">#</a> RelayCommand</h2><blockquote><p>命令</p></blockquote><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>[RelayCommand]
private void GetUser(){
    /// ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="observableobject-类" tabindex="-1"><a class="header-anchor" href="#observableobject-类" aria-hidden="true">#</a> ObservableObject 类</h2><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>public class User: ObservableObject{
    private string name;
    public string Name{
        get =&gt; name;
        set =&gt; SetProperty(ref name, value);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setproperty" tabindex="-1"><a class="header-anchor" href="#setproperty" aria-hidden="true">#</a> setProperty()</h3><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>public class test
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
        get =&gt; Ts.name;
        set
        {
            SetProperty(Ts.name, value, Ts, (source, newData) =&gt;
            {/** 当旧值不等于新值，就会调用此回调，可以做保存到数据库的操作 */
                // 可以在此处
                source.name = &quot;不准你更改&quot;;
            });
        }
    }
}

// 调用方法修改
private void test_Click(object sender, RoutedEventArgs e)
{
    var t = DataContext as SettingsModel;
    t.Name = &quot;我要更改&quot;;
}

// = 不准你更改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步数据" tabindex="-1"><a class="header-anchor" href="#异步数据" aria-hidden="true">#</a> 异步数据</h3><div class="language-CSharp line-numbers-mode" data-ext="CSharp"><pre class="language-CSharp"><code>public class User : ObservableObject{
    private TaskNotifier&lt;int&gt;? requestTask;

    public Task&lt;int&gt;? RequestTask{
        get =&gt; requestTask;
        set =&gt; SetPropertyAndNotifyOnCompletion(ref requestTask, value);
    }

    public void setValue(){
        RequestTask = /.. 异步方法 ../;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function r(v,t){return i(),n("div",null,l)}const u=e(s,[["render",r],["__file","CommunityToolKit.Mvvm.html.vue"]]);export{u as default};
