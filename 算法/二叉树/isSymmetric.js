// 对称二叉树
var isSymmetric = function(root) {
    let dfs = (node1,node2)=>{
        if(!node1 && !node2){
            return true
        }
        if(!node1 || !node2){
            return false
        }
        return node1.val === node2.val && dfs(node1.left,node2.right) && dfs(node1.right,node2.left)
    }
    return dfs(root,root)
};