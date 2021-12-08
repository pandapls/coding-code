// 从前序与中序遍历序列构造二叉树
var buildTree = function(preorder, inorder) {
    if(!preorder.length||!inorder.length){return null}
    let root = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder.shift())
    root.left = buildTree(preorder,inorder.slice(0,index))
    root.right = buildTree(preorder,inorder.slice(index+1))
    return root
};