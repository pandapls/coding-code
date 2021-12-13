// 从上到下打印二叉树 II
var levelOrder = function(root) {
    let res = []
    let dfs = (node,level)=>{
        if(!node){
            return 
        }
        if(!res[level]){
            res[level] = []
        }
        res[level].push(node.val)
        dfs(node.left,level+1) 
        dfs(node.right,level+1) 
    }
    dfs(root,0)
   return res
};