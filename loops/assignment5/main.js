let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let cnt = letter.length;

// Output
for (let i = --cnt; i < friends.length; i++) {
    if (!friends[i].toLowerCase().startsWith(letter)) {
        console.log(`${++cnt} => ${friends[i]}`);
    }
}