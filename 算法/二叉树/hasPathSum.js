//112.路径总和
var hasPathSum = function(root, targetSum) {
    if(!root)return false
    let res = false
    let dfs = (node,s)=>{
        if(!node.left && !node.right && targetSum === s){
            res =  true
        }
        if(node.left){
            dfs(node.left,s + node.left.val)
        }
        if(node.right){
            dfs(node.right,s + node.right.val)
        }
    }
    dfs(root,root.val)
    return res
};