# 常用算法

## 取出指定元素的下一个下标
```js
const a = ['red','yellow','green'];
// 取出指定元素的下一个下标
let temp = (a.indexOf('green') + 1) % a.length;
console.log(temp); // array index = 0
```

## 冒泡排序
![冒泡排序](/images/sort.gif)
```cs
// 冒泡排序
static void BubbleSort(int[] array)
{
    int n = array.Length;
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (array[j] > array[j + 1])
            {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

## 二分查找

<VideoPlayer src="/images/binarySearch.mp4"/>

```cs
// 二分查找
static int BinarySearch(int[] array, int target)
{
    int left = 0;
    int right = array.Length - 1;

    while (left <= right)
    {
        int mid = left + (right - left) / 2;

        if (array[mid] == target)
            return mid;

        if (array[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}
```