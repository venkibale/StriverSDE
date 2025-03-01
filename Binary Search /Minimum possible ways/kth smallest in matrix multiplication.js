function findKthNumber(m, n, k) {
    // Helper function to count numbers <= x in the table
    function countLessOrEqual(x) {
        let count = 0;
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(x / i), n);
        }
        return count;
    }

    // Binary search
    let low = 1, high = m * n;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (countLessOrEqual(mid) < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

// Example usage
let m = 3, n = 3, k = 5;
console.log("The kth smallest number is:", findKthNumber(m, n, k));
