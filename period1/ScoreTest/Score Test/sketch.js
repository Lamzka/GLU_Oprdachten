let score;


function setup() {
  score = random(0, 100)
  createCanvas(400, 200);
}

function draw() {
  background(220);
  if (score > 90){
    fill('green');
    text('Uitstekend!',20,20)
  } else if (score > 70){
    fill('yellow');
    text('goed gedaan!',20, 20);
  } else if (score > 50){
    fill('orange');
    text('Voldoende.',20,20);
  } else if (score < 49){
    fill('red');
    text('Nuh uh.',20,20);
  }


  


}
  