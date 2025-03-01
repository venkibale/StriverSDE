function findPaths(maze) {
    const n = maze.length;
    const paths = [];
    const directions = ["D", "L", "R", "U"]; // Down, Left, Right, Up
    const moves = [
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1],  // Right
        [-1, 0], // Up
    ];

    // Helper function for backtracking
    function backtrack(row, col, path) {
        // If the rat reaches the destination, add the path to the result
        if (row === n - 1 && col === n - 1) {
            paths.push(path);
            return;
        }

        // Mark the cell as visited
        maze[row][col] = 0;

        // Explore all possible directions
        for (let i = 0; i < 4; i++) {
            const newRow = row + moves[i][0];
            const newCol = col + moves[i][1];

            // Check if the move is valid
            if (newRow >= 0 && newCol >= 0 && newRow < n && newCol < n && maze[newRow][newCol] === 1) {
                backtrack(newRow, newCol, path + directions[i]);
            }
        }

        // Backtrack: Unmark the cell
        maze[row][col] = 1;
    }

    // Check if the starting cell is open
    if (maze[0][0] === 1) {
        backtrack(0, 0, "");
    }

    return paths;
}

// Example usage:
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
];

console.log(findPaths(maze));
