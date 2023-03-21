let start = 0;
let swappedName = "elZerO";
let res = "";

// Output
for (let i = start; i < swappedName.length; i++) {
    let lower = swappedName[i].toLowerCase();
    res += (swappedName[i] == lower) ? swappedName[i].toUpperCase() : lower;
}

swappedName = res;

console.log(swappedName);