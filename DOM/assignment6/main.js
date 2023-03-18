/**
 * use to get number of elements from input field
 * @returns {Number} number of elements
 */
function getNumOfEle() {
    return Number(document.querySelector("[name=elements]").value);
}

/**
 * use to get text from input field
 * @returns {String} text content will be added to HTML element
 */
function getText() {
    return String(document.querySelector("[name=texts]").value);
}

/**
 * get type of element that user choose
 * @returns {String} type of element
 */
function getType() {
    return String(document.querySelector("[name=type").value).toLowerCase();
}

/**
 * creating an element with the specifications that we get from user
 * @param {String} type type of element `div` or `section` 
 * @param {Number} id   id of this element
 * @param {String} content text content will be added inside element
 * @returns {object} an HTML element `div` or `section` with it's styles and content based on user inputs
 */
function createEle(type, id, content) {
    let ele = document.createElement("div");
    ele.id = `id-${id}`;
    ele.textContent = content;
    ele.className = "box";

    //styling
    ele.style.backgroundColor = "blue";
    ele.style.color = "white";
    ele.style.margin = "20px";
    ele.style.padding = "10px";
    ele.style.borderRadius = ".5rem";
    ele.style.textAlign = "center";
    ele.style.display = "inline-block";

    return ele;
}

/**
 * use to remove recent result before printing new res
 */
function clearBody() {
    //select all element that contains class `box` and then remove them
    document.querySelectorAll(".box").forEach((ele) => {
        ele.parentElement.removeChild(ele);
    });
}

/**
 * main function that contains main functionality
 */
function main() {
    clearBody();

    let numOfEle = getNumOfEle(),
    content = getText(),
    type = getType();

    //creates elements and add them to the body
    for (let i = 0; i < numOfEle; i++) {
        document.body.lastChild.before(createEle(type, i+1, content));
    }
}


/**
 * when windows is loaded we apply css styling on form
*/
window.onload = function() {
    let inps = document.querySelectorAll(".input");
    inps[0].focus();
    
    function applyStyle (ele) {
        ele.style.display = "block";
        ele.style.margin = "15px auto";
        ele.style.padding = "10px";
        ele.style.borderRadius = ".5rem";
        ele.style.border = "1px soild black";
        ele.style.width = "250px";
        ele.style.boxSizing = "border-box"

        return ele;
    }
    
    inps.forEach(applyStyle);       //apply style on all input fields
    
    let btn = applyStyle(document.querySelector("[name=create]"));  //apply style on submit button
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    
}


document.forms[0].onsubmit = function(event) {
    event.preventDefault();
    main();
}