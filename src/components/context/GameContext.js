import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('X&quot;s turn');

  const handleBoxClick = (index) => {
    // check if it should actually place a piece is occupied or game over

    if (board[index] || !active) return;

    // this is where to modify the board to have the new move
    const tempBoard = [...board];
    tempBoard[index] = currentPlayer;
    setBoard(tempBoard);

    // check if game has been won or tied
    function winCheck() {
      // diagonal
      if (board[0] && board[0] === board[4] && board[4] === board[8]) return true;
      if (board[2] && board[2] === board[4] && board[4] === board[6]) return true;
      //row
      if (board[0] && board[0] === board[1] && board[1] === board[2]) return true;
      if (board[3] && board[3] === board[4] && board[4] === board[5]) return true;
      if (board[6] && board[6] === board[7] && board[7] === board[8]) return true;
      // column
      if (board[0] && board[0] === board[3] && board[3] === board[6]) return true;
      if (board[1] && board[1] === board[4] && board[4] === board[7]) return true;
      if (board[2] && board[2] === board[5] && board[5] === board[8]) return true;

      return false;
    }

    if (winCheck()) {
      setGameMessage(`${currentPlayer} won`);
      setActive(false);
      return
    }

    // handle changing turns
    if (currentPlayer === 'x') { setGameMessage("It is x's turn!")}
    else { setGameMessage("It is O's turn!");}
  ;

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
    ;

// const useGameContext = () => {
//   const context = useContext(GameContext);

//   if (context === undefined) {
//     throw new Error('useGameContext must be used within GameProvider');
//   }
//   return context;
// };

export { GameProvider };
//fix the export