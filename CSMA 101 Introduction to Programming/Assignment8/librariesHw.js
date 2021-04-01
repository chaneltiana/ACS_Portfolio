////////////////////////////
//CSMA 101                //
//Intro to Programming    //
//Fall 19                 //
//Professor Theohar       //
//Chanel Tiana Cruz       //
//510-313-3992            //
////////////////////////////

//Dependent on p5.spound Library found here: https://p5js.org/reference/#/libraries/p5.sound

//Dependent on KnobMakerC found here: http://codeforartists.com/RotatingKnobMaker/

var readyToGo = false;
var sound;
var x;
var fft;
var y;
var knob1, knob2;
var button;

function preload(){
    
    sound1 = loadSound("sounds/Drake.mp3");
    sound2 = loadSound("sounds/Tink.mp3");
    sound3 = loadSound("sounds/JheneAiko.mp3");

}

function setup(){
    
    createCanvas(800, 600);
    
    button1 = createButton('1');
    button1.mousePressed(song1);
    button1.position(163, 262);
    
    button2 = createButton('2');
    button2.mousePressed(song2);
    button2.position(230, 262);
    
    button3 = createButton('3');
    button3.mousePressed(song3);
    button3.position(295, 262);

    fft = new p5.FFT();
    
    knob1 = new MakeKnobC("black", 85, 225, 350, 0, 100, 0, 0,"volume", [146, 146, 185], 15);
}

function draw(){
    
    radio();
    knob1.update();
    
    let volume = map(mouseX, 0, (125, 300), 0, 1);
    volume = constrain(volume, 0, 1);
    sound1.amp(volume);
    sound2.amp(volume);
    sound3.amp(volume);

        
     if(readyToGo){
        stroke(255);
        
        var spectrum = fft.analyze();
        
        for(var i = 0; i < spectrum.length; i++){
            
            x = map(spectrum[i], 0, 55, 0, 500);
            
            y = map (i-225, 600, spectrum.length, 0, 45);
            
            push();
            translate(375, 130);
            
            stroke(146, 146, 185);
            fill(146, 146, 185);
            rect(x, y+200, 5, 5);

            pop();
        
        } 
    }
    
    noStroke();
    
    fill(61, 61, 92);
    rect(650, 150, 50, 298);
    rect(630, 150, 50, 70);
    rect(635, 150, 50, 87);
    rect(643, 150, 50, 110);
    rect(640, 150, 50, 90);
    rect(645, 150, 50, 110);
    rect(648, 150, 50, 120);
    
    fill(255);
    rect(700, 100, 100, 300);
    
}

function mousePressed(){
    
    knob1.active();
}

function mouseReleased(){ 

    knob1.inactive();
    
}

function radio(){
    
    //box
    noStroke();
    
    fill(61, 61, 92);
    rect(width/8, 100, 600, 400, 60);
    
    fill(30, 30, 47);
    ellipse(500, 300, 300, 300);
    rect(135, 45, 525, 60);
    rect(135, 175, 200, 70);
    
    fill(255);
    rect(148, 65, 500, 40);   
    
    //buttons
    fill(30, 30, 47);
    rect(135, 175, 200, 70);
    
    stroke(146, 146, 185);
    strokeWeight(2);
    rect(135, 245, 66, 40);
    rect(201, 245, 66, 40);
    rect(267, 245, 66, 40);
    noStroke();

    fill(146, 146, 185);
    rect(145, 185, 180, 50);
    
    fill(30, 30, 47);
    rect(155, 205, 160, 10);
    triangle(195, 190, 215, 190, 205, 230);
    
}

function song1(){

    if(sound1.isPlaying()){
        sound1.pause(); 
        }else{
        sound1.play();
        readyToGo = true;
    } 
    
}

function song2(){
    
    if(sound2.isPlaying()){
        sound2.pause(); 
        }else{
        sound2.play();
        readyToGo = true;
    }
    
}

function song3(){
    
    if(sound3.isPlaying()){
        sound3.pause(); 
        }else{
        sound3.play();
        readyToGo = true;
    }
    
}

