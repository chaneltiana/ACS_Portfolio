var table;
var circs = [];

function preload(){
    
    table = loadTable("assets/NaturalDisasters.csv");
}

function setup(){
    
    createCanvas(1000, 700);
    
    var value = [];
    
    for(var i = 0; i < table.getRowCount(); i++){
        
        circs[i] = new Circs(table, i);
        value[i] = circs[i].value;
    }
}

function draw(){
    
    background(150);
    
    fill(255, 255, 255, 230);
    strokeWeight(5)
    stroke(0);
    textSize(55);
    textAlign(CENTER);
    text('2018 U.S. Natural Disasters', 450, 70);
    
     for (var i = 0; i < table.getRowCount(); i++){
        
        circs[i].displayCircs();
        circs[i].mouseHovered();
    }
    
    push();
    translate(-50, 0);
    
    screen();
    hand();
    thunderstorm();
    flood();
    wildfire();
    winter();
    tropical();
    earthquake();
    
    pop();
    
    bar();
    
}

function screen(){
    
    //palm
    noStroke();
    fill(229, 194, 152);
    rect(160, 500, 300, 300, 20);
    triangle(160, 700, 680, 580, 530, 800);

    //screen
    fill(0);
    rect(200, 100, 450, 550);
    fill(255, 255, 255, 230);
    rect(225, 120, 400, 480);
    ellipse(425, 620, 25, 25);

}

function hand(){
    
    noStroke();
    fill(229, 194, 152);
    
    rect(630, 580, 80, 50, 20);
    rect(630, 527, 80, 50, 20);
    rect(630, 473, 80, 50, 20);
    rect(630, 420, 80, 50, 20);
    rect(160, 350, 50, 350, 20);

    fill(255, 224, 196);
    ellipse(650, 605, 20, 40);
    ellipse(650, 553, 20, 40);
    ellipse(650, 498, 20, 40);
    ellipse(650, 445, 20, 40);
    rect(165, 358, 20, 60, 20);
    
    
    fill(229, 194, 152);
    triangle(160, 420, 185, 385, 185, 420);


}

function thunderstorm(){
    
    if(dist(mouseX, mouseY, 889, 125) <= 40){
         
    //picture
    fill(200);
    ellipse(350, 350, 150, 130);
    ellipse(500, 350, 150, 130);
    ellipse(425, 370, 150, 130);
    ellipse(425, 280, 130, 130);

    fill(252, 198, 3);
    triangle(380, 380, 410, 425, 430, 380);
    triangle(420, 380, 420, 510, 470, 380);
    
    }
}

function flood(){
    
    if(dist(mouseX, mouseY, 853, 225) <= 40){

    //water layer 1
    fill(3, 148, 252);
    rect(225, 322, 400, 250);
    ellipse(333, 326, 160, 50);
     
    fill(3, 61, 252);
    ellipse(333, 328, 155, 50);
    fill(3, 148, 252);
    ellipse(333, 330, 155, 50);
     
    //water layer 2
    fill(3, 61, 252);
    rect(225, 360, 400, 200);
    ellipse(528, 363, 160, 50);
     
    fill(3, 148, 252);
    ellipse(528, 365, 155, 50);
    fill(3, 61, 252);
    ellipse(528, 367, 155, 50);

    //water layer 3
    fill(3, 148, 252);
    rect(225, 400, 400, 200);
    ellipse(380, 400, 160, 50);
    
    fill(3, 61, 252);
    ellipse(380, 402, 155, 50);
    fill(3, 148, 252);
    ellipse(380, 404, 155, 50);
    
    }
 }

function wildfire(){
     
    if(dist(mouseX, mouseY, 849, 325) <= 40){
    
    push();
    translate(0, -50);
    
    //fire
    fill(252, 123, 3);
    ellipse(430, 447, 160, 160);
    triangle(360, 410, 430, 280, 500, 410); 
    
    fill(252, 169, 3);
    ellipse(430, 447, 150, 150);
    triangle(370, 400, 430, 290, 490, 400); 

    fill(252, 211, 3);
    ellipse(430, 447, 130, 130);
    triangle(370, 420, 430, 300, 490, 420);
    
    pop();
    
    }
     
 }

