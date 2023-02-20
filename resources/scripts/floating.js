
const [ box1, box2 ] = document.querySelectorAll(".box");

const numbOfStates = 4;

let box1State = 1; // 0 = None  1 = Float:left  2 = Float: right  3 = Clear: both
let box2State = 2;

function toggleBox(id) {

    const targetBox = id == 0 ? box1 : box2;
    let targetState = id == 0 ? box1State : box2State;
    
    targetState++;
    if (targetState > numbOfStates - 1) targetState = 0;
    if (id == 0) box1State = targetState; else box2State = targetState;

    if (targetState == 0) {

        targetBox.style.clear = "none";
        targetBox.textContent = "";

    } else if (targetState == 1) {

        targetBox.style.float = "left";
        targetBox.textContent = "Float: left";

    } else if (targetState == 2) {

        targetBox.style.float = "right";
        targetBox.textContent = "Float: right";

    } else { // state = 3

        targetBox.style.float = "none";
        targetBox.style.clear = "both";
        targetBox.textContent = "Clear: both";
    }
}