// 快乐数
var isHappy = function(n) {
    let slow = n
    let fast = getSum(n)
    while(fast !== 1 && fast !== slow){
        slow  = getSum(slow)
        fast = getSum(getSum(fast))
    }
    return fast === 1
};
let getSum = function(n){
    return n.toString().split('').map(i => i **2).reduce((a,b)=> a+b)
}