let index = 10;
let jump = 2;
let end = jump + jump;

for (;;) {
    console.log(index);
    index -= jump;

    if (index < end)
        break;
}

// Output
10
8
6
4