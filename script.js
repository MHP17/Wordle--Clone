const wordList = ['creep' , 'queen' , 'alien' , 'sales' , 'uncle'];

const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);

// creating the grid
const gameBoard = document.getElementById('game-board');

for (let i = 0; i < 30; i++) { // 5 columns x 6 rows
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameBoard.appendChild(cell);
}
