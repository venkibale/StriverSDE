// Input Format: N = 3
// Result: 
// 1
// 1 2 
// 1 2 3

function printPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];
        for (let j =0; j<=i; j++) {
            temp.push(j+1); 
        }
        console.log(temp.join(''));
    }
}

printPattern(6)