import React, {useState} from 'react';
import HeaderBar from './components/HeaderBar.jsx';
import GameBoard from './components/GameBoard.jsx';
import GameOptions from './components/GameOptions.jsx';
import GameInfoContext from './context/GameInfoContext.jsx';

import './App.css';

function App() {
  const timeHook = useState(0.30);
  const heightHook = useState(20);
  const widthHook = useState(25);
  const drawerHook = useState(false);
  
  const values = {
    timeHook,
    heightHook, 
    widthHook,
    drawerHook
  }

  return (
    <div className="App">
      <GameInfoContext.Provider value={values}>
          <HeaderBar />
          <GameOptions />
          <GameBoard />
      </GameInfoContext.Provider>
    </div>
  );
}

export default App;
