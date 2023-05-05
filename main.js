const turn = ['a'];
const myboard = ["1","2","3","4","5","6","7","8","9"];

var board = document.querySelector('.board1'); // this one get the dom div to add the news gameboard cells
board.style.setProperty('--grid-rows', 3); //this one create the gameboard
board.style.setProperty('--grid-cols', 3);
for (let i = 0; i < 9; i++) {                 
  var cell = document.createElement('div');
  cell.classList.add('grid-item'); // div class for every gameboard cell
  cell.textContent = myboard[i];  // fill every cell with the array myboard
  board.appendChild(cell); 
}
gameboard ()
function gameboard () {
  var button = document.getElementsByClassName('grid-item'); // gets each gameboard cell 
  console.log("button lenght " + button.length);
  for (let i = 0; i < 9; i++) {
    button[i].addEventListener('click', function (e) { // on click change to X or O depend on turn
      turn.push('a');
      console.log("turn length " + turn.length)
      console.log("inside click --")
      if(turn.length % 2 == 0) {
        myboard[i] = 'X';
        e.target.innerHTML = 'X';
        e.target.style.pointerEvents = "none"; 
      } else {
        e.target.innerHTML = 'O';
        myboard[i] = 'O';
        e.target.style.pointerEvents = "none";
      }
      console.log("myboard " + myboard)
      winner();
    });
  }
}
function winner () {  
  for(let i = 0; i < 7; i = i + 3) {
    console.log("winner row")
    if(myboard[i] == myboard[i+1]) {
      if (myboard[i+1] == myboard[i+2]){
        console.log("Winner row 1 ----------");
      }
    }
  }
  for(let i = 0; i < 3; i++) { 
    console.log("winner column")
    if(myboard[i] == myboard[i+3]) {
      if(myboard[i+3] == myboard[i+6]){
        console.log("Winner column 1 ");
      }
    } 
  }
  // if((myboard[0] === myboard[4] === myboard[8]) !== '' || 
  //            (myboard[2] === myboard[4] === myboard[6]) !== '') {
  //             console.log("Winner X");
  //         } else { console.log("inside all"); } 
  return;
}   