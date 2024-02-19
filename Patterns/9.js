// Input Format: N = 3
// Result: 
//   *  
//  ***
// ***** 
// *****  
//  ***
//   *  

function printFirstHalfPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];

        for (let j=0; j<n-i-1; j++) {
            temp.push(" "); 
        }

        for (let j=0; j<2*i+1; j++) {
            temp.push("*"); 
        }

        for (let j=0; j<n-i-1; j++) {
            temp.push(" "); 
        }
        console.log(temp.join(''));
    }
}

function printSecondHalfPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];

        for (let j=0; j<i; j++) {
            temp.push(" "); 
        }

        for (let j=0; j<(2*n)-(2*i+1); j++) {
            temp.push("*"); 
        }

        for (let j=0; j<i; j++) {
            temp.push(" "); 
        }
        console.log(temp.join(''));
    }
}
printFirstHalfPattern(3)
printSecondHalfPattern(3)