function dayfive() {
    console.log('haha');          //调用dayfive函数时执行这行代码
    return 1;
}
const b = dayfive;        //将dayfive函数赋予b
const c = dayfive();      //将dayfive的返回值赋予c

console.log(b);
console.log(c);

// function handle(callback) {
//     callback();
// }

// handle(dayfive);

// handle(dayfive());        //报错，返回值是1，1不是函数


