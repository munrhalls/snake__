const grid = document.getElementsByTagName('main')[0];
console.log(grid);



function dominoGrid() {
  dominoSquare.count = 0;
function dominoSquare() {
  let row = document.createElement('div');
  row.style.display = 'flex'
  for (let i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.style.border = '1px solid white';

    square.style.backgroundColor = 'black';
    square.style.display = 'inline-block';
    square.style.width = '12px';
    square.style.height = '12px';
    row.appendChild(square);
  }
  grid.appendChild(row);
  dominoSquare.count++;
  if (dominoSquare.count < 16) {
    dominoSquare();
  }
}
dominoSquare();
}

dominoGrid();
