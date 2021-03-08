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
// distinct set interval
// food func is outside of snake     
// how in code?
// Get the random num
// to variable 
// transposing it to id format
// get to such numbers
// concat them with ','
// accessing the square at id
// styling it
////DONE
// snake expands length upon entering food square
// how does snake do that?
// ways of knowing when the two match? 
// simplest ways?
// simplest way?
// add class "food" to the square
// in the snake function, locate where square id is accessed
// there, add condition
// in it, check if it is NOT FOOD class
// if it is food class, return before popping tail

// listening for match between food square & snakeBody square
// launching function upon detecting match
// extending snake body by +1 on match by adding to the tail (not the first elem)
// food piece appears randomly every 2 seconds





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
    }
    snakeMove();
  }, 250);
}

grid(gridBg);
food(2250);
snake();