function findPeakInMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let lowCol = 0, highCol = cols - 1;

    while (lowCol <= highCol) {
        // Find the middle column:
        let midCol = Math.floor((lowCol + highCol) / 2);

        // Find the row with the maximum element in the middle column:
        let maxRow = 0;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][midCol] > matrix[maxRow][midCol]) {
                maxRow = i;
            }
        }

        // Get the value of the candidate peak:
        let peak = matrix[maxRow][midCol];

        // Check neighbors:
        let left = midCol > 0 ? matrix[maxRow][midCol - 1] : -Infinity;
        let right = midCol < cols - 1 ? matrix[maxRow][midCol + 1] : -Infinity;

        // If peak is greater than or equal to neighbors, return it:
        if (peak >= left && peak >= right) {
            return peak;
        }

        // Move to the side with the greater neighbor:
        if (left > peak) {
            highCol = midCol - 1; // Search in the left half.
        } else {
            lowCol = midCol + 1; // Search in the right half.
        }
    }

    return -1; // Shouldn't reach here for a valid input.
}
// find maximum column : O(m)
// binary search: O (log n)
// O(m log n)