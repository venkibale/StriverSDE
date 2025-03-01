// A balanced binary tree is a binary tree where the difference in heights between the left and right subtrees of any node is at most 1.
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBalanced(root) {
    // Helper function to calculate height and check balance
    function checkHeight(node) {
      if (node === null) return 0; // Base case: height of an empty tree is 0
  
      // Check left and right subtrees
      const leftHeight = checkHeight(node.left);
      const rightHeight = checkHeight(node.right);
  
      // If left or right subtree is unbalanced, propagate -1
      if (leftHeight === -1 || rightHeight === -1) return -1;
  
      // Check current node's balance
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  
      // Return the height of the current subtree
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    // The tree is balanced if checkHeight does not return -1
    return checkHeight(root) !== -1;
  }
  