// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
    // let size = s.length;
    
    // // reverse string by mirror image
    // for(let i = 0 ; i < Math.floor(size/2) ; i++ ){
    //     [ s[i], s[size-1-i] ] = [ s[size-1-i], s[i] ] ;
    // }
    
    // return;
    let left = 0, right = s.length - 1

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
};