import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('X&quot;s turn');

  const handleBoxClick = (box, index) => {
    // check if it should actually place a piece is occupied or game over

    if (board[index] || !active) return;

    // this is where to modify the board to have the new move
    const tempBoard = [...board];
    tempBoard[index] = currentPlayer;
    setBoard(tempBoard);

    // check if game has been won or tied
    // diagonal
    if (board[0] && board[0] === board[4] && board[4] === board[8]) return board[0];
    if (board[2] && board[2] === board[4] && board[4] === board[6]) return board[2];
    //row
    if (board[0] && board[0] === board[1] && board[1] === board[2]) return board[0];
    if (board[3] && board[3] === board[4] && board[4] === board[5]) return board[3];
    if (board[6] && board[6] === board[7] && board[7] === board[8]) return board[6];
    // column
    if (board[0] && board[0] === board[3] && board[3] === board[6]) return board[0];
    if (board[1] && board[1] === board[4] && board[4] === board[7]) return board[1];
    if (board[2] && board[2] === board[5] && board[5] === board[8]) return board[2];

    // handle changing turns
    if (currentPlayer === 'x') setCurrentPlayer('o');
    else if (currentPlayer === 'o') setCurrentPlayer('x');
  };

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
        handleBoxClick,
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

export { GameProvider, useGameContext };
