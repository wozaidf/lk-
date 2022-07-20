//初始化
const obj = {
    name: 'lk'
};
//增加
obj['age']=20;

//删除
delete obj.name


//修改
obj.age =21
obj['age'] =23

//打印
console.log(obj.name)
console.log(obj.age)

//以变量的方式添加属性
const ag = 'sex';
obj[ag] = '男';
console.log(obj);

//用sombol为obj添加唯一值
let sy = Symbol('key');
obj[sy] ='wzdf';
console.log(obj);