const game = new Game();

document.getElementById("begin-game").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
  game.startGame();
});

document.addEventListener("keydown", function (event) {
  game.handleKeydown(event);
});
