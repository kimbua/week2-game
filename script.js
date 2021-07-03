let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d');
canvas.height = 720;
canvas.width = 720;
canvas.style.border="1px solid black"
document.getElementById("myCanvas").appendChild(canvas)
let playerImg = document.getElementById("playerImg")
let mummyImg = document.getElementById("mummyImg")
let stairImg = document.getElementById("stairImg")
let bgImg = document.getElementById("bgImg")


let player = {
    x: 4,
    y:124,
    dx: 120,
    dy: 120

}
let mummy = {
    x: 124,
    y: 120*5+4,
    dx: 120,
    dy: 120
}

let stair = {
    x: 120*5, 
    y: 120*2
}

function mainGame() {
    ctx.clearRect(0,0,720,720)
    drawBg()
    drawBarrier()
    drawStair()
    drawPlayer()
    drawMummy()
   
    
}
setInterval(mainGame,10)

function update() {
	
	if (keysPressed['ArrowUp']) {
		player.y -= 120;
	}
	if (keysPressed['ArrowDown']) {
		player.y += 120;
	}
	if (keysPressed['ArrowLeft']) {
		player.x -= 120;
	}
	if (keysPressed['ArrowRight']) {
		player.x += 120;
	}
};
function drawBarrier() {
    ctx.beginPath()

    // vertical barriers

    ctx.rect(120*3-4,120,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

   
    ctx.rect(116,120*2,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*4-4,120*2,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*2-4,120*4,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120*4,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()
    
    // horizontal barriers

    ctx.rect(120*2,116,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*4-4,120*2-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120,120*4-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120*4-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.closePath()
    
    
}

function drawBg() {
    ctx.beginPath()
    ctx.drawImage(bgImg,0,0,canvas.width,canvas.height)
    ctx.closePath()
    
}

function drawPlayer() {
    ctx.beginPath()
    ctx.drawImage(playerImg,player.x,player.y,115,115)
    ctx.closePath()
 
}
function drawMummy() {
    ctx.beginPath()
    ctx.drawImage(mummyImg,mummy.x,mummy.y,115,115)
    ctx.closePath()
   
}
function drawStair() {
    ctx.beginPath()
    ctx.drawImage(stairImg,stair.x,stair.y,120,120)
    ctx.closePath()
  
}

let keysPressed = {};
function setupKeyboardListeners() {
	
	document.addEventListener('keydown',function (e) {
			keysPressed[e.key] = true;
		},
		false
	);

	document.addEventListener('keyup',function (e) {
			keysPressed[e.key] = false;
		},
		false
	);
}