function winter(){

    if(dist(mouseX, mouseY, 842, 425) <= 40){
    
    push();
    translate(-10, -5);
    
    //snowflake
    strokeWeight(8);
    stroke(255);
    noFill();
    rect(355, 285, 160, 160);    
    rect(370, 300, 130, 130);    

    noStroke();
    fill(255);
    rect(425, 240, 20, 260);
    rect(405, 260, 60, 5);
    rect(405, 470, 60, 5);

    rect(300, 355, 260, 20);
    rect(313, 335, 5, 60);
    rect(543, 335, 5, 60);
    
    pop();
    
    }

 }

function tropical(){

    if(dist(mouseX, mouseY, 838, 525) <= 40){
    
    //tropical cyclone
    fill(3, 61, 252);
    rect(225, 350, 400, 250);
     
    fill(255);
    ellipse(425, 440, 340, 130);
    fill(3, 148, 252);
    ellipse(427, 440, 310, 125);
    fill(255);
    ellipse(435, 440, 230, 110);
    fill(3, 148, 252);
    ellipse(437, 440, 200, 100);
    fill(255);
    ellipse(468, 440, 70, 28);
    
    }
 }

function earthquake(){

    if(dist(mouseX, mouseY, 835, 625) <= 40){

    //earthquake
    fill(207, 197, 157);
    rect(225, 350, 400, 250);
    fill(64, 61, 52);
    triangle(303, 350, 370, 430, 363, 350);
    triangle(350, 460, 365, 400, 450, 460);
    triangle(330, 460, 475, 545, 530, 450);
    triangle(370, 535, 475, 600, 450, 480);
    triangle(390, 600, 475, 490, 600, 600);
     
    fill(0);
    noStroke();
    rect(440, 455, 2, 150);
    rect(495, 510, 2, 100);
    rect(410, 510, 2, 50);
    rect(415, 563, 2, 40);
    rect(350, 460, 2, 12);
    rect(368, 405, 2, 77);
    
    }
}

function bar(){
     
    noStroke();
    
    push();
    
    translate(-120, -50);
    
    //bar1
    fill(252, 123, 3);
    rect(800, 150, 176, 50);
    
     //bar2
    fill(252, 169, 3);
    rect(800, 250, 140, 50);    
    
     //bar3
    fill(3, 61, 252);
    rect(800, 350, 136, 50);
    
     //bar4
    fill(3, 148, 252);
    rect(800, 450, 129, 50);
    
     //bar5
    fill(207, 197, 157);
    rect(800, 550, 125, 50);
    
     //bar6
    fill(64, 61, 52);
    rect(800, 650, 122, 50);
    
    pop();
}

function Circs (table, index){
    
    this.table = table;
    this.name = table.getString(index, 0);
    this.x = table.getNum(index, 3);
    this.y = table.getNum(index, 4);
    this.value = table.getNum(index, 1);
    this.rate = table.getNum(index, 2);
    this.sz = 80;
    
    this.displayCircs = function(){
        
        noStroke();
        fill(255);
        ellipse(this.x-98, this.y-50, this.sz, this.sz);
        
        noStroke();
        fill(70);
        textSize(9);
        textStyle(BOLD);
        textAlign(LEFT);
        text(this.name, 680, this.y-10);
        
    }
    
    this.mouseHovered = function(){
        
        if(dist(mouseX, mouseY, this.x-98, this.y-50) <= this.sz/2){
            
            this.showInfo();
        }
    }
    
    this.showInfo = function(){
        
        fill(255, 255, 255, 85);
        ellipse(this.x-78, this.y-50, 150, 150);
        
        fill(0);
        textSize(15);
        textAlign(RIGHT);
        text("total amount:" + "\n" + this.value + "\n" + "percentage:" + "\n" + this.rate + "%", this.x-28, this.y-70);
    }
}

