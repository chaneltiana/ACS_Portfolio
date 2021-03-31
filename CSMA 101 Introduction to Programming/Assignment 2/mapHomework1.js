//map hw1

var startX;
var startY;
var directionX;
var directionY;

var startA;
var startB;
var directionA;
var directionB;


function setup() {
    createCanvas(500,500);
//    background(255,203,97);

    startX = width/2;
    startY = width/2;
    
    directionX = 6;
    directionY = 3;
    
    startA = width/4;
    startB = width/4;
    
    directionA = 4;
    directionB = 1;
}


function draw () {
    
    color = map(mouseX,0,width,0,255);
    background(color,150,90);

    startX = startX + directionX;
    startY = startY + directionY;
    
    if(startX > (width)) {
        directionX = -directionX;
    }
    
    if (startY > (height)) {
        directionY = -directionY;
    }
    
    if (startX < (0)) {
        directionX = -directionX;
    }
    if (startY < (0)) {
        directionY = -directionY;
    }
   
    push();
    translate(200,0);
    
    stroke(200);
    strokeWeight(2);
    triangle(startX/2,startY/2,40,70,80,100);
    ellipse(startX/2,startY/2,40,40,true); 
    ellipse(startX/2+25,startY/2+25,20,20,true); 
    ellipse(startX/2+41,startY/2+41,15,15,true); 

    pop();
    
   
    startA = startA + directionA;
    startB = startB + directionB;
 
    
    if(startA > (499)) {
        directionA = -directionA;
    }
    
    if (startB > (499)) {
        directionB = -directionB;
    }
    
    if (startA < (width)) {
        directionA = -directionA;
    }
    if (startB < (height)) {
        directionB = -directionB;
    }
    
    stroke(100);
    strokeWeight(2);
    triangle(startX,startY,40,70,80,100);
    ellipse(startX,startY,60,60,true);
    ellipse(startX+35,startY+35,30,30,true);
    ellipse(startX+55,startY+55,15,15,true);  

}