function searchInMatrix(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let row = 0, col = cols - 1; // Start from the top-right corner

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return [row, col]; // Found the target
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }

    return [-1, -1]; // Target not found
}

// Example Usage
let matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];
let target = 5;

let result = searchInMatrix(matrix, target);
if (result[0] !== -1) {
    console.log(`Target found at position: (${result[0]}, ${result[1]})`);
} else {
    console.log("Target not found.");
}
