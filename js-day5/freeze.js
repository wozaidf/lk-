//用freeze将对象冻结，一个被冻结的对象再也不能被修改
const obj ={
    name:'lk'
}
Object.freeze(obj)
obj.name='zy'         //尝试修改obj的name属性
console.log(obj)      //{ name: 'lk' }      上面尝试失败