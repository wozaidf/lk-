var arr = [1,2,3,4,5,6]
 
var obj={
    name:"小陈",
    age:20,
}
 
var str="你好，JavaScript"
 
//for循环遍历数组
 
for (let index = 0; index < arr.length; index++) console.log(arr[index]);
 
 
//for循环不能用于遍历对象，对象没有length属性
 
//for循环遍历字符串
for (let index = 0; index < str.length; index++) console.log(str[index]);
