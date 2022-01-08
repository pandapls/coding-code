// 71. 简化路径
var simplifyPath = function(path) {
    let stack  = []
    for(let str of path.split('/')){
        console.log(str)
       if(['..','.',''].indexOf(str) === -1){
           stack.push(str)
       }else if(str === '..' && stack.length){
           stack.pop()
       }
    }
    return '/' + stack.join('/')
};