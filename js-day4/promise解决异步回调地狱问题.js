//promise对象专门用来存储异步代码对象
//它可以确保异步代码的执行和返回结果
//创建一个promise，它需要一个回调函数作为参数
//resolve 在代码正常执行时，来设置返回值的
//reject  在代码错误时，用来设置错误信息
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('异步代码')
        //设置返回值，异步的返回值不能通过return来返回值，只能通过回调函数
        resolve(66)
    }, 1000)
})
//获取promise的返回值,当promise中的代码正常执行时，会自动通过then()方法的回调函数来返回结果
mypromise.then(result => { console.log(result) })


//将异步回调地狱.js中例3，用promise来解决，链式调用
function fn1(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n+1)
        }, 1000)
    })
}
// fn1(10).then(n => {
//     return 20;               //在这个回调函数设置返回值为20，在下面再调用then时，这里的20会成为下一个then里面的参数      
// }).then(result => {         
//     console.log(result)      //结果为20
//     return 33;               //这里同上面一样
// })
fn1(10).then(n=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n+2)
        }, 1000)
    })
}).then(n=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n+3)
        }, 1000)
    })
}).then(n=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n+4)
        }, 1000)
    })
}).then(n=>{
    console.log(n)
})