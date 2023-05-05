const turn = ['a'];
var gamer = '';

fillgameboard();
gameboard ();
function fillgameboard (){
    const myboard = ["1","2","3","4","5","6","7","8","9"];
    var board = document.querySelector('.board1'); // this one get the dom div to add the news gameboard cells
    board.style.setProperty('--grid-rows', 3);    
    board.style.setProperty('--grid-cols', 3);
    for (let i = 0; i < 9; i++) {              //this one create the gameboard   
    var cell = document.createElement('div');
    cell.classList.add('grid-item'); // div class for every gameboard cell
    cell.textContent = myboard[i];  // fill every cell with the array myboard
    cell.style.color = "red";
    board.appendChild(cell); 
  }
}
function gameboard () {
  var button = document.getElementsByClassName('grid-item'); // gets each gameboard cell 
  console.log("button lenght " + button.length);
  for (let i = 0; i < 9; i++) {
    button[i].addEventListener('click', function (e) { // on click change to X or O depend on turn
      turn.push('a');
      console.log("turn length xxx " + turn.length)
      if(turn.length % 2 == 0) {
        e.target.innerHTML = 'X';
        e.target.style.color = "black"; 
        myboard[i] = 'X';
        gamer = 'X';
        e.target.style.pointerEvents = "none"; 
      } else {
        e.target.innerHTML = 'O';
        e.target.style.color = "black"; 
        myboard[i] = 'O';
        gamer = 'O';
        e.target.style.pointerEvents = "none";
        e.target.style.color = "black"; 
      }
      console.log("myboard " + myboard)
      winner(gamer);
    });
  }
}
function winner () {    // check every row, column and daigonal if their cell are the same gamer
  for(let i = 0; i < 7; i = i + 3) {     // check every row
    console.log("winner row")
    if(myboard[i] == myboard[i+1]) {
      if (myboard[i+1] == myboard[i+2]){
        alertwinner();
      }
    }
  }
  for(let i = 0; i < 3; i++) {          // check every column
    console.log("winner column")
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
function alertwinner(){
  console.log('"'+gamer+'" IS THE WINNER')
  restart();
}
function restart(){
  console.log("inside restart");
  fillgameboard();
  
}