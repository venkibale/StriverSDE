function binarySearchFirst1(row) {
    let low = 0, high = row.length - 1;
    let first1Index = row.length; // If no 1 is found, return length

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (row[mid] === 1) {
            first1Index = mid; // Found 1, look to the left
            high = mid - 1;
        } else {
            low = mid + 1; // Look to the right
        }
    }

    return first1Index;
}

function rowWithMax1s(matrix) {
    let maxRow = -1;
    let max1s = 0;

    for (let row = 0; row < matrix.length; row++) {
        let first1Index = binarySearchFirst1(matrix[row]);
        let count1s = matrix[row].length - first1Index;
        if (count1s > max1s) {
            max1s = count1s;
            maxRow = row;
        }
    }

    return maxRow;
}

// Example usage:
let matrix = [
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];
console.log("Row with maximum 1s:", rowWithMax1s(matrix));
