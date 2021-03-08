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

function pause() {
  snake.interval();
}

// how can pausing the game work?
// I need a way to run snake() and food() in functions that can be stopped
// Can it not work with set interval?
// Check stackoverflow. 
  // It can work
// Make sense of it
// 1. If I take out the interval out of the func, I can resume it as window.setInterval...

function snake() {
  let snakeBody = ['19,19'];
  let snakeColor = 'green';
  var activeDirection = 'TOP';
  document.onkeydown = checkKey;
  
  snake.interval = window.setInterval(function(){
    console.log('it works')
  }, 100);

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

  snake.move = window.setInterval(function () {
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
// snake();
pause();
// snake.pause();