var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // Split into two cases: excluding the first house or the last house
    let money1 = robHelper(0, nums.length - 2, nums); // Exclude the last house
    let money2 = robHelper(1, nums.length - 1, nums); // Exclude the first house

    // Return the maximum of the two scenarios
    return Math.max(money1, money2);
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

// Example usage
let nums = [2, 3, 2];
console.log(rob(nums)); //