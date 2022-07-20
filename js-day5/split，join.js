//split   将字符串以一个指定的分割符分割成一个字符串数组
const girls =`girl1,girl2,girl3`
const handlegirls = girls.split(',')          //split('指定分割符')  上面字符串时用,分割的，所以这里也要用,分割并返回一个数组
console.log(handlegirls)



//join    
const fish =['fish1','fish2','fish3']
const handlefish = fish.join(' ')            //这里用空格分割数组来返回一个字符串      
console.log(handlefish)

//trim        trim() 方法会从一个字符串的两端删除空白字符
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
