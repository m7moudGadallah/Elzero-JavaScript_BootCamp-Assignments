let nums = [2, 12, 11, 5, 10, 1, 99];

console.log(nums.reduce((prev, curr) => (curr % 2 == 0) ? prev * curr : prev + curr, 1));