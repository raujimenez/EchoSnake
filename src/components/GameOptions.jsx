import React, { useState, useContext } from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';

import './styles/GameOptions.css';

function GameOptions(props) {
    const [time, setTime] = useState(1);
    const [height, setHeight] = useState(10);
    const [width, setWidth] = useState(10);

    // game settings should update gameboard so we need context
    const {timeHook, heightHook, widthHook} = useContext(GameInfoContext);
    const setTimeHook = timeHook[1];
    const setHeightHook = heightHook[1];
    const setWidthHook = widthHook[1];

    function setBoundaries(min, max, setter) {
        return function changeVal(val) {
            setter(val < min ? min : val > max ? max : val);
        }
    }

    const changeTime = setBoundaries(0.5, 10, setTime);
    const changeHeight = setBoundaries(10, 25, setHeight);
    const changeWidth = setBoundaries(10, 25, setWidth);

    function resetSettings() {
        setTime(1);
        setHeight(10);
        setWidth(10);
    }

    function updateGameSettingContext() {
        setTimeHook(time);
        setHeightHook(height);
        setWidthHook(width);
    }

    return (
        <div className='GameOptions'>
            <span className='gameSetting' id='timeSetting'>
                Time (sec):
                <button id='timeDecrease' onClick={() => changeTime(time - 0.5)}>-</button>
                <div className='Display'>{time}</div>
                <button id='timeIncrease' onClick={() => changeTime(time + 0.5)}>+</button>

            </span>
            <span className='gameSetting' id='heightSetting'>
                Height:
                <button id='heightDecrease' onClick={() => changeHeight(height - 1)}>-</button>
                <div className='Display'>{height}</div>
                <button id='heightIncrease' onClick={() => changeHeight(height + 1)}>+</button>
            </span>
            <span className='gameSetting' id='widthSetting'>
                Width:
                <button id='widthDecrease' onClick={() => changeWidth(width - 1)}>-</button>
                <div className='Display'>{width}</div>
                <button id='widthIncrease' onClick={() => changeWidth(width + 1)}>+</button>
            </span>
            <span className='gameSetting' id='gamerSetters'>
                <button id='resetGameButton' onClick={resetSettings}>Reset Values</button>
                <button id='newGameButton' onClick={updateGameSettingContext}>New game</button>
            </span>
        </div>
    )
}

export default GameOptions;