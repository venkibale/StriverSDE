// Input Format: N = 3
// Result: 
// 1 2 3
// 1 2
// 1

function printPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];
        for (let j=n; j>i; j--) {
            temp.push(j); 
        }
        console.log(temp.join(''));
    }
}

printPattern(6)