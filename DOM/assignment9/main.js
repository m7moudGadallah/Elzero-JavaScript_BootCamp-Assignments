function createDiv(eleClassName, classTitle, dataValue, content) {
    let ele = document.createElement("div");
    ele.className = eleClassName;
    ele.title = classTitle;
    ele["data-value"] = dataValue;
    ele.textContent = content;
    
    return ele;
}

function main() {
    document.body.removeChild(document.querySelector("p"));     //remove paragaph
    console.log(document.body);

    
    let ele = document.querySelector(".our-element"); //select element

    //create div will added before ele
    let preEle = createDiv("start", "Start Element", "Start", "Start");
    ele.before(preEle);

    //create div will added before ele
    let postEle = createDiv("end", "End Element", "End", "End");
    ele.after(postEle);
}

main();