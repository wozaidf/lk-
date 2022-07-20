//用assign将两个对象的属性合并，覆盖重复的值
const obj1 ={
    name:'lk',
    age:20,
    happy:'game'
}
const obj2 ={
    name:'lk',
    age:30,                                        //如果两个对象有重复的key则取后面key的value
    sex:'nan'
}
// const sumObj1 =Object.assign(obj1,obj2)             //这样使用时会改变原对象的属性，所以要新建一个空对象来放和并的值
const sumObj2 =Object.assign({},obj1,obj2)             //如上行注释所说建一个{}，此时打印原对象将不会改变
// console.log(sumObj1)
console.log(sumObj2)                                
console.log(obj1)                                 
console.log(obj2)