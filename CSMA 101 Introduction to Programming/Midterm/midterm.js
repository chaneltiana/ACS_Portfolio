////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

var angle1;
var speed1;
var lineSize;

function setup(){
   
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    
    angle1 = 0;
    speed1 = 1;
    lineSize = 200;

}

function draw(){

    background(230, 60, 50);
    nature();
    moon();
    clock();
    pumpkin();
    spider();
    
}

function nature(){
    
    //GRASS
    noStroke();
    fill(120, 100, 36);
    rect(0, 300, width, 300);
    
    //TREES
    fill(37.85, 100, 30);
    rect(40, 225, 20, 80);
    rect(90, 225, 20, 80);
    rect(440, 225, 20, 80);
    rect(395, 225, 20, 80);
    
    fill(120, 100, 60);
    ellipse(45, 181, 80, 150);
    fill(120, 100, 36);
    ellipse(50, 180, 80, 150);
        fill(120, 100, 60);
        ellipse(95, 181, 80, 150);
        fill(120, 100, 36);
        ellipse(100, 180, 80, 150);

    fill(120, 100, 60);
    ellipse(455, 181, 80, 150);
    fill(120, 100, 36);
    ellipse(450, 180, 80, 150);
        fill(120, 100, 60);
        ellipse(410, 181, 80, 150);
        fill(120, 100, 36);
        ellipse(405, 180, 80, 150);

}
    
function clock(){
    
    angle1 += speed1;
    
    push();
    translate(250,250);
    rotate(radians(angle1));
    
    fill(255);
    ellipse(0,0,10,10);
    stroke(255);
    line(0,0,0,lineSize);
    ellipse(0,lineSize,10,10);
   
    pop();
    
}

function pumpkin(){
    
    noStroke();
    //BODY
    fill(37.85, 100, 90);
    ellipse(width/2, height/2, 65, 65);
    fill(37.85, 100, 30);
    rect(245, 210, 10, 10);
    fill(37.85, 100, 77);
    ellipse(width/2, height/2, 60, 60);
    
    //FACE
    fill(37.85, 100, 90);
    triangle(240, 230, 245, 250, 235, 250);
    triangle(260, 230, 265, 250, 255, 250);
    ellipse(width/2, 265, 30, 20);
    fill(37.85, 100, 77);
    ellipse(width/2, 255, 30, 20);

}

function spider(){
    
    noStroke();
    angle1 += speed1;
    push();
    translate(250,250);
    rotate(radians(angle1));

    
    //BODY
    fill(37, 100, 27);
    ellipse(10, height/2 , 35, 25);
    ellipse(0, height/2, 25, 25);
    
    fill(37, 100, 0);
    ellipse(0, height/2, 20, 20);
    ellipse(10, height/2, 30, 20);
    
    //EYE
    fill(255);
    ellipse(0, 250, 7, 7);
    fill(0);
    ellipse(0, 250, 4, 4);
    
    fill(255);
    ellipse(0, 257, 7, 7);
    fill(0);
    ellipse(0, 257, 4, 4);
    
    pop();
}

function moon(){
    
    noStroke();
    fill(37.85, 0, 45);
    ellipse(250, 70, 100, 100);
    noStroke();
    fill(0, 0, 70);
    ellipse(250, 70, 90, 90);
    stroke(37.85, 0, 63);
    fill(37.85, 0, 45);
    ellipse(235, 50, 30, 30);
    ellipse(245, 65, 20, 20);

    
}