import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
   const [gameState, setGameState] = useState({});

   return (
      <GameContext.Provider value={{ gameState, setGameState }}>
         {children}
      </GameContext.Provider>
   );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
