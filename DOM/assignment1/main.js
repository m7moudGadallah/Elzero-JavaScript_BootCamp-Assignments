//select with id
let div1 = document.getElementById("elzero");
let div2 = document.querySelector("#elzero");
let div3 = document.querySelectorAll("#elzero")[0];


//select with class
let div4 = document.getElementsByClassName("element")[0];
let div5 = document.querySelector(".element");
let div6 = document.querySelectorAll(".element")[0];


//select element with name
let div7 = document.querySelector("[name='js']");
let div8 = document.querySelectorAll("[name='js']")[0];


//select element with tags
let div9 = document.querySelector("div");
let div10 = document.querySelectorAll("div")[0];
let div11 = document.getElementsByTagName("div")[0];

//select from body
let div12 = document.body.children[0];
let div13 = document.body.childNodes[1];
let div14 = document.body.firstElementChild;
let div15 = document.body.firstChild.nextSibling;