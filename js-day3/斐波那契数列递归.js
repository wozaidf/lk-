// 普通函数和箭头函数 箭头函数没有argumens
// 函数名可以作为变量，因此函数没有重载
// 理解函数参数
//1)函数参数可以随意传递
//2)可以通过arguments拿到所有的参数，具有length和索引的功能
//3)缺省值 默认值
//4)text.length 表示变量个数
//5)递归，斐波那契数列
// function text(items1,items2){
//     console.log(arguments[2],arguments.length,arguments)
// }
// text('lk','zy','hs')
// console.log(text.length)

function feibo(n) {
    if (n === 1 || n === 2) {
        return 1
    }//要有终止条件
    return feibo(n - 2) + feibo(n - 1);  //尾调用//2. 自己调用自己
}
console.log(feibo(10))
