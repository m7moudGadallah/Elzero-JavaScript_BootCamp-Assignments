let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let n = arr1.length;

while (--n) {
    arr1.shift();
    arr2.shift();
}

allArrs = arr1.concat(arr2).sort();


console.log(allArrs.join('').toLowerCase()); // fxy