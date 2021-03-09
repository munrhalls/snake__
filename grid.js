function grid(gridBg) {
  const main = document.getElementById('gridContainer');
  grid.size = 40;
  let count = 0;
  function loop() {
    let row = document.createElement('div');
    row.style.display = 'flex';
    for (let i = 0; i < grid.size; i++) {
      let square = document.createElement('div');
      square.style.background = gridBg;
      square.style.height = '0.75rem';
      square.style.width = '0.75rem';
      square.style.border = '1px solid black';
      square.style.border = '1px solid black';
      square.id = count + ',' + i;
      row.appendChild(square);
    }
    main.appendChild(row);
    if (count < grid.size) {
      count++;
      loop();
    }
  }
  loop();
  }
  export default grid;