let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d');
canvas.height = 720;
canvas.width = 720;
canvas.style.border="1px solid black"
document.getElementById("myCanvas").appendChild(canvas)
let gameOver=false
let gameOver2=false
let input = document.getElementById("playerName")
let bg = {
    image : new Image(),
    ready: false
}
let trap ={
    image: new Image(),
    ready: false
}
let player = {
    x: 120*2+4,
    y:120*2+4,
    dx: 120,
    dy: 120,
    image : new Image(),
    ready: false
    
}

let mummy = {
    x: 120*2+4,
    y: 120*3+4,
    image : new Image(),
    ready: false
}
let stair = {
    x: 0,   
    y: 120*4+4,
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

    ctx.rect(120*2-4,120,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

   
    ctx.rect(120*2-4,120*3,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*2-4,120*4,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*4-4,120,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*4-4,120*3,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*4-4,120*4,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120*4,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*3-4,120*5,8,120)
    ctx.fillStyle="#704B37"
    ctx.fill()
    
    // horizontal barriers

    ctx.rect(0,116,120,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(0,120*2-4,120,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120,120*2-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(0,120*4-4,120,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120,120*4-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*3,120-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*3,120*2-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*3,120*3-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120*2-4,124,8)
    ctx.fillStyle="#704B37"
    ctx.fill()

    ctx.rect(120*5-4,120*5-4,124,8)
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
	trap.image.src = "/trap6.gif"
    trap.image.onload = function () {
		trap.ready = true;
	};
}
function render() {
    if (gameOver) {
        return
    }
	if (bg.ready) {
		
        ctx.drawImage(bg.image,0,0,canvas.width,canvas.height)
        
	}
    drawBarrier()
    
    if (stair.ready) {
		
        ctx.drawImage(stair.image,stair.x,stair.y,120,116)
     
	}
    if (trap.ready) {
		
        ctx.drawImage(trap.image,0,0,120,116)
     
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
let rightClear = true
let leftClear = true
let upClear = true
let downClear = true 
function mummyBorderDectect() {
    if (mummy.x==4 && mummy.y == 120+4) {
        upClear=false
        downClear=false
    }else if (mummy.x==4 && mummy.y == 120*2+4) {
        upClear=false
      
    }else if (mummy.x==124 && mummy.y == 124) {
        rightClear=false
        downClear=false
    }else if (mummy.x==124 && mummy.y == 120*2+4) {
        upClear=false
    }else if (mummy.x==120*2+4 && mummy.y == 120+4) {
        leftClear=false
    }else if (mummy.x==120*3+4 && mummy.y == 120+4) {
        rightClear=false
        upClear=false
        downClear=false
    }else if (mummy.x==120*4+4 && mummy.y == 120+4) {
        leftClear=false 
        rightClear=false
    }else if (mummy.x==120*3+4 && mummy.y == 4) {
        downClear=false 
    }else if (mummy.x==120*3+4 && mummy.y == 120*2+4) {
        upClear=false 
        downClear=false
    }else if (mummy.x==120*5+4 && mummy.y == 120+4) {
        leftClear=false 
        downClear=false
    }else if (mummy.x==120*5+4 && mummy.y == 120*2+4) {
       
        upClear=false
    }
    else if (mummy.x==4 && mummy.y == 120*3+4) {
       
        downClear=false
    }else if (mummy.x==124 && mummy.y == 120*3+4) {
        rightClear=false
        downClear=false
    }else if (mummy.x==124 && mummy.y == 120*4+4) {
        rightClear=false
        upClear=false
    }else if (mummy.x==120*2+4 && mummy.y == 120*4+4) {
        leftClear=false
        
    }else if (mummy.x==120*2+4 && mummy.y == 120*3+4) {
        leftClear=false
        
    }else if (mummy.x==120*3+4 && mummy.y == 120*3+4) {
        rightClear=false
        upClear=false
        
    }else if (mummy.x==120*3+4 && mummy.y == 120*4+4) {
        rightClear=false
        
    }else if (mummy.x==120*4+4 && mummy.y == 120*4+3) {
        leftClear=false 
    }else if (mummy.x==120*4+4 && mummy.y == 120*4+4) {
        leftClear=false 
        rightClear=false
    }else if (mummy.x==120*5+4 && mummy.y == 120*4+4) {
        leftClear=false 
        downClear=false
    }else if (mummy.x==120*2+4 && mummy.y == 120*5+4) {
        rightClear=false 
    }else if (mummy.x==120*3+4 && mummy.y == 120*5+4) {
        leftClear=false 
    }else if (mummy.x==120*5+4 && mummy.y == 120*5+4) {
        upClear=false 
    }else {
        rightClear = true
        leftClear = true
        upClear = true
        downClear = true 
    }
}

function mummyMove() {
    mummyBorderDectect()
    if (player.x == mummy.x) {
        if(player.y > mummy.y){
            if (player.y-mummy.y==120){
               
                if (downClear) {
                    mummy.y += player.dy
                }else if (!downClear){
                    mummy.y +=0
                }
            
            }else if (player.y-mummy.y!==120) {
                if (downClear) {
                mummy.y += player.dy
                mummyBorderDectect()
                if (downClear) {
                    mummy.y += player.dy
                    }else if (!downClear) {
                        mummy.y +=0
                    }
                }else if (!downClear) {
                    mummy.y +=0
                }
               
                
            }
            
        }else if (player.y<mummy.y) {
            if (player.y-mummy.y==120){
                if (upClear) {
                    mummy.y -= player.dy
                }else if (!upClear){
                    mummy.y -=0
                }
                }else if (player.y-mummy.y!==120) {
                if (upClear) {
                    mummy.y -= player.dy
                    mummyBorderDectect()
                    if (upClear) {
                        mummy.y -= player.dy
                    }else if (!upClear){
                        mummy.y -=0
                    }
                }else if (!upClear) {
                    mummy.y -=0
                }
                
                
                }
        }
    }else if (player.y == mummy.y) {
        if(player.x > mummy.x){
            if (player.x-mummy.x==120){
                if (rightClear){
                    mummy.x += player.dx
                    }else if (!rightClear) {
                    mummy.x += 0
                    }
                }else if (player.x-mummy.x!==120) {
                    if (rightClear){
                    mummy.x += player.dx
                    mummyBorderDectect()
                    if (rightClear){
                        mummy.x += player.dx
                        }else if (!rightClear){
                        mummy.x += 0
                        }
                    }else if (!rightClear) {
                    mummy.x += 0
                    }
                   
                    
                }
            
        }else if (player.x < mummy.x) {
            if (mummy.x-player.x==120){
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else if (!leftClear) {
                        mummy.x -=0
                    }
                
            }else if (mummy.x-player.x!==120) {
                if (leftClear) {
                    mummy.x -= player.dx
                    mummyBorderDectect()
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else if (!leftClear) {
                        mummy.x -=0
                    }
                }else if (!leftClear) {
                    mummy.x -=0
                }
                
                
            }
        }
    }else if (player.x > mummy.x && player.y > mummy.y) {
        if (rightClear){
            mummy.x += player.dx
            mummyBorderDectect()
            if (player.x == mummy.x) {
                if (downClear) {
                    mummy.y += player.dy
                    }else if (!downClear) {
                        mummy.y +=0
                    } 
            }else {
                if (rightClear){
                mummy.x += player.dx
                }else if (!rightClear) {
                    if (downClear) {
                        mummy.y+=player.dy
                    }else {
                        mummy.y+=0
                    }
                }
            }
        }else if (!rightClear) {
            if (downClear) {
                mummy.y+=player.dy
                mummyBorderDectect()
                if (player.y == mummy.y) {
                    if (rightClear){
                        mummy.x += player.dx
                    }else {
                        mummy.x +=0
                    }
                }else {
                    if (rightClear){
                        mummy.x += player.dx
                    }else {
                        if (downClear) {
                            mummy.y += player.dy
                            }else if (!downClear) {
                                mummy.y +=0
                            } 
                        
                    }
                }
            }else {
                mummy.y+=0
                mummy.x+=0
            }
        
        }
    }else if (player.x > mummy.x && player.y < mummy.y) {
        if (rightClear){
            mummy.x += player.dx
            mummyBorderDectect()
            if (player.x == mummy.x) {
           
                if (upClear) {
                    mummy.y -= player.dy
                }else {
                    mummy.y -=0
                }
            }else {
                if (rightClear){
                mummy.x += player.dx
                }else {
                    if (upClear) {
                        mummy.y -= player.dy
                    }else {
                        mummy.y -=0
                    }
                }
            }
        
        }else {
            if (upClear) {
                mummy.y -= player.dy
                mummyBorderDectect()
                if (player.y == mummy.y) {
           
                    if (rightClear) {
                        mummy.x += player.dx
                    }else {
                        mummy.x -=0
                    }
                }else {
                    if (upClear) {
                        mummy.y -= player.dy
                    }else {
                        mummy.y -=0
                    }
                }
            }else {
                mummy.y -=0
                mummy.x -=0
            }  
            
        }
    }else if (player.x < mummy.x && player.y > mummy.y) {
        if (leftClear) {
            mummy.x -= player.dx
            mummyBorderDectect()
            if (player.x == mummy.x) {
                if (downClear) {
                    mummy.y += player.dy
                    }else {
                        mummy.y +=0
                    }
            }else { 
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else {
                        if (downClear) {
                            mummy.y += player.dy
                            }else {
                                mummy.y +=0
                            }
                    }
            }
        }else {
            if (downClear) {
                mummy.y += player.dy
                mummyBorderDectect()
                if (player.y == mummy.y) {
                    if (leftClear) {
                        mummy.x -= player.dx
                        }else {
                            mummy.x +=0
                        }
                }else {
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else {
                        if (downClear) {
                            mummy.y += player.dy
                            }else {
                                mummy.y +=0
                            }
                    }

                }
            }else {
                mummy.y +=0
                mummy.x+=0
            } 

            
        }
        
    }else if (player.x < mummy.x && player.y < mummy.y) {
        if (leftClear) {
            mummy.x -= player.dx
            mummyBorderDectect()
            if (player.x == mummy.x) {
                if (upClear) {
                    mummy.y -= player.dy
                }else {
                    mummy.y -=0
                }
            }else {
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else {
                        if (upClear) {
                            mummy.y -= player.dy
                        }else {
                            mummy.y -=0
                        }
                    }
            }
        }else {
            if (upClear) {
                mummy.y -= player.dy
                mummyBorderDectect()
                if (player.y==mummy.y){
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else {
                        mummy.x -=0
                    }
                }else {
                    if (leftClear) {
                        mummy.x -= player.dx
                    }else {
                        if (upClear) {
                            mummy.y -= player.dy
                        }else {
                            mummy.y -=0
                        }
                    }
                }
            }else {
                mummy.y -=0
                mummy.x -=0
            } 
            
        }
        
    }
    
}

function borderDetect() {

    if (player.x==4 && player.y == 120+4) {
        upPressed=false
        downPressed=false
    }
    if (player.x==4 && player.y == 120*2+4) {
        upPressed=false
      
    }
    if (player.x==124 && player.y == 124) {
        rightPressed=false
        downPressed=false
    }
    if (player.x==124 && player.y == 120*2+4) {
        upPressed=false
    }
    if (player.x==120*2+4 && player.y == 120+4) {
        leftPressed=false
    }
    if (player.x==120*3+4 && player.y == 120+4) {
        rightPressed=false
        upPressed=false
        downPressed=false
    }
    if (player.x==120*4+4 && player.y == 120+4) {
        leftPressed=false 
        rightPressed=false
    }
    if (player.x==120*3+4 && player.y == 4) {
        downPressed=false 
    }
    if (player.x==120*3+4 && player.y == 120*2+4) {
        upPressed=false 
        downPressed=false
    }
    if (player.x==120*5+4 && player.y == 120+4) {
        leftPressed=false 
        downPressed=false
    }
    if (player.x==120*5+4 && player.y == 120*2+4) {
       
        upPressed=false
    }
    
    if (player.x==4 && player.y == 120*3+4) {
       
        downPressed=false
    }
    if (player.x==124 && player.y == 120*3+4) {
        rightPressed=false
        downPressed=false
    }
    if (player.x==124 && player.y == 120*4+4) {
        rightPressed=false
        upPressed=false
    }
    if (player.x==120*2+4 && player.y == 120*4+4) {
        leftPressed=false
        
    }
    if (player.x==120*2+4 && player.y == 120*3+4) {
        leftPressed=false
        
    }
    if (player.x==120*3+4 && player.y == 120*3+4) {
        rightPressed=false
        upPressed=false
        
    }
    if (player.x==120*3+4 && player.y == 120*4+4) {
        rightPressed=false
        
    }
    if (player.x==120*4+4 && player.y == 120*4+3) {
        leftPressed=false 
    }
    if (player.x==120*4+4 && player.y == 120*4+4) {
        leftPressed=false 
        rightPressed=false
    }
    if (player.x==120*5+4 && player.y == 120*4+4) {
        leftPressed=false 
        downPressed=false
    }
    if (player.x==120*2+4 && player.y == 120*5+4) {
        rightPressed=false 
    }
    if (player.x==120*3+4 && player.y == 120*5+4) {
        leftPressed=false 
    }
    if (player.x==120*5+4 && player.y == 120*5+4) {
        upPressed=false 
    }
        
}

function update() {
    if (gameOver) {
        return
    }
    borderDetect()
    
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
    if (player.x <= 0){
        player.x = 4
        playerName.x = player.x
    }else if (player.x >= canvas.width){
        player.x = canvas.width - 116
        playerName.x = player.x
    }else if (player.y <= 0){
        player.y = 4
        playerName.y = player.y+16
    }else if (player.y >= canvas.width){
        player.y = canvas.height -116
        playerName.y = player.y+16
    }
    if (mummy.x <= 0){
        mummy.x = 4
    }else if (mummy.x >= canvas.width){
        mummy.x = canvas.width - 116
    }else if (mummy.y <= 0){
        mummy.y = 4
    }else if (mummy.y >= canvas.width){
        mummy.y = canvas.height -116
    }
    if (player.x==stair.x+4 && player.y == stair.y){
        alert("You have escaped the chamber!!")
        gameOver=true
    }
    if (player.x==mummy.x && player.y == mummy.y){
        alert("Mummy caught chu'!!! Try again!")
        document.location.reload()
    }
    if (player.x==mummy.x && player.y == mummy.y){
        alert("You died! Told you not to step on the Pharaoh damn trap!")
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
