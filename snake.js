import grid from './grid.js';
const gridBg = 'white';

// game - just runs/pauses/resumes other functions
// snake 
// on each game frame
// gather current snake area
// paint current snake area 
// update snake area
// establish direction
// properly construct new id
// unshift that new id to first element
// delete last element
// paint snake area


function game() {
  game.time = 0;
  game.running = true;
  game.pause = function () {
    game.running = false;
  }
  game.resume = function () {
    game.running = true;
  }
  grid(gridBg);
  function run() {
    snake();
  }
  function gameFrame() {
    setTimeout(function () {
      game.time++;

      if (game.running) {
        gameFrame();
        run();
      }
    }, 1000);

  }
  gameFrame();

  let snakeBody = ['19,19'];
  let snakeColor = 'green';
  var activeDirection = 'TOP';
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e;
    if (e.keyCode == '38') {
      activeDirection = 'TOP';
    }
    else if (e.keyCode == '40') {
      activeDirection = 'BOTTOM';
    }
    else if (e.keyCode == '37') {
      activeDirection = 'LEFT';
    }
    else if (e.keyCode == '39') {
      activeDirection = 'RIGHT';
    }
    else if (e.keyCode == '32') {
      snake.pause();
    }
    console.log(activeDirection);
  }
  function snake() {
    let newCoord = getNewSnakeCoord(snakeBody);
    snakeBody.unshift(newCoord);
    let newSquare = document.getElementById(newCoord);
    
    if (newSquare.className !== 'food') {
      let lastCoord = snakeBody[snakeBody.length - 1];
      let lastSnakeEl = document.getElementById(lastCoord);
      lastSnakeEl.style.background = gridBg;
      snakeBody.pop();
    }
    paintSnake(snakeBody);
  }
  function getNewSnakeCoord(snakeBody){
    var vert = snakeBody[0].split(',')[0];
    var horiz = snakeBody[0].split(',')[1];
    if (activeDirection === 'TOP') {
      vert--;
    } else if (activeDirection === 'BOTTOM') {
      vert++;
    } else if (activeDirection === 'RIGHT') {
      horiz++;
    } else if (activeDirection === 'LEFT') {
      horiz--;
    }
    let newCoord = vert + ',' + horiz;
    return newCoord;
  }
  function paintSnake(snakeBody) {
    for (let i = 0; i < snakeBody.length; i++) {
      let id = snakeBody[i];
      let squareAtId = document.getElementById(id);
      squareAtId.style.background = snakeColor;
    }
  }
}
game();
game.pause();
game.resume();

