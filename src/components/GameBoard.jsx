import React, {useState, useContext, useEffect} from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';

import boardGenerator from  './helper/boardGenerator.js';
import generateFruit from './helper/generateFruit.js';
import pointOn from './helper/pointOnBody.js';
import renderGridPoints from './helper/renderGridPoints.jsx';
import addPortalPoint from './helper/addPortalPoint.js';
import addFruitPoint from './helper/addFruitPoint.js';
import addBodyPoints from './helper/addBodyPoints.js';
import pointInBoard from './helper/pointInBoard.js';

import './styles/GameBoard.css';

function GameBoard(props) {
    const [SPACE, LEFT, UP, RIGHT, DOWN] = [32, 37, 38, 39, 40];
    
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext); 
    
    // start in the middle
    // change board to use state so that on rerender it updates new game settings.
    // going to need to modify helper/
    const [board, setBoard] = useState(boardGenerator(heightHook[0], widthHook[0]));
    const midpointX = Math.floor(widthHook[0] / 2);
    const midpointY = Math.floor(heightHook[0] / 2);

    const [bodyPoints, setBodyPoints] = useState([[midpointX, midpointY]]);
    const [currentDirection, setCurrentDirection] = useState(UP);
    const [fruitPoint, setFruitPoint] = useState([0, 0]);
    const [portalDestination, setPortalDestination] = useState([null, null]);

    let boardGridPoints = []

    function updateHead(newX, newY) {
        const newPoint = [newX, newY];
        if (newPoint[0] === fruitPoint[0] && newPoint[1] === fruitPoint[1]) {
            setBodyPoints([...bodyPoints, newPoint]);      
            setFruitPoint(generateFruit(widthHook[0], heightHook[0], bodyPoints));
            
        }
        else {
            setBodyPoints([...bodyPoints.filter((point, index) => index !== 0), newPoint]);      
        }
    }

    function restartGame() {
        setBodyPoints([[midpointX, midpointY]]);
        setFruitPoint(generateFruit(widthHook[0], heightHook[0], bodyPoints));
        setCurrentDirection(UP);
        setPortalDestination([null, null]);
        setBoard(boardGenerator(heightHook[0], widthHook[0]));
        boardGridPoints = renderGridPoints(board, bodyPoints, fruitPoint, portalDestination);
    }

    function directionAction(direction, oppositeDirection, newX, newY) {
        if(pointInBoard(newX, newY, widthHook[0] - 1, heightHook[0] - 1)){
            if(bodyPoints.length > 1) {
                if (currentDirection !== oppositeDirection) {
                    if(!pointOn(bodyPoints, newX, newY)) {
                        setCurrentDirection(direction);
                        updateHead(newX, newY);
                    }
                    else {
                        restartGame();
                    }
                }
            }
            else {
                    // single point can go in any direction
                    setCurrentDirection(direction);
                    updateHead(newX, newY); 
             }
        }
        else {
            restartGame();
        }
    }

    function changeOnAction(action, headX, headY) {
        if (action === LEFT) {
            directionAction(LEFT, RIGHT, headX - 1, headY);
        }
        else if (action === UP) {
            directionAction(UP, DOWN, headX, headY - 1);
        }
        else if (action === RIGHT) {
            directionAction(RIGHT, LEFT, headX + 1, headY);
        }
        else if (action === DOWN) {
            directionAction(DOWN, UP, headX, headY + 1);
        }
        else if (action === SPACE) {
            if (portalDestination[0] === null) {
                setPortalDestination([headX, headY]);
            } else {
                directionAction(currentDirection, -1, portalDestination[0], portalDestination[1]);
                setPortalDestination([null, null]);
            }
        }
    }

    function handleDirection(event) {
        const [headX, headY] = bodyPoints[bodyPoints.length - 1];
        const action = event.keyCode;
        changeOnAction(action, headX, headY)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleDirection)
        const interval = setInterval(() => {
            const [headX, headY] = bodyPoints[bodyPoints.length - 1];
            changeOnAction(currentDirection, headX, headY);
        }, timeHook[0] * 1000);

        return function cleanup() {
            document.removeEventListener("keydown", handleDirection);
            clearInterval(interval)
        }
    });


    addBodyPoints(board, bodyPoints);
    addPortalPoint(board, portalDestination);
    addFruitPoint(board, fruitPoint);

    boardGridPoints = renderGridPoints(board, bodyPoints, fruitPoint, portalDestination);


    const gameBoardStyles = {
        paddingTop: '10px',
        gridTemplateRows: `${heightHook[0]}`,
        gridTemplateColumns: `${widthHook[0]}`
    }

    return (
        <div className='GameBoard' style={gameBoardStyles}>
            {boardGridPoints}
        </div>
    )
}

export default GameBoard;