# visual tree helper

## visual 介绍
VisualTreeHelper是一个WPF中的工具类，用于遍历和操作Visual树（Visual Tree），它提供了一组静态方法，用于访问Visual对象的属性和子元素。

在WPF中，所有UI元素都是由Visual对象构成的。Visual对象是一个轻量级对象，用于表示在屏幕上呈现的可视化内容。每个Visual对象都可以包含子元素，这些子元素可以是其他Visual对象，也可以是其他类型的UI元素（如控件）。

VisualTreeHelper类提供了许多静态方法，用于遍历Visual树和访问Visual对象的属性和子元素。例如，您可以使用VisualTreeHelper.GetChild方法获取Visual对象的子元素，使用VisualTreeHelper.GetParent方法获取Visual对象的父元素，使用VisualTreeHelper.GetDescendantBounds方法获取Visual对象的边界框，以及使用VisualTreeHelper.HitTest方法执行命中测试等等。

VisualTreeHelper类通常用于在WPF中执行复杂的UI交互和自定义绘制操作。它提供了一种有效的方式来遍历和操作Visual树，以实现各种高级功能。

## api
Visual Tree Helper是一个在WPF (Windows Presentation Foundation) 中使用的工具类，用于在运行时检索和操作可视化树结构。下面是Visual Tree Helper中常用的属性和方法的列举及简单描述：

**属性：**

1. `ChildrenCount`: 获取指定元素的子元素数量。
2. `Parent`: 获取指定元素的父元素。
3. `GetChildrenCount(DependencyObject)`: 获取指定元素的子元素数量。
4. `GetChild(DependencyObject, Int32)`: 获取指定元素的第N个子元素。
5. `GetParent(DependencyObject)`: 获取指定元素的父元素。
6. `GetChildren(DependencyObject)`: 获取指定元素的所有子元素的枚举器。
7. `GetVisualChild(DependencyObject, Int32)`: 获取指定元素的第N个可视化子元素。
8. `GetVisualChildrenCount(DependencyObject)`: 获取指定元素的可视化子元素数量。
9. `GetVisualParent(DependencyObject)`: 获取指定元素的可视化父元素。
10. `GetChildIndex(DependencyObject)`: 获取指定元素在其父元素中的索引。

**方法：**

1. `HitTest(Visual, Point)`: 在指定的可视化对象上执行命中测试。
2. `FindCommonVisualAncestor(Visual, Visual)`: 查找两个可视化对象的共同父级。
3. `GetDescendantBounds(Visual)`: 获取可视化对象及其子元素的边界矩形。
4. `GetOffset(Visual)`: 获取可视化对象相对于其父元素的偏移量。
5. `GetOpacity(Visual)`: 获取可视化对象的不透明度。
6. `GetTransform(Visual)`: 获取应用于可视化对象的变换矩阵。
7. `IsAncestorOf(Visual, Visual)`: 检查一个可视化对象是否是另一个可视化对象的祖先。
8. `IsDescendantOf(Visual, Visual)`: 检查一个可视化对象是否是另一个可视化对象的后代。

这些属性和方法提供了对可视化树结构的访问和操作能力，可以用于查找、遍历和操作WPF应用程序中的UI元素。通过使用Visual Tree Helper，您可以实现自定义的可视化效果、交互和布局操作。