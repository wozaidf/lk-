const person = {
    name: 'lk',
    age: 20,
    skill: 'fly',
    print1: function () {
        console.log(this.name)
    },
}
person.print1();


const obj = {
    color: 'green',
    showobj: {
        color: 'blue',
        showcolor: function(){
            console.log(this.color)
        }
    }
}

obj.showobj.showcolor();

const obj1 = {
    color: 'green',
    showColor: function () {
        console.log(this.color)
    }
}
obj1.showColor();
other = obj1.showColor
//this又指向全局对象即window
const theOtherColor =other.bind({color:'black'})  //将this直接指向black
// const theOtherColor =other.bind(obj)           //或者将this指向obj
theOtherColor();