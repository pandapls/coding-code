var postorderTraversal = function(root) {
      const res =[];
      const stack = [];
      while (root || stack.length){
        while(root){
          stack.push(root);
          res.unshift(root.val);
          root = root.right;
        }
        root = stack.pop();
        root = root.left;
      }
      return res;
  };
  