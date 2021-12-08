// 第k个语法符号
var kthGrammar = function(n, k) {
    if(n<=1){
        return 0
    }

    let len = 2**(n-1)
    if(k > len/2){
        let val =  kthGrammar(n-1,k- len/2)
        return val === 0 ? 1 : 0
    }else{
        return kthGrammar(n-1,k)
    }
};