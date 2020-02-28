import React, {useContext} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';
import GridPoint from './GridPoint.jsx';

import './styles/GameBoard.css';

function GameBoard(props) {
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    let boardRows = new Array(heightHook[0]);
    let board = boardRows.map((row) => new Array(widthHook[0]))

    
    console.log(board);
    return (
        <div className='GameBoard'>
        
        </div>
    )
}

export default GameBoard;