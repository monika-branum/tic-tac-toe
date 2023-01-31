import './App.css';
import Board from './components/board/Board.js';
import { useGameContext } from './components/context/GameContext.js';

function App() {
  const { currentPlayer } = useGameContext();
  return (
    <div className="App">
      <h1 className="turnText">{currentPlayer}</h1>
      <Board />
    </div>
  );
}

export default App;
