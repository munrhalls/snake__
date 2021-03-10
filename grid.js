function grid(gridBg, gameGridlines) {
  const gameContainer = document.getElementById('gameContainer');
  const gridContainer = document.createElement('main');
  gameContainer.appendChild(gridContainer);
  grid.size = 40;
  let count = 0;
  function loop() {
    let row = document.createElement('div');
    row.style.display = 'flex';
    for (let i = 0; i < grid.size; i++) {
      let square = document.createElement('div');
      let borderStyle = '1px solid ' + gameGridlines;
      square.style.background = gridBg;
      square.style.height = '0.75rem';
      square.style.width = '0.75rem';
      square.style.border = borderStyle;
      square.id = count + ',' + i;
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
    if (count < grid.size) {
      count++;
      loop();
    }
  }
  loop();
  }
  export default grid;