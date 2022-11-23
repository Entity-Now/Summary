# 常用
::: tip
使用C#可能会经常使用的技术
:::


## dynamic
```cs
class Foundation{
    public string Value = "hello world ~";
    public string GetValue(){
        return Value;
    }
}

// 使用properties
var obj = new Foundation();
obj.GetType().GetProperty("Value").GetValue(obj,null);
// 使用 dynamic
dynamic obj2 = new Foundation();
// 可以直接使用
Console.WriteLine(obj2.Value);
```
## 反射

## 特性

## assembly 动态反射

## activate 静态反射