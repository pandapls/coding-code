// 1021. 删除最外层的括号
var removeOuterParentheses = function(s) {
    let count = 0,res = '';
    for(let i = 0; i<s.length;i++){
        console.log(count,s[i])
        if(s[i] === '('&& count++ >0){
            res += '('
        }
        if(s[i] === ')'&& count-- >1){
            res += ')'
        }

    }
    return res
};