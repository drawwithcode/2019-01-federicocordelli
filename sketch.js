function preload(){
  // put preload code here
}

function setup() {

  textAlign(CENTER,CENTER);

  createCanvas(windowWidth,windowHeight,);

  angleMode(DEGREES);

  frameRate(60);

  background("yellow");

  // put setup code here
}

function draw() {



  if (frameCount < 60) {

    translate(width/2,height/2);
    strokeWeight(3);
    stroke(
      lerpColor(
      color ("yellow"),
      color ("black"),
      frameCount / 60));
    line(200, 0, 200*cos(frameCount*6), 200*sin(frameCount*6));



    //strokeWeight(1);
    //stroke(
      //lerpColor(
      //color ("tomato"),
      //color ("azure"),
      //frameCount / 60));
      //stroke ("yellow");
    //line(200, 0, 200*cos(frameCount*6), 200*sin(frameCount*6));


}


  if (frameCount > 120) {

    translate(width/2,height/2);
    strokeWeight(5);
    stroke(
      lerpColor(
      color ("black"),
      color ("yellow"),
      frameCount / 60));
    line(200, 0, 200*cos(frameCount*6), 200*sin(frameCount*6));


}



if (frameCount == 180) {

  noLoop();
  //textSize(32);
  //fill ("aquamarine");
  //text('Federico Cordelli', 10, 10);

  background("black");

  textSize(32);
  //let r = random(0,255);
  //fill (r);
  noStroke();
  fill ("yellow");
  text('Federico Cordelli', 10, 10);

}
  // put drawing code here
}
