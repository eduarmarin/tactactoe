var turn = 1;
const myboard = ['','','','','','','','',''];
console.log(myboard.length)

var board = document.querySelector('.board1');
board.style.setProperty('--grid-rows', 3); //this one create the gameboard
board.style.setProperty('--grid-cols', 3);
for (let i = 0; i < 9; i++) {                 
  var cell = document.createElement('div');
  cell.classList.add('grid-item'); // div class for every gameboard cell
  cell.textContent = myboard[i];  // fill every cell with the array myboard
  board.appendChild(cell); 
}

var button = document.getElementsByClassName('grid-item'); // gets each gameboard cell 
for (let i = 0; i < 9; i++) {
  button[i].addEventListener('click', function read (e) { // on click change to X or O depend on turn
    if(turn % 2 == 0) {
      e.target.innerHTML = 'X';
    } else {
      e.target.innerHTML = 'O';
    }    
  });
}