//DATA EXERCISE

var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var satVal = [];
var brightVal = [];
var sz = [];
var shape = [];
var radius = 40;

function preload(){
    
    colorTable = loadTable("assets/colorshw.csv");
    
}

function setup(){
    
    createCanvas (750,550);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    
    rectMode(RADIUS);
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i,0);
        hueVal[i] = colorTable.getNum(i,1);
        myRating[i] = colorTable.getNum(i,2);
        satVal[i] = colorTable.getNum(i,3);
        brightVal[i] = colorTable.getNum(i,4);
        sz[i] = map(myRating[i], 1, 10, 40, 100);
        
    }
}

function draw(){
    
    background(0);
    
    var mx = map(mouseX, 0, width, 290, 90);
    
    
   
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
              
        fill(255);
        textSize(17);
        text(names[i], 118 * (i+0.70), 400);
    
        fill(255);
        textSize(10);
        text(hueVal[i], 118 * (i+0.70), 300);
        text(myRating[i], 118 * (i+0.70), 310);
        text(satVal[i], 118 * (i+0.70), 320);
        text(brightVal[i], 118 * (i+0.70), 330);


    
        if (mouseIsPressed == true){
        strokeWeight(1);
        stroke(hueVal[i], 20, 70);

        }
        
        fill(hueVal[i], satVal[i], brightVal[i]);
        rect(115 * (i+1), mx+10, radius, sz[i], sz[i]);
        
    } 
}
