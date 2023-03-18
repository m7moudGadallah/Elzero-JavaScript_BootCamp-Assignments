function main() {
    let divs = document.querySelectorAll("div");

    [divs[0].title, divs[1].title] = [divs[1].title, divs[0].title];        //swap titles of divs

    [divs[0].textContent, divs[1].textContent] = [divs[1].textContent, divs[0].textContent]     //swap content of divs

    divs[1].textContent += " 2";        //add 2 to the content of second div
};

main();