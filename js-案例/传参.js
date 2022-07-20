//写一个封装函数求累加和
function sum(item1, item2) {
    let sum1 = 0;                              //初始化载体，让一个变量放累加的和
    for (let i = item1; i <= item2; i++) {
        sum1 += i;
    }
    console.log(sum1)
}

sum(2, 10)

//求一个数组内元素和
function getsore(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}
getsore([2,3,1])