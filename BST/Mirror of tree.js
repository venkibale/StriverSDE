class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function mirrorTree(root) {
    if (root === null) return null; // Base case: empty tree
  
    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // Recursively mirror left and right subtrees
    mirrorTree(root.left);
    mirrorTree(root.right);
  
    return root; // Return the root of the mirrored tree
  }
  