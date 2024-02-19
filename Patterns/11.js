// Input Format: N = 3
// Result: 
// 1
// 01
// 101
function printPattern(n) {
    for (let i =0; i<=n; i++) {
        let start;
        let temp = [];
        if (i %2 === 0) start =1;
        else start = 0;
        for (let j=0; j<i; j++) {
            start = 1 - start;
            temp.push(start); 
        }

        console.log(temp.join(''));
    }
}

printPattern(5)