function slidingWindowMaximum(nums, k) {
    if (nums.length === 0 || k === 0) return [];
    
    let result = [];
    let deque = []; // Stores indices of array elements

    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices whose elements are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element index to the deque
        deque.push(i);

        // Add the maximum for the current window to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindowMaximum(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
