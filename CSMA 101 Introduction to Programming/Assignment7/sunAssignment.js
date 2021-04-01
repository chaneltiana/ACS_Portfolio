////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

var posX;
var posY;
var directionX;
var directionY;
var bright;

function setup() {
    
    createCanvas(800, 600);
    colorMode(HSB, 360, 100, 100);

     //starting point
    posX = 0;
    posY = 400;
    
     //movement
    directionX = 1.4;
    directionY = 1.4;
   
}

function draw(){
    
    //SKY
    if(posX < (0)){
        bright = (231, 76, 85);
    }
    
     if(posY > (200)){
        bright = (231, 76, 35);
    }
    
    background(231, 76, bright);
    
    posX = posX + directionX;
    posY = posY + directionY;

    //reverses direction of horizontal movement
    if(posX > (width)) {
        directionX = -directionX;
       }
    
    if(posY > (400)) {
        directionY = -directionY;
    }
    
     if(posX < (0)) {
      directionX = -directionX;
   }
    
    if (posY < (0)) {
        directionY = - directionY;
   }
    
    //sun
    
    if(posX < (0)){
        bright = (57, 95, 82);
    }
    
    if(posY < (200)){
        bright = (57, 95, 82);
    }
    
    fill(57, 95, bright);
    ellipse(posX,posY,70,70);
    
    //cloud
    
    if(posX < (0)){
        bright = (0, 0, 100);
    }
    
     if(posY > (200)){
        bright = (0, 0, 51);
    }
    
    fill(0, 0, bright);
    ellipse(posX+30, 100, 50, 40);
    ellipse(posX+50, 80, 40, 40);
    ellipse(posX+70, 100, 50, 40);
    
    //WATER
    fill(245, 99, 71);
    noStroke();
    rect(0, 400, 800, 250);
        
}

    
