var majorityElement = function(nums) {
    let candidate;
  let count = 0;

  for (let elem of nums) {
    if (count === 0) {
      candidate = elem;
    }
    if (candidate === elem) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2