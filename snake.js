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



  let activeDirection = 'TOP';

  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e;
    if (e.keyCode == '38') {
      activeDirection = 'TOP';
    }
    else if (e.keyCode == '40') {
      activeDirection = 'DOWN';
    }
    else if (e.keyCode == '37') {
      activeDirection = 'RIGHT';
    }
    else if (e.keyCode == '39') {
      activeDirection = 'LEFT';
    }
    console.log(activeDirection);
  }

function snake() {
  let area = ['19,19'];
  let snakeColor = 'green';
  let activeDirection = 'TOP';

  document.onkeydown = checkKey;
  function checkKey(e) {
    if (e.keyCode == '38') {
      activeDirection = 'TOP';
    }
    else if (e.keyCode == '40') {
      activeDirection = 'BOTTOM';
    }
    else if (e.keyCode == '37') {
      activeDirection = 'RIGHT';
    }
    else if (e.keyCode == '39')   {
      activeDirection = 'LEFT';
    }
    console.log(activeDirection);
  }
  setInterval(function () {
    for (let i = 0; i < area.length; i++) {
      let id = area[i];
      console.log(id);
      let squareAtId = document.getElementById(id);
      squareAtId.style.background = snakeColor;
    }
    function snakeMove() {
      // direction detect 
      // in conditional
      // e.g. right = num,num -> num, num+
      if (activeDirection === 'TOP') {
        let topCoord = area[0].split(',');
        let newTopCoord = topCoord + 1;

        let newCoords = (newTopCoord + ',' + area[1]);
        area.unshift(newCoords);
      }

    }
    snakeMove();

  }, 1000);
}

grid();
snake();