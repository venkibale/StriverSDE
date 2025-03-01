function longestOnes(nums, k) {
    let start = 0, zeroCount = 0, maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        // Include the current element in the window
        if (nums[end] === 0) {
            zeroCount++;
        }

        // Shrink the window until the number of zeros is at most K
        while (zeroCount > k) {
            if (nums[start] === 0) {
                zeroCount--;
            }
            start++;
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
