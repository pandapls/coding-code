let input = [1,null,2,3]
function twotreeforEach(root){
    let res = []
    let stack = []
    while(root || stack.length>0){
        while(root){
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
}
console.log(twotreeforEach(input))