var findClosestNumber = function(nums) {
    let res = Number.MAX_VALUE;
    for (let i of nums) {
        if (Math.abs(i) < Math.abs(res) || (Math.abs(i) === Math.abs(res) && i > res)) {
            res = i;
        }
    }
    return res;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // Output: 1
console.log(findClosestNumber([-4, 2, -1, 4, 8])); // Output: -1