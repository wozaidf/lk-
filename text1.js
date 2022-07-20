console.log(a)
//此时这行代码并没有报错，输出一个undefined,因为下一行中var将a变量声明会提升到当前函数的第一行，没有函数的话，提升到整个代码的最顶部。
var a = 1;
console.log(a)

//上面代码可以等价于下面代码

var a;                  //只是声明并没有赋值
console.log(a)
a = 1;
console.log(a)