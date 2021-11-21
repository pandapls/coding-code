// 最大回文串
function longestPalindrome(str){
    // 创建26个字母大小写的总数组
    let table = new Array(52).fill(0)

    for(let i = 0; i < str.length; i++ ){
        if(str[i] >= 'a' && s[i] <= 'z'){
            table[str[i].codePointAt(0) - 'a'.codePointAt(0)]++
        }else{
            table[str[i].codePointAt() -65 +26]++
        }
    }

    let addMark = 0;
    let res = 0;
    for(let i = 0; i < table.length; i++){
        res += table[i]
        if(table[i] % 2){
            res --;
            addMark = 1
        }
    }
    res += addMark

   return res
}
// longestPalindrome('aaabaaasbc')