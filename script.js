let currentBox = null;
let currentNumber = null;

function changeText(box,message,number){

    /* Close previous box */

    if(currentBox && currentBox !== box){

        currentBox.innerHTML = currentNumber;
    }

    /* Open current box */

    box.innerHTML = message;

    currentBox = box;
    currentNumber = number;
}
let openedBoxes = 0;

function changeText(box, message, number){

    // Prevent counting same box again
    if(box.classList.contains("opened")){
        return;
    }

    box.classList.add("opened");

    // Change box content
    box.innerHTML = message;

    // Styling after opening
    box.style.background = "#ff1493";
    box.style.color = "white";
    box.style.fontSize = "18px";

    openedBoxes++;

    // When all 12 boxes opened
    if(openedBoxes === 12){

        document
        .getElementById("surprise")
        .classList.add("show");
    }
}