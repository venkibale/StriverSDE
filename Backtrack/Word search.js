function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
  
    function backtrack(row, col, index) {
      // Base case: if the entire word is found
      if (index === word.length) return true;
  
      // Boundary and matching conditions
      if (
        row < 0 || col < 0 || 
        row >= rows || col >= cols || 
        board[row][col] !== word[index]
      ) {
        return false;
      }
  
      // Mark the cell as visited
      const temp = board[row][col];
      board[row][col] = '#'; // Temporary marker
  
      // Explore all 4 possible directions
      const directions = [
        [0, 1], // Right
        [1, 0], // Down
        [0, -1], // Left
        [-1, 0]  // Up
      ];
  
      for (const [dx, dy] of directions) {
        if (backtrack(row + dx, col + dy, index + 1)) {
          return true;
        }
      }
  
      // Backtrack: Undo the marker
      board[row][col] = temp;
  
      return false;
    }
  
    // Start the search from every cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (backtrack(row, col, 0)) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Example Usage
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ];
  const word = "ABCCED";
  
  console.log(exist(board, word)); // Output: true
  