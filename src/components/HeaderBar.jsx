import React, { useContext, useState } from "react";
import GameInfoContext from "../context/GameInfoContext.jsx";

import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography, Toolbar, AppBar, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import MenuIcon from "@material-ui/icons/Menu";

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    gridRow: 1,
    gridColumn: "span 3"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  rightButton: {
    marginRight: theme.spacing(0.1)
  },
  title: {
    flexGrow: 1
  }
}));

function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />
}

export default function HeaderBar(props) {
  const classes = useStyles();
  const githubLink = "https://github.com/raujimenez/echosnake";

  const { drawerHook, themeHook } = useContext(GameInfoContext);
  const [theme, setTheme] = useState(themeHook[0]);
  const [open, setOpen] = useState(false);

  function handleThemeSwitch() {
    if (theme === "light") {
      themeHook[1]("dark");
      setTheme("dark");
    } else if (theme === "dark") {
      themeHook[1]("light");
      setTheme("light");
    }
  }

  function handleShareClick() {
    navigator.clipboard.writeText(window.location.href)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const svgFill = theme === "light" ? "black" : "whitesmoke";
  const textColor = theme === "light" ? "black" : "whitesmoke";
  const bgColor = theme === "light" ? "white" : "#2b2b2b";

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        style={{ backgroundColor: bgColor }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => drawerHook[1](true)}
          >
            <MenuIcon style={{ fill: svgFill }} />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: textColor }}
          >
            EchoSnake
          </Typography>
          <IconButton
            edge="end"
            className={classes.rightButton}
            color="inherit"
            aria-label="share"
            onClick={handleShareClick}
          >
            <ShareIcon style={{ fill: svgFill }} />
          </IconButton>
          <IconButton
            edge="end"
            className={classes.rightButton}
            color="inherit"
            aria-label="ThemeSwitch"
            onClick={handleThemeSwitch}
          >
            {themeHook[0] === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness3Icon style={{ fill: svgFill }} />
            )}
          </IconButton>
          <IconButton
            edge="end"
            className={classes.rightButton}
            color="inherit"
            aria-label="GitHub"
            href={githubLink}
            target="_blank"
          >
            <GitHubIcon style={{ fill: svgFill }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            URL copied to clipboard
          </Alert>
      </Snackbar>

    </div>
  );
}
