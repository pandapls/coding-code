// 二叉树的最大深度
// 递归解法
var maxDepth = function(root) {
    return root === null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right))+1
 };

//  迭代解法
var maxDepth = function(root) {
    if(!root){
        return 0
    }
   let stack = [root],depth = 1;
   while(stack.length){
       let len = stack.length
       for(let i = 0; i < len; i++){
           let cur = stack.shift()
           if(cur.left)stack.push(cur.left)
           if(cur.right)stack.push(cur.right)
       }
       if(stack.length){
           depth++
       }
   }
   return depth;
};