function setup() {
  createCanvas(800, 600);
  frameRate(60);

}

var x = 200;
var y = 200;

let img;
function preload(){

img = loadImage('mario.jpg');




}
function draw() {
  background(220);

  //image
  image(img, x, y);

 //GetKey
 if (keyIsDown(87)){
  y--;
 }

 if (keyIsDown(83)){
  y++;
 }

 if (keyIsDown(65)){
  x--;
 }

 if (keyIsDown(68)){
  x++;
 }



  //name
  let s = 'Raymond Besson';
  text(s, 10, 10)

  //Dutch Flag
  fill('red');
  rect(10,30,90,20);

  fill('white');
  rect(10,50,90,20);

  fill('blue');
  rect(10,70,90,20);

  //house
  fill('white');
  square(19, 300, 90);
  triangle(10, 300, 115, 300, 62, 220);

  //CheckerBoard row1
  fill('black');
  square(200,20,50)

  fill("white");
  square(250,20,50)
  
  fill('black');
  square(300,20,50)

  //CheckerBoard row2
  fill('white');
  square(200,70,50)

  fill("black");
  square(250,70,50)
  
  fill('white');
  square(300,70,50)

  //checkerboard row3
  fill('black');
  square(200,120,50)

  fill("white");
  square(250,120,50)
  
  fill('black');
  square(300,120,50)

  //stop light body
  fill('gray');
  rect(30,450,60,100)
  rect(56,550,10,50)

  //stop light lights
  fill('red');
  circle(60,470,30,100);

  fill('orange');
  circle(60,500,30,100)

  fill("green");
  circle(60,531,30,100)

  //Dice
  fill('white');
  square(400, 20, 80, 20);

  //dice Dots
  fill('black');
  circle(415, 38, 20)
  circle(440, 62, 20)
  circle(465, 85, 20)






  



}
