var turn = ["x"];
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
    fillgameboard (i, '', "red", "pointer");
  }
}
function fillgameboard (indexcell, contentcell, colorcell, pointecell) { //display x or o on the gameboar
  let cell = document.getElementsByClassName('grid-item'); // gets each gameboard cell
  cell[indexcell].textContent = contentcell;
  cell[indexcell].style.color = colorcell;
  cell[indexcell].style.pointerEvents = pointecell;
}
function gameboard () { // get x or o depend on gamer choose
  let button = document.getElementsByClassName('grid-item'); // gets each gameboard cell 
  for (let i = 0; i < 9; i++) {
    console.log("gameboard ready to click")
    button[i].addEventListener('click', function (e) { // on click change to X or O depend on turn
      if(turn[0] == "x") {
        fillgameboard (i, "X", "", "none");
        myboard[i] = 'X';
        gamer = 'X'; 
        turn[0] = "o"
      } else {
        fillgameboard (i, "O", "", "none");
        myboard[i] = 'O';
        gamer = 'O';
        turn[0] = "x"
      }
      console.log("myboard " + myboard + ' ' + turn)
      winner(gamer);
    });
  }
}
function winner () {    // check the wins options 
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
  document.getElementById('winner').style.visibility = 'visible';
  document.getElementById('winner').textContent = gamer + " WINS" ;
}
function restart(){  // restart the game 
  for (let i = 0; i < 9; i++) {              // this one restart the gameboard   
    fillgameboard (i, '', "green", '');
    console.log("inside restart ")
    myboard[i] = i;
  }
  turn[0] = 'x';
  document.getElementById('winner').style.visibility = 'hidden';
  document.getElementById('x').style.backgroundColor = 'white';
  document.getElementById('o').style.backgroundColor = 'white';
}
function gamerop () { // gamer choose x or o to play
  let gameroption = document.getElementsByClassName('gamer');
  console.log("gameroption " + gameroption.length)
  for (let i = 0; i < 2; i++) {                
    gameroption[i].addEventListener('click', function (e) { 
      if (gameroption[i].innerHTML == 'X'){
        turn[0] = "x"; 
        document.getElementById('x').style.backgroundColor = 'lightgray';
        console.log("gamer choose " + turn[0])
      } else if (gameroption[i].innerHTML == "O"){
        turn[0] = "o";
        document.getElementById('o').style.backgroundColor = 'lightgray';
        console.log("gamer choose " + turn[0])
      }
    });
  }

}
function ai () { // code to play against the machine, get the machines choice
  turn[1] = 'ai';
  var newarray = [];
  for(let i = 0; i < 7; i = i + 3) {     // check every row
    for(let j = 0; j < 3; j++) {
      newarray[j] = myboard[j+i];
    }
  }
  function compare () {
    //for (let i = 0; i < 3; i++) {
      if (newarray[0].includes('X') == newarray[1].includes('X')) {

      } else if (newarray[1].includes('X') == newarray[2].includes('X')) {
      
      } else if (newarray[0].includes('X') == newarray[2].includes('X')) {
      
      } else { }
  }
}
