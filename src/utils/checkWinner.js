const winningCombinationsCache = new Map();

const getWinningCombinations = (numberOfCards) => {
  if (winningCombinationsCache.has(numberOfCards)) {
    return winningCombinationsCache.get(numberOfCards);
  }

  const gridSize = Math.sqrt(numberOfCards);
  const winningCombinations = [];

  // Rows
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(i * gridSize + j);
    }
    winningCombinations.push(row);
  }

  // Columns
  for (let i = 0; i < gridSize; i++) {
    const col = [];
    for (let j = 0; j < gridSize; j++) {
      col.push(j * gridSize + i);
    }
    winningCombinations.push(col);
  }

  // Diagonal (top-left to bottom-right)
  const diagonal1 = [];
  for (let i = 0; i < gridSize; i++) {
    diagonal1.push(i * gridSize + i);
  }
  winningCombinations.push(diagonal1);

  // Diagonal (top-right to bottom-left)
  const diagonal2 = [];
  for (let i = 0; i < gridSize; i++) {
    diagonal2.push(i * gridSize + (gridSize - 1 - i));
  }
  winningCombinations.push(diagonal2);

  winningCombinationsCache.set(numberOfCards, winningCombinations);
  return winningCombinations;
};

export const checkWinner = (board, numberOfCards) => {
  const winningCombinations = getWinningCombinations(numberOfCards);

  for (let combination of winningCombinations) {
    const firstValue = board[combination[0]];
    if (firstValue && combination.every((index) => board[index] === firstValue)) {
      return firstValue;
    }
  }
  return null;
};
export const isPlayLeft = (board) => {
  return board.some((cell) => cell === "");
};