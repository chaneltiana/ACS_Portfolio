////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////


var bear1;
var bear2;
var posX = 0;
var posY = 0;
var img1;
var totalCircles
var x,y;
var c;
var desiredcolor;

function preload() {
   
    img1 = loadImage ("data/space.jpg")
    
}
function setup(){
    
    createCanvas(800,600);
    background(0, 0, 51);
    
    bear1 = new bear(0, 0, 3, 6);
    bear2 = new bear(50, 0, 1, 2);
    bear3 = new bear(100, 0, 1, 1);

    
    img1.loadPixels();
    totalCircles = 100;
    y = 0;
    c= 1;

}

function draw(){
    
    background(0, 0, 50, 75);
    
    bear1.drawBear();
    bear2.drawBear();
    bear3.drawBear();
    bear1.moveBear();
    bear2.moveBear();
    bear3.moveBear();
    bear1.bounceBear();
    bear2.bounceBear();
    bear3.bounceBear();

   
    if(bear1.isCollided(bear2.x, bear2.y)){
        bear1.reset();
        bear2.reset();
        bear3.reset();

    }

    var circleSize = width/totalCircles
    
    var currentCircle = 0;
    
    while(currentCircle < totalCircles) {
        x = currentCircle * circleSize;
    
    var desiredColor1 = getColor1();
    
    if (c > 0) {
        
        fill(desiredColor1);
    }
    
    ellipse(x,y,circleSize,circleSize);
    currentCircle++;
    
    }
    
    y = y + circleSize;
    
    if(y > 800) {
        totalCircles = random(25,75);
        c =-c;
        y = 0;
    }
  
    
}

function getColor1() {
    var desiredColor1 = img1.get(floor(x),floor(y));
    return desiredColor1;
    
}
    

function bear(posX, posY, speedX, speedY){

    this.x = posX;
    this.y = posY;
    this.spX = speedX;
    this.spY = speedY;
    
    this.drawBear = function(){
    
    //body
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+50, this.y+100, 70, 80);
        
    noStroke();
    fill(160, 82, 45);
    ellipse(this.x+50, this.y+100, 40, 60);
    
    //hands
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+90, this.y+90, 20, 20);
        
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+10, this.y+90, 20, 20);
    
    //feet
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+75, this.y+130, 30, 20);
   
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+25, this.y+130, 30, 20);
        
    //head
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+50, this.y+50, 70, 70);
    
    //ears
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+25, this.y+20, 30, 30);
    
    noStroke();
    fill(210, 105, 30);
    ellipse(this.x+75, this.y+20, 30, 30);
    
    //eyes
    noStroke();
    fill(0);
    ellipse(this.x+40, this.y+50, 15, 25);
    
    noStroke();
    fill(0);
    ellipse(this.x+60, this.y+50, 15, 25);
    
    noStroke();
    fill(255);
    ellipse(this.x+40, this.y+53, 10, 15);
    
    noStroke();
    fill(255);
    ellipse(this.x+60, this.y+53, 10, 15);
    
    noStroke();
    fill(0);
    ellipse(this.x+40, this.y+51, 5, 5);
    
    noStroke();
    fill(0);
    ellipse(this.x+60, this.y+51, 5, 5);
    
    //nose
    noStroke();
    fill(255);
    ellipse(this.x+50, this.y+65, 35, 15);
    
    noStroke();
    fill(0);
    triangle(this.x+55, this.y+62, this.x+45, this.y+62, this.x+50, this.y+68);
        
    }
    
    this.moveBear = function() {
        
    this.x += this.spX;
    this.y += this.spY;
        
  }
    
    this.bounceBear = function() {
        
    if (this.x < 10 || this.x > width - 50)
    this.spX = -this.spX;
     if (this.y < 10 || this.y > height - 50)
    this.spY = -this.spY;
        
    }
    
    this.isCollided = function(otherX, otherY){
        
      if(dist(this.x, this.y, otherX, otherY) <= 100)
          
          return true; 
    
}
    
    this.reset = function(){

      this.x = random(50, width-50);
      this.y = random(50, height-50);
      this.spX = random(2,8);
      this.spY = random(2,8);

    }
    
}
