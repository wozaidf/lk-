//回调地狱
setTimeout(function () {  //第一层
    console.log('111');//等3秒打印111在执行下一个回调函数
    setTimeout(function () {  //第二层
        console.log('222');//等2秒打印222在执行下一个回调函数
        setTimeout(function () {   //第三层
            console.log('333');//等一秒打印333
        }, 1000)
    }, 2000)
}, 3000)

//例二          异步任务，回调函数  回调地狱
function getTea(fn) {
    setTimeout(() => {
        fn('奶茶')
    }, 2000)                 //异步任务
}

function getHotTop(fn) {
    setTimeout(() => {
        fn('火锅')
    }, 2000)                 //异步任务
}



getHotTop(function fn(data) {
    console.log(data)           //吃火锅
    getTea(function fn(data) {
        console.log(data)       //喝奶茶         //在异步任务中按我想要的顺序执行异步操作，就形成了回调地狱
    })
})

console.log('不要等待直接')               //同步任务