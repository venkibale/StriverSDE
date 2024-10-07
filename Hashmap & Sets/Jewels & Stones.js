var numJewelsInStones = function(J, S) {

	// declare a count & length variable 

    let count = 0
    let len = S.length
	
	// Iterate through the longest array S. Increment count by 1 if it exists in J
	
    for (let i = 0; i < len; i++){
        if (J.indexOf(S[i]) >= 0){
            count++
        }
    }
    return count
};

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0