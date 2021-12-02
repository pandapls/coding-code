// 844. 比较含退格的字符串
var backspaceCompare = function(s, t) {

    let stackS = [],stackT=[],len = s.length > t.length ? s.length : t.length
    for(let i = 0; i<len; i++){
        if(s[i] === '#'){
            stackS.pop()
        }else if(s[i]){
            stackS.push(s[i])
        }
        if(t[i] === '#'){
            stackT.pop()
        }else if(t[i]){
            stackT.push(t[i])
        }
    }
    return stackS.join(',')===stackT.join(',')
};