# SAM 函数式接口

## 简单介绍
在 Kotlin 中，函数式接口是指只有一个抽象方法的接口，它们被用于支持函数式编程风格和 lambda 表达式。

Kotlin 提供了一些函数式接口，其中最常用的是函数类型（Function Types）。函数类型本身就是函数式接口，具有单个抽象方法。函数类型的形式取决于参数和返回类型的数量和类型。

以下是一些常见的函数类型和它们对应的函数式接口：

1. `(A) -> R`: 表示接受一个参数类型为 `A`，返回类型为 `R` 的函数。

   对应的函数式接口是 `Function1<A, R>`。

2. `(A, B) -> R`: 表示接受两个参数类型为 `A` 和 `B`，返回类型为 `R` 的函数。

   对应的函数式接口是 `Function2<A, B, R>`。

3. `() -> R`: 表示无参数，返回类型为 `R` 的函数。

   对应的函数式接口是 `Function0<R>`。

在使用函数类型时，可以通过 lambda 表达式来创建函数对象，从而传递行为。

以下是一个示例，展示了如何使用函数类型和 lambda 表达式：

```kotlin
fun interface Calculator {
    fun calculate(a: Int, b: Int): Int
}

fun main() {
    val addition: Calculator = { a, b -> a + b }
    val subtraction: Calculator = { a, b -> a - b }

    val result1 = addition.calculate(5, 3)
    println("5 + 3 = $result1") // 输出：5 + 3 = 8

    val result2 = subtraction.calculate(10, 4)
    println("10 - 4 = $result2") // 输出：10 - 4 = 6
}
```

在上述示例中，我们定义了一个函数式接口 `Calculator`，它具有单个抽象方法 `calculate()`。然后，我们使用 lambda 表达式创建了两个函数对象 `addition` 和 `subtraction`，分别表示加法和减法操作。

通过函数对象，我们可以调用 `calculate()` 方法来执行相应的操作。在 `main()` 函数中，我们分别调用 `addition.calculate(5, 3)` 和 `subtraction.calculate(10, 4)`，并打印出结果。

这样，我们就可以通过函数类型和 lambda 表达式实现函数式编程，以一种更简洁和灵活的方式传递行为。

## SAM 转换
对于函数式接口，可以通过 lambda 表达式实现 SAM 转换，从而使代码更简洁、更有可读性。
```kotlin
fun interface IntPredicate {
   fun accept(i: Int): Boolean
}
```
> 不使用SAM转换
```kotlin
// 创建一个类的实例
val isEven = object : IntPredicate {
   override fun accept(i: Int): Boolean {
       return i % 2 == 0
   }
}
```
> 使用SAM转换
```kotlin
// 通过 lambda 表达式创建一个实例
val isEven = IntPredicate { it % 2 == 0 }
```
> run 
```kotlin
fun interface IntPredicate {
   fun accept(i: Int): Boolean
}

val isEven = IntPredicate { it % 2 == 0 }

fun main() {
   println("Is 7 even? - ${isEven.accept(7)}")
}
```