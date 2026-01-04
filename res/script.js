function changeBtn(sorted, parent){
    const btnID = parent + "Btn";
    const btn = document.getElementById(btnID);
    if (sorted) {
        btn.classList.add("arraySortedBtn");
        btn.innerHTML = "Sorted";
    } else{
        btn.classList.remove("arraySortedBtn");
        btn.innerHTML = "Press to sort";
    }
}

function arraySorted(parent, length){
    let sorted = true;
    for (i = 1; i < length; i++){
        let previousElement = document.getElementById(parent + "Box" + i);
        let currentElement = document.getElementById(parent + "Box" + (i+1));
        if (currentElement.innerHTML < previousElement.innerHTML){
            sorted = false;
        }
    }
    changeBtn(sorted, parent);
}

function getArray(parent){
    let i = 1;
    const arr = [];
    while (true) {
        let element = document.getElementById(parent + "Box" + i);
        if (element == null) break;
        arr.push(parseInt(element.textContent));
        i++;
    }
    return arr;
}

function highlightElement(element){
    
}

function bogoSort(){
    const parent = "bogo";
    const arr = getArray(parent);
    const arrLength = arr.length;

    // Reorder the elements
    for (i = 0; i < arrLength; i++){
        const randomIndex = Math.floor(Math.random() * arr.length);
        const value = arr.splice(randomIndex, 1);
        const currentElement = document.getElementById(parent + "Box" + (i + 1));
        currentElement.innerHTML = value;
    }
    arraySorted(parent, arrLength);
}

function sleepSort(){
    const parent = "sleep";
    const arr = getArray(parent);
    const btn = document.getElementById(parent + "Btn");
    btn.disabled = true;
    // reset the values
    for (i = 0; i < arr.length; i++){
        let el = document.getElementById(parent + "Box" + (i + 1));
        el.innerHTML = "x";
    }
    // Sort the array
    let boxNumber = 1;
    for (i = 0; i < arr.length; i++){
        let number = arr[i];
        setTimeout(() =>{
            let el = document.getElementById(parent + "Box" + boxNumber);
            el.innerHTML = number;
            boxNumber++;
            // If the whole array is sorted, change Button
            if (boxNumber == arr.length+1){
                changeBtn(true, parent);
                btn.disabled = false;
            }
        }, number * 1000);
    }
}

function stalinSort() {
    const parent = "stalin";
    const arr = getArray(parent);
    const btn = document.getElementById(parent + "Btn");
    btn.disabled = true;
    let max = arr.at(0);
    let counter = 1;
    for (let i = 1; i < arr.length;i++) {
        let current = arr.at(i);
        if (max >= current) { 
            setTimeout(() => {
                document.getElementById(parent + "Box" + (i + 1)).remove();
            }, counter * 1500);
            counter++;
        } 
        else max = current;
    }
    // Changes sorting Button to "Sorted" and..
    // .. enables it when the last timeout ends
    setTimeout(() => {
        btn.disabled = false;
        changeBtn(true, parent);
    }, (counter-1) * 1500);
}

