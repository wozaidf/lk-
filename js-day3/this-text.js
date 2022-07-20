// const lk = {
//     name: 'wzdf',
//     age: 20,
//     sex: 'man',
//     print: function dda() {
//         console.log(this.name, this.age)
//     }

// }
// lk.print()
// var name ='lk'
// function girl() {
//     var name='haha';
//     console.log(this.name) 
//     return 1;
//     //此时this没有明确指明调用的对象，所以该this默认绑定为window全局对象
// }
// girl()

// const girl1 = {
//     name: 'zy',
//     age: 20,
//     height: 160,
//     weight:100,
//     print1:function (){
//         console.log(this.height,this.age)
//     }

// }
// girl1.print1()

// const girlname = {
//     name: 'zy',
//     sayname: function () {
//         console.log('我的女朋友是' + this.name)
//     }
// }
// girlname.sayname()          //此时this是指girlname对象中的name
// const girl2 = {
//     name: 'wz'
// }

// const girl3 = {
//     name: 'sr'
// }
// const girl4 = {
//     name: 'qwc'
// }
// //call,apply都能将this硬绑定想要的对象上
// girlname.sayname.call(girl2)
// girlname.sayname.apply(girl3)



const obj1 = {
    color: 'green',
    showColor: function () {
        console.log(this.color)
    }
}
obj1.showColor();
const other = obj1.showColor
other();
//this又指向全局对象即window  ***
const theOtherColor =other.bind(obj1)           //将this重新指向obj
theOtherColor();