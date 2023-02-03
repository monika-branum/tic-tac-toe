import './App.css';
import Board from './components/board/Board.js';
import { useGameContext } from './components/context/GameContext.js';

function App() {
  const { gameMessage } = useGameContext();
  return (
    <>
      <div className="App">
        <h1 className="turnText">{gameMessage}</h1>
        <Board />
      </div>
      <button>Refresh</button>
    </>
  );
}

export default App;
