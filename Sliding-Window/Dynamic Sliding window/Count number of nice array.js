// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
function numberOfSubarrays(nums, k) {
    function atMostK(k) {
        let start = 0, count = 0, oddCount = 0;

        for (let end = 0; end < nums.length; end++) {
            if (nums[end] % 2 !== 0) {
                oddCount++;
            }

            while (oddCount > k) {
                if (nums[start] % 2 !== 0) {
                    oddCount--;
                }
                start++;
            }

            count += (end - start + 1);
        }

        return count;
    }

    return atMostK(k) - atMostK(k - 1);
}
