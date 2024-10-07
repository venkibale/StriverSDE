// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false

var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.ceil(Math.sqrt(c));
    while(i<=j){
        let sum = i*i + j*j;
        if(sum < c){
            i++;
        }else if (sum > c){
            j--;
        }else{
            return true;
        }
    }
    return false;
};