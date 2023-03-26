function checkStatus(a, b, c) {
    // Your Code Here

    if (typeof a === 'boolean') {
        [a, c] = [c, a];
    }
    
    if (typeof b === 'boolean') {
        [b, c] = [c, b];
    }

    if (typeof b == 'string') {
        [a, b] = [b, a];
    }

    //a -> name, b -> age,  c -> status

    console.log(`Hello ${a}, Your Age Is ${b}, You Are ${(c) ? '' : 'Not '}Available For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"