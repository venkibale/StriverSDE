function splitArrayLargestSum(arr, k) {
    // Helper function to check if `mid` is feasible
    function isFeasible(arr, k, mid) {
        let subarrayCount = 1; // Start with the first subarray
        let currentSum = 0;

        for (let i = 0; i < arr.length; i++) {
            // If adding the current element exceeds `mid`,
            // start a new subarray
            if (currentSum + arr[i] > mid) {
                subarrayCount++;
                currentSum = arr[i];

                // If subarray count exceeds `k`, not feasible
                if (subarrayCount > k) return false;
            } else {
                currentSum += arr[i];
            }
        }

        return true;
    }

    // Binary search on the answer space
    let low = Math.max(...arr); // Minimum largest sum
    let high = arr.reduce((a, b) => a + b, 0); // Maximum largest sum
    let result = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isFeasible(arr, k, mid)) {
            // If feasible, try for a smaller maximum sum
            result = mid;
            high = mid - 1;
        } else {
            // If not feasible, increase the maximum sum
            low = mid + 1;
        }
    }

    return result;
}

// Example usage
let arr = [7, 2, 5, 10, 8];
let k = 2;
console.log("Minimum largest sum:", splitArrayLargestSum(arr, k));
