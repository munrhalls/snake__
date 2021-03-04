import grid from './grid.js';
// create row
// num of row length (squares per row)
// loop
// create square until < rowLength
// append row
// loop that * num of row length

//mark each square rownum, num
// snake = 
////////// body - [array of ids] - 1) corresponding elems are accessed, 2) styled, 3) elements going out are restyled to normal
////////// direction - one state of 4: [r+ (top), r-(bot), col-(left), col+(right)]
////////// movement - (move is func run at interval every sec) 1) deletes last el [array of ids], 2) creates new el, 3) checks first el [array of ids] and modifies it by [active direction], 4) adds that el to the snake body [array of ids]

// 1) loop 
// 1) access element
// 1) style it

function snakeBody() {
  let snakeBody = ['11,12'];
  let snakeColor = 'green';
  for (let i = 0; i < snakeBody.length; i++) {
    let squareAtId = document.getElementById(snakeBody[i]);
    console.log(squareAtId)
    squareAtId.style.background = snakeColor;
  }
}

grid();
snakeBody();
