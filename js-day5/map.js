//哈希函数
const map1 = new Map();
//set(key,value)                                    //存放数据
map1.set('lk', { age: 20, phone: 15312842002 })         //key是用来计算地址的 address = f(key);  address上存的值就是value
map1.set('zy', { age: 20, phone: 1234567 })
//get(key)                                          //从map1中取我目标地址的值
const a = map1.get('lk')
console.log(a)
console.log(map1)