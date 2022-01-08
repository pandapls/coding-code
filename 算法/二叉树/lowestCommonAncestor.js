// 面试题 04.08. 首个共同祖先
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q){
        return root
    }
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    if(left && right){
        return root;
    }
    if(left && !right){
        return left
    }
    return right
};