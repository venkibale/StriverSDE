function subarrayWithGivenSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the window
        currentSum += arr[end];

        // Shrink the window from the left if currentSum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // If currentSum matches the target, return the subarray indices
        if (currentSum === target) {
            return [start, end]; // Subarray found between index `start` and `end`
        }
    }

    // If no subarray is found
    return -1;
}

// Example usage:
const arr = [1, 2, 3, 7, 5];
const target = 12;
console.log(subarrayWithGivenSum(arr, target));  // Output: [1, 3] (Subarray [2, 3, 7] sums to 12)
