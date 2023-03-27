function multiply(...nums) {
    console.log(
        nums.reduce(((prev, curr) => prev * (isNaN(curr) ? 1 : parseInt(curr))), 1)
    );
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000