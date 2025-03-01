function longestSubarrayDivisibleByK(arr, k) {
    const n = arr.length;
    let prefixSum = 0;
    let maxLength = 0;
    const remainderMap = new Map();

    // To handle the case where prefix sum is directly divisible by k
    remainderMap.set(0, -1);

    for (let i = 0; i < n; i++) {
        // Add current element to prefix sum
        prefixSum += arr[i];

        // Compute the remainder of the prefix sum divided by k
        let remainder = prefixSum % k;

        // Handle negative remainders (in JavaScript, -ve numbers can have -ve remainder)
        if (remainder < 0) {
            remainder += k;
        }

        // If this remainder has been seen before, calculate the length of the subarray
        if (remainderMap.has(remainder)) {
            const prevIndex = remainderMap.get(remainder);
            const subarrayLength = i - prevIndex; // We have not added plus 1 bcoz this has been handled by remainderMap.set(0, -1);
            maxLength = Math.max(maxLength, subarrayLength);
        } else {
            // Store the first occurrence of this remainder
            remainderMap.set(remainder, i);
        }
    }

    return maxLength;
}

// Example usage:
const arr = [2, 7, 6, 1, 4, 5];
const k = 3;
console.log(longestSubarrayDivisibleByK(arr, k));  // Output: 4 (subarray [7, 6, 1, 4] has sum 18 which is divisible by 3)
