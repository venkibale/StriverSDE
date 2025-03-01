function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    let row = 0, col = cols - 1; // Start at the top-right corner

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; // Target found
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }

    return false; // Target not found
}

// Example Usage
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
let target = 5;

console.log(searchMatrix(matrix, target) ? "Found" : "Not Found");

// O(m+n).