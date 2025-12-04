function changeBtn(sorted, parent){
    let btnID = parent + "Btn";
    let btn = document.getElementById(btnID);
    if (sorted) {
        btn.classList.add("arrSortedBtn");
        btn.innerHTML = "Sorted";
    } else{
        btn.classList.remove("arrSortedBtn");
        btn.innerHTML = "Press to sort";
    }
}

function arrSorted(parent, length){
    for (i = 1; i < length; i++){
        let previousElement = document.getElementById(parent + "Box" + (i))
        let currentElement = document.getElementById(parent + "Box" + (i+1))
        if (currentElement.innerHTML < previousElement.innerHTML){
            return false;
        }
    }
    return true;
}

function bogoSort(){
    let parent = "bogo";
    let arr = numbers.slice();
    let arrLength = arr.length;

    // Reorder the elements
    for (i = 0; i < arrLength; i++){
        let randomIndex = Math.floor(Math.random() * arr.length);
        let value = arr.splice(randomIndex, 1);
        let currentElement = document.getElementById(parent + "Box" + (i+1));
        currentElement.innerHTML = value;
    }

    let sorted = arrSorted(parent, arrLength);
    changeBtn(sorted, parent);
}

numbers = [1, 2, 3, 4];
