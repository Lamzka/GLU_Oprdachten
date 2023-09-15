
//posistions
let startXpos = (100,350);
let startYpos = (100,110);

//cell area
let cellwidth = 120;
let cellHeight = 120;
let funnyThickthing = 8;

//cellc colors
let cellColour1 = ("white");
let cellColour2 = ("white");
let cellColour3 = ("white");
let cellColour4 = ("white");
let cellColour5 = ("white");
let cellColour6 = ("white");
let cellColour7 = ("white");
let cellColour8 = ("white");
let cellColour9 = ("white");

//timer
let Timer = 0;

//game ended
let gameEnded = false;
let gameDraw = false;

//player Checks
let activePlayer = 1;
let player1color = 'blue';
let player2color = 'red';

//player Scores
let player1Score = 0;
let player2Score = 0;

//i- the fuck you think this is
let texTSize = 25;













// color change when cell is pressed
function mousePressed(){



  if(gameEnded == false){

  

//funny mousePress stuff (i dont remember how i wrote this)
  if((mouseX > startXpos && mouseX < startXpos+cellwidth) && (mouseY > startYpos && mouseY < startYpos+cellHeight)){
    
    

    

    console.log ('Cell 1');
    if(activePlayer == 1 && cellColour1 == "white"){

      cellColour1 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour1 == "white"){
      cellColour1 = player2color;
      activePlayer = 1;
    }
  } else if ((mouseX > startXpos + cellHeight && mouseX < startXpos+cellwidth *2) && (mouseY > startYpos && mouseY < startYpos+cellHeight)){

    console.log('cell 2');
    if(activePlayer == 1 && cellColour2 == "white"){

      cellColour2 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour2 == "white"){
      cellColour2 = player2color;
      activePlayer = 1;
    }
  }else if ((mouseX > startXpos + cellHeight *2 && mouseX < startXpos+cellwidth *3) && (mouseY > startYpos && mouseY < startYpos+cellHeight)){

    console.log('cell 3');
    if(activePlayer == 1 && cellColour3 == "white"){

      cellColour3 = player1color;
      activePlayer = 2; 
    }else if (activePlayer == 2 && cellColour3 == "white"){
      cellColour3 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth) && (mouseY > startYpos && mouseY < startYpos+cellHeight *2)){

    console.log('cell 4');
    if(activePlayer == 1 && cellColour4 == "white"){

      cellColour4 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour4 == "white"){
      cellColour4 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth *2) && (mouseY > startYpos && mouseY < startYpos+cellHeight *2)){

    console.log('cell 5');
    if(activePlayer == 1 && cellColour5 == "white"){

      cellColour5 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour5 == "white"){
      cellColour5 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth *3) && (mouseY > startYpos && mouseY < startYpos+cellHeight *2)){

    console.log('cell 6');
    if(activePlayer == 1 && cellColour6 == "white"){

      cellColour6 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour6 == "white"){
      cellColour6 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth ) && (mouseY > startYpos && mouseY < startYpos+cellHeight *3)){

    console.log('cell 7');
    if(activePlayer == 1 && cellColour7 == "white"){

      cellColour7 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour7 == "white"){
      cellColour7 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth *2 ) && (mouseY > startYpos && mouseY < startYpos+cellHeight *3)){

    console.log('cell 8');
    if(activePlayer == 1 && cellColour8 == "white"){

      cellColour8 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour8 == "white"){
      cellColour8 = player2color;
      activePlayer = 1;
    }
  }else if((mouseX > startXpos && mouseX < startXpos+cellwidth *3 ) && (mouseY > startYpos && mouseY < startYpos+cellHeight *3)){

    console.log('cell 9');
    if(activePlayer == 1 && cellColour9 == "white"){

      cellColour9 = player1color;
      activePlayer = 2;
    }else if (activePlayer == 2 && cellColour9 == "white"){
      cellColour9 = player2color;
      activePlayer = 1;
    }
  }
}

  
}


//useless function
function setup() {
  createCanvas(800, 600);
}



