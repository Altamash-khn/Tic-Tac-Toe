function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log("save player config caled", formData.get("user-name"));
  const enteredPlayerName = formData.get("user-name").trim();

  if (!enteredPlayerName) {
    e.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
