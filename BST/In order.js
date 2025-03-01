class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
function inOrderTraversal(node, result = []) {
    if (node !== null) {
      inOrderTraversal(node.left, result);
      result.push(node.value);
      inOrderTraversal(node.right, result);
    }
    return result;
  }
  