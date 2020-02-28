import React, {useState, useContext, useEffect} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';

import boardGenerator from  './helper/boardGenerator.jsx'
import generateFruit from './helper/generateFruit.js';
import pointOnBody from './helper/pointOnBody.js';
import renderBodyPoints from './helper/renderBodyPoints.jsx';
import renderFruitPoint from './helper/renderFruitPoint.jsx';
import pointInBoard from './helper/pointInBoard.js';

import './styles/GameBoard.css';

function GameBoard(props) {
    const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40];
    
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    
    // start in the middle
    const board = boardGenerator(heightHook[0], widthHook[0]);
    const midpointX = Math.floor(widthHook[0] / 2);
    const midpointY = Math.floor(heightHook[0] / 2);

    const [bodyPoints, setBodyPoints] = useState([[midpointX, midpointY]]);
    const [currentDirection, setCurrentDirection] = useState(UP);
    const [fruitPoint, setFruitPoint] = useState([0, 0]);

    function updateHead(newX, newY) {
        const newPoint = [newX, newY];
        if (newPoint[0] === fruitPoint[0] && newPoint[1] === fruitPoint[1]) {
            setBodyPoints([...bodyPoints, newPoint]);      
            setFruitPoint(generateFruit(widthHook[0], heightHook[0], board));
        }
        else {
            setBodyPoints([...bodyPoints.filter((point, index) => index !== 0), newPoint]);      
        }
        renderBodyPoints(bodyPoints, board);  
    }

    function directionAction(direction, oppositeDirection, newX, newY) {
        if(pointInBoard(newX, newY, widthHook[0], heightHook[0])){
            if(!pointOnBody(newX, newY, bodyPoints)) {
                if(bodyPoints.length > 1) {
                    if (currentDirection !== oppositeDirection) {
                        setCurrentDirection(direction);
                        updateHead(newX, newY);
                    }    
                } else {
                    // single point can go in any direction
                    setCurrentDirection(direction);
                    updateHead(newX, newY); 
                }
            }
            else {
                alert('you lost')
            }
        }
        else {
            alert('you lost')
        }
    }

    function handleDirection(event) {
        const [headX, headY] = bodyPoints[bodyPoints.length - 1];
        const action = event.keyCode;

        if (action === LEFT) {
            directionAction(LEFT, RIGHT, headX - 1, headY);
        }
        else if (action === UP) {
            directionAction(UP, DOWN, headX, headY - 1);
        }
        else if (action === RIGHT) {
            directionAction(RIGHT, LEFT, headX + 1, headY);
        }
        else if (action == DOWN) {
            directionAction(DOWN, UP, headX, headY + 1);
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