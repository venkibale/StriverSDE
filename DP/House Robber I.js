// recursion

// O(n) time | O(n) space
var rob = function(nums, idx = 0, memo = {}) {
    if (idx in memo) {
        return memo[idx];
    }
    
    if (idx >= nums.length) {
        return 0;
    }
    
    const sumIfSkipped = rob(nums, idx + 1, memo);
    const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);
    
    return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
};


//Optimized version

var rob = function(nums) {
    if (nums.length === 0) return 0; // No houses to rob
    if (nums.length === 1) return nums[0]; // Only one house to rob

    return robHelper(0, nums.length - 1, nums);
};

const robHelper = (start, end, nums) => {
    let last = 0; // Max money robbed up to the previous house
    let secondLast = 0; // Max money robbed up to the house before the previous one

    for (let i = start; i <= end; i++) {
        let curr = Math.max(nums[i] + secondLast, last); // Choose to rob or skip the current house
        secondLast = last; // Update secondLast
        last = curr; // Update last
    }
    return last;
};