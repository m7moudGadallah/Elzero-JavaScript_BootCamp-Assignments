function main() {
    let imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].alt = imgs[i].hasAttribute("alt") ? "Old" : "Elzero New";
    };
};

main();