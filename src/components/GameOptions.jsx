import React, { useState, useContext } from "react";
import GameInfoContext from "../context/GameInfoContext.jsx";

import {
  Drawer,
  IconButton,
  Typography,
  Divider,
  Slider,
  Button
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BugReportIcon from "@material-ui/icons/BugReport";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/core/styles";

import "./styles/GameOptions.css";
import BugReport from "./BugReport.jsx";

function GameOptions(props) {
  // game settings should update gameboard so we need context
  const { timeHook, heightHook, widthHook, drawerHook, themeHook } = useContext(
    GameInfoContext
  );
  const setTimeHook = timeHook[1];
  const setHeightHook = heightHook[1];
  const setWidthHook = widthHook[1];
  const setDrawerHook = drawerHook[1];

  function setBoundaries(min, max, setter) {
    return function changeVal(val) {
      setter(val < min ? min : val > max ? max : val);
    };
  }

  const [time, setTime] = useState(timeHook[0]);
  const [height, setHeight] = useState(heightHook[0]);
  const [width, setWidth] = useState(widthHook[0]);
  const [theme] = useState(themeHook[0]);
  const [bugReport, setBugReport] = useState(drawerHook[0]);

  const changeTime = setBoundaries(0.05, 0.55, setTime);
  const changeHeight = setBoundaries(10, 30, setHeight);
  const changeWidth = setBoundaries(10, 40, setWidth);

  function resetSettings() {
    setTime(0.3);
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
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
    };
  }

  function handleBugReportClick() {
    setBugReport(true);
    return;
  }

  const svgFill = theme === "light" ? "black" : "whitesmoke";
  const textColor = theme === "light" ? "black" : "whitesmoke";
  const bgColor = theme === "light" ? "white" : "#2b2b2b";

  const useStyles = makeStyles(theme => ({
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(0, 1, 1, 1, 1)
    },
    buttonBottom: {
      marginLeft: "10px"
    },
    drawerPaper: {
      background: bgColor,
      color: textColor
    },
    dividerColor: {
      backgroundColor: theme === 'light' ? 'black' : 'grey'
    }
  }));

  const classes = useStyles();

  function chevronClick() {
    setTimeHook(timeHook[0] - 1000)
    setDrawerHook(false)
  }

  return (
    <div>
      <Drawer
        classes={{ paper: classes.drawerPaper }}
        open={drawerHook[0]}
        onClose={closeHandler}
        onKeyDown={event => setDrawerHook(false)}
      >
        <div>
          <IconButton onClick={chevronClick}>
            <ChevronLeftIcon style={{ fill: svgFill }} />
          </IconButton>
        </div>
        <Divider classes={{ root: classes.dividerColor }} />
        <br />
        <div className="GameOptions">
          <Typography
            style={{ color: textColor }}
            variant="h7"
            className={classes.title}
          >
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

          <Typography
            style={{ color: textColor }}
            variant="h7"
            className={classes.title}
          >
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

          <Typography
            style={{ color: textColor }}
            variant="h7"
            className={classes.title}
          >
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
              variant="contained"
              color="secondary"
              onClick={resetSettings}
              styles={{ margin: "10px" }}
            >
              Reset Values
            </Button>
            <Button
              id="updateButton"
              styles={{ marginLeft: "10px" }}
              variant="contained"
              color="primary"
              onClick={updateGameSettingContext}
            >
              Update Game
            </Button>
          </span>

          {
            // terrible line breaks but i just needed something quick
          }
          <br />
          <br />

          <Divider classes={{ root: classes.dividerColor }} />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleBugReportClick}>
              <BugReportIcon style={{ marginRight: "5px", fill: svgFill }} />
              <Typography
                style={{ color: textColor }}
                variant="h7"
                className={classes.title}
              >
                Report a bug
              </Typography>
            </Button>
          </div>
          <br />

          <Divider classes={{ root: classes.dividerColor }} />
          <br />
          <div style={{ textAlign: "center" }}>
            <Typography
              style={{ color: textColor }}
              variant="h7"
              className={classes.title}
            >
              Get in Touch
            </Typography>
            <br />
            <br />
            <span>
              <Button href="https://github.com/raujimenez" target="_blank">
                <GitHubIcon style={{ fill: svgFill }} />
              </Button>
              <Button href="https://twitter.com/raulrusty" target="_blank">
                <TwitterIcon style={{ fill: svgFill }} />
              </Button>
              <Button
                href="https://www.instagram.com/raulrusty"
                target="_blank"
              >
                <InstagramIcon style={{ fill: svgFill }} />
              </Button>
            </span>
            <br />
            <br />

            <Divider classes={{ root: classes.dividerColor }} />
            <br />
            <Typography
              style={{ color: textColor }}
              variant="h7"
              className={classes.title}
            >
              Raul Jimenez ©
            </Typography>
          </div>
          <br />
        </div>
      </Drawer>
      <BugReport open={bugReport} onClose={setBugReport} theme={themeHook[0]}/>
    </div>
  );
}

export default GameOptions;
