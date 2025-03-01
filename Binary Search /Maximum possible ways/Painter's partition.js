function paintersPartition(arr, n, k) {
    // Helper function to check if `mid` workload is feasible
    function isFeasible(arr, n, k, mid) {
        let painters = 1; // Start with the first painter
        let currentSum = 0;

        for (let i = 0; i < n; i++) {
            // If a single board exceeds `mid`, it's not feasible
            if (arr[i] > mid) return false;

            if (currentSum + arr[i] > mid) {
                // Assign to next painter
                painters++;
                currentSum = arr[i];

                // Too many painters required
                if (painters > k) return false;
            } else {
                currentSum += arr[i];
            }
        }

        return true;
    }

    // Binary search on the answer space
    let low = Math.max(...arr); // Minimum workload (largest board)
    let high = arr.reduce((a, b) => a + b, 0); // Maximum workload (all boards)
    let result = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isFeasible(arr, n, k, mid)) {
            // If feasible, try for a smaller maximum workload
            result = mid;
            high = mid - 1;
        } else {
            // If not feasible, increase workload
            low = mid + 1;
        }
    }

    return result;
}

// Example usage
let arr = [10, 20, 30, 40];
let n = arr.length;
let k = 2;
console.log("Minimum time to paint all boards:", paintersPartition(arr, n, k));
