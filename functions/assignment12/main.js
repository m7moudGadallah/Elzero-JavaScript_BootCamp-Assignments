let myString = "EElllzzzzzzzeroo";

// Elzero
let res = myString.split('').filter((ele, idx) => idx === myString.indexOf(ele)).join('');
console.log(res);