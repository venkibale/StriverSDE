var longestCommonPrefix = function (strs) {
    let result = strs[0];
    for(let i = 0; i < strs.length; i++){
        while(strs[i].indexOf(result)!==0){
            result = result.substring(0, result.length -1);
            if(result === '') return '';
        }
    }
    return result;
};

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.