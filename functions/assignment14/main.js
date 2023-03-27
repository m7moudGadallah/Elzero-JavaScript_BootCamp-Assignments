let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let res = numsAndStrings.filter((ele) => typeof ele === "number").map((ele) => -ele);

console.log(res);