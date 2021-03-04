const grid = document.getElementsByTagName('main')[0];

let rowNum = 1;
function dominoSquare() {
  let row = document.createElement('div');
  row.style.display = 'flex'
  for (let i = 1; i <= 16; i++) {
    let square = createSquare();
    square.id = rowNum + ',' + i;
    row.appendChild(square);
  }
  grid.appendChild(row);
  rowNum++;

  if (rowNum < 16) {
    dominoSquare();
  }
}
dominoSquare();

function createSquare() {
  let square = document.createElement('div');
  square.style.border = '1px solid white';
  square.style.backgroundColor = 'black';
  square.style.display = 'inline-block';
  square.style.width = '12px';
  square.style.height = '12px';
  return square;
}

var squares = document.getElementsByClassName('square');

dominoSquare();
