import React from 'react';
import GridPoint from '../GridPoint.jsx';

function renderBodyPoints(bodyPoints, board) {
    for (let bodyPoint of bodyPoints) {
        const pointX = bodyPoint[0];
        const pointY = bodyPoint[1];
        board[pointY][pointX] = (<GridPoint row={pointY + 1} column={pointX + 1} body={true} fruit={false} />);
    }
}

export default renderBodyPoints;