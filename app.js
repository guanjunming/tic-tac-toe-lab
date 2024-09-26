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

init();

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
