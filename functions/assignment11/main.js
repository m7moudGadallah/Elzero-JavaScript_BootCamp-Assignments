let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let res = mix.map(ele => isNaN(ele) ? ele : '').reduce((acc, ele) => acc + ele);

console.log(res);