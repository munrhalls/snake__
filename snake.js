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
////////// direction - one state of 4: [r+ (top), r-(bot), col-(left), col+(right)] - 1) create active direction variable, 2) assign r+(top) to it, 3) create event listener, 4) associate each arrow key to corresponding direction, 5) upon hitting an arrow key, active direction variable changes
////////// movement - (move is func run at interval every sec) 1) deletes last el [array of ids]; 1) styles it back to normal, 2) creates new el, 3) checks first el [array of ids] and modifies it by [active direction], 4) adds that el to the snake body [array of ids]

// 1) loop 
// 1) access element
// 1) style it

function snakeBody(area) {
  //the new location 
  let snakeColor = 'green';
  for (let i = 0; i < area.length; i++) {
    let squareAtId = document.getElementById(snakeBody[i]);
    squareAtId.style.background = snakeColor;
  }
}
function snakeDirection() {
  let activeDirection = 'TOP';
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      activeDirection = 'TOP';
    }
    else if (e.keyCode == '40') {
      activeDirection = 'DOWN';
    }
    else if (e.keyCode == '37') {
      activeDirection = 'LEFT';
    }
    else if (e.keyCode == '39') {
      activeDirection = 'RIGHT';
    }
  }
}
function snake() {
  snakeDirection();
  setInterval(function () {
    let area = ['14, 14'];
    snakeBody();
    function snakeMove() {
      // where does body take its coordinates from?
      // maybe, snake body moves from itself
      // snake move changes area from previous to the new one
      // snakeMove -> area to new area -> new area to snakeBody
      // area = snakeMove OR initial value (center square)
      // area -> snake body -> snake move -> changes area -> changes snake body -> snake move -> loop

      // snake movement
      // create function 
      // this takes [num, num]
      // and
      // top -> [num-, num]
      // right -> [num, num+]
      // bot -> [num+, num]
      // left -> [num, num-]

      // [num, num] -> [num-, num]
      // [num, num] -> num1 num2 -> num1 -1 -> return


    }
  }, 1000);
}

grid();
snake();