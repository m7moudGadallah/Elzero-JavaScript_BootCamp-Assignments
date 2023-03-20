// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(+((100_000.0341).toFixed(0))); // 100000
console.log(Math.trunc(100_000.9234)); // 100000
console.log(Math.round(100_000.300002)); // 100000
console.log(Math.floor(100_000.523)); // 100000
console.log(Math.ceil(999_99.412)); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.round(parseFloat("100000.23"))); // 100000