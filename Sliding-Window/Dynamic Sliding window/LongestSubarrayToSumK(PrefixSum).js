// 1. Prefix Sum Definition: A prefix sum is the cumulative sum up to each index in an array. For an array arr, the prefix sum at index i, prefixSum[i], is the sum of all elements from the start of the array up to i.

// prefixSum[i]=arr[0]+arr[1]+⋯+arr[i]

// 2. Relationship Between Prefix Sums and Subarray Sums: To find the sum of any subarray from index j to i, we can use

// sum(arr[j…i])=prefixSum[i]−prefixSum[j−1]

// This formula works because prefixSum[i] gives the cumulative sum up to i, and subtracting prefixSum[j-1] removes the sum of all elements before j, leaving us with only the sum from j to i.

// sum(arr[j…i])=k

// becomes,

// prefixSum[i]−prefixSum[j−1]=k

// prefixSum[j−1]=prefixSum[i]−k



function lenOfLongSubarr(arr, k) {
    const mp = new Map();
    let res = 0, prefixSum = 0;

    for (let i = 0; i < arr.length; ++i) {
        prefixSum += arr[i];

        // If prefix sum is same as k, we have a prefix subarray from 0 to i
        if (prefixSum === k) {
            res = i + 1;
        }

        // Check if prefixSum - k exists in the map
        if (mp.has(prefixSum - k)) {
            res = Math.max(res, i - mp.get(prefixSum - k));
        }

        // Insert prefixSum in the map if not already present
        if (!mp.has(prefixSum)) {
            mp.set(prefixSum, i);
        }
    }

    return res;
}

// Driver Code
const arr = [10, 5, 2, 7, 1, 9];
const k = 15;
console.log(lenOfLongSubarr(arr, k));