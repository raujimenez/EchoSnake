import React from 'react';
import GridPoint from '../GridPoint.jsx';

function boardGenerator(height, width) {
    const board = [];
    for (let i = 0; i < height; i++) {
        board[i] = []
        for (let j = 0; j < width; j++) {
            board[i][j] = (<GridPoint row={i + 1} column={j + 1} body={false} fruit={false} />)
        }
    }
}

export default boardGenerator;