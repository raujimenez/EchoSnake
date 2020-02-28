import React from 'react';

const GameInfoContext = React.createContext({
    timeHook: [1, () => {}],
    heightHook: [10, () => {}],
    widthHook: [10, () => {}]
});

export default GameInfoContext;