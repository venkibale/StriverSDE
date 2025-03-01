function searchMatrix(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let low = 0, high = rows * cols - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Map 1D index to 2D indices:
        let row = Math.floor(mid / cols);
        let col = mid % cols;

        if (matrix[row][col] === target) {
            return [row, col]; // Target found
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [-1, -1]; // Target not found
}

// Example Usage
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;

let result = searchMatrix(matrix, target);
if (result[0] !== -1) {
    console.log(`Target found at position: (${result[0]}, ${result[1]})`);
} else {
    console.log("Target not found.");
}
// O (log(m x n))