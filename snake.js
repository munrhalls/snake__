      // what are the steps left to completion? 
      // 1. food for the snake
      // 2. handling game over on snake hitting itself
      // 2. handling game over on going out of bounds 
      // 3. handling game exit
      // 3. pause
      // 3. scoreboard
      // 4. adding 3 difficulty levels - based on snake's speed; multiply points for higher difficulty
      // 4. styling
      // 5. testing and eliminating possibility of bugs left
      ////////////////////////////////////////////////////////////////////////////////////////
      // 1. food for the snake
      // how can food for the snake work?
      // generating random number
      // where in the code?
        // food function        
      // how in code?
      // transposing it to id format
      // accessing the square at id
      // styling the square at it with a graphic
        // creating a graphic
        // appending it to that square
      // listening for match between food square & snakeBody square
        // launching function upon detecting match
        // extending snake body by +1 on match by adding to the tail (not the first elem)
      // food piece appears randomly every 2 seconds
        
import grid from './grid.js';
const gridBg = 'white';

function snake() {
  let snakeBody = ['19,19'];
  let snakeColor = 'green';
  var activeDirection = 'TOP';
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
  document.onkeydown = checkKey;
  setInterval(function () {
    function snakeMove() {
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
      let lastCoord = snakeBody[snakeBody.length - 1];
      let lastSnakeEl = document.getElementById(lastCoord);
      lastSnakeEl.style.background = gridBg;
      snakeBody.pop();
      } 
    snakeMove();
    for (let i = 0; i < snakeBody.length; i++) {
      let id = snakeBody[i];
      let squareAtId = document.getElementById(id);
      squareAtId.style.background = snakeColor;
    }
  }, 1000);
}

grid(gridBg);
snake();