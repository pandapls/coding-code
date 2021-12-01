// 棒球比赛
var calPoints = function(ops) {
    let stack = []
    stack.push(ops[0])
    for(let i = 1; i <ops.length; i++){
        let pop = stack.pop()
        if(pop){
            stack.push(+pop)
        }
        if(ops[i] === 'C'){
            stack.pop()
        }else if(ops[i] === '+'){
            stack.push(Number(stack[stack.length-1]) + Number(stack[stack.length-2]))
        }else if(ops[i] === 'D'){
            stack.push(+pop*2)
        }else{
            stack.push(+ops[i])
        }
    }
   return stack.reduce((pre,cur)=>pre+cur)
};