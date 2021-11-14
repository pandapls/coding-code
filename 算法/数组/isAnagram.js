// 有效的字母异位词
let isAnagram = (s,t)=>{
    if(s.length !== t.length){
        return false
    }

    const table = new Array(26).fill(0)

    for(let i =0; i < s.length; i++){
        table[s.codePointAt(i)- 'a'.codePointAt(0)]++

    }
    console.log(table)
    for(let i = 0; i < t.length; i++){
        console.log(table,'1')
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        console.log(table,'2')
        if(table[t.codePointAt(i)- 'a'.codePointAt(0)] < 0){
            return false
        }
    }
    console.log(table)
    return true
}

console.log(isAnagram('t','r'))