// json序列化
const b = {
    name: 'lk',
    age: 20
}
// 序列化，对象b转化为JSON 字符串
const bStr = JSON.stringify(b)
console.log(b, bStr)
const a = `{"name":"zy",
            "age":21
}`

// 反序列化，由一个json字符串转换为js对象
const reDefine = JSON.parse(a)
console.log(reDefine)
