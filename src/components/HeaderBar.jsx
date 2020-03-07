import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        gridRow: 1,
        gridColumn: 'span 3'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    rightButton: {
        marginRight: theme.spacing(0.1),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        EchoSnake
          </Typography>
                    <IconButton edge="end" className={classes.rightButton} color="inherit" aria-label="twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton edge="end" className={classes.rightButton} color="inherit" aria-label="themeSwitch">
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton edge="end" className={classes.rightButton} color="inherit" aria-label="menu">
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}