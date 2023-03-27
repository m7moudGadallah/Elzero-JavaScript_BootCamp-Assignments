let myArray = ["E", "l", "z", ["e", "r"], "o"];

let res = myArray.reduce((acc, ele) => acc.concat(ele), []).join('');

console.log(res);