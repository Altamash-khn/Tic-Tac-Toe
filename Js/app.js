const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let isGameOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("overlay");
const formElement = document.querySelector("form");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const errorOutputElement = document.getElementById("config-errors");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);
gameBoard.addEventListener("click", selectGameField);
