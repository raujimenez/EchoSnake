import React, {useState, useContext, useEffect} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';
import GridPoint from './GridPoint.jsx';

import './styles/GameBoard.css'
import { render } from '@testing-library/react';


function GameBoard(props) {
    // used on keypress
    const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40];
    
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
    const [currentDirection, setCurrentDirection] = useState(UP)
    
    // update board to reflect body state
    function renderPoints() {
        for (let bodyPoint of bodyPoints) {
            const pointX = bodyPoint[0];
            const pointY = bodyPoint[1];
            board[pointY][pointX] = (<GridPoint row={pointY + 1} column={pointX + 1} body={true} fruit={false} />)
        }
    }

    function updateHead(changeX, changeY) {
        const lastPoint = bodyPoints[bodyPoints.length - 1]
        const newPoint = [lastPoint[0] + changeX, lastPoint[1] + changeY];
        setBodyPoints([...bodyPoints.filter((point, index) => index !== 0), newPoint]);
        renderPoints();
    }

    function handleDirection(event) {
        switch(event.keyCode){
            case LEFT:
                setCurrentDirection(LEFT);
                updateHead(-1, 0);
                break;
            case UP:
                setCurrentDirection(UP);
                updateHead(0, -1);
                break;
            case RIGHT:
                setCurrentDirection(RIGHT);
                updateHead(1, 0);
                break;
            case DOWN:
                setCurrentDirection(DOWN);
                updateHead(0, 1);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleDirection)
        return function cleanup() {
            document.removeEventListener("keydown", handleDirection);
        }
    });

    renderPoints();

    return (
        <div className='GameBoard' style={gameBoardStyles}>
            {board}
        </div>
    )
}

export default GameBoard;