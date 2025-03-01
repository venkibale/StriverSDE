class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function insertGeneralBinaryTree(root, value) {
    if (root === null) return new TreeNode(value);
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const node = queue.shift();
  
      // Insert into the left child if available
      if (node.left === null) {
        node.left = new TreeNode(value);
        return root;
      } else {
        queue.push(node.left); // Add left child to the queue
      }
  
      // Insert into the right child if available
      if (node.right === null) {
        node.right = new TreeNode(value);
        return root;
      } else {
        queue.push(node.right); // Add right child to the queue
      }
    }
  
    return root;
  }
  