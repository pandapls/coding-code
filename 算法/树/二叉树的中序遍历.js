function inorderTraversal(root){
    if(!root)return [];
    let result = []
    let stack = []
    while(root || stack.length ){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        result.push(root.val)
        root = root.right
    }
    return res
}
