// Largest subarray with equal number of 0s and 1s using prefix sum

// Prefix Sum: Keep a running sum (prefix sum) as you traverse the array.

// If the same prefix sum occurs more than once, it means the subarray between those two indices has a sum of 0 (i.e., equal numbers of 0s and 1s).

function largestSubarrayWithEqualZeroesOnes(arr) {
    const n = arr.length;
    
    // Step 1: Replace 0s with -1s
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            arr[i] = -1;
        }
    }
    
    // Step 2: Initialize the prefix sum and the map to track prefix sums
    let prefixSum = 0;
    let maxLength = 0;
    const prefixSumMap = new Map();
    
    // To handle the case where subarray starts from index 0
    prefixSumMap.set(0, -1);
    
    // Step 3: Traverse the array and compute the prefix sum
    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];
        
        // Step 4: Check if the prefix sum has been seen before
        if (prefixSumMap.has(prefixSum)) {
            // If seen before, update the max length of the subarray
            const prevIndex = prefixSumMap.get(prefixSum);
            const subarrayLength = i - prevIndex;
            maxLength = Math.max(maxLength, subarrayLength);
        } else {
            // If not seen, store the prefix sum with the current index
            prefixSumMap.set(prefixSum, i);
        }
    }
    
    return maxLength;
}

// Example usage:
const arr = [0, 1, 0, 1, 1, 1, 0];
console.log(largestSubarrayWithEqualZeroesOnes(arr));  // Output: 6