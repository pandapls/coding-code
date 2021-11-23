// 二叉树的直径：左子树深度最长+右子树深度最长
// 两节点的最长路径

let diameterOfBinaryTree = (root)=>{
    let res = 0;
    let dfs = (root) =>{
        if(!root){
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        res = Math.max(res,left+right)
        return Math.max(left,right)+1
    }
    dfs(root)
    return res
}