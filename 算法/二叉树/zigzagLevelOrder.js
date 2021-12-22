// 二叉树的锯齿形层序遍历
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let queue = [],res = [],flag = true
    queue.push(root)
    while(queue.length){
        let arr = []
        let leve = queue.length;
        for(let i = 0; i <leve; i++){
            let cur = queue.shift()
            if(flag){
                arr.push(cur.val)
            }else{
                arr.unshift(cur.val)
            }
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        flag = !flag
        res.push(arr)
    }
    return res
};