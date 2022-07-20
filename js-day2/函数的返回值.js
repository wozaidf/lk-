function fn(){
    console.log('lk')
    return 20;
}
fn()                     //return 相当于执行了一句话   fn()=20  //lk



function sum (a,b){
    console.log('zy')
    return a+b;
}
sum(1,3)                //return --sum(1,3)=4     //zy
const c =sum(1,3)       //将sum(1,3)的值命名为c，便于后续使用   //赋值的同时还调用函数，所以又打印了zy //zy
console.log(c)          //4
