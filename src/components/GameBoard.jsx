import React, {useState, useContext} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';
import GridPoint from './GridPoint.jsx';

import './styles/GameBoard.css'


function GameBoard(props) {
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    
    // generate 2d array of empty gridpoints
    const board = [];
    for (let i = 0; i < heightHook[0]; i++) {
        board[i] = []
        for (let j = 0; j < widthHook[0]; j++) {
            board[i][j] = (<GridPoint row={i + 1} column={j + 1} body={false} fruit={false} />)
        }
    }

    const gameBoardStyles = {
        paddingTop: '10px',
        gridTemplateRows: `${heightHook[0]}`,
        gridTemplateColumns: `${widthHook[0]}`
    }

    // start in the middle
    const midpointX = Math.floor(widthHook[0] / 2);
    const midpointY = Math.floor(heightHook[0] / 2);
    const [bodyPoints, setBodyPoints] = useState([[midpointX, midpointY]])

    // update board to reflect body state
    for (let bodyPoint of bodyPoints) {
        const pointX = bodyPoint[0];
        const pointY = bodyPoint[1];
        board[pointY][pointX] = (<GridPoint row={pointY + 1} column={pointX + 1} body={true} fruit={false} />)
    }


    
    return (
        <div className='GameBoard' style={gameBoardStyles}>
            {board}
        </div>
    )
}

export default GameBoard;