// N 叉树的前序遍历
var preorder = function(root) {
    if(!root){
        return []
    }
    let res = [],stack = [root]
    while(stack.length){
        let node = stack.shift()
        res.push(node.val)
        if(node.children){
            stack = node.children.concat(stack)
        }
    }
    return res
};