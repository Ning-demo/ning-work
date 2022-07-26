/* 
装饰器
定义: 装饰器是一种新的声明，它能够作用于**类声明、方法、访问符、属性和参数**上
符号: @xxx(自定义的函数名称)
注意点: 要注意**装饰器要紧挨着要修饰的内容的前面**
*/
// function stopProp() {
// 	// ...
// }
// @stopProp

/* 
### 装饰器工厂
**闭包** 的概念是: 内部函数可以返回外部的函数,内部可以调用外部的函数
**装饰器工厂**也是一个函数，它的返回值是一个函数，返回的函数作为装饰器的调用函数。如果使用装饰器工厂，那么在使用的时候，就要加上函数调用，如下：
*/
// function setProp () {
//     return function (target: any) {
//         // ...
//     }
// }

// @setProp()

// ## 类装饰器

// *类装饰器*在类声明之前声明，要记着装饰器要紧挨着要修饰的内容，类装饰器应用于类的声明。
// 类装饰器表达式会在运行时当做函数被调用，它由唯一一个参数，就是装饰的这个类。

