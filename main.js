var turn = ["x"];
var gamer = '';
var myboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

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
        fillgameboard (i, "X", "", "none"); // display the option gamer
        myboard[i] = 'X'; // fill the array with information of gamers
        gamer = 'X'; // gamer let me know how  to show as winner
        if (turn[1] == "ai") {turn[0] = 'ai';} // check if ai is on 
          else {turn[0] = "o"}
      } else {
        fillgameboard (i, "O", "", "none");
        myboard[i] = 'O';
        gamer = 'O';
        turn[0] = "x"
      }
      console.log("myboard " + myboard + ' ' + turn)
      winner( );
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
  if (turn[0] == 'ai') {ai()} // this one let it go to ai function to the machine options
  //   else {return};
  // return
}   
function alertwinner(){ // display the winner
  console.log('"'+gamer+'" IS THE WINNER')
  //restart();
  document.getElementById('winner').style.visibility = 'visible'; // show the winner in a new div o hidden the gameboard
  document.getElementById('winner').textContent = gamer + " WINS" ;
}
function restart(){  // restart the game 
  for (let i = 0; i < 9; i++) {              // this one restart the gameboard   
    fillgameboard (i, '', "green", '');
    console.log("inside restart ")
    myboard[i] = i;  // restart myboard
  }
  turn[0] = 'x';
  turn[1] = ''; // restart ai
  document.getElementById('winner').style.visibility = 'hidden';
  document.getElementById('x').style.backgroundColor = 'white';
  document.getElementById('o').style.backgroundColor = 'white';
  document.getElementById('o').style.pointerEvents = '';
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
      else if (gameroption[i].innerHTML == "Ai"){
        turn[1] = "ai";
        document.getElementById('o').style.backgroundColor = 'lightgray';
        console.log("gamer choose " + turn[0])
      }
    });
  }

}
function ai () { // code to play against the machine, get the machines choice
  console.log('inside ai')
  turn[1] = 'ai';  
  turn[0] = 'x';                                                    // Each row, column and diaonal is taked in
  //console.log(turn[0].includes('x'))
  document.getElementById('o').style.pointerEvents = 'none';        // newarray to compare it and choose a option 
  document.getElementById('x').style.backgroundColor = 'lightgray'; // for the machine 
  var newarray = [];     // this array will have only three index and would go to comapre directly                                         
  for(let i = 0; i < 7; i = i + 3) {     // check every row          
    for(let j = 0; j < 3; j++) {newarray[j] = myboard[j+i];}
    console.log('row')
    compare();
  }
  for(let i = 0; i < 3; i++) {          // check every column
    for(let j = 0; j < 3; j++) {newarray[j] = myboard[(i + j*3)];}  // ok
    console.log('column')
    compare();
  }
  for(let i = 0; i < 3; i = i + 2) {          // check every diagonal
    for(let j = 0; j < 3; j++) {
      console.log('diagonal')
      if (i == 0) {newarray[j] = myboard[j*4];}
      else if (i == 2) {newarray[j] = myboard[j*i + 2];}
    }
    compare();
  } 
  function compare () {                                  // fillgameboard (newarray[2], "O", "", "none");
    console.log('inside compare')
    if (newarray[0].includes('X') && newarray[1].includes('X')) {
      console.log(newarray[0].includes('x'))
      fillgameboard (newarray[2], "O", "", "none");
      //console.log("compare 1 " + newarray + ' ' + myboard);
    }  
    else if (newarray[1].includes('X') && newarray[2].includes('X')) {
      fillgameboard (newarray[0], "O", "", "none");
      console.log("compare 2 " + newarray[0]);
    } 
    else if (newarray[0].includes('X') && newarray[2].includes('X')) {
      fillgameboard (newarray[1], "O", "", "none");
      console.log("compare 3 ") + newarray[1];
    } 
    else {
      if (typeof myboard[4] !== 'string'){
        fillgameboard (4, "O", "", "none");
        console.log("inside compare else");
      }
      else if (typeof myboard[7] !== 'string'){fillgameboard (7, "O", "", "none");}
      else if (typeof myboard[1] !== 'string'){fillgameboard (1, "O", "", "none");}
      else if (typeof myboard[6] !== 'string'){fillgameboard (6, "O", "", "none");}
      else if (typeof myboard[8] !== 'string'){fillgameboard (8, "O", "", "none");}
      else if (typeof myboard[3] !== 'string'){fillgameboard (3, "O", "", "none");}
      else {fillgameboard (5, "O", "", "none");} // if (typeof myboard[5] !== 'string')
    }
    return;
  }
  return;   //MUST GO TO WINNER CHECK IT OUT !!!!!!!!!!!!!!!!
}
