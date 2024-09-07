let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let WinnerMsg = document.querySelector("#winner");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    WinnerMsg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}




const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;

        if (posi1 != "" && posi2 != "" && posi3 != "") {
            if (posi1 === posi2 && posi2 === posi3) {
                console.log("winner", posi1);
                showWinner(posi1);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)







