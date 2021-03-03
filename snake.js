const grid = document.getElementsByTagName('main')[0];
console.log(grid);


dominoSquare.count = 0;
function dominoSquare() {
  let row = document.createElement('div');
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