function draw() {
  background(220);  

  //Arena
  //row1
  fill(cellColour1);
  strokeWeight(10);
  rect( startXpos, startYpos, cellwidth, cellHeight, funnyThickthing,);
  fill(cellColour2);
  rect( startXpos + cellHeight , startYpos, cellwidth, cellHeight, funnyThickthing);
  fill(cellColour3);
  rect( startXpos + cellHeight *2, startYpos, cellwidth, cellHeight,funnyThickthing);

  //row2
  fill(cellColour4)
  rect( startXpos, startYpos + cellHeight, cellwidth, cellHeight,funnyThickthing);
  fill(cellColour5);
  rect( startXpos + cellHeight , startYpos + cellHeight, cellwidth, cellHeight,funnyThickthing);
  fill(cellColour6);
  rect( startXpos + cellHeight *2, startYpos + cellHeight , cellwidth, cellHeight,funnyThickthing);
  
  //row3
  fill(cellColour7)
  rect( startXpos, startYpos + cellHeight * 2, cellwidth, cellHeight,funnyThickthing);
  fill(cellColour8);
  rect( startXpos + cellHeight , startYpos + cellHeight *2 , cellwidth, cellHeight,funnyThickthing);
  fill(cellColour9);
  rect( startXpos + cellHeight *2, startYpos + cellHeight *2 , cellwidth, cellHeight,funnyThickthing);

  //textBox
  fill('lightGray');
  strokeWeight(3)
  rect(20, 100, 200, 400, 10,);






  // cell combo's
  if(cellColour1 == 'blue' && cellColour2 == 'blue' && cellColour3 == 'blue' || cellColour1 == 'red' && cellColour2 == 'red' && cellColour3 == 'red'  ){
    gameEnded = true;
  } else if (cellColour4 == 'blue' && cellColour5 == 'blue' && cellColour6 == 'blue' || cellColour4 == 'red' && cellColour5 == 'red' && cellColour6 == 'red'  ){
    gameEnded = true;
  }else if (cellColour7 == 'blue' && cellColour8 == 'blue' && cellColour9 == 'blue' || cellColour7 == 'red' && cellColour8 == 'red' && cellColour9 == 'red'  ){
    gameEnded = true;
  }else if (cellColour1 == 'blue' && cellColour4 == 'blue' && cellColour7 == 'blue' || cellColour1 == 'red' && cellColour4 == 'red' && cellColour7 == 'red'  ){
    gameEnded = true;
  }else if (cellColour2 == 'blue' && cellColour5 == 'blue' && cellColour8 == 'blue' || cellColour2 == 'red' && cellColour5 == 'red' && cellColour8 == 'red'  ){
    gameEnded = true;
  }else if (cellColour3 == 'blue' && cellColour6 == 'blue' && cellColour9 == 'blue' || cellColour3 == 'red' && cellColour6 == 'red' && cellColour9 == 'red'  ){
      gameEnded = true;
  }else if (cellColour1 == 'blue' && cellColour5 == 'blue' && cellColour9 == 'blue' || cellColour1 == 'red' && cellColour5 == 'red' && cellColour9 == 'red'  ){
    gameEnded = true;
  }else if (cellColour3 == 'blue' && cellColour5 == 'blue' && cellColour7 == 'blue' || cellColour3 == 'red' && cellColour5 == 'red' && cellColour7 == 'red'  ){
    gameEnded = true;
  } else if (cellColour1 !== "white" && cellColour2 !== "white" && cellColour3 !== "white" && cellColour4 !== "white" && cellColour5 !== "white" && cellColour6 !== "white" && cellColour7 !== "white" && cellColour8 !== "white" && cellColour9 !== "white"){
    gameDraw = true;
  }

   //player turn and win mesage
   if(activePlayer == 1 && gameEnded == false && gameDraw == false){
    textSize(texTSize);
    fill('black');
    text("Player one's turn", 25, 170);
  }
  else if (activePlayer == 2 && gameEnded == false && gameDraw == false){
    textSize(texTSize);
    fill('black');
    text("Player two's turn", 25, 170);
  }
    //player 1 turn
  if (gameEnded == true && activePlayer == 2 && gameDraw == false){
    textSize(texTSize);
    fill('black');
    text("Player one Wins!", 25, 170);
  }
  //player 2 turn
  else if (gameEnded == true && activePlayer == 1 && gameDraw == false){
    textSize(texTSize);
    fill('black')
    text("Player two Wins!", 25, 170);
    
  }
  else if(gameDraw == true){
    textSize(texTSize);
    fill('black');
    text("a Draw", 25,170);
    console.log('a draw!!!');
  }

  //playerScores  P1
  textSize(texTSize);
  fill('black');
  text("Player one: " + player1Score, 25, 250);

  //playerScores p2
  textSize(texTSize);
  fill('black');
  text("Player two: " + player2Score, 25, 300);



  //after game end + timer
  if( gameEnded == true || gameDraw == true){
    Timer++;
    if(Timer > 100){
    cellColour1 = cellColour2 = cellColour3 = cellColour4 = cellColour5 = cellColour6 = cellColour7 = cellColour8 = cellColour9 = ("white");

    Timer = 0;

    // point thing
    if (gameEnded == true && activePlayer == 2 && gameDraw == false){ 
      player1Score++;
    }else if(gameEnded == true && activePlayer == 1 && gameDraw == false){
      player2Score++;
    }

    //full reset
    gameDraw = false;
    gameEnded = false;
    activePlayer = 1;

  }



  
    
   





  }
  




}
