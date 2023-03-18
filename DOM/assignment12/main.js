/**
 * @author: Mahmoud Gadallah  (mahmoudgadallah876@gmail.com)
 * 
 * @Date : 18/03/2023
 * @version: v 0.1
 */


/**
 * use to create product div
 * @param {int} productNum  product number
 * @returns {object} prodcut div
 */
function createProduct(productNum) {
    let prodDiv = document.createElement("div");
    prodDiv.className = "product";
    
    let prodNumSpan = document.createElement("span");
    prodNumSpan.textContent = `${productNum}`;

    //styling of span
    let spStyl = prodNumSpan.style;
    spStyl.fontSize = "40px";
    spStyl.color = "black";
    spStyl.fontWeight = "normal";
    spStyl.display = "block";
    spStyl.margin = "10px 0px";

    //styling of proddiv    
    let Prodstl = prodDiv.style;
    Prodstl.padding = "20px";
    Prodstl.backgroundColor = "rgb(255, 255, 255)";
    Prodstl.border = "1px solid rgb(221, 221, 221)";
    Prodstl.width = "calc((100% - 40px) / 3)";
    Prodstl.boxSizing = "border-box";
    Prodstl.textAlign = "center";
    Prodstl.color = "rgb(136, 136, 136)";
    Prodstl.border = "6px";

    prodDiv.appendChild(prodNumSpan);
    prodDiv.appendChild(document.createTextNode("Product"));

    return prodDiv;
}


/**
 * create Header of page
 * @returns header of page
 */
function createHeader() {
    let header = document.createElement("header");
    header.className = "website-head";
    
    /*-----------------(logo)------------------*/
    let logo = document.createElement("h1");
    logo.className = "logo";
    logo.textContent = "Elzero";
    
    //styling logo
    logo.style.color = "rgb(35, 169, 110)";
    logo.style.fontSize = "50px";

    /*-----------------(menu)------------------*/
    let menu = document.createElement("ul");
    menu.className = "menu";
    
    //creat menu items
    let menuItems = ["Home", "About", "Service", "Contact"];
    for (let i = 0; i < menuItems.length; i++) {
        let item = document.createElement("li");
        item.className = `menu-item-${i}`;
        item.textContent = menuItems[i];

        //styling list item
        item.style.cursor = "pointer";

        menu.appendChild(item);
    }

    //style menu
    let menuStl = menu.style;
    menuStl.display = "flex";
    menuStl.justifyContent = "space-between";
    menuStl.gap = "15px";
    menuStl.listStyle = "none";


    //adding logo, menu to header
    header.appendChild(logo);
    header.appendChild(menu);

    //style header
    let headstl = header.style;
    headstl.display = "flex";
    headstl.padding = "20px";
    headstl.backgroundColor = "rgb(255, 255, 255)";
    headstl.justifyContent = "space-between";
    headstl.alignItems = "center";

    return header;
}


/**
 * create content of page `products`
 * @returns {object} content of page `products`
 */
function createContent() {
    let content = document.createElement("main");
    content.className = "content";

    for (let i = 1; i <= 15; i++) {
        content.appendChild(createProduct(i));
    }

    //style content
    let contentStl = content.style;
    contentStl.display = "flex";
    contentStl.flexWrap = "wrap";
    contentStl.gap = "20px";
    contentStl.padding = "20px";
    contentStl.justifyContent = "center";
    contentStl.boxSizing = "border-box";
    contentStl.minHeight = "calc(100vh - 142px)";

    return content;
}

/**
 * create footer of page
 * @returns {object} footer of page
 */
function createFooter() {
    let footer = document.createElement("footer");
    footer.className = "footer";
    footer.textContent = "Copyright 2023";

    //styling footer
    let footerStl = footer.style;
    footerStl.backgroundColor = "rgb(35, 169, 110)";
    footerStl.fontSize = "26px";
    footerStl.textAlign = "center"
    footerStl.padding = "20px";
    footerStl.color = "rgb(255, 255, 255)";

    return footer;
}

/**
 * contains main functionality of system of system
 *  - adding header
 *  - adding content
 *  - adding footer
 *  to body and also styl body
 */
function main() {
    let body = document.body;

    body.lastChild.before(createHeader());      //add header to content
    body.lastChild.before(createContent());
    body.lastChild.before(createFooter());  //add footer to content

    //style body
    let bodystl = body.style;
    bodystl.margin = "0px";
    bodystl.backgroundColor = "rgb(236, 236, 236)";
    bodystl.fontFamily = "Tahoma, Arial";
}

window.onload = main;