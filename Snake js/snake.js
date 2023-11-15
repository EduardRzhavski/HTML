const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20;
const canvasSize = 400;

let snake = [];
snake[0] = { x: 10 * boxSize, y: 10 * boxSize };

let food = {
  x: Math.floor(Math.random() * 20) * boxSize,
  y: Math.floor(Math.random() * 20) * boxSize
};

let d;

document.addEventListener("keydown", direction);

function direction(event) {
  if (event.keyCode === 37 && d !== "RIGHT") {
    d = "LEFT";
  } else if (event.keyCode === 38 && d !== "DOWN") {
    d = "UP";
  } else if (event.keyCode === 39 && d !== "LEFT") {
    d = "RIGHT";
  } else if (event.keyCode === 40 && d !== "UP") {
    d = "DOWN";
  }
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
    ctx.strokeStyle = "black";
    ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
  ctx.strokeStyle = "black";
  ctx.strokeRect(food.x, food.y, boxSize, boxSize);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d === "LEFT") snakeX -= boxSize;
  if (d === "UP") snakeY -= boxSize;
  if (d === "RIGHT") snakeX += boxSize;
  if (d === "DOWN") snakeY += boxSize;

  if (snakeX === food.x && snakeY === food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * boxSize,
      y: Math.floor(Math.random() * 20) * boxSize
    };
  } else {
    snake.pop();
  }

  const newHead = {
    x: snakeX,
    y: snakeY
  };

  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX >= canvasSize ||
    snakeY >= canvasSize ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
  }

  snake.unshift(newHead);
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

const game = setInterval(draw, 100);
