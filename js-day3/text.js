//this指向问题
//指向最近的对象
//apply call（）      bind（返回一个函数，直接绑定函数，不会） 面试必问
//1.call
//闭 包
//立即执行的函数表达式
function gkd() {
    this.name = 'lk';
    this.age = '20';
    drink = function () {
        console.log(this.name, this.age);

    }
}
gkd.prototype.dna = 'dnaaaa'
const t1 = new gkd;
console.log('haihai', t1.dna)

function handmovemount() {

}
handmovemount.prototype = t1;
t1.constructor = handmovemount;
const newWorld = new handmovemount();
console.log('haha', newWorld.dna)