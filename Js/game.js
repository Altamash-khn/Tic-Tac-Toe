function resetGamestatus() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOverElement.firstElementChild.innerHTML =
    "You Won! <span id='winner-name'>PLAYER NAME</span>";
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoard.children[gameBoardIndex].textContent = "";
      gameBoard.children[gameBoardIndex].classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    if (players[0].name === "" && players[1].name === "") {
      alert("pls enter valid names for both players");
    } else {
      if (players[0].name === "") {
        alert("pls enter a valid name for player 1");
      } else {
        alert("pls enter a valid name for player 2");
      }
    }
    return;
  }
  resetGamestatus();
  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  if (e.target.tagName !== "LI" || isGameOver) {
    return;
  }
  const selectedColumn = e.target.dataset.col - 1;
  const selectedRow = e.target.dataset.row - 1;

  if (players[activePlayer].name.trim() < 1) {
    alert("pls enter valid user names");
    return;
  } else if (activePlayerName.textContent === "PLAYER NAME") {
    alert("click on start new game to play");
    return;
  } else if (gameData[selectedRow][selectedColumn] > 0) {
    alert("please select an empty field");
    return;
  }

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add("disabled");
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  switchPlayer();
  currentRound++;
  console.log("currentRound", currentRound);

  const winnerid = checkForWinner();

  if (winnerid !== 0) {
    endgame(winnerid);
    let arr = [];
    for (let i = 0; i < 9; i++) {
      // if ((gameBoard[i].textContent = "")) {
      //   arr.push(gameBoard[i]);
      // }
    }
    console.log(arr);
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // DIAGONALS CHECK

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endgame(winnerid) {
  gameOverElement.style.display = "block";
  isGameOver = true;

  if (winnerid > 0) {
    const winnerName = players[winnerid - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw";
  }
}
