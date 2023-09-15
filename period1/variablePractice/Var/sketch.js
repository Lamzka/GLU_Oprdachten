let x = 100;
let greetings = 'hallo world';
let a = 20;
let b = 10;

let add = a + b;
let take = a - b;
let times = a * b;
let split = a/b;

let y = 0;

//mouseclick random thing
function mouseClicked(){

y = random(50);

}


function setup() {
  createCanvas(500, 500);


}

function draw() {
  background(220);

  //X number thing
  textSize(18);
  text(x, 20, 20);

  // Greetings
  text(greetings, 20, 60);

  //uhh numbers? yeah.
  text(add, 20, 90);
  text(take, 20, 120);
  text(times, 20, 150);
  text(split, 20,180);

  //random
  text(y, 20, 200);

}

