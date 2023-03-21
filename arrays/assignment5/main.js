let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
let msg = "Found";

if (haystack.includes(needle)) {
    console.log(msg);
}

if (~haystack.indexOf(needle)) {
    console.log(msg)
}

if (~haystack.lastIndexOf(needle)) {
    console.log(msg);
}