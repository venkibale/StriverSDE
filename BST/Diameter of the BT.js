class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let diameter = 0; // Store the maximum diameter
  
    // Helper function to calculate height
    function height(node) {
      if (node === null) return -1; // Base case: height of empty tree is -1
  
      // Recursively compute the height of left and right subtrees
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
  
      // Update the diameter if the path through this node is larger
      diameter = Math.max(diameter, 2 + leftHeight + rightHeight);
  
      // Return the height of the current node
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    height(root); // Start computing height and update diameter
    return diameter;
  }
  