function boundaryTraversal(root) {
    if (root === null) return [];
  
    const result = [];
  
    // Helper to check if a node is a leaf
    const isLeaf = (node) => node.left === null && node.right === null;
  
    // Collect left boundary excluding the leaf nodes
    const addLeftBoundary = (node) => {
      while (node) {
        if (!isLeaf(node)) result.push(node.value);
        node = node.left || node.right; // Move left if possible, else right
      }
    };
  
    // Collect all leaf nodes
    const addLeaves = (node) => {
      if (!node) return;
      if (isLeaf(node)) {
        result.push(node.value);
      } else {
        addLeaves(node.left);
        addLeaves(node.right);
      }
    };
  
    // Collect right boundary excluding the leaf nodes
    const addRightBoundary = (node) => {
      const temp = [];
      while (node) {
        if (!isLeaf(node)) temp.push(node.value);
        node = node.right || node.left; // Move right if possible, else left
      }
      result.push(...temp.reverse()); // Add reversed right boundary
    };
  
    // Process root
    if (!isLeaf(root)) result.push(root.value);
  
    // Collect boundary parts
    addLeftBoundary(root.left);
    addLeaves(root);
    addRightBoundary(root.right);
  
    return result;
  }
  