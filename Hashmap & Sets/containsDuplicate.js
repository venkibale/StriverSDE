var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

// Input: nums = [1,2,3,1]
// Output: true