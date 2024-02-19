// Input Format: N = 3
// Result: 
// *    *
// **  **
// ******
// **  **
// *    *

function printPattern(n) {
    let spaces = 2*n - 2;
    for (let i =1; i<=2*n-1; i++) {
        let temp = [];
        let stars = i;

        if(i > n) stars = 2*n - i;
        
        for (let j=1; j<=stars; j++) {
            temp.push("*"); 
        }
        for (let j=1; j<=spaces; j++) {
            temp.push(" "); 
        }
        for (let j=1; j<=stars; j++) {
            temp.push("*"); 
        }
        if(i<n) spaces-=2;
        else spaces +=2;
        console.log(temp.join(''));
    }
}

printPattern(5)