import React from 'react';
import GridPoint from '../GridPoint.jsx';

function renderFruitPoint(fruitPoint, board) {
    const pointX = fruitPoint[0];
    const pointY = fruitPoint[1];
    board[pointY][pointX] = (<GridPoint row={pointY + 1} column={pointX + 1} body={false} fruit={true} />)
}

export default renderFruitPoint;