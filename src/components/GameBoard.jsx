import React, {useContext} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';
import GridPoint from './GridPoint.jsx';

import './styles/GameBoard.css'


function GameBoard(props) {
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    // generate 2d array of gridpoints
    const board = [];
    for (let i = 0; i < heightHook[0]; i++) {
        board[i] = []
        for (let j = 0; j < widthHook[0]; j++) {
            board[i][j] = (<GridPoint row={i + 1} column={j + 1}/>)
        }
    }

    const gameBoardStyles = {
        paddingTop: '10px',
        gridTemplateRows: `${heightHook[0]}`,
        gridTemplateColumns: `${widthHook[0]}`
    }

    return (
        <div className='GameBoard' style={gameBoardStyles}>
            {board}
        </div>
    )
}

export default GameBoard;