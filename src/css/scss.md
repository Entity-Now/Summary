# scss

## 安装
```sh
npm install node-sass

npm install sass --save-dev
```

## 选择器
在SCSS（可层叠样式表）中，你可以使用各种选择器来选择HTML文档中的元素。下面是一些常见的SCSS选择器：

1. 元素选择器：使用HTML元素名称来选择元素。例如，`div`选择器将选择所有`<div>`元素。

```scss
div {
  /* 样式规则 */
}
```

2. 类选择器：使用类名选择元素。类名以`.`开头。例如，`.container`选择器将选择具有`class="container"`属性的元素。

```scss
.container {
  /* 样式规则 */
}
```

3. ID选择器：使用ID选择元素。ID以`#`开头。例如，`#header`选择器将选择具有`id="header"`属性的元素。

```scss
#header {
  /* 样式规则 */
}
```

4. 后代选择器：选择元素的后代元素。使用空格来表示嵌套关系。例如，`ul li`选择器将选择所有`<ul>`元素内的`<li>`元素。

```scss
ul li {
  /* 样式规则 */
}
```

5. 子元素选择器：选择元素的直接子元素。使用`>`来表示直接子元素关系。例如，`.container > p`选择器将选择`.container`元素下的直接子级`<p>`元素。

```scss
.container > p {
  /* 样式规则 */
}
```

6. 属性选择器：选择具有特定属性的元素。例如，`[type="text"]`选择器将选择所有`type`属性值为`"text"`的元素。

```scss
[type="text"] {
  /* 样式规则 */
}
```

这只是一些SCSS选择器的示例，你还可以使用组合选择器、伪类选择器等更多选择器来满足你的需求。选择器在SCSS中用于选择并应用样式规则到指定的HTML元素。

## 嵌套规则

1. 嵌套规则：可以嵌套选择器，使代码更具可读性和结构化。嵌套规则允许你将选择器和相关的样式规则放在同一个块中。

```scss
.container {
  h1 {
    /* h1元素的样式规则 */
  }

  p {
    /* p元素的样式规则 */
  }
}
```

2. 父选择器引用：使用`&`符号来引用父选择器。这在为选择器添加修饰符或伪类时非常有用。

```scss
.button {
  &:hover {
    /* 鼠标悬停时按钮的样式规则 */
  }

  &.disabled {
    /* 禁用状态下按钮的样式规则 */
  }
}
```

3. 变量：使用`$`符号定义和使用变量。变量可以存储颜色、长度、字体等值，并在样式规则中重复使用。

```scss
$primary-color: #42A5F5;

.button {
  background-color: $primary-color;
  color: white;
}
```

4. 混合器（Mixins）：混合器类似于函数，它们允许你将一组样式规则重用到多个选择器中。

```scss
@mixin box-shadow($x, $y, $blur) {
  box-shadow: $x $y $blur;
}

.card {
  @include box-shadow(2px, 2px, 4px);
}

.button {
  @include box-shadow(0, 0, 2px);
}
```

5. 继承：使用`@extend`关键字可以从一个选择器继承样式规则，以减少代码重复和维护。

```scss
.button {
  background-color: #42A5F5;
  color: white;
}

.submit-button {
  @extend .button;
  font-weight: bold;
}
```

这些是一些SCSS中更高级和常用的语法和特性。SCSS提供了更多功能，如条件语句、循环、操作符等，使样式表更具灵活性和可扩展性。

## 骚操作
当然！SCSS提供了许多强大的功能，以下是一些更骚操作的示例：

1. 循环：使用`@for`、`@each`或`@while`循环语句来生成重复的样式规则或处理列表数据。

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    /* 样式规则 */
  }
}

@each $color in red, green, blue {
  .bg-#{$color} {
    background-color: $color;
  }
}

$breakpoints: (small: 480px, medium: 768px, large: 1024px);
@each $name, $size in $breakpoints {
  @media (min-width: $size) {
    .container-#{$name} {
      /* 响应式样式规则 */
    }
  }
}
```

2. 条件语句：使用`@if`、`@else if`和`@else`语句来根据条件执行不同的样式规则。

```scss
@mixin text-styles($size) {
  @if $size == small {
    font-size: 12px;
  } @else if $size == medium {
    font-size: 16px;
  } @else if $size == large {
    font-size: 20px;
  } @else {
    font-size: 14px;
  }
}
```

3. 运算符：使用算术运算符（`+`、`-`、`*`、`/`）和逻辑运算符（`and`、`or`、`not`）来操作值。

```scss
.container {
  width: 100% / 3;
  height: $height * 2;
  display: flex and (min-width: 768px);
}
```

4. 插值：使用`#{$variable}`语法在字符串中插入变量的值。

```scss
$property: margin;
$direction: top;

.element {
  #{$property}-#{$direction}: 10px;
}
```

这些示例只是展示了SCSS提供的一小部分强大功能。SCSS的灵活性使其成为编写可维护、可扩展和高效的样式表的理想选择。你可以根据自己的需求和创意进行更多创造性的操作和组合。

## 字符串连接
当使用`&`与字符串连接时，可以生成选择器的变体。下面是一个完整的例子，演示了如何使用`&`与字符串连接生成选择器的不同变体：

```scss
.tab {
  &-header {
    /* .tab-header的样式规则 */
  }

  &-content {
    /* .tab-content的样式规则 */

    &-title {
      /* .tab-content-title的样式规则 */
    }

    &-body {
      /* .tab-content-body的样式规则 */
    }
  }

  &.active {
    /* 具有.active类的.tab元素的样式规则 */
  }

  &:hover {
    /* 鼠标悬停在.tab元素上的样式规则 */
  }
}
```

在上面的例子中，使用`&`与字符串连接生成了不同的选择器变体：

- `.tab-header`：`.tab`选择器与字符串`"-header"`连接生成的选择器。
- `.tab-content`：`.tab`选择器与字符串`"-content"`连接生成的选择器。
- `.tab-content-title`：`.tab-content`选择器与字符串`"-title"`连接生成的选择器。
- `.tab-content-body`：`.tab-content`选择器与字符串`"-body"`连接生成的选择器。
- `.active`：具有`.active`类的`.tab`元素的选择器。
- `:hover`：鼠标悬停在`.tab`元素上的选择器。

这个例子展示了如何使用`&`与字符串连接在SCSS中生成不同的选择器变体，以便更灵活地应用样式规则。