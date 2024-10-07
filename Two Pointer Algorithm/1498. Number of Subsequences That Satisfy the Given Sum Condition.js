// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

 

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

var numSubseq = function(nums, target) {
    const MOD = 1000000007;

    nums = nums.sort((a, b) => a - b);

    const pows = [1];
    
    for (let i = 1; i < nums.length; i++) {
        pows.push(pows[i - 1] * 2 % MOD);
    }
    
    let left = 0;
    let right = nums.length - 1;
    let ans = 0;

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            ans = (ans + pows[right - left]);
            left++;
        }
    }

    return ans % MOD;
};