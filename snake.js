import grid from './grid.js';
// create row
// num of row length (squares per row)
// loop
// create square until < rowLength
// append row
// loop that * num of row length

//mark each square rownum, num
// snake = 
////////// body - [array of ids] - 1) corresponding elems are accessed, 2) styled
////////// direction - one state of 4: [r+ (top), r-(bot), col-(left), col+(right)] - 1) create active direction variable, 2) assign r+(top) to it, 3) create event listener, 4) associate each arrow key to corresponding direction, 5) upon hitting an arrow key, active direction variable changes, 6) 
////////// movement - (move is func run at interval every sec) 1) deletes last el [array of ids]; 1) styles it back to normal, 2) creates new el, 3) checks first el [array of ids] and modifies it by [active direction], 4) adds that el to the snake body [array of ids]

// 1) loop 
// 1) access element
// 1) style it

function snakeBody() {
  let snakeBody = ['11,12'];
  let snakeColor = 'green';
  for (let i = 0; i < snakeBody.length; i++) {
    let squareAtId = document.getElementById(snakeBody[i]);
    squareAtId.style.background = snakeColor;
  }
}

function snakeDirection() {
  // this takes [num, num]
  // and
  // top -> [num-, num]
  // right -> [num, num+]
  // bot -> [num+, num]
  // left -> [num, num-]
  const = []
}
grid();
snakeBody();
