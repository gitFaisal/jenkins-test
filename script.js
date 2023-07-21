const IMAGE_X =
  'https://w7.pngwing.com/pngs/255/685/png-transparent-tic-tac-toe-computer-icons-others-miscellaneous-angle-monochrome.png';
const IMAGE_O =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ688dfa6oPls5inqpoA_HwNJdZzNVqVuEt5mPT5k&s';

const symbolToImageUrl = {
  X: IMAGE_X,
  O: IMAGE_O,
};

let currentSymbol = 'X';
let winner = false;

const board = [null, null, null, null, null, null, null, null, null];

function checkForWinner(symbol, board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some(
    ([first, second, third]) =>
      board[first] === symbol &&
      board[second] === symbol &&
      board[third] === symbol
  );
}

function toggleSymbol() {
  currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
}

function updateGameBoard(boxID) {
  if (winner) return;

  if (!board[boxID]) {
    board[boxID] = currentSymbol;

    if (checkForWinner(currentSymbol, board)) {
      winner = true;
    }

    toggleSymbol();
  }
}

function handleCellClick(boxID) {
  if (winner) return;

  if (board[boxID] === null) {
    const box = document.getElementById(boxID);
    box.style.backgroundImage = `url(${symbolToImageUrl[currentSymbol]})`;
  }
  updateGameBoard(boxID);
}
