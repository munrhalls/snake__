import grid from './grid.js';
const gridBg = 'white';

function game() {
  game.size = 40;
  game.frames = 0;
  game.timer = 0;
  game.running = true;
  game.score = 0;
  snake.timePerFrame = 100;
  snake.framesPerSecond = 1000/game.timePerFrame;
  game.over = function() {
    game.pause();
    let page = document.getElementsByTagName('body')[0];
    let gameOverModal = createGameOverModal();
    page.appendChild(gameOverModal);    
  }
  function createGameOverModal() {
    let gameOverModal = document.createElement('div');
    gameOverModal.style.position = 'absolute';
    gameOverModal.style.top = '0';
    gameOverModal.style.left = '0';
    gameOverModal.style.right = '0';
    gameOverModal.style.bottom = '0';
    gameOverModal.style.height = '100vh';
    gameOverModal.style.width = '100vw';
    gameOverModal.style.background = '#030303';
    gameOverModal.style.opacity = '90%';
    gameOverModal.innerText = 'MODAL';
    
    let textOne = 'GAME OVER.';
    let textTwo = 'Your score: ' + game.score + '.';
    let textThree = 'Time: ' + game.timer + ' seconds.';
    let messageOne = createGameOverModalMessage(textOne); 
    let messageTwo = createGameOverModalMessage(textTwo); 
    let messageThree = createGameOverModalMessage(textThree); 
    gameOverModal.appendChild(messageOne);
    gameOverModal.appendChild(messageTwo);
    gameOverModal.appendChild(messageThree);
    return gameOverModal;
  } 
  function createGameOverModalMessage(text) {
    let message = document.createElement('h1');
    let textNode = document.createTextNode(text);
    message.style.color = 'white'
    message.style.textAlign = 'center';
    message.style.padding= '2rem';
    message.style.border = '1rem solid white';
    message.appendChild(textNode);
    return message; 
  }
  function createGameOverModalScoreMessage() {

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
    if (game.timer % 2 === 0) {
      grocer();
    }
  }
  function snakeFrame() {
    setTimeout(function () {
      snake();
      if (game.running) {
        snakeFrame();
      }
    }, snake.timePerFrame);
  }
  function gameTimer() {
    setTimeout(function () {
      game.timer++;

      if (game.running) {
        gameTimer();
      }
    }, 1000);
  }
  snakeFrame();
  gameTimer();

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
      game.over();
      return;
    }
    let newSquare = document.getElementById(newCoord);
    snakeBody.unshift(newCoord);

    if (newSquare.className !== 'food') {
      deleteLastCoord();
    } else {
      game.score++;
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
    let min = 0;
    let max = game.size/2
    let random1 = getRandomIntInclusive(min, max);
    let random2 = getRandomIntInclusive(min, max);
    let id = random1 + ',' + random2;
    console.log(id);
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

