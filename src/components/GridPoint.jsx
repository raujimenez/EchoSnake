import React, { useContext } from "react";
import GameInfoContext from "../context/GameInfoContext.jsx";

function GridPoint(props) {
  const row = props.row;
  const col = props.column;
  const containsBody = props.body;
  const containsFruit = props.fruit;
  const portalDestination = props.portalDestination;
  const { themeHook } = useContext(GameInfoContext);

  const GridPointStyles = {
    gridRow: row,
    gridColumn: col,
    padding: "10px",
    backgroundColor: containsFruit
      ? "red"
      : portalDestination
      ? "orange"
      : containsBody
      ? "green"
      : themeHook[0] === "light"
      ? "whitesmoke"
      : "#383838",
    borderStyle: "none",
    borderWidth: "0.1px"
  };

  return <div style={GridPointStyles}></div>;
}

export default GridPoint;
