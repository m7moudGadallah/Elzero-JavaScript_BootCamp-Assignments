// Test Case 1
let num = 9; // "009"

if (num < 10) {
    console.log(`00${num}`);
}
else if (num < 100) {
    console.log(`0${num}`);
}
else {
    console.log(num);
}