// Input Format: N = 3
// Result: 
// A B C
// A B
// A

function printPattern(n) {
    for (let i =n; i>=1; i--) {
        let temp = [];
        for (let j=1; j<=i; j++) {
            temp.push(String.fromCharCode(64 + j));
        }
        console.log(temp.join(''));
    }
}

printPattern(5)