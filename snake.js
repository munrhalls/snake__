import styleSquare from './styles.js';

function grid() {
  const grid = document.getElementsByTagName('main')[0];
  let rowNum = 1;
  function dominoSquares() {
    let row = document.createElement('div');
    row.style.display = 'flex'
    for (let i = 1; i <= 16; i++) {
      let square = document.createElement('div');
      styleSquare(square)
      square.id = rowNum + ',' + i;
      row.appendChild(square);
    }
    grid.appendChild(row);
    rowNum++;
    if (rowNum < 16) { 
      dominoSquares(); 
    }
  }
  dominoSquares();
}

grid();
