//创建一个promise
/*
(resole,reject)=>{
    resole(想要返回的值)
    或reject()
}

*/
const mypromise = new Promise((resolve, reject) => {
    //把promise由pending状态转换为fulfilled
    setTimeout(() => {
        resolve('想要的结局')
    }, 3000)
    //或者reject('可惜不是你')
})



mypromise.then((value) => { 
    console.log(value) 
    const mypromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('💎')
        },3000)
    })
    return mypromise;
}).then((value) => {
    console.log(value)})
    .catch((err) => { console.log(err) })
    .finally(() => {
        console.log('那就这样吧')
    })