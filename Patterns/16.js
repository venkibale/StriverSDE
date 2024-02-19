// Input Format: N = 3
// Result: 
// A
// B B
// C C C

function printPattern(n) {
    for (let i =1; i<=n; i++) {
        let temp = [];
        for (let j=1; j<=i; j++) {
            temp.push(String.fromCharCode(64 + i));
        }
        console.log(temp.join(''));
    }
}

printPattern(5)