   // 传统函数
   function myFunction() {
    return 'hello world'
}

myFunction()   // 'hello world'，一旦调用立即执行


//Generator函数
   function* persition(){

       yield '我是generato生成器';
       yield '我要开始了';
       return '结束'
   }
   //创建一个句柄(间接变量)，赋值给生成器
   var iterator =persition();
   //直接调用并不能被立即执行
   //console.log(iterator)
   //需使用next()方法来调用这个生成器 next()方法调用一次,
   //并不能将Generator函数内的yield值全部打印出来，需要依次进行调用
   console.log(iterator.next())           
   console.log(iterator.next())
   //如果iterator对象内done为true，证明Generator函数执行完毕
   console.log(iterator.next())