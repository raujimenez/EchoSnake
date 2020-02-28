import React, {useState} from 'react';
import HeaderBar from './components/HeaderBar.jsx';
import GameBoard from './components/GameBoard.jsx';
import GameOptions from './components/GameOptions.jsx';
import GameInfoContext from './context/GameInfoContext.jsx';

import './App.css';

function App() {
  const timeHook = useState(1);
  const heightHook = useState(10);
  const widthHook = useState(10);

  const values = {
    timeHook,
    heightHook, 
    widthHook
  }

  return (
    <div className="App">
      <HeaderBar />
      <GameInfoContext.Provider value={values}>
          <GameOptions />
          <GameBoard />
      </GameInfoContext.Provider>
    </div>
  );
}

export default App;
