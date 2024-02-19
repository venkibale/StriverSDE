// Input Format: N = 3
// Result: 
//   *  
//  *** 
// ***** 

function printPattern(n) {
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

printPattern(3)