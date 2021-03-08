import grid from './grid.js';
const gridBg = 'white';
// game
// grid
// food
// snake
function game() {
  game.time = 0;
  game.running = true;
  game.pause = function() {
    game.running = false;
  }
  game.resume = function() {
    game.running = true;
  }
  function run() {
    console.log('running')
  }
  function timer() {
    setTimeout(function () {
      game.time++;
      run();

      if (game.running) {
        timer();
      }
    }, 1000);

  }
  timer();
}
game();
game.pause();
game.resume();


// function snake() {
//   let snakeBody = ['19,19'];
//   let snakeColor = 'green';
//   var activeDirection = 'TOP';
//   document.onkeydown = checkKey;

//   function checkKey(e) {
//     e = e;
//     if (e.keyCode == '38') {
//       activeDirection = 'TOP';
//     }
//     else if (e.keyCode == '40') {
//       activeDirection = 'BOTTOM';
//     }
//     else if (e.keyCode == '37') {
//       activeDirection = 'LEFT';
//     }
//     else if (e.keyCode == '39') {
//       activeDirection = 'RIGHT';
//     }
//     else if (e.keyCode == '32') {
//       snake.pause();
//     }
//     console.log(activeDirection);
//   }

//   function snakeMove() {
//     var vert = snakeBody[0].split(',')[0];
//     var horiz = snakeBody[0].split(',')[1];
//     if (activeDirection === 'TOP') {
//       vert--;
//     } else if (activeDirection === 'BOTTOM') {
//       vert++;
//     } else if (activeDirection === 'RIGHT') {
//       horiz++;
//     } else if (activeDirection === 'LEFT') {
//       horiz--;
//     }
//     console.log(vert)
//     let newCoord = vert + ',' + horiz;
//     snakeBody.unshift(newCoord);
//     let newSquare = document.getElementById(newCoord);

//     if (newSquare.className !== 'food') {
//       let lastCoord = snakeBody[snakeBody.length - 1];
//       let lastSnakeEl = document.getElementById(lastCoord);
//       lastSnakeEl.style.background = gridBg;
//       snakeBody.pop();
//     }
//     for (let i = 0; i < snakeBody.length; i++) {
//       let id = snakeBody[i];
//       let squareAtId = document.getElementById(id);
//       squareAtId.style.background = snakeColor;
//     }
//   }
//   snakeMove();
// }

// grid(gridBg);
// food(2250);
// snake();
