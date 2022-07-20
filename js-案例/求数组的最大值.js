//求数组的最大组值
function getArrayMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    //或者写成
    // max < arr[i] ? max = arr[i] : max
    return max;
}
const maxplus = getArrayMax([12, 3, 4, 5, 2, 10])
console.log(maxplus)

//求数组的最小值
function getArrayMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}
const min = getArrayMin([2, 1, 3, 7, 32, 4])
console.log(min)