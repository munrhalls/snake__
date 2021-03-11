  // function createGridLinesPanel() {
  //   const gridLinesPanel = document.createElement('div');
  //   const gridLinesBtn = createGridLinesBtn();
  //   const label = document.createElement('span');
  //   label.innerText = 'GRIDLINES';
  //   panelLabelStyle(label);
  //   gridLinesPanel.appendChild(label);
  //   panelColumnStyle(gridLinesPanel);
  //   panelStyleBtn(gridLinesBtn);
  //   gridLinesPanel.appendChild(gridLinesBtn)
  //   gameContainer.appendChild(gridLinesPanel);
  // }
  // function panelLabelStyle(label) {
  //   label.style.padding = '0.25rem';
  //   label.style.fontWeight = 'bold';
  // }
  // function panelColumnStyle(panelItem) {
  //   panelItem.style.display = 'flex';
  //   panelItem.style.flexDirection = 'column';
  //   panelItem.style.alignItems = 'center';
  //   panelItem.style.width = '6.25rem';
  //   panelItem.style.padding = '1rem';
  // }
  // function createGridLinesBtn() {
  //   const gameContainer = document.getElementById('gameContainer');
  //   const gridLinesBtn = document.createElement('div');
  //   const startBtn = document.getElementById('startBtn');
  //   gridLinesBtn.style.background = game.gridlinesColor;
  //   gridLinesBtn.onclick = function () {
  //     const gridContainer = document.getElementById('gridContainer');
  //     gameContainer.removeChild(gridContainer);
  //     game.gridlinesColor = 'black';
  //     gridLinesBtn.style.background = game.gridlinesColor;
  //     const newGrid = grid(game.gridBg, game.gridlinesColor, grocer.foodSquareIds);
  //     gameContainer.insertBefore(newGrid, startBtn);
  //   }
  //   panelStyleBtn(gridLinesBtn);
  //   return gridLinesBtn;
  // }
  // function panelStyleBtn(btn) {
  //   btn.style.fontWeight = 'bold';
  //   btn.style.width = '6.25rem';
  //   btn.style.padding = '1rem';
  //   btn.style.border = '3px solid black';
  // }
  // if (foodIds) {
  //   (function(foodIds) {
  //     foodIds.forEach(id => {
  //       let square = document.getElementById(id);
  //       square.className = 'food';
  //       square.style.background = 'yellow';
  //       square.style.borderRadius = '50%';
  //     });
  //   })();
  // }