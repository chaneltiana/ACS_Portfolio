var stars = [];
let cloudx = 100;
let cloudy = 100;

function setup(){
  createCanvas(600, 500);
	
	for (var i = 0; i < 500; i++) {
		stars[i] = new Star();
	} 
}

function draw(){
    let c = map(mouseY, width, 0, 0, 75);
    background(0, 26, c);
    
    
    if (mouseY<= 200){
        makeCloud(cloudx, cloudy-50);
        makeCloud(cloudx + 100, cloudy + 100);
        cloudx+=0.1;
    }
    else{
       	for (var i = 0; i < stars.length; i++) {
		  stars[i].draw();
        }
    }
    
    mountains();
    sun();
    ground(); 
    calc();
}


class Star{
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 1);
		this.t = random(TAU);
	}
	
	draw(){
		this.t += 0.05;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
        fill(255);
		ellipse(this.x, this.y, scale, scale);
	}
}

function mountains(){
    
    fill(18,53,36);
    ellipse(50, 375, 325, 250);
    ellipse(550, 375, 325, 250);
    
    fill(30,77,43);
    ellipse(width/4, 380, 175, 150);
    ellipse(450, 380, 175, 150);

}

function ground(){
    fill(0,107,60);
    rect(0, 350, 600, 150);
}

function sun(){
    
    let c = map(mouseY, width, 0, 0, 255);
    var x1 = width; 
    var y1 = height; 
    var x2 = mouseX; 
    var y2 = mouseY; 
     
    strokeWeight(0); 
    
    // draw a circle centered at each point 
    fill(255,0,0);
    ellipse(x1/2, y1, 10); 
    fill(c,c,0);
    ellipse(x2, y2, 90); 
}

function calc(){
    
    var x1 = width; 
    var y1 = height; 
    var x2 = mouseX; 
    var y2 = mouseY; 
    
    // calculate the distance between 2 points 
    d = dist(x1/2, y1, x2, y2); 
    noStroke(); 
    
    fill("lightgreen");
    rect(140, height-80, 325, 50);
    
    fill(0,107,60); 
    textSize(20); 
    textAlign(CENTER); 
    text("distance = "+ str(d), width/2, height-50); 
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}