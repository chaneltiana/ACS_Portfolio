////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

var img1;
var img2;
var totalRect;
var x,y;
var desiredColor;
var c;

function preload() {
    img1 = loadImage ("data/uhhaha.jpg");
    img2 = loadImage ("data/hahasaying.png");
    
}

function setup() {
    
    createCanvas(225,225);
    background(255);
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
    
    //initialize values
    totalRect = 100;
    y = 0;
    c= 1;
    
    
}

function draw () {
    
    //set circle size based of totalCircles
    var rectSize = width/totalRect
    
    //draw circles;
    var currentRect = 0;
    
    //this keeps the size proportional to your width
    while(currentRect < totalRect) {
        x = currentRect * rectSize;
    
    
    
    //get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    
    if (c > 0) {
        
        fill(desiredColor1);
    }
    
    if(c < 0){
        
        fill(desiredColor2);
    }
    
    rect(x,y,rectSize,rectSize);
    currentRect++;
    
    }
    
    //move down a row
    y = y + rectSize;
    
    //start over at top
    if(y > 700) {
        totalRect = random(75,100);
        c =-c;
        y = 0;
    }
  
}

////////////////////
function getColor1() {
    var desiredColor1 = img1.get(floor(x),floor(y));
    return desiredColor1;
    
}

function getColor2() {
    var desiredColor2 = img2.get(floor(x),floor(y));
    return desiredColor2;
    
}
