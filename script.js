let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d');
canvas.height = 720;
canvas.width = 720;
canvas.style.border="1px solid black"
document.getElementById("myCanvas").appendChild(canvas)
let input = document.getElementById("playerName")
let bg = {
    image : new Image(),
    ready: false
}

let player = {
    x: 4,
    y:124,
    dx: 120,
    dy: 120,
    image : new Image(),
    ready: false
    
}

let mummy = {
    x: 124,
    y: 120*5+4,
    dx: 120,
    dy: 120,
    image : new Image(),
    ready: false
}
let stair = {
    x: 120*5, 
    y: 120*2,
    image : new Image(),
    ready: false
}
let playerName = {
    name: "",
    x: player.x,
    y: player.y+16,
   
}
function insertName() {
    if (input.value == "") {
        alert("You must have a name adventurer")
    
    }else {
        playerName.name=input.value
        input.value = ""
    }
}
function drawName() {
    ctx.font = "16px Sigmar One";
    ctx.fillStyle = "white";
    ctx.fillText(playerName.name, playerName.x, playerName.y); 
}


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
function loadImages() {

    bg.image.src = '/floor6.jpg';
	bg.image.onload = function () {
		bg.ready = true;
        
	};
	
	player.image.src = '/player.png';
	player.image.onload = function () {
		player.ready = true;
	};

	mummy.image.src = '/mummy.png';
	mummy.image.onload = function () {
		mummy.ready = true;
	};
	
    stair.image.src = '/stair.jpg';
    stair.image.onload = function () {
		stair.ready = true;
	};
	
}
function render() {
	if (bg.ready) {
		
        ctx.drawImage(bg.image,0,0,canvas.width,canvas.height)
        
	}
    drawBarrier()
    if (stair.ready) {
		
        ctx.drawImage(stair.image,stair.x,stair.y,120,120)
     
	}
	if (player.ready) {
	
        ctx.drawImage(player.image,player.x,player.y,116,116)
       
	}
    drawName()
	if (mummy.ready) {
       
        ctx.drawImage(mummy.image,mummy.x,mummy.y,116,116)
        
	}
	
	
}
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed= true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed= true;
    }else if (e.key == " ") {
        spacePressed = true;
    }
}


function mummyMove() {
    if (player.x == mummy.x) {
        if(player.y > mummy.y){
            if (player.y-mummy.y==120){
            mummy.y += mummy.dy
            }else {
                mummy.y += mummy.dy*2
            }
            
        }else if (player.y<mummy.y) {
            if (mummy.y-player.y==120){
                mummy.y -= mummy.dy
                }else {
                    mummy.y -= mummy.dy*2
                }
        }
    }
    if (player.y == mummy.y) {
        if(player.x > mummy.x){
            if (player.x-mummy.x==120){
                mummy.x += mummy.dx
                }else {
                    mummy.x += mummy.dx*2
                }
            
        }else if (player.x < mummy.x) {
            if (mummy.x-player.x==120){
                mummy.x -= mummy.dx
                }else {
                    mummy.x -= mummy.dx*2
                }
        }
    }
    if (player.x > mummy.x && player.y > mummy.y) {
        mummy.x += mummy.dx
        if (player.x == mummy.x) {
            mummy.y += mummy.dy
        }else {
            mummy.x += mummy.dx
        }
    }
    if (player.x > mummy.x && player.y < mummy.y) {
        mummy.x += mummy.dx
        if (player.x == mummy.x) {
            mummy.y -= mummy.dy
        }else {
            mummy.x += mummy.dx
        }
    }
    if (player.x < mummy.x && player.y > mummy.y) {
        mummy.x -= mummy.dx
        if (player.x == mummy.x) {
            mummy.y += mummy.dy
        }else {
            mummy.x -= dx
        }
    }
    if (player.x < mummy.x && player.y < mummy.y) {
        mummy.x -= mummy.dx
        if (player.x == mummy.x) {
            mummy.y -= mummy.dy
        }else {
            mummy.x -= dx
        }
    }

}


function update() {
    if (rightPressed==true) {
        rightPressed=false
        player.x += player.dx;
        playerName.x = player.x
        mummyMove()
        
    }else if (leftPressed==true) {
        leftPressed=false
        player.x -= player.dx;
        playerName.x = player.x
        mummyMove()
    }else if (downPressed==true) {
        downPressed=false
        player.y += player.dy;
        playerName.y = player.y+16
        mummyMove()
    }else if (upPressed==true) {
        upPressed=false
        player.y -= player.dy;
        playerName.y = player.y+16
        mummyMove()
    }else if (spacePressed == true) {
        spacePressed = false
        player.x +=0
        player.y+=0
        playerName.x = player.x
        playerName.y = player.y+16
        mummyMove()
    }
    if (player.x < 0){
        player.x = 4
        playerName.x = player.x
    }else if (player.x > canvas.width){
        player.x = canvas.width - 120
        playerName.x = player.x
    }else if (player.y < 0){
        player.y = 4
        playerName.y = player.y+16
    }else if (player.y > canvas.width){
        player.y = canvas.height -120
        playerName.y = player.y+16
    }
    if (mummy.x < 0){
        mummy.x = 4
    }else if (mummy.x > canvas.width){
        mummy.x = canvas.width - 120
    }else if (mummy.y < 0){
        mummy.y = 4
    }else if (mummy.y > canvas.width){
        mummy.y = canvas.height -120
    }
    if (player.x==stair.x+4 && player.y == stair.y+4){
        alert("You have escaped the chamber!!!")
        document.location.reload()
    }
    if (player.x==mummy.x && player.y == mummy.y){
        alert("Mummy caught chu'!!! Press Reset Button to play again!")
        document.location.reload()
    }
}
	


function mainGame() {
    ctx.clearRect(0,0,720,720)
    update()
    render()
    requestAnimationFrame(mainGame)
}
loadImages();
mainGame()