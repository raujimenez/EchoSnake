function addFruitPoint(board, fruitPoint) {
  const pointX = fruitPoint[0];
  const pointY = fruitPoint[1];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = {
        ...board[i][j],
        isFruit: false
      };
    }
  }

  if (pointX !== null) {
    board[pointY][pointX] = {
      ...board[pointY][pointX],
      isFruit: true
    };
  }
}

export default addFruitPoint;
