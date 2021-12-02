// 946. 验证栈序列
var validateStackSequences = function(pushed, popped) {
    let stack  = [],index = 0

    for(let i = 0; i<pushed.length; i++){
        stack.push(pushed[i])
        while(stack[stack.length-1] === popped[index] && popped[index] !== undefined){
            stack.pop()
            index++
        }
    }
    return stack.length === 0
};