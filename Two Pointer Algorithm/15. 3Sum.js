// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

var threeSum = function(nums) {
    let results = [];
    let target = 0;
    if (nums.length < 3) return results;

    nums.sort((a, b) => a-b);

    for(let i =0; i < nums.length-2; i++){
        if(nums[i] > target) break;

        if ( i>0 && nums[i] === nums[i-1]) continue

        let j = i +1; let k = nums.length - 1;

        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];

            if(sum === target){
                results.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++;
                k--;
            } else if(sum < target) {
                j++
            } else {
                k--;
            }
        }
    }
    return results;
};