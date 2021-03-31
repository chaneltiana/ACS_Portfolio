////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

//variables for ball1
var ballX = 50;
var ballY = 50;
var diameter = 50;
var directionX = 6;
var directionY = 5;

//variables for ball2
var ballA = 50;
var ballB = 50;
var directionA = 8;
var directionB = 4;

//variables for paddle
var rectX;
var rectY;
var rectW = 100;
var rectH = 25;


var started = false;
var score = 0;


function setup(){ 
    createCanvas(800,800);  
}

function draw(){
    background(0);
    
    //ball1 bounces off wall
    ballX = ballX + directionX; //ball+=directionX
    ballY = ballY + directionY;
    
    if (ballX < 0 || ballX > width){
        directionX = -directionX
    }
    
    if (ballY < 0 || ballY > height){
        directionY = -directionY
    }
    
    //ball2 bounces off wall
    ballA = ballA + directionA; //ball+=directionX
    ballB = ballB + directionB;
    
    if (ballA < 0 || ballA > width){
        directionA = -directionA
    }
    
    if (ballB < 0 || ballB > height){
        directionB = -directionB
    }
   
    //detect collision with paddle1
    if ((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) > + rectY)) {
        directionX*=-1;
        directionY*=-1;
        score++;
    }
    
     //detect collision with paddle2
    if ((ballA > rectX && ballA < rectX + rectW) && (ballB + (diameter/2) > + rectY)) {
        directionA*=-1;
        directionB*=-1;
        score--;
        
    }
        
    //draw ball
    fill(244,200,40);
    ellipse(ballX,ballY,diameter,diameter);
    
    //draw ball2
    fill(236,178,226);
    ellipse(ballA,ballB,diameter,diameter);
    
    //draw paddle
    fill(255);
    rect(rectX,rectY,rectW,rectH);


    
    //update paddle location
    if (!started){
        rectX = width/2
        rectY = height - 100;
        started = true;
    }
    
    //draw score
    fill(255);
    text ("Score: " + score, 10,15);
    }


function keyPressed(){
    
    
     if(keyCode === RIGHT_ARROW){
        
        rectX = rectX +50;

    }
    
    if(keyCode === LEFT_ARROW){
        
        rectX = rectX -50;
        
    }
    

}