function createSelectBox(startYear, endYear) {
    // Your Code Here
    let slecetEle = document.createElement('select');

    function createOption(year) {
        let opEle = document.createElement('option');
        opEle.value = `${year}`;
        opEle.textContent = `${year}`;

        return opEle;
    }

    for (let i = startYear; i <= endYear; i++) {
        slecetEle.appendChild(createOption(i));
    }

    document.body.lastChild.before(slecetEle);
}
createSelectBox(2000, 2021);