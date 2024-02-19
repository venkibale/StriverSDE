// Input Format: N = 3
// Result: 
// ******
// **  **
// *    *
// *    *
// **  **
// ******

function printPattern(n) {
    let spaces = 0;
    let spaces2 = 2*n-2; 
    for (let i =0; i<n; i++) {
        let temp = [];
        
        for (let j=0; j<n-i; j++) {
            temp.push('*');
        }

        for (let j=0; j<spaces; j++) {
            temp.push(' ');
        }

        for (let j=0; j<n-i; j++) {
            temp.push('*');
        }
        spaces += 2;
        console.log(temp.join(''));
    }

    for (let i =0; i<n; i++) {
        let temp = [];

        for (let j=0; j<=i; j++) {
            temp.push('*');
        }

        for (let j=0; j<spaces2; j++) {
            temp.push(' ');
        }

        for (let j=0; j<=i; j++) {
            temp.push('*');
        }
        spaces2 -=2;
        console.log(temp.join(''));
    }
}

printPattern(5)