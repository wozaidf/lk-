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
