var turn = ["x"];
var gamer = '';
var myboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

creategameboard()
gameboard()
gamerop()

function creategameboard () { //this one create the gameboard
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
  console.log('print: ' + (typeof contentcell === "O"));
}
function gameboard () { // get x or o depend on gamer turn, also detect if machine is gaming
  let button = document.getElementsByClassName('grid-item'); // gets each gameboard cell
  for (let i = 0; i < 9; i++) {
    button[i].addEventListener('click', function (e) { // on click change to X or O depend on turn
      if(turn[0] == "x") {
        fillgameboard (i, "X", "", "none"); // display the option gamer
        myboard[i] = 'X'; // fill the array with information of gamers
        gamer = 'X'; // gamer lets know the winner
        turn[0] = "o"
      } else {
        fillgameboard (i, "O", "", "none");
        myboard[i] = 'O';
        gamer = 'O';
        turn[0] = "x"
      }
      winner();      // here winner
    });
  }
}
function winner () {    // check the wins options
  for(let i = 0; i < 7; i = i + 3) {     // check every row
    if(myboard[i] == myboard[i+1]) {
      if (myboard[i+1] == myboard[i+2]){
        if(myboard[i] == 'O') {gamer = 'Ai';}
        turn[1] = 'winner';
        alertwinner();
      }
    }
  }
  for(let i = 0; i < 3; i++) {          // check every column
    if(myboard[i] == myboard[i+3]) {
      if(myboard[i+3] == myboard[i+6]){
        if(myboard[i] == 'O') {gamer = 'Ai';}
        turn[1] = 'winner';
        alertwinner();
      }
    }
  }
  if(myboard[0] === myboard[4]) {       // check first diagonal
    if(myboard[4] === myboard[8]){
      if(myboard[8] == 'O') {gamer = 'Ai';}
      turn[1] = 'winner';
      alertwinner();
    }
  }
  if(myboard[2] === myboard[4]) {       // check second diagonal
    if(myboard[4] === myboard[6]){
      if(myboard[6] == 'O') {gamer = 'Ai';}
      turn[1] = 'winner';
      alertwinner();
    }
  }
  if (turn[1] == 'ai') {ai()} // this one let it go to ai function to the machine options
  //else {alertwinner()};
  //return
}  
function alertwinner() { // display the winner
  console.log('"'+gamer+'" IS THE WINNER')
  document.getElementById('winner').style.visibility = 'visible'; // show the winner in a new div o hidden the gameboard
  document.getElementById('winner').textContent = gamer + " WINS" ;
}
function restart() {  // restart the game only after cliked the button
  for (let i = 0; i < 9; i++) {              // this one restart the gameboard  
    fillgameboard (i, '', "green", '');
  }
  turn = ['x'];
  gamer = '';
  myboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  document.getElementById('winner').style.visibility = 'hidden';
  document.getElementById('x').style.backgroundColor = 'white';
  document.getElementById('o').style.backgroundColor = 'white';
  document.getElementById('o').style.pointerEvents = '';
}
function gamerop () { // gamer choose x or o or ai to play
  let gameroption = document.getElementsByClassName('gamer');
  console.log("gameroption " + gameroption.length)
  for (let i = 0; i < 3; i++) {                
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
        turn[0] = "x";
        document.getElementById('x').style.backgroundColor = 'lightgray';
        document.getElementById('o').style.pointerEvents = 'none';
        console.log("gamerop ai " + turn)
      }
    });
  }

}
function ai () { // code to play against the machine, get the machines choice   
  
  gamer = 'Ai';                                                // Each row, column and diaonal is taked in
  turn[1] = 'ai';                                              // newarray to compare it and choose a option
  turn[0] = 'x';                                               // for the machine
 
  var newarray = [];     // this array will have only three index and would go to compare it directly                                        
  for(let i = 0; i < 7; i = i + 3) {     // check every row          
    newarray = [];
    if (typeof turn[2] === 'string') { break; }                  // turn is string because found two X in newarray
    for(let j = 0; j < 3; j++) {newarray[j] = myboard[j+i];}     // so will go forward to display it, will not check the other options
    compare();
  }
  for(let i = 0; i < 3; i++) {          // check every column
    newarray = [];
    if (typeof turn[2] === 'string') { break; }
    for(let j = 0; j < 3; j++) {newarray[j] = myboard[(i + j*3)];}  // ok
    compare();
  }
  for(let i = 0; i < 3; i = i + 2) {          // check every diagonal
    newarray = [];
    if (typeof turn[2] === 'string') { break; }
    for(let j = 0; j < 3; j++) {
      if (i == 0) {newarray[j] = myboard[j*4];}
      else if (i == 2) {newarray[j] = myboard[j*i + 2];}
    }
    compare();
  }
 
  if ( (typeof turn[2]) === 'string') {
    fillgameboard (turn[turn.length - 1], "O", "", "none");
    console.log('string')
    turn[2] = 99 ;
  } else {                           // before here compare newarray for two X's else go forward
    console.log('inside else')
    if (myboard[4] === 4 ){
      myboard[4] = 'O';
      fillgameboard (4, "O", "", "none");
    }
    else if (myboard[0] === 0){
      myboard[0] = 'O';
      fillgameboard (0, "O", "", "none");
    }
    else if (typeof myboard[1] === 'number'){fillgameboard (1, "O", "", "none");myboard[1] = 'O';}
    else if (typeof myboard[2] === 'number'){fillgameboard (2, "O", "", "none");myboard[2] = 'O';}
    else if (typeof myboard[6] === 'number'){fillgameboard (6, "O", "", "none");myboard[6] = 'O';}
    else if (typeof myboard[7] === 'number'){fillgameboard (7, "O", "", "none");myboard[7] = 'O';}
    else if (typeof myboard[8] === 'number'){fillgameboard (8, "O", "", "none");myboard[8] = 'O';}
    else if (typeof myboard[3] === 'number'){fillgameboard (3, "O", "", "none");myboard[3] = 'O';}
    else {fillgameboard (5, "O", "pink", "none"); myboard[5] = 'O';} // if (typeof myboard[5] !== 'string')
  }

  function compare () {
    console.log('new array compare: ' + newarray)
    if (newarray[0] == 'X' && newarray[1] == 'X') {
      if(typeof newarray[2] === 'number'){
        myboard[newarray[2]] = 'O';
        turn[2] = 'a';                      //turn[2] get information to go forward to fill by the machine
        turn.push(newarray[2]);             //this push save the position to fill with o and the machine no let it win
      }  else { turn[2] = 99 ; }
    }  
    else if (newarray[1] == 'X' && newarray[2] == 'X') {
      if(typeof newarray[0] === 'number'){
        myboard[newarray[0]] = 'O';
        turn[2] = 'b';
        turn.push(newarray[0]);
      } else { turn[2] = 99 ; }
    }
    else if (newarray[0] == 'X' && newarray[2] == 'X') {
      if(typeof newarray[1] === 'number'){
        myboard[newarray[1]] = 'O';
        turn[2] = 'c';
        turn.push(newarray[1]);
      } else { turn[2] = 99 ; }
    }
  }
  console.log('turn: ' + turn);
  //winner();
}
