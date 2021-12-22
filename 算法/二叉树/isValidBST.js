// 合法二叉搜索树
var isValidBST = function(root) {
    let stack = []
    let min = -Infinity
    while(stack.length || root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(root.val <= min){
            return false
        }
        min = root.val
        root = root.right
    }
    return true
};