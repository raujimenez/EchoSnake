import React from "react";
import GridPoint from "../GridPoint.jsx";

function createGridPoints(board, bodyPoints, fruitPoint, portalDestination) {
  const gridPoints = [];
  for (let i = 0; i < board.length; i++) {
    gridPoints.push([]);
    for (let j = 0; j < board[i].length; j++) {
      gridPoints.push(
        <GridPoint
          key={[i, j]}
          row={board[i][j].row + 1}
          column={board[i][j].column + 1}
          body={board[i][j].isBody}
          fruit={board[i][j].isFruit}
          portalDestination={board[i][j].isPortal}
        />
      );
    }
  }

  return gridPoints;
}

export default createGridPoints;
