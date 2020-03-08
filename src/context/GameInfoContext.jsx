import React from "react";

const GameInfoContext = React.createContext({
  timeHook: [0.3, () => {}],
  heightHook: [10, () => {}],
  widthHook: [10, () => {}],
  drawerHook: [false, () => {}],
  themeHook: ["dark", () => {}]
});

export default GameInfoContext;
