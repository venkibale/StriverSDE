// Given an array nums of integers, find the k-th smallest distance between all pair (nums[i],nums[j]), where i<j 

// we need to know the dist if so we can tell the kth smallest dist.

function countPairs(nums, diff) {
    let left = 0;
    let result = 0;
    for (let right = 1; right < nums.length; right++) {
        while (nums[right] - nums[left] > diff) left++;
        result += right - left;
    }
    return result;
}

function kthSmallestPairDistance(nums, k) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    
    let low = 0; // Minimum distance
    let high = nums[nums.length - 1] - nums[0]; // Maximum distance
    
    while (low < high) { // Binary search
        let mid = Math.floor((low + high) / 2);
        let count = countPairs(nums, mid); // Count pairs with distance <= mid
        
        if (count < k) {
            low = mid + 1; // Increase the distance
        } else {
            high = mid; // Try smaller distances
        }
    }
    
    return low; // At the end, low = high = k-th smallest distance
}
