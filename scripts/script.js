"use strict";


let ball = document.getElementById("ball")

let ballX = 0
let ballY= 700


ball.style.top="700px"
ball.style.left="100px"


//setInterval(moveBall, 50) - older way

requestAnimationFrame(moveBall) // new 'best' way


function moveBall(){
    ballX +=10
    ballY-=10
    ball.style.left= ballX + "px" //<-- you might want to change this
    ball.style.top= ballY + "px"
    //ball.style.bottom = ballY + "px"

    requestAnimationFrame(moveBall)
    
}
