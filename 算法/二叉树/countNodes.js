//  完全二叉树的节点个数
var countNodes = function(root) {
    let res = 0
    if(!root){
        return 0
    }
    let dfs = (node)=>{
        if(node.left){
            res++
            dfs(node.left)
        }
        if(node.right){
            res++
            dfs(node.right)
        }
    }
    dfs(root,res)
    return res+1
};