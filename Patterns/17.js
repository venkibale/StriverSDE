// Input Format: N = 3
// Result: 
//   A  
//  ABA 
// ABCBA

function printPattern(n) {
    for (let i =0; i<n; i++) {
        let temp = [];

        for (let j=0; j<n-i-1; j++) {
            temp.push(" "); 
        }

        let breakpoint = (2*i+1 )/ 2;
        let characterCode = 65;
        for (let j=1; j<=2*i+1; j++) {
            if (j <= breakpoint){
                temp.push(String.fromCharCode(characterCode++))
            }     
            else {
                temp.push(String.fromCharCode(characterCode--));
            }
                
        }

        for (let j=0; j<n-i-1; j++) {
            temp.push(" "); 
        }
        console.log(temp.join(''));
    }
}

printPattern(3)