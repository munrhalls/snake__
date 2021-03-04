// create row
// num of row length (squares per row)
// loop
// create square until < rowLength
// append row

// loop that * num of row length
const main = document.getElementsByTagName('main')[0];

let count = 0;
function loop() {
  let row = document.createElement('div');
  row.style.display = 'flex';
  let rowLength = 22;
  for (let i = 0; i < rowLength; i++) {
    let square = document.createElement('div');
    square.style.height = '12px';
    square.style.width = '12px';
    square.style.border = '1px solid black';
    square.style.border = '1px solid black';
    row.appendChild(square);
  }
  main.appendChild(row);
  if (count < 22) {
    count++;
    loop();
  }
}

loop();

