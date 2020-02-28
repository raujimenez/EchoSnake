import React, {useState, useContext} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';
import GridPoint from './GridPoint.jsx';

import GameBoardStyles from './styles/GameBoard.css';

function GameBoard(props) {
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 

    return (
        <div className='GameBoard'>
            {

            }
        </div>
    )
}

export default GameBoard;