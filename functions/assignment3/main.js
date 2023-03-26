function ageInTime(theAge) {
    // Your Code Here

    if (theAge <= 10 || theAge >= 100) {
        console.log('Age Out Of Range');
        return;
    }

    let months = theAge * 12,
        weeks = months * 4,
        days = weeks * 7,
        hours = days * 24,
        min = hours * 60,
        sec = min * 60;
    
    console.log(`${months} Months`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} Days`);
    console.log(`${hours} Hours`);
    console.log(`${min} minutes`);
    console.log(`${sec} Seconds`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months