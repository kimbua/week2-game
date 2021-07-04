let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.height = 720;
canvas.width = 720;
canvas.style.border = "1px solid black";
document.getElementById("myCanvas").appendChild(canvas);
let gameOver = false;
let playerImg = document.getElementById("playerImg");
let mummyImg = document.getElementById("mummyImg");
let stairImg = document.getElementById("stairImg");
let bgImg = document.getElementById("bgImg");
let input = document.getElementById("playerName");

let rightPressed = false;
let upPressed = false;
let downPressed = false;
let leftPressed = false;

let player = {
  x: 4,
  y: 124,
  dx: Math.floor(canvas.width / 6),
  dy: Math.floor(canvas.height / 6),
};
let playerName = {
  name: "",
};

let mummy = {
  x: 124,
  y: 120 * 5 + 4,
  dx: 120,
  dy: 120,
};

let stair = {
  x: 120 * 5,
  y: 120 * 2,
};

function mainGame() {
  ctx.clearRect(0, 0, 720, 720);
  drawBg();
  drawBarrier();
  drawStair();
  drawPlayer();
  drawName();
  drawMummy();
  update();
  window.requestAnimationFrame(mainGame);
}

function update() {
  if (gameOver) {
    return;
  }
  if (rightPressed == true) {
    rightPressed = false;
    player.x += player.dx;
    mummyMove();
  } else if (leftPressed == true) {
    leftPressed = false;
    player.x += -player.dx;
    mummyMove();
  } else if (downPressed == true) {
    downPressed = false;
    player.y += player.dy;
    mummyMove();
  } else if (upPressed == true) {
    upPressed = false;
    player.y += -player.dy;
    mummyMove();
  }

  if (player.x < 0) {
    player.x = 4;
  } else if (player.x > canvas.width) {
    player.x = canvas.width - 119;
  } else if (player.y < 0) {
    player.y = 4;
    playerName.y = player.y + 115;
  } else if (player.y > canvas.width) {
    player.y = canvas.height - 119;
    playerName.y = player.y;
  }
  if (mummy.x < 0) {
    mummy.x = 4;
  } else if (mummy.x > canvas.width) {
    mummy.x = canvas.width - 119;
  } else if (mummy.y < 0) {
    mummy.y = 4;
  } else if (mummy.y > canvas.width) {
    mummy.y = canvas.height - 119;
  }
  if (player.x == stair.x + 4 && player.y == stair.y + 4) {
    alert("You have escaped the chamber!!!");
    gameOver = true;
  }
  if (player.x == mummy.x && player.y == mummy.y) {
    alert("Mummy caught chu'!!! Press Reset Button to play again!");
    gameOver = true;
  }
}

function drawBarrier() {
  ctx.beginPath();

  // vertical barriers

  ctx.rect(120 * 3 - 4, 120, 8, 120);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(116, 120 * 2, 8, 120);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120 * 4 - 4, 120 * 2, 8, 120);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120 * 2 - 4, 120 * 4, 8, 120);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120 * 5 - 4, 120 * 4, 8, 120);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  // horizontal barriers

  ctx.rect(120 * 2, 116, 124, 8);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120 * 4 - 4, 120 * 2 - 4, 124, 8);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120, 120 * 4 - 4, 124, 8);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.rect(120 * 5 - 4, 120 * 4 - 4, 124, 8);
  ctx.fillStyle = "#704B37";
  ctx.fill();

  ctx.closePath();
}

function drawBg() {
  ctx.beginPath();
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.closePath();
}

function drawPlayer() {
  ctx.beginPath();
  ctx.drawImage(playerImg, player.x, player.y, 115, 115);
  ctx.closePath();
}
function drawMummy() {
  ctx.beginPath();
  ctx.drawImage(mummyImg, mummy.x, mummy.y, 115, 115);
  ctx.closePath();
}
function drawStair() {
  ctx.beginPath();
  ctx.drawImage(stairImg, stair.x, stair.y, 120, 120);
  ctx.closePath();
}
document.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
    leftPressed = true;
  } else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
    upPressed = true;
  } else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
    downPressed = true;
  }
});

function mummyMove() {
  let distanceX = player.x - mummy.x;
  let distanceY = player.y - mummy.y;

  if (distanceX > 0) {
    mummy.x += player.dx;
  } else if (distanceX <= 0 && distanceY < 0) {
    mummy.y += -player.dx;
  } else if (distanceX < 0) {
    mummy.x += -player.dx;
  } else if (distanceY > 0) {
    mummy.y += player.dx;
  }
}
function insertName() {
  if (input.value == "") {
    alert("You must have a name adventurer");
  } else {
    playerName.name = input.value;
    input.value = "";
  }
}
function drawName() {
  ctx.font = "16px Sigmar One";
  ctx.fillStyle = "white";
  ctx.fillText(playerName.name, player.x, player.y + 16);
}

mainGame();
