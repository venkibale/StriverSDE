// Input Format: N = 3
// Result: 
// ***
// * *
// ***

function printPattern(n) {
    let spaces = 2*n - 2;
    for (let i =0; i<n; i++) {
        let temp = [];

        for (let j=0; j<n; j++) {
            if(i==0 || j==0 || i==n-1 || j==n-1) temp.push("*");
            else temp.push(" ");
        }

        console.log(temp.join(''));
    }
}

printPattern(5)