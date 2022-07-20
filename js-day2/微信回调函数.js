function callback1(){
    console.log('2');
}
function callback2(){
    console.log('3');
}
function callback3(){
    console.log('4');
}
// const par ={
//     callback:dayfive    //定义对象
// }
const content={
    data : '内容',
    success:callback1,
    fail :callback2,
    complete :callback3
}
    
wx.setClipboardData(content)