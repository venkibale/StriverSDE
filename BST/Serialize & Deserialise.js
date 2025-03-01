class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Codec {
    // Serialize the tree to a string
    serialize(root) {
      const result = [];
  
      function dfs(node) {
        if (node === null) {
          result.push("null"); // Use 'null' for empty nodes
          return;
        }
        result.push(node.value); // Add the current node's value
        dfs(node.left); // Traverse the left subtree
        dfs(node.right); // Traverse the right subtree
      }
  
      dfs(root);
      return result.join(","); // Convert the result to a comma-separated string
    }
  
    // Deserialize the string back to a tree
    deserialize(data) {
      const nodes = data.split(",");
      let index = 0;
  
      function buildTree() {
        if (index >= nodes.length || nodes[index] === "null") {
          index++; // Skip 'null' nodes
          return null;
        }
  
        const node = new TreeNode(parseInt(nodes[index], 10)); // Create a new node
        index++;
        node.left = buildTree(); // Build the left subtree
        node.right = buildTree(); // Build the right subtree
  
        return node;
      }
  
      return buildTree();
    }
  }
  