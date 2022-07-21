function fn2() {
    console.log(1)
    console.log(2)
}
fn2()                               //先出1后出2，表示同步


function fn1() {
    setTimeout(() => {
        console.log(1)            //实现异步函数，将这个异步任务在同步任务后执行
    })

    console.log(2)                 //同步任务
} 
fn1()