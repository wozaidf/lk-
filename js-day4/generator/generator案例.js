function* gen(x){
   console.log(x)
    var y = yield x + 2;
    return y;
    var c =yield x+1;
    return c;
  }
   
  var g = gen('lk');
  console.log(g.next(3).value)                 //第一个next的值就是根据
  console.log(g.next(2).value)
//   console.log(g.next(1).value)
