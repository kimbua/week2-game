let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d');
canvas.height = 720;
canvas.width = 720;
canvas.style.border="1px solid black"
document.getElementById("myCanvas").appendChild(canvas)

let player = {
    x: 0,
    y:0

}
let mummy = {
    x: 0,
    y: 0
}


function mainGame() {
    ctx.clearRect(0,0,720,720)
    drawBg()
    drawBarrier()

    
}
mainGame()

function drawPlayer {
    ctx.beginPath()
    ctx.drawImage(./player.png,1)
    ctx.closePath()
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
function drawBgLight(x,y){
    ctx.beginPath()
    ctx.rect(x,y,120,120)
    ctx.fillStyle="#F8742F"
    ctx.fill()
    ctx.closePath()
    
}

function drawBgDark(x,y){
    ctx.beginPath()
    ctx.rect(x,y,120,120)
    ctx.fillStyle="#D94C29"
    ctx.fill()
    ctx.closePath()
}



function drawBg() {
   
    let drawing = false
        for (let y=0;y<=canvas.height;y+=120) {
            console.log(y)
            if (!drawing){
                drawBgLight(0,y)
                console.log("light")
                drawing = !drawing
            }else {
                drawBgDark(0,y)
                console.log("dark")
                drawing = !drawing
            }
          for (let x=120;x<=canvas.width;x+=120) {
            if (drawing){
                drawBgDark(x,y)
                drawing=!drawing
            }else {
                drawBgLight(x,y)
                drawing=!drawing
            }
          }
    }
}

