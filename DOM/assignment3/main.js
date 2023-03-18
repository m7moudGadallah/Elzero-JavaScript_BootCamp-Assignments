//here we auto foucs on inp field
window.onload = function () {
    let inp = document.querySelector("[name='dollar']");
    inp.focus();
};

/**
 * read value from input field
 * @returns vlaue in the input field
 */
function getUserInp() {
    let inp = document.querySelector("[name='dollar']");
    return Number(inp.value);
};

/**
 * convert from dollar to EGP
 * @param {*} dollar money in dollars
 * @returns mount of money after convert it to EGP
 */
function usd2Egp(dollar) {
    return dollar * 30.75;
};

//main function that contains main functionality
function main() {
    let inp = document.querySelector("[name='dollar']");
    inp.addEventListener('input', function(e) {
        let dollar = getUserInp();
        let egp = usd2Egp(dollar);
        document.querySelector(".result").textContent = `{${dollar}} USD Dollar = {${egp}} Egyptian Pound`;
    });
};

main();