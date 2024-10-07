// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
    let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let left = 0, right = newStr.length-1;
    
    while(left < right){
        if(newStr[left] !== newStr[right]) return false
        left++
        right--
    }
    return true
};