

function setup(){
  createCanvas(500,500);
  circleX=0;

}

function draw(){
  background(90,200,112);

  fill(255,255,255);

circleX=0;

for(var circleX=0;circleX<width;circleX=circleX+10){


  ellipse(circleX,height/2,10,10);
}


}