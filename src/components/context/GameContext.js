import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('X&quot;s turn');

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        board,
        setBoard,
        active,
        setActive,
        gameMessage,
        setGameMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
};

const handleBoxClick = (box, index) => { 
    // check if it should actually place a piece is occupied or game over

    if (board[index] ||!active) return;
}

    // this is where to modify the board to have the new move
    const tempBoard=[...board];
    tempBoard[index]= currentPlayer
    setBoard(tempBoard);

    // check if game has been won or tied
    // handle changing turns
  console.log('box clicked');
};

export { GameProvider, useGameContext, handleBoxClick };
