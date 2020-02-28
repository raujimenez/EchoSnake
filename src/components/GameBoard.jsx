import React, {useState, useContext, useEffect} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';

import boardGenerator from  './helper/boardGenerator.jsx'
import generateFruit from './helper/generateFruit.js';
import pointOnBody from './helper/pointOnBody.js';
import renderBodyPoints from './helper/renderBodyPoints.jsx';
import renderFruitPoint from './helper/renderFruitPoint.jsx';

import './styles/GameBoard.css';

function GameBoard(props) {
    // used on keypress
    const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40];
    
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    
    const gameBoardStyles = {
        paddingTop: '10px',
        gridTemplateRows: `${heightHook[0]}`,
        gridTemplateColumns: `${widthHook[0]}`
    }

    // start in the middle
    const board = boardGenerator(heightHook[0], widthHook[0]);
    const midpointX = Math.floor(widthHook[0] / 2);
    const midpointY = Math.floor(heightHook[0] / 2);
    const [bodyPoints, setBodyPoints] = useState([[midpointX, midpointY]]);
    
    const [currentDirection, setCurrentDirection] = useState(UP);
    const [fruitPoint, setFruitPoint] = useState([0, 0]);

    function updateHead(changeX, changeY) {
        const lastPoint = bodyPoints[bodyPoints.length - 1]
        const newPoint = [lastPoint[0] + changeX, lastPoint[1] + changeY];
        if (newPoint[0] === fruitPoint[0] && newPoint[1] === fruitPoint[1]) {
            setBodyPoints([...bodyPoints, newPoint]);      
            setFruitPoint(generateFruit(widthHook[0], heightHook[0]));
        }
        else {
            setBodyPoints([...bodyPoints.filter((point, index) => index !== 0), newPoint]);      
        }
        renderBodyPoints(bodyPoints, board);  
    }

    function handleDirection(event) {
        const currentHead = bodyPoints[bodyPoints.length - 1];

        switch(event.keyCode){
            case LEFT:
                if (currentDirection !== RIGHT) {
                    setCurrentDirection(LEFT);
                    updateHead(-1, 0);
                }
                break;
            case UP:
                if (currentDirection !== DOWN){
                    setCurrentDirection(UP);
                    updateHead(0, -1);
                }
                break;
            case RIGHT:
                if (currentDirection !== LEFT) {
                    setCurrentDirection(RIGHT);
                    updateHead(1, 0);
                }
                break;
            case DOWN:
                if (currentDirection !== UP) {
                    setCurrentDirection(DOWN);
                    updateHead(0, 1);
                }
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

    renderBodyPoints(bodyPoints, board);
    renderFruitPoint(fruitPoint, board);

    return (
        <div className='GameBoard' style={gameBoardStyles}>
            {board}
        </div>
    )
}

export default GameBoard;