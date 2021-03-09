import grid from './grid.js';
const gridBg = 'white';

// game - runs game/pauses/stops 
// displayer - displays snake hitting itself effect;displays pause message; displays end game message; displays score; displays timer; adds effect upon snake meeting food; 
// snake - runs snake; enlarges snake upon meeting food; 
// grocer - adds food to the grid periodically

// 1. snake - end game upon snake hitting itself
// 2. snake - displays snake hitting itself effect;
// 3. game - pause upon spacebar
// 4. game - end upon snake hitting itself
// 5. game - display end game message
// 6. game - display score 
// 7. game - display timer 
// 8. game - add difficulty levels
// 9. game - add effect upon snake meeting food
// 10. grocer - make the food look better
// 11. snake - make the snake look better
// 12. snake - make the styles customizable
// 13. host it on github pages
// 14. test everything on hosted pages



function game() {
  game.size = 40;
  game.time = 0;
  game.timePerFrame = 250;
  game.running = true;
  game.conclude = function() {
    game.pause();
    let page = document.getElementsByTagName('body')[0];
    let concludeModal = document.createElement('div');
    concludeModal.innerText = 'MODAL'
    page.appendChild(concludeModal);    
  }
  game.checkOutOfBounds = function(newCoord) {
    //snake goes out of the grid
    let coords = newCoord.split(',');
    return (coords[0] < 0 || coords[1] < 0)
  }
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
      game.pause();
    }
    console.log(activeDirection);
  }
  function snake() {
    let newCoord = getNewCoord(snakeBody);
    if (game.checkOutOfBounds(newCoord)) {
      game.conclude();
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
    let min = 0 - game.size/2;
    let max = game.size/2
    let random1 = getRandomIntInclusive(min, max);
    let random2 = getRandomIntInclusive(min, max);
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
}
game();
game.pause();
game.resume();

