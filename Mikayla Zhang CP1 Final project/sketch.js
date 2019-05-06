var ramLoc = 100;
var ramLoc2 = 100;
var Score = 0;
var a = 1;
var Score=0;
var chance=5;

function preload() {
  img = loadImage('aimming.png');
}

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(255);
  image(img, mouseX, mouseY)

}

function draw() {

  background(255);
  fill(0, 0, 0);
  noStroke();
  ramLoc= ramLoc + 1*a;
  if (ramLoc > width - 20){
    a = -1;
  
  }else if(ramLoc < 20){
    a = 1;
  
  }
  
     if(chance<=0){
    textSize(40)
       text('Game Over', 100, 250);
      a=0;
    }
     
  
  drawTarget();{
  image(img, mouseX - img.width / 2, mouseY - img.height / 2);
  textSize(10);
    
  text('Score: '+Score, 10, 10);
  fill(0, 102, 153);

  text('Chance:'+ chance , 100, 10);
  fill(0, 102, 153);

  }

}

function drawTarget() {
  ellipse(ramLoc, ramLoc2, 40);

  fill(255, 255, 255);
  noStroke();
  ellipse(ramLoc, ramLoc2, 30);

  fill(0, 0, 0);
  noStroke();
  ellipse(ramLoc, ramLoc2, 20);

  fill(255, 0, 0);
  noStroke();
  ellipse(ramLoc, ramLoc2, 10);
  
}

function mousePressed() {
  if (mouseX > ramLoc - 5 && mouseX < ramLoc + 5 && mouseY > ramLoc2 - 5 && mouseY < ramLoc2 + 5) {
    print("Hit!");
    background(255);
    fill(0, 0, 0);
    noStroke();
    ramLoc = random(50, 200);
    ramLoc2 = random(50, 200);
     Score++;
    
  }
  else {
    print("Miss!");
    chance-=1;
  }
  print(chance);
  
}
 
 