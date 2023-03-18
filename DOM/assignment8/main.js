/**
 * read input from input field and return it after spliting it to array of Strings
 * @param {object} obj object that contains input element we need to read from it
 * @returns {Array of Strings} user input splited to array of strings
 */
function readInp(obj) {
    let inp = String(obj.value);
    return inp.split(' ').filter((ele) => ele != ' ' && ele != '').map((ele) => ele = ele.toLowerCase());
}

/**
 * use to remove all child inside an html element
 * @param {object} obj object that we need to remove all childs inside it
 * @returns {object} object after removing all childs inside it
 */
function removeAllChilds(obj) {
    obj.innerHTML = '';
    return obj;
}

/**
 * use to remove previous result and add new result `classes on spans` to the passed object
 * @param {object} obj takes object of HTML element we need to show classes on it as spans
 * @returns {object} object after removing previous result and adding new result to it
 */
function showClasses(obj) {
    obj = removeAllChilds(obj);     //remove previous res and update obj

    let classes = obj.classList;

    //if obj desn't have any classes so we will print message and return obj after updated
    if (classes.length < 1) {
        obj.textContent = `No Classes To show`;
        return obj;
    }

    //adding classes as spans to obj
    for (let i = 0; i < classes.length; i++) {
        let ele = document.createElement("span");
        ele.textContent = classes[i];
        obj.append(ele);
    }

    return obj;
}

/**
 * contains main functaionlity as invoking other functions and have events
 */
function main() {
    let addInp = document.querySelector(".classes-to-add"),
        remInp = document.querySelector(".classes-to-remove"),
        currEle = document.querySelector(".classes-list div");
    
    currEle = showClasses(currEle);     //initiate div content at the beginning

    //add
    addInp.addEventListener('change', function(e) {
        let classes = readInp(addInp);
        addInp.value = '';  //clear input field

        for (let i = 0; i < classes.length; i++) {
            currEle.classList.add(classes[i]);
        }

        currEle = showClasses(currEle);
    }); 

    //remove
    remInp.addEventListener('change', function(e) {
        let classes = readInp(remInp);
        remInp.value = '';      //clear input field

        for (let i = 0; i < classes.length; i++) {
            currEle.classList.remove(classes[i]);
        }

        currEle = showClasses(currEle);
    });
}

window.onload = main;