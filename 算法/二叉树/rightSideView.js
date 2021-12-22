// 二叉树的右视图
// 递归解法
var rightSideView = function(root) {
    let stack = []

    let dfs = (node,depth)=>{
        if(!node){
            return;
        }
        if(depth === stack.length){
            stack.push(node.val)
        }
        depth++
        dfs(node.right,depth)
        dfs(node.left,depth)
    }

    dfs(root,0)
   return stack
};
// 迭代解法
var rightSideView = function(root) {
    let stack = [],res = []
    stack.push(root)
   while(stack.length && root){
       let size = stack.length
       while(size--){
           let node = stack.shift()
           if(!size){
               res.push(node.val)
           }
           node.left&&stack.push(node.left)
           node.right&&stack.push(node.right)

       }
   }
   return res
};