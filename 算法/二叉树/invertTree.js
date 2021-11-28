// 翻转二叉树
const invertTree = (root)=>{



    const dfs = (node)=>{
        if(!node){
            return ;
        }

        let temp = node.left
        node.left = node.right;
        node.right = temp
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return root
}