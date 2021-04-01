function setup(){
    
    createCanvas(400, 400);
    background(255, 240, 230);
}

function draw(){
    
    
}

function mouseDragged(){
    
 stroke(160, 200.255);
 strokeWeight(random(1,2));
 fill(255);
 circle(mouseX, mouseY, random(30, 60));

}