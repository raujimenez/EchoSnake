function addPortalPoint(board, portalCoordiantes) {
  const [pointX, pointY] = portalCoordiantes;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = {
        ...board[i][j],
        isPortal: false
      };
    }
  }

  //const newBoard = [...board]
  if (pointX !== null) {
    board[pointY][pointX] = {
      ...board[pointY][pointX],
      isPortal: true
    };
  }
}

export default addPortalPoint;
