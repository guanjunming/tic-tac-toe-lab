//1) Define the required variables used to track the state of the game.

let board;
let turn;
let winner;
let tie;

//2) Store cached element references.

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

function init() {
  //board = Array(9).fill("");
  board = ["X", "O", "", "", "", "", "", "", ""];

  turn = "X";
  winner = false;
  tie = false;
  render();
}

//4) The state of the game should be rendered to the user.

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((cell, index) => {
    squareEls[index].innerText = cell;
  });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.innerText = `Next Player: ${turn}`;
  } else if (!winner && tie) {
    messageEl.innerText = "It is a tie!";
  } else {
    messageEl.innerText = `Player ${turn} wins!`;
  }
}

//5) Define the required constants.

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

init();
