# 模式匹配

## 列表模式

### 分解数组
```cs
int[] arr = { 1, 2, 3 };
var [a, b, c] = arr; // a = 1, b = 2, c = 3
var [a,..,c] = arr; // a = 1, c = 3
var [,b,c] = arr; // b = 2, c = 3
var [..,c] = arr; // c = 3
var [_,b,c] = arr; // b = 2, c = 3
Console.WriteLine($"{a}, {b}, {c}");  // 输出：1, 2, 3
```

### 匹配数组
```cs
int[] arr = { 1, 2, 3 };
// arr的长度是3，并且第2个元素的值等于2
if (arr is { Length: 3, [1]: 2 })
{
    Console.WriteLine("匹配成功");
}
```
```cs
int[] scores = { 80, 90, 70, 60, 85 };
// x 大于或等于80 和 小于等于90
int count = scores.Count(x => x is >= 80 and <= 90);
```

### 匹配某个范围内的值
```cs
int[] arr = { 1, 2, 3, 4, 5 };
int a = 2;
int b = 4;
var result = arr[a..b+1];
```
最终输出`2, 3, 4`。

### 使用`..^3`匹配0-倒数第3的值
```cs
int[] arr = { 1, 2, 3, 4, 5 };
var result = arr[..^3];
```
最终输出`1,2`

### 匹配第n个元素之后的元素
```cs
int[] arr = { 1, 2, 3, 4, 5 };
var result = arr[2..];
```
最终输出`3,4,5`

## 使用when匹配字符串的长度
```cs
string str = "Hello";
switch (str)
{
    case string s when s.Length is >= 1 and <= 3:
        Console.WriteLine("长度为 1~3");
        break;
    case string s when s.Length is >= 4 and <= 6:
        Console.WriteLine("长度为 4~6");
        break;
    default:
        Console.WriteLine("长度大于 6");
        break;
}
```

## 在linq中使用范围模式
```cs
int[] arr = { 1, 2, 3, 4, 5 };
var result = from x in arr
             where x is >= 2 and <= 4
             select x;
foreach (var item in result)
{
    Console.WriteLine(item);
}
```
在上面的示例中，使用范围模式在 LINQ 查询中过滤出数组arr中在2到4之间的元素，最终输出`2, 3, 4`