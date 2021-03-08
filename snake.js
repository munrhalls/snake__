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
  const gridBg = 'white';
  

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
  document.onkeydown = checkKey;
  setInterval(function () {
    function snakeMove() {
      // direction detect 
      // in conditional
      // e.g. right = num,num -> num, num+
      // [19, 19] -> 1. 19  2. 19
      // decompose it to 2 numbers
      // detect which number applies to modification
      // modify that number - add 1 or substract 1
      // get the 2nd number - check it's proper position
      // put the numbers back together, with ',', in proper order
      // add the numbers back together
      // unshift it to the area array;
      // how does the snake move?
      // how to access?
      // ['num,num'] -> snakeBody[0]
      // how to modify?
      // 'num,num'.split(',') -> [num, num] -> Number(num) -> vertical = num1, horizontal = num2, vertical-/+ or horizontal-/+ -> String.join(',') vertical, horizontal
      // unshift to area array 
      // how to simplify access?
      // look at common elements 
      // start from the micro
      // vert, horiz variables are substrings of the original string
      // reduce the problem
      // 1. access and modify only the first el and only upwards
      // ['num,num'] -> let vertical = snakeBody[0].split(',')[0]; horizontal = -''-[1];
      // vertical--; 
      // let newCoord = vertical + ',' horizontal
      // unshift.(newCoord);
      // what for other? 
      // if its left
      // I always split it to horiz vert ; check direction ; i modify the proper one only ; i add horiz + vert ; i unshift it to area; 
      // 
      // if (activeDirection === 'TOP') {
      //   let topCoord = area[0].split(',');
      //   let newTopCoord = topCoord + 1;

      //   let newCoords = (newTopCoord + ',' + area[1]);
      //   area.unshift(newCoords);
      // }
      // how do i check direction
      // it's a loop of 
      // taking it to vert and horiz
      // checking direction
      // modifying the proper var properly
      // joining back together
      // unshifting
      // deleting the last element
      // Where do I check direction?
      // first get to vert and horiz
      // then check direction with ifs
      // modify within each of 4 conditionals
      // after ifs the vert and horiz are properly modified
      // put together; unshift; delete last element;
      // so the whole process is this
      // 1. take snakeBody[0].split(',') -> [.., ..]
      // 2. take [..,..] to vert and horiz vars
      // 3. create conditionals that check direction
      // 4. each case modifies only the appropriate var (vert or horiz)
      // 5. after conditionals, newCoord = vert + ',' + horiz together
      // 6. snakeBody.unshift(newCoord)
      // 7. delete last element;
      
      // 1., 2.
      var vert = snakeBody[0].split(',')[0];
      var horiz = snakeBody[0].split(',')[1];
      // 3., 4.
      // sequence - squareid needs to be there in the for loop
      // should the variable modify with each interval? why does modify only once and stays after?
      // it should; then it should unshift; then that new var becomes basis for the next new one after that;
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
      //5., 6., 7.
      // before delete - re-paint it to default
      let newCoord = vert + ',' + horiz;
      snakeBody.unshift(newCoord);
      // why is lastCoord undefined?
      let lastCoord = snakeBody[snakeBody.length - 1];
      // snakebody initial length is 2
      // so it is accessing [1] of snakebody
      // why is it undefined?
      // oh because that's a string..it's not an element
      // 1. access the element by id
      // 2. then style it
      let lastSnakeEl = document.getElementById(lastCoord);
      lastSnakeEl.style.background = gridBg;
      snakeBody.pop();
      // how can the snake movement work?
      // ok, last out, new first in; paint new first in; re-paint to normal the last out;
      // JUST NOTICED - RE-STYLING BACK TO NORMAL LINE IS AFTER THE UNSHIFT
      // MOST CRITICALLY - noticed it after posing the question of how can that feature work and tried to restore making sense first; if I didn't do that in that order - it'd probably take longer to find it, way longer perhaps; 
      // how can it work?
      // new first el in, last el restyle to normal, last el out
      // last el access must be last el, otherwise it's 1 for paint - re-paint
      // why is it undefined?
      // snakebody.length is too long by 1 for access
      // how can the snake be visible?
      // why is the length of array not changing
      // just realized, obvious
      // why is the snake painting not visible?
      // notice - forloop
      // notice - forloop inside another loop 
      // notice - there is an order thing to check here, it seems
      // why is the snake not visible?
      // what is the sequence?
      // paint snake
      // move snake
      // [num,num] -> style to green
      // [num,num , num,num] -> style to green
      // how can it work?
      // why do I have 2 elements?
      // check - I don't, there's 1
      // what is the flow of snake element being painted
      // it should first move, THEN paint - that was the pain will be visible for the remainder of the second
      // how can arrow changing direction work?
      // btns should be altering the next 'num,num' that's unshifted as the snakeBody
      // that should be all
      // how can the var assignment work
      // if the scopes are aligned
      // how can bottom direction work?
      // 
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