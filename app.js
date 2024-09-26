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
  board = Array(9).fill("");
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

function handleClick(event) {
  const squareIndex = event.target.id;
  if (winner || board[squareIndex]) {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

squareEls.forEach((element) => {
  element.addEventListener("click", handleClick);
});

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
      break;
    }
  }
}

function checkForTie() {
  if (winner) {
    return;
  }

  tie = !board.includes("");
}

function switchPlayerTurn() {
  if (winner) {
    return;
  }

  turn = turn === "X" ? "O" : "X";
}

//7) Create Reset functionality.

resetBtnEl = document.querySelector("#reset");

resetBtnEl.addEventListener("click", init);

// Init game
init();
