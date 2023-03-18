//select all images
let imgs = document.querySelectorAll("img");

//iterating over images
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png?row=true";   //change src
    imgs[i].alt = "Elzero Logo";         //change alt
};