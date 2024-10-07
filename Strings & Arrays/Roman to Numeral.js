var romanToInt = function(s) {
    let roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let res = 0, i =s.length-1;
    while (i >=0){
        if ( roman[s[i]] < roman[s[i+1]]){
            res-=roman[s[i]]
        }else{
            res+=roman[s[i]]
        }        
        i-=1
    }
    return res
};

// Input: s = "III"
// Output: 3
// Explanation: III = 3.