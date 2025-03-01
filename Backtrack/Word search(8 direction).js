// Given a 2D grid m*n of characters and a word, the task is to find all occurrences of the given word in the grid. A word can be matched in all 8 directions at any point. Word is said to be found in a direction if all characters match in this direction (not in zig-zag form).
// The 8 directions are, Horizontally Left, Horizontally Right, Vertically Up, Vertically Down and 4 Diagonal directions.

function findWordInGrid(grid, word) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
        [0, 1],   // Right
        [0, -1],  // Left
        [1, 0],   // Down
        [-1, 0],  // Up
        [1, 1],   // Down-right
        [1, -1],  // Down-left
        [-1, 1],  // Up-right
        [-1, -1], // Up-left
    ];
    const result = new Set();

    // Helper function to check if a word matches starting from a cell in a specific direction
    function searchFrom(row, col, index, direction) {
        for (let i = 0; i < word.length; i++) {
            const newRow = row + i * direction[0];
            const newCol = col + i * direction[1];

            if (
                newRow < 0 || newRow >= rows || 
                newCol < 0 || newCol >= cols || 
                grid[newRow][newCol] !== word[i]
            ) {
                return false;
            }
        }
        return true;
    }

    // Iterate through the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === word[0]) { // Start search if the first letter matches
                for (const direction of directions) {
                    if (searchFrom(row, col, 0, direction)) {
                        result.add(`${row},${col}`);
                        break; // Once found, skip other directions for the same start
                    }
                }
            }
        }
    }

    // Convert the set of coordinates to a sorted list
    const sortedResult = Array.from(result)
        .map(coord => coord.split(",").map(Number))
        .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

    return sortedResult;
}

// Example Usage
const grid = [
    ["G", "O", "D"],
    ["G", "G", "O"],
    ["D", "O", "D"]
];

console.log(findWordInGrid(grid, "GOD"));
// Output: [[0, 0], [1, 1]]

// TC:

// For each cell (m×n), explore up to 8 directions
// O(m×n×8×L)=O(m×n×L).