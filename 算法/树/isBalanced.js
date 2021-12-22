// 平衡二叉树
var isBalanced = function(root) {
    return getDepth(root) === -1 ? false : true
};
let getDepth = (node)=>{
    if(!node){
        return 0
    }
    let leftDepth = getDepth(node.left)
    if(leftDepth === -1){
        return -1
    }

    let rightDepth = getDepth(node.right)
    if(rightDepth === -1){
        return -1
    }

    if(Math.abs(leftDepth - rightDepth)>1){
        return -1
    }else{
        return 1+Math.max(leftDepth,rightDepth)
    }
}   
