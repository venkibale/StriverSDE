function countSubarraysWithSumAtMostK(arr, k) {
    let start = 0, currentSum = 0, count = 0;

    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the sum
        currentSum += arr[end];

        // Shrink the window while sum exceeds k
        while (currentSum > k && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // All subarrays from start to end are valid
        count += (end - start + 1);
    }

    return count;
}

// Example usage:
const arr = [1, 0, 1, 0, 1];
const k = 2;
console.log(countSubarraysWithSumAtMostK(arr, k));  // Output: 12
