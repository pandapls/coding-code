// 最长回文串

var longestPalindrome = function(s) {
    let map = new Map();//用来计数同一个字母出现 的次数
    let len = s.length

    for(let i = 0; i < len; i++){
        map.set(s[i],(map.get(s[i]) || 0) + 1)
    }

    let res = 0;

    for(let item of map){
        console.log(item[1],item[1]%2)
        res += item[1] - (item[1] % 2) //如果为偶数就直接是偶数的字母树，奇数则需减一1
    }
    console.log(res)
    // 如果最后算出来的res 必总长度还小 说明还可以塞入一个奇数的字母
    if(res < len) {
        res++
    }
    return res
};
longestPalindrome('aaasssscc')