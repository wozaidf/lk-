const arr2 = [2, 3, 1, 4]
arr2.sort();                        //正序
console.log(arr2);



var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b-a);
console.log(numbers);


const objarr = [ 
    { name: 'lk', age: '20' },           //先建一个对象数组
    { name: 'zy', age: '21' }
]
const found = objarr.find(value => value.name === 'lk')          
console.log(found)


console.log(objarr.find((value) => {
    return value.name === 'lk' ;          //在数组中找到name为lk的值
}))

//



