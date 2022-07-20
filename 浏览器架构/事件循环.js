async function sheeptext(a){
    console.log('等三秒')
    await sheep(a)
    console.log('三秒了')
}
function sheep (item){
    return new Promise(resolve=>{setTimeout(()=>{resolve()},item)})
}

sheeptext(3000)