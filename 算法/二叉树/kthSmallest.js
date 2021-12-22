// 二叉搜索树中第K小的元素
var kthSmallest = function(root, k) {
    let stack = []

    while(stack.length ||root){

        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(!--k){
            break
        }
        root = root.right
    }
    return root.val
};