function heightOfTree(root) {
    if (root === null) return -1; // Base case: height of an empty tree is -1
  
    // Recursively compute the height of left and right subtrees
    const leftHeight = heightOfTree(root.left);
    const rightHeight = heightOfTree(root.right);
  
    // Height of the tree is the max of left and right subtree heights, plus 1
    return 1 + Math.max(leftHeight, rightHeight);
  }
  