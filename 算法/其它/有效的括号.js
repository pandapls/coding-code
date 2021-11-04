function effectStr(str){

    let map = {
        '(':')',
        '{':'}',
        '[':']'
    } 
    let stack = []
    for(let i of str){
        console.log(i,str)
        if(map[i]){
            stack.push(i)
        }else if(map[stack.pop()] !== i){
            return false
        }
    }
    return stack.length === 0

}
let input = '([)]()'
console.log(effectStr(input))