import grid from './grid.js';
const gridBg = 'white';

// game - just runs/pauses/resumes other functions
// gameFrame - runs per set timer tick
// snake
// getNewCoord
// deleteLastCoord
// grocer
// plants food per set timer ticks amount
// gameOver
  // listens for game over conditions 
    // snake hits itself
    // snake goes out of the grid
  // when the game is over, it pauses

function game() {
  game.size = 40;
  game.time = 0;
  game.timePerFrame = 250;
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
    if (game.time % 2 === 0) {
      grocer();
    }
  }
  function gameFrame() {
    setTimeout(function () {
      game.time++;

      if (game.running) {
        gameFrame();
        run();
      }
    }, game.timePerFrame);

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
    let newCoord = getNewCoord(snakeBody);
    if (GAMEcheckOutOfBounds(newCoord)) {
      game.pause();
      return;
    }
    let newSquare = document.getElementById(newCoord);
    snakeBody.unshift(newCoord);

    if (newSquare.className !== 'food') {
      deleteLastCoord();
    }
    paintSnake(snakeBody);
  }
  function paintSnake(snakeBody) {
    for (let i = 0; i < snakeBody.length; i++) {
      let id = snakeBody[i];
      let squareAtId = document.getElementById(id);
      squareAtId.style.background = snakeColor;
    }
  }
  function getNewCoord(snakeBody) {
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
  function deleteLastCoord() {
    let lastCoord = snakeBody[snakeBody.length - 1];
    let lastSnakeEl = document.getElementById(lastCoord);
    lastSnakeEl.style.background = gridBg;
    snakeBody.pop();
  }
  function grocer() {
    let random1 = getRandomIntInclusive(0, game.size);
    let random2 = getRandomIntInclusive(0, game.size);
    let id = random1 + ',' + random2;
    let square = document.getElementById(id);
    square.className = 'food';
    square.style.background = 'yellow';
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function GAMEcheckOutOfBounds(newCoord) {
    //snake goes out of the grid
    let coords = newCoord.split(',');
    return (coords[0] < 0 || coords[1] < 0)
  }
}
game();
game.pause();
game.resume();

