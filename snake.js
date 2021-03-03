const grid = document.getElementsByTagName('main')[0];
console.log(grid);

function dominoGrid() {
  dominoSquare.row = 1;
  dominoSquare.num = 1;

  function dominoSquare() {
    dominoSquare.col = 1;
    let row = document.createElement('div');
    row.style.display = 'flex'
    for (let i = 1; i <= 16; i++) {
      let square = document.createElement('div');
      square.style.border = '1px solid white';
      square.style.backgroundColor = 'black';
      square.style.display = 'inline-block';
      square.style.width = '12px';
      square.style.height = '12px';
      row.appendChild(square);
      square.id = dominoSquare.num + 1;
      console.log(square.id)
      dominoSquare.num ++;
      square.className = 'square';
      dominoSquare.col++;
    }
    grid.appendChild(row);
    dominoSquare.row++;
    if (dominoSquare.row < 16) {
      dominoSquare();
    }
  }
  dominoSquare();
}


var x = document.getElementById('124');
x.style.background = 'green';

var squares = document.getElementsByClassName('square'); 


dominoGrid();
