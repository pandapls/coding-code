// 二叉树的前序遍历

var preorderTraversal = function(root) {
  let result = []
  let stack = []
  stack.push(root)
  while(stack.length){
      let node = stack.pop()
      result.push(node.val)
      if(node.right)stack.push(node.right)
      if(node.left)stack.push(node.left)
  }
  return result
};

// 二叉树真的中序遍历
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  while(root||stack.length){
      while(root){
          stack.push(root)
          root = root.left
      }
      root = stack.pop()
      res.push(root.val)
      root = root.right
  }

  return res
};

// 二叉树的后续遍历
var postorderTraversal = function(root) {
  let res =[];
  let stack = []
  while(root || stack.length){
      while(root){
          stack.push(root)
          res.unshift(root.val)
          root = root.right
      }
      root = stack.pop()
      root = root.left
  }
  return res
};