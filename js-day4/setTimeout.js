//例1
function fn2() {
    console.log(1)
    console.log(2)
}
fn2()                               //先出1后出2，表示同步

//例2
function fn1() {
    setTimeout(() => {
        console.log(1)            //实现异步函数，将这个异步任务在同步任务后执行
    })

    console.log(2)                 //同步任务
} 
fn1()                            //先出2再出1


//例3
function fn3(fn){
    setTimeout(()=>{
        console.log(1)
        //以异步的方式，为函数设置返回值
        fn('helloWorld')                     //在异步任务执行以后，他调用回调函数，通过回调函数传实参的形式来返回结果
    },2000)
    console.log(2)                   
}

fn3((data)=>{                                //在这调用fn3函数时，就可以通过定义一个回调函数来接收到上面的返回值
    console.log(data)
})                                     //先出2，二秒后再出1和helloWorld