/*
    Note:
        document.body.children return array of objects (HTMLCollection) and if we need to convert it to normal array
        to apply foreach we use [...passed_array]
*/

[...document.body.children].forEach(ele => {
    ele.onclick = _ => console.log(`This is ${ele.localName}`);
});