document.addEventListener("DOMContentLoaded", function () {
    const player1 = document.getElementById("player1-race");
    const player2 = document.getElementById("player2-race");
    const finishLine = 12; 
  
    let player1Position = 1;
    let player2Position = 1;
    let isGameOver = false;
  
    function movePlayer(player, position) {
      const cells = player.querySelectorAll("td");
      if (position >= 1 && position <= finishLine) {
        cells[position - 1].classList.remove("active");
        cells[position].classList.add("active");
      }
    }
  
    function announceWinner(player) {
      const winnerElement = document.getElementById("winner");
      winnerElement.textContent = `Player ${player} wins!`;
      isGameOver = true;
    }
  
    function restartGame() {
      isGameOver = false;
      player1Position = 1;
      player2Position = 1;
  
      const cells1 = player1.querySelectorAll("td");
      const cells2 = player2.querySelectorAll("td");
  
      cells1.forEach((cell) => cell.classList.remove("active"));
      cells2.forEach((cell) => cell.classList.remove("active"));
  
      document.getElementById("winner").textContent = "";
    }
  
    document.addEventListener("keyup", function (event) {
      if (!isGameOver) {
        if (event.key === "a" || event.key === "A") {
          movePlayer(player1, player1Position);
          player1Position++;
        } else if (event.key === "l" || event.key === "L") {
          movePlayer(player2, player2Position);
          player2Position++;
        }
  
        if (player1Position >= finishLine) {
          announceWinner(1);
        } else if (player2Position >= finishLine) {
          announceWinner(2);
        }
      }
    });
  
    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", restartGame);
  });
  