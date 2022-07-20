function *fn(){ // 定义一个Generator函数
    yield 'hello';
    yield 'world';
    return 'end';
    }
    var f1 =fn(); // 调用Generator函数
    console.log(f1); // fn {[[GeneratorStatus]]: “suspended”}
    console.log(f1.next()); // {value: “hello”, done: false}
    console.log(f1.next()); // {value: “world”, done: false}
    console.log(f1.next()); // {value: “end”, done: true}
    console.log(f1.next()); // {value: undefined, done: true}
    









    