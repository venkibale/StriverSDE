// Input Format: N = 3
// Result: 
// C
// B C
// A B C

function printPattern(n) {
    for (let i =1; i<=n; i++) {
        let temp = [];
        let increment = n-i+1;
        for (let j=1; j<=i; j++) {
            temp.push(String.fromCharCode(64 + increment));
            increment++;
        }
        console.log(temp.join(''));
    }
}

printPattern(3)