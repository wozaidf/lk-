function fn(){
    num =10;           //在函数内部变量没有声明，直接赋值，也可以当作全局变量来看，但不推荐
}
fn()                   //注意这要调用一下函数，让函数执行，num才被赋值
console.log(num)
if(true){
    nab =20;           //在块内部变量没有声明，直接赋值，也可以当作全局变量来看，但不推荐
}
console.log(nab)