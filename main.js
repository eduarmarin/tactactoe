var turn = ['a'];
var gamer = '';
var myboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

creategameboard()
gameboard()
gamerop()

function creategameboard (){ //this one create the gameboard 
  var board = document.querySelector('.board1'); // this one get the dom div to add the news gameboard cells
  board.style.setProperty('--grid-rows', 3);    
  board.style.setProperty('--grid-cols', 3);
  for (let i = 0; i < 9; i++) {                
    var cell = document.createElement('div');
    cell.classList.add('grid-item'); // div class for every gameboard cell  
    board.appendChild(cell);
    fillgameboard (i, i+1, "red", "pointer");
  }
}
function fillgameboard (indexcell, contentcell, colorcell, pointecell) { //display x or o on the gameboar
  var cell = document.getElementsByClassName('grid-item'); // gets each gameboard cell
  cell[indexcell].textContent = contentcell;
  cell[indexcell].style.color = colorcell;
  cell[indexcell].style.pointerEvents = pointecell;
}
function gameboard () { // select x or o depend on gamer choose
  var button = document.getElementsByClassName('grid-item'); // gets each gameboard cell 
  for (let i = 0; i < 9; i++) {
    button[i].addEventListener('click', function (e) { // on click change to X or O depend on turn
      turn.push('a');
      if(turn.length % 2 == 0) {
        fillgameboard (i, "X", "blue", "none");
        myboard[i] = 'X';
        gamer = 'X'; 
      } else {
        fillgameboard (i, "O", "blue", "none");
        myboard[i] = 'O';
        gamer = 'O';
      }
      console.log("myboard " + myboard + ' ' + turn)
      winner(gamer);
    });
  }
}
function winner () {    // win opcions 
  for(let i = 0; i < 7; i = i + 3) {     // check every row
    if(myboard[i] == myboard[i+1]) {
      if (myboard[i+1] == myboard[i+2]){
        alertwinner();
      }
    }
  }
  for(let i = 0; i < 3; i++) {          // check every column
    if(myboard[i] == myboard[i+3]) {
      if(myboard[i+3] == myboard[i+6]){
        alertwinner();
      }
    } 
  }
  if(myboard[0] === myboard[4]) {       // check first diagonal
    if(myboard[4] === myboard[8]){
      alertwinner();
    }
  } 
  if(myboard[2] === myboard[4]) {       // check second diagonal
    if(myboard[4] === myboard[6]){
      alertwinner();
    }
  } 
  return;
}   
function alertwinner(){ // display the winner
  console.log('"'+gamer+'" IS THE WINNER')
  //restart();
}
function restart(){ // restart the game 
  for (let i = 0; i < 9; i++) {              //this one restart the gameboard   
    fillgameboard (i, i+1, "green", '');
    console.log("inside restart ")
    myboard[i] = i;
  }
  turn = ['a'];
}
function gamerop () { // gamer choose x or o to play
  let gameroption = document.getElementsByClassName('gamer');
  console.log("gameroption " + gameroption.length)
  for (let i = 0; i < 2; i++) {                
    gameroption[i].addEventListener('click', function (e) { 
      if (gameroption[i].innerHTML == 'X'){
        console.log("gamer choose X")
      } else if (gameroption[i].innerHTML == "O"){
        console.log("gamer choose O")
      }
    });
  }    
}

