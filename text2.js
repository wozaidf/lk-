function fn1(x) {
    var a = 0;
    let b = 0;
    {
      var c = 1; // 未用let或const，不形成c的块作用域，只提升一层，到了fn1的函数作用域
      let d = 1; // d形成块作用域，只可在当前代码块中访问
    }
    
    function fn() {
      var e = 2;
      let g = 2;
      console.log('a:', a)
      console.log('b:', b)
      console.log('c:', c)                      //变量c的作用域已提升
      // 在fn中有对fn1变量对象的引用，形成闭包
      // console.log('d:', d) // d is undefined
    }
    
    fn()
  }
  fn1()

  