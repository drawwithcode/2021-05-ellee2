let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("red");
  circle(data.x, data.y, 10);
}
function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
  

  
  slider = createSlider(5, 50, 20, 5);
  slider.position(10, windowHeight-30);
  slider.size(150);
  
  flowers = loadImage("assets/flowers.png");
}

function draw() {
  push()
textFont('Titan One');
strokeWeight(2);
textSize(40);
textAlign(RIGHT);
text('Customise your composition!', windowWidth-40,60);
pop()

push()
textSize(20);
textAlign(RIGHT);
text('Click left-arrow to reset', windowWidth-40,100);
pop()

push()
textSize(15);
textAlign(LEFT);
text('Pick colors and change size!', 10, windowHeight-180);
pop()

  push()
  imageMode(CENTER);
  image(flowers, windowWidth/2, windowHeight/2, width/2, height);
  pop()
    
  
  push()
	noStroke();
  //draw the first button
  fill("#BA1200");
  ellipse(25, windowHeight-135, 40, 40);
  
  //draw the second button
  fill("#E28413");
  ellipse(68, windowHeight-135, 40, 40);

  fill("#F7CD64");
  ellipse(111, windowHeight-135, 40, 40);

  fill("#A8C256");
  ellipse(154, windowHeight-135, 40, 40);

  fill("#4056F4");
  ellipse(25, windowHeight-90, 40, 40);

  fill("#8B80F9");
  ellipse(68, windowHeight-90, 40, 40);

 
  fill("#ED7B84");
  ellipse(111, windowHeight-90, 40, 40);
  
  
 
  fill("#0E1428");
  ellipse(154, windowHeight-90, 40, 40);
  pop()
  
  push()
  noStroke();
  fill("white");
  rectMode(CENTER);
  rect(90, windowHeight-30, 180, 60);
  pop()



}

function mousePressed() {
  if (mouseX > 5 && mouseX < 43 && mouseY > windowHeight-155 && mouseY < windowHeight-115) {
    //set the variables to random values
    c = "#BA1200";
  }
  if (mouseX > 48 && mouseX < 88 && mouseY > windowHeight-155 && mouseY < windowHeight-115) {
    //set the variables to random values
    c = "#E28413";
  }
  if (mouseX > 91 && mouseX < 131 && mouseY > windowHeight-155 && mouseY < windowHeight-115) {
    //set the variables to random values
    c = "#F7CD64";
  }
  if (mouseX > 134 && mouseX < 174 && mouseY > windowHeight-155 && mouseY < windowHeight-115) {
    //set the variables to random values
    c = "#A8C256";
  }
  if (mouseX > 5 && mouseX < 43 && mouseY > windowHeight-110 && windowHeight-70) {
    c = "#4056F4";
  }
  if (mouseX > 48 && mouseX < 88 && mouseY > windowHeight-110 && windowHeight-70) {
    //set the variables to random values
    c = "#8B80F9";
  }
  if (mouseX > 91 && mouseX < 131 && mouseY > windowHeight-110 && windowHeight-70) {
    //set the variables to random values
    c = "#ED7B84";
  }
  if (mouseX > 134 && mouseX < 174 && mouseY > windowHeight-110 && windowHeight-70) {
    //set the variables to random values
    c = "#0E1428";
  }

}

function mouseDragged() {
  push();
  stroke(c);
  strokeWeight(slider.value());
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
    weight: myWeight,
  };
  socket.emit("mouse", message);

}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  clear();
 
  }
}