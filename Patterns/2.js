// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

function printPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];
        for (let j =0; j<=i; j++) {
            temp.push('*'); 
        }
        console.log(temp.join(''));
    }
}

printPattern(6)