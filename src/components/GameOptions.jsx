import React, { useState, useContext } from 'react';
import GameInfoContext from '../context/GameInfoContext.jsx';

import {Drawer, IconButton, Typography, Divider, Slider, Button } from '@material-ui/core'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import './styles/GameOptions.css';

function GameOptions(props) {
    const [time, setTime] = useState(0.30);
    const [height, setHeight] = useState(20);
    const [width, setWidth] = useState(25);

    // game settings should update gameboard so we need context
    const {timeHook, heightHook, widthHook, drawerHook} = useContext(GameInfoContext);
    const setTimeHook = timeHook[1];
    const setHeightHook = heightHook[1];
    const setWidthHook = widthHook[1];
    const setDrawerHook = drawerHook[1];

    function setBoundaries(min, max, setter) {
        return function changeVal(val) {
            setter(val < min ? min : val > max ? max : val);
        }
    }

    const changeTime = setBoundaries(0.05, 0.55, setTime);
    const changeHeight = setBoundaries(10, 30, setHeight);
    const changeWidth = setBoundaries(10, 40, setWidth);

    function resetSettings() {
        setTime(0.30);
        setHeight(20);
        setWidth(25);
    }

    function updateGameSettingContext() {
        setTimeHook(time);
        setHeightHook(height);
        setWidthHook(width);
        setDrawerHook(false);
    }

    function closeHandler(event, reason) {
        return function(event) {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
        }
    }


    const classes = makeStyles(theme => ({
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        }, 
        title: {
            flexGrow: 1,
            padding: theme.spacing(0, 1, 1,1,1)
        },
        buttonBottom: {
            marginLeft: '10px'
        } 
        }),
    );
        
    return (
        <Drawer open={drawerHook[0]} onClose={closeHandler} onKeyDown={(event) => setDrawerHook(false)}>
            <div>
                <IconButton onClick={() => setDrawerHook(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <br/>
            <div className='GameOptions'>
                <Typography className={classes.title}>
                    Time (sec)
                </Typography>
                <Slider
                    value={time}
                    onChange={(e, val) => changeTime(val)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.05}
                    min={0.05}
                    max={0.55}
                ></Slider>                    

                <Typography className={classes.title}>
                    Height
                </Typography>
                <Slider
                    value={height}
                    onChange={(e, val) => changeHeight(val)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={10}
                    max={30}
                ></Slider>

                <Typography className={classes.title}>
                    Width
                </Typography>
                <Slider
                    value={width}
                    onChange={(e, val) => changeWidth(val)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={10}
                    max={40}
                ></Slider>

                <br />
                <span>
                <Button 
                    variant='contained' 
                    color='secondary' 
                    onClick={resetSettings} 
                    styles={{margin: '10px'}}
                >
                Reset Values
                </Button>
                <Button 
                    id='updateButton' 
                    styles={{marginLeft: '10px'}}  
                    variant='contained' 
                    color='primary' 
                    onClick={updateGameSettingContext}
                >
                Update Game
                </Button>
                </span>

                <br />
            </div> 
        </Drawer>
    )
}

export default GameOptions;