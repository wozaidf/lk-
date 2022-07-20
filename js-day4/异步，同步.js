function drink(action) {
    setTimeout(() => action(), 3000)
}

function nice() {
    console.log('真香')
}

function eat() {
    console.log('吃好了')
}

drink(nice);
eat();


// function drink() {
//     setTimeout(nice, 3000)
// }

// function nice() {
//     console.log('真tm好喝')
// }

// function eat() {
//     console.log('吃好了')
// }

// drink();
// eat();