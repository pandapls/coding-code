// 斐波那契数列
var fib = function(n) {
    if(n===1||n===0){
        return n
    }
    let a = 1,b = 0
    for(let i =1; i<n; i++){
        a = a+b
        b = a-b
        a = a%1000000007
    }
    return a
};