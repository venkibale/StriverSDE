// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


// O(nlogn)

// var longestConsecutive = function(nums) {
//     if(!nums.length) return 0;

//     nums.sort((a, b) => a-b);

//     let cnt = 1;
//     let max = 0;

//     for(let i = 0; i< nums.length; i++){
//         if(nums[i] !== nums[i-1]){
//             if(nums[i] === nums[i-1]+1){
//                 cnt++;
//             } else{
//                 max = Math.max(max, cnt);
//                 cnt =1;
//             }
//         }
//     }
//     return Math.max(max, cnt);
// };


// O(n)
var longestConsecutive = function(nums) {
    // Step 1: Handle the base case when the array is empty.
    if (nums.length === 0) {
        return 0;
    }

    let numSet = new Set(nums);

    let cnt = 1;        // Initialize a counter for the current consecutive sequence length.
    let longest = 1;    // Initialize a variable to store the maximum consecutive sequence length.

    // Step 3: Iterate through the elements of 'nums'.
    for (let num of nums) {
        cnt = 1;
        // Step 4: If the current element 'num' is the start of a sequence (no 'num-1' in 'numSet'),
        if (!numSet.has(num - 1)) {
            let x = num;  // Update 'x' to the current element 'num'.

            // Step 5: While consecutive elements exist in 'numSet', increment 'cnt' and 'x'.
            while (numSet.has(x + 1)) {
                cnt++;
                x++;
            }
        }
        
        // Step 6: Update 'longest' with the maximum of 'longest' and 'cnt'.
        longest = Math.max(longest, cnt);
    }

    // Step 7: Return 'longest' as the result.
    return longest;
};