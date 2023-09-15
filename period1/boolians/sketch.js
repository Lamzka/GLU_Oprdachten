let isTrue = true;


//Let output = ()

let message = 'de boolean waarde is:';

let combinedMessage = message + isTrue;


function mouseClicked(){


  isTrue = !isTrue;
 
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text(isTrue, 20,20);

  text(message, 20,40);

  text(combinedMessage, 20,60);





//if(isClicked)
//{
 // text('clicked',20,20);

//}
//else{
 // text('not clicked',20,20);


}


