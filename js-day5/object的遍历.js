// 3.对象的遍历
const hero = {
    name: '孙尚香',
    duck: 'gun'
}
//将hero的keys和values分别提取出来
const keyss = Object.keys(hero)
console.log(keyss)
const valuess = Object.values(hero)
console.log(valuess)
const keysValues = Object.entries(hero).forEach(item => {
    console.log(item[0], item[1])
});
console.log(Object.entries(hero))
