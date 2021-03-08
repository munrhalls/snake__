import grid from './grid.js';
const gridBg = 'white';

function food(interval) {
  setInterval(function () {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function generateFood() {
      let random1 = getRandomIntInclusive(0, grid.size);
      let random2 = getRandomIntInclusive(0, grid.size);
      let id = random1 + ',' + random2;
      let square = document.getElementById(id);
      square.className = 'food';
      square.style.background = 'yellow';
    }
    generateFood();
  }, interval);
}

function snake() {
  let snakeBody = ['19,19'];
  let snakeColor = 'green';
  var activeDirection = 'TOP';
  document.onkeydown = checkKey;
  snake.pause = function () {
    // how can pause work? 
    debugger;
    clearInterval(snakeMove);
  }
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
    console.log(activeDirection);
  }

  const snakeMove = setInterval(function () {
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
    console.log(vert)
    let newCoord = vert + ',' + horiz;
    snakeBody.unshift(newCoord);
    let newSquare = document.getElementById(newCoord);

    if (newSquare.className !== 'food') {
      let lastCoord = snakeBody[snakeBody.length - 1];
      let lastSnakeEl = document.getElementById(lastCoord);
      lastSnakeEl.style.background = gridBg;
      snakeBody.pop();
    }
    for (let i = 0; i < snakeBody.length; i++) {
      let id = snakeBody[i];
      let squareAtId = document.getElementById(id);
      squareAtId.style.background = snakeColor;
    }
  }, 250);
 
}

grid(gridBg);
food(2250);
snake();
// snake.pause